import {renamingRule} from "../utils/renaming-rule";

const renames: Record<string, string | [string, string]> = {
  MyLibComponent: '@my-org/my-lib/my-component',
};

export function migrateToSecondary() {
  console.log('migrateToSecondary');
  return renamingRule('@my-org/my-lib', renames);
}
