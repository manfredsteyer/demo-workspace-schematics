import { 
  chain, 
  externalSchematic, 
  Rule, 
  apply, 
  url, 
  template, 
  move, 
  mergeWith,
  noop,
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';
import { DomainOptions } from './schema';
import { updateLintingRules } from '../utils/update-linting-rules';

export default function(options: DomainOptions): Rule {
  const libFolder = strings.dasherize(options.name);

  const templateSource = apply(url('./files'), [
    template({}),
    move(`libs/${libFolder}/domain/src/lib`)
  ]);

  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      name: 'domain',
      directory: options.name,
      tags: `domain:${options.name},type:domain-logic`,
      style: 'scss',
    }),
    updateLintingRules(options.name),
    mergeWith(templateSource),
    (!options.addApp) ? 
      noop() : 
      externalSchematic('@nrwl/angular', 'app', {
        name: options.name,
        tags: `domain:${options.name},type:app`,
        style: 'scss',
      }),
  ]);
}
