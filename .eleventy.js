const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy images from /src to /web
  eleventyConfig.addPassthroughCopy('./src/images/');

  return {
    dir: {
      input: "src",
      output: "web",
    },
  };
};