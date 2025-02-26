import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      // Add or adjust rules as you prefer
      "react/react-in-jsx-scope": "off", // since React 17+
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
  },
];
