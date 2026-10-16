param([string]$BackupPath)
$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$projectRoot=[IO.Path]::GetFullPath($PSScriptRoot)
if(-not $BackupPath){$BackupPath=(Get-ChildItem -LiteralPath (Split-Path $projectRoot -Parent) -Filter 'respiratory-course-backup-*.zip' | Sort-Object Name | Select-Object -Last 1).FullName}
$archive=[IO.Compression.ZipFile]::OpenRead($BackupPath)
$prior=@{}
try{
 foreach($entry in $archive.Entries){if($entry.Name){$stream=$entry.Open();$digest=[Security.Cryptography.SHA256]::Create();try{$prior[$entry.FullName.Replace('\','/')]=([BitConverter]::ToString($digest.ComputeHash($stream))).Replace('-','')}finally{$stream.Dispose();$digest.Dispose()}}}
}finally{$archive.Dispose()}
$current=@(Get-ChildItem -LiteralPath $projectRoot -File)+@(Get-ChildItem -LiteralPath (Join-Path $projectRoot 'public') -File -Recurse)+@(Get-ChildItem -LiteralPath (Join-Path $projectRoot 'docs') -File -Recurse)
$changes=@()
foreach($file in $current){
 $relative=$file.FullName.Substring($projectRoot.Length+1).Replace('\','/')
 if($relative -eq 'docs/CHANGED_FILES.json'){continue}
 $digest=(Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash
 if(-not $prior.ContainsKey($relative)){$changes+=@{path=$relative;status='added';sha256=$digest}}
 elseif($prior[$relative] -ne $digest){$changes+=@{path=$relative;status='modified';sha256=$digest}}
}
foreach($relative in $prior.Keys){if(-not (Test-Path -LiteralPath (Join-Path $projectRoot $relative))){$changes+=@{path=$relative;status='removed';note='Temporary one-time remediation helper; preserved in backup'}}}
$result=@{backup=[IO.Path]::GetFileName($BackupPath);backupSha256=(Get-FileHash -LiteralPath $BackupPath -Algorithm SHA256).Hash;vercelConfigurationUnchanged=($prior['vercel.json'] -eq (Get-FileHash -LiteralPath (Join-Path $projectRoot 'vercel.json') -Algorithm SHA256).Hash);files=@($changes | Sort-Object {$_.path})}
$json=$result | ConvertTo-Json -Depth 6
[IO.File]::WriteAllText((Join-Path $projectRoot 'docs/CHANGED_FILES.json'),$json)
$changes | Where-Object {$_.path.StartsWith('public/')} | Sort-Object {$_.path} | ForEach-Object {$_.status+' '+$_.path}
