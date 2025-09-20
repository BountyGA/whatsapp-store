module.exports = function(eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy admin (Decap CMS) folder from inside src/
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: { input: "src", output: "_site" }
  };
};
