const toTypeScript = require('json-schema-to-typescript');
const fs = require('fs');

toTypeScript
    .compileFromFile('tools/schematics/domain/schema.json')
    .then(ts => fs.writeFileSync('tools/schematics/domain/schema.ts', ts));
    

    toTypeScript
    .compileFromFile('tools/schematics/demo-lib/schema.json')
    .then(ts => fs.writeFileSync('tools/schematics/demo-lib/schema.ts', ts));
