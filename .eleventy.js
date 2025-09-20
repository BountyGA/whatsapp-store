module.exports = function(eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy admin (Decap CMS) folder
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: { input: "src", output: "_site" }
  };
};
