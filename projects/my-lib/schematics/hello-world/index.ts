import {
  Rule, Tree,
  chain,
} from '@angular-devkit/schematics';


import { Schema as MyServiceSchema } from './schema';


export default function myService(options: MyServiceSchema): Rule {
  return async (_tree: Tree) => {
      console.log(`Hello ${options.name}!`);

    return chain([]);
  };
}
