"use strict";

const typesetPlugin = require('eleventy-plugin-typeset');
 
module.exports = function(eleventyConfig) {
    // Pass though files to output directory

    // images
    eleventyConfig.addPassthroughCopy("src/assets");
    // css
    eleventyConfig.addPassthroughCopy("src/styles");
    // robots and ads
    eleventyConfig.addPassthroughCopy("src/*.txt");
    // sitemap and bing
    eleventyConfig.addPassthroughCopy("src/*.xml");
    // google
    eleventyConfig.addPassthroughCopy("src/*.html");
    // redirects for cloudflare pages
    eleventyConfig.addPassthroughCopy("src/_redirects");


    eleventyConfig.addPlugin(typesetPlugin({
        disable: ['hyphenate', 'ligatures'],
    }));
};
