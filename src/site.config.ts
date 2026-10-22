// Single source of truth for site-wide text. Layouts, RSS and SEO tags
// (phase 3) read from here, so renaming the site is a one-line change.
export const site = {
  name: "@wboniecki.dev - D365",
  author: "Wiktor Boniecki",
  description:
    "Dynamics 365 Finance & Operations development notes and portfolio.",
  repoUrl: "https://github.com/wboniecki/d365-blog",
} as const;

// Left navigation pane, "Workspaces" group.
export const workspaces = [
  { label: "Home", href: "/" },
  { label: "All posts", href: "/posts/" },
  { label: "About", href: "/about/" },
] as const;

// Post categories. Step 2.3 reuses this list for the zod `module` enum,
// so adding a module stays a one-line change.
export const modules = [
  "X++",
  "Data entities",
  "Integrations",
  "DevOps",
] as const;
