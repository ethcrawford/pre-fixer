"use strict";

const { src, dest } = require("gulp");
const postcss = require("gulp-postcss");
const flexbugs = require("postcss-flexbugs-fixes");
const autoprefixer = require("autoprefixer");

function prefix() {
  return src("src/*.css")
    .pipe(
      postcss([
        flexbugs(),
        autoprefixer({
          flexbox: "no-2009",
        }),
      ])
    )
    .pipe(dest("dist/"));
}

exports.default = prefix;
