import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS rules
  js.configs.recommended,

  // React recommended rules
  react.configs.flat.recommended,

  // 🔥 YOUR OVERRIDES (MUST BE LAST)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    plugins: {
      react
    },
    rules: {
      // Modern React (17+)
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Keep useful warnings
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "react/jsx-key": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
]);