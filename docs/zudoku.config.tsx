import type { ZudokuConfig } from "zudoku";

/**
 * Конфігурація документації Gaming Platform API.
 *
 * Масив `navigation` задає і верхнє меню, і бокове:
 *  - елементи кореневого рівня — пункти верхнього меню
 *    (Documentation, SRS, API Reference, About);
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
    {
      type: "category",
      label: "SRS",
      items: [
        { type: "doc", file: "srs/introduction", label: "1. Introduction" },
        { type: "doc", file: "srs/general-description", label: "2. General Description" },
        { type: "doc", file: "srs/functional-requirements", label: "3. Functional Requirements" },
        { type: "doc", file: "srs/interface-requirements", label: "4. Interface Requirements" },
        { type: "doc", file: "srs/performance-requirements", label: "5. Performance Requirements" },
        { type: "doc", file: "srs/design-constraints", label: "6. Design Constraints" },
        { type: "doc", file: "srs/non-functional-attributes", label: "7. Non-Functional Attributes" },
        { type: "doc", file: "srs/schedule-budget", label: "8. Schedule and Budget" },
        { type: "doc", file: "srs/appendices", label: "9. Appendices" },
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
