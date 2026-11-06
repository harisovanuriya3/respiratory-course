import assert from 'node:assert/strict';
import {modules} from './public/content.js';
import {mediaPreviewAssets} from './public/central-media-library.js';
const byAsset=new Map();
for(const module of modules){
 const asset=mediaPreviewAssets[module.id];
 assert.ok(asset,'No preview asset for module '+module.id);
 if(!byAsset.has(asset))byAsset.set(asset,[]);
 byAsset.get(asset).push(module.id);
}
const reused=[...byAsset].filter(([,ids])=>ids.length>1).map(([asset,modules])=>({asset,modules}));
console.log(JSON.stringify({cards:modules.length,uniquePreviewAssets:byAsset.size,reused},null,2));
// Report reuse; do not fail the technical build merely because a shared
// anatomical reference is intentionally relevant to several modules.
