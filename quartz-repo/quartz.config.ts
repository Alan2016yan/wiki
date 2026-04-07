import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Alan Wiki Quartz 4 Configuration
 *
 * 09_Wiki 知识库专用配置
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Allan's Wiki",
    pageTitleSuffix: " | 第二大脑",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "none",
    },
    locale: "zh-CN",
    baseUrl: "yan-alan600.github.io/wiki",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "quartz-repo",
      "node_modules",
      "*.css",
      "*.js",
      "README.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf9",
          lightgray: "#e7e5e4",
          gray: "#a8a29e",
          darkgray: "#57534e",
          dark: "#1c1917",
          secondary: "#0f766e",
          tertiary: "#14b8a6",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fef08a88",
        },
        darkMode: {
          light: "#1c1917",
          lightgray: "#292524",
          gray: "#78716c",
          darkgray: "#e7e5e4",
          dark: "#fafaf9",
          secondary: "#2dd4bf",
          tertiary: "#5eead4",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fef08a88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disabled: requires network font fetch
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
