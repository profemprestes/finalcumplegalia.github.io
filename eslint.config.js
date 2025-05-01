import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import astroPlugin from "eslint-plugin-astro";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroPlugin.parser,
    },
    rules: {
      ...astroPlugin.configs["flat/recommended"].rules,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended,
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ["**/*.json"],
    ...json.configs.recommended,
  },
  {
    files: ["**/*.md"],
    ...markdown.configs.recommended,
  },
  {
    files: ["**/*.css"],
    ...css.configs.recommended,
  },
];
