import type { ZudokuConfig } from "zudoku";

/**
 * Конфігурація документації Gaming Platform API.
 *
 * Масив `navigation` задає і верхнє меню, і бокове:
 *  - елементи кореневого рівня — пункти верхнього меню
 *    (Documentation, API Reference, About);
 *  - елементи категорії Documentation — ліве меню
 *    (Installation, Authorization, About).
 */
const config: ZudokuConfig = {
  // Сайт публікується на https://spkartzen.github.io/gaming-platform-api/
  basePath: "/gaming-platform-api",

  site: {
    title: "Gaming Platform API",
  },

  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        { type: "doc", file: "installation", label: "Installation" },
        { type: "doc", file: "authorization", label: "Authorization" },
        { type: "doc", file: "about", label: "About" },
      ],
    },
    { type: "link", to: "/api", label: "API Reference" },
    // Пункт верхнього меню About — сторінка про автора проєкту
    { type: "doc", file: "author", label: "About", path: "/author" },
  ],

  redirects: [{ from: "/", to: "/installation" }],

  apis: {
    type: "file",
    // Єдине джерело правди — OpenAPI-документ у корені репозиторію
    input: "../openapi.yaml",
    path: "/api",
  },

  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
