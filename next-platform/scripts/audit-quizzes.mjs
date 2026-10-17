import data from '../generated/legacy-content.json' with {type: 'json'};
import {readFile} from 'node:fs/promises';
const appSource = await readFile(new URL('../../public/app.js', import.meta.url), 'utf8');
const imports = [...appSource.matchAll(/^import\s*\{([^}]+)\}\s*from\s*'([^']+)'\s*;/gm)];
const bindings = {};
for (const [, names, path] of imports) {
  const imported = await import(new URL(`../../public/${path.replace('./', '')}`, import.meta.url));
  for (const name of names.split(',').map((value) => value.trim())) bindings[name] = imported[name];
}

for (const section of ['pretest', 'tests']) {
  console.log(`SECTION ${section}`);
  for (let moduleId = 1; moduleId <= 25; moduleId += 1) {
    const results = ['RU', 'EN', 'KZ'].map((language) => {
      const html = data.pages[`${moduleId}/${section}/${language}`]?.html ?? '';
      return [
        language,
        (html.match(/<fieldset\b/gi) ?? []).length,
        (html.match(/data-(?:key|answer)=/gi) ?? []).length,
        (html.match(/<input\b[^>]*type=["']radio/gi) ?? []).length,
        (html.match(/explain/gi) ?? []).length,
      ].join(':');
    });
    console.log(String(moduleId).padStart(2, '0'), results.join(' '));
  }
}

for (let moduleId = 2; moduleId <= 23; moduleId += 1) {
  const names = ['', '', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three'];
  const source = await readFile(new URL(`../../public/module-${names[moduleId]}.js`, import.meta.url), 'utf8');
  try {
    const probe = new Function(...Object.keys(bindings), source.replace(/^import[^\n]+\n/gm, '').replace(/\bexport\s+/g, '') + ';return {quiz:typeof quiz!=="undefined"?quiz:null,questions:typeof questions!=="undefined"?questions:null,qs:typeof qs!=="undefined"?qs:null};')(...Object.values(bindings));
    for (const [name, bank] of Object.entries(probe)) if (Array.isArray(bank)) {
      const first = bank.find(Boolean);
      console.log('BANK', moduleId, name, bank.length, first ? (Array.isArray(first) ? `array:${first.length}` : Object.keys(first).join(',')) : 'empty');
    }
  } catch (error) {
    console.log('BANK-ERROR', moduleId, error.message);
  }
}
