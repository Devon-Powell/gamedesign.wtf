export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "gamedesign.wtf",
  description:
    "A public resource created with the intent of deconstructing and evaluating video game systems",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Games",
      href: "/games",
    },
    {
      title: "Systems",
      href: "/systems",
    },
    {
      title: "Notifications",
      href: "/notifications",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/Devon-Powell",
  },
}
