import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

// Ensure __dirname is available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for legacy configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});


export default [
  // Ignore certain directories
  {
    ignores: ["node_modules", ".next"],
  },

  // Apply rules and plugins to relevant files
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      prettier: prettierPlugin, // Add Prettier plugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },

    rules: {
      ...prettierPlugin.configs.recommended.rules, // Use Prettier recommended rules
      "prettier/prettier": "error",
      "indent": ["error", 2], // Treat Prettier issues as ESLint errors
    },
  },

  // Include Next.js-specific ESLint configurations (via compat)
  ...compat.extends("next/core-web-vitals"),
];
