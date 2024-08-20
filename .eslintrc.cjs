/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
module.exports = {
  extends: ['eslint-config-salesforce-typescript', 'eslint-config-salesforce-license', 'plugin:sf-plugin/recommended'],
  rules: {
    // allow deleting object properties via rest operator
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
  ignorePatterns: ['test/nuts/specialTypes/*Project/**', 'test/nuts/retrieve/partialBundleDeleteProject/**'],
};
