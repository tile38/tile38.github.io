/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const getGroups = require("./static/js/getGroups.js");
const getCommands = require("./static/js/getCommands.js");

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/logo.svg",
    infoLink: "https://www.tile38.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Tile38", // Title for your website.
  tagline: "Ultra Fast Geospatial Database & Geofencing Server",
  url: "http://stage.tile38.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "tile38-stage",
  organizationName: "tile38",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "commands", label: "Commands" },
    { doc: "topics/installation", label: "Docs" },
    { page: "license", label: "License" },
    // { blog: true, label: "Blog" },
    {
      href: "https://github.com/tidwall/tile38",
      label: "GitHub"
    },
    { doc: "topics/installation", label: "Get Tile38", button: true }
  ],

  // populate command groups for commands page
  commandGroups: getGroups(),
  allCommands: getCommands(),

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo.svg",
  // footerIcon: "img/favicon-32x32.png",
  favicon: "img/favicon-32x32.png",

  /* Colors for website */
  colors: {
    primaryColor: "#0D6C9B",
    secondaryColor: "rgba(255, 255, 255, 0.9)",
    navSliderBackground: "rgba(255, 255, 255, 0)"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Tile38`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "monokai-sublime",
    hljs: function(hljs) {
      hljs.registerLanguage("tile38-cli", function(hljs) {
        return {
          contains: [
            hljs.COMMENT(
              "#", // begin
              "\n" // end
            ),
            {
              className: "number",
              begin: "\\b\\d+(\\.\\d+)?\\s"
            },
            {
              className: "neg-number",
              begin: "\\-\\d+(\\.\\d+)?"
            },
            {
              className: "command",
              begin: "\\b[A-Z]+\\b"
            },
            {
              className: "geojson",
              begin: "{",
              end: "}"
            }
          ]
        };
      });
    }
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["/js/videoAutoPlay.js", "https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true

  // Show edit button for docs
  editUrl: "https://github.com/melbania/tile38-test/edit/master/docs/",

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/tidwall/tile38",

  // hide /docs/ directory in URL
  docsUrl: ""

  // wrap raw HTML fragments in pages/ with Docusaurus styles
  // wrapPagesHTML: true,
};

module.exports = siteConfig;
