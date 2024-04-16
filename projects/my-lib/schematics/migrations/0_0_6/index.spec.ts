import {EmptyTree} from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
// import * as path from 'path';

const packagePath = '/package.json';
const collectionPath = 'migrations/migration.json';

it(`removes the ngrx-store-freeze package`, async () => {
  const tree = new UnitTestTree(new EmptyTree());
  tree.create(packagePath, JSON.stringify({dependencies: {'ngrx-store-freeze': '1.0.0'}}));

  const schematicRunner = new SchematicTestRunner('migrations', collectionPath);
  // migration-v2 is the name of the migration, which is defined in the migration.json file
  await schematicRunner.runSchematic('migration-v2', {}, tree);

  const actual = tree.readContent(packagePath);
  expect(JSON.parse(actual)).toEqual({dependencies: {}});
});
