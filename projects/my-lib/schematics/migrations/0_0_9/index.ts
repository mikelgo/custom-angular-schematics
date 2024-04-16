import { renamingRule } from '../../utils/renaming-rule';

const renames: Record<string, string | [string, string]> = {
  MyLibComponent: '@my-org/my-lib/my-component',
};

export default renamingRule('@my-org/my-lib', renames);
