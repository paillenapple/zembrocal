const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "css/normalize.css" 
  });
  
  return {
    dir: {
      input: "views",
      layouts: "_layouts"
    },
  }
};