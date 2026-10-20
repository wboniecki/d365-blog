// Single source of truth for site-wide text. Layouts, RSS and SEO tags
// (phase 3) read from here, so renaming the site is a one-line change.
export const site = {
  name: "@wboniecki.dev - D365",
  author: "Wiktor Boniecki",
  description:
    "Dynamics 365 Finance & Operations development notes and portfolio.",
} as const;
