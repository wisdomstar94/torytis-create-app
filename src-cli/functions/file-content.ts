interface PackageJsonContentParams {
  projectName: string;
} 

/** package.json */
export const packageJsonContent = (params: PackageJsonContentParams) => `
{
  "name": "${params.projectName}",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "build": "torytis build",
    "build:variable": "torytis build:variable"
  },
  "devDependencies": {
    "@types/node": "^20.7.0",
    "@types/react": "^18.2.22",
    "@types/react-dom": "^18.2.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.3",
    "postcss-modules": "^6.0.0",
    "typescript": "^5.2.2",
    "esbuild": "^0.19.4",
    "@wisdomstar94/torytis": "^0.0.22"
  }
}
`.trim();

/** tsconfig.json */
export const tsconfigJsonContent = () => `
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
`.trim();

/** postcss.config.js */
export const postcssConfigJsContent = () => `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`.trim();

/** tailwind.config.ts */
export const tailwindConfigTsContent = () => `
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.tsx', './src/**/*.scss', './src/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
`.trim();

/** torytis-env.d.ts */
export const torytisEnvDTsContent = () => `
/// <reference types="@wisdomstar94/torytis" />
`.trim();

/** .gitignore */
export const gitignoreContent = () => `
node_modules
*.env
lib
build
out
.torytis
`.trim();

/** src/index.component.tsx */
export const indexComponentTsxContent = () => `
import React from "react";
import './index.scss';

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no" />
        <title></title>
      </head>
      <body>
        
      </body>
    </html>
  );
}
`.trim();

/** src/index.scss */
export const indexScssContent = () => `
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim();

/** src/index.script.tsx */
export const indexScriptTsxContent = () => `
window.addEventListener('load', () => {
  // ...
});
`.trim();

/** .vscode/settings.json */
export const vscodeSettingsJsonContent = () => `
{
  "css.customData": [".vscode/tailwind.json"]
}
`.trim();

/** .vscode/tailwind.json */
export const vscodeTailwindJsonContent = () => `
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the \`@tailwind\` directive to insert Tailwind's \`base\`, \`components\`, \`utilities\` and \`screens\` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#tailwind"
        }
      ]
    },
    {
      "name": "@apply",
      "description": "Use the \`@apply\` directive to inline any existing utility classes into your own custom CSS. This is useful when you find a common utility pattern in your HTML that you’d like to extract to a new component.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
        }
      ]
    },
    {
      "name": "@responsive",
      "description": "You can generate responsive variants of your own classes by wrapping their definitions in the \`@responsive\` directive:\\n\`\`\`css\\n@responsive {\\n  .alert {\\n    background-color: #E53E3E;\\n  }\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#responsive"
        }
      ]
    },
    {
      "name": "@screen",
      "description": "The \`@screen\` directive allows you to create media queries that reference your breakpoints by **name** instead of duplicating their values in your own CSS:\\n\`\`\`css\\n@screen sm {\\n  /* ... */\\n}\\n\`\`\`\\n…gets transformed into this:\\n\`\`\`css\\n@media (min-width: 640px) {\\n  /* ... */\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#screen"
        }
      ]
    },
    {
      "name": "@variants",
      "description": "Generate \`hover\`, \`focus\`, \`active\` and other **variants** of your own utilities by wrapping their definitions in the \`@variants\` directive:\\n\`\`\`css\\n@variants hover, focus {\\n   .btn-brand {\\n    background-color: #3182CE;\\n  }\\n}\\n\`\`\`\\n",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#variants"
        }
      ]
    }
  ]
}
`.trim();