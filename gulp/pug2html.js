// TODO посмотреть pug-linter
// TODO как соеденить две задачи в одну по pug

const {src, dest} = require("gulp");
const pug = require("gulp-pug");
const newer = require("gulp-newer");
const config = require("./config.js");
const htmlValidator = require("gulp-w3c-html-validator");
const formatHtml = require("gulp-format-html");
const pugLinter = require("gulp-pug-linter");

//const webpHTML = require("gulp-webp-html");

module.exports = function pug2html() {
	return (
		src(config.src.pug)
			.pipe(newer(config.out.html))
			.pipe(pugLinter({reporter: "default"}))

			.pipe(pug({pretty: true}))
			//.pipe(webpHTML()) - под вопросом
			.pipe(
				formatHtml({
					indent_size: 3,
					indent_with_tabs: true,
				})
			)

			.pipe(htmlValidator())
			.pipe(dest(config.out.html))
	);
};

//.pipe(
//	prettier({
//		tabWidth: 3,
//		useTabs: true,
//		printWidth: 700,
//	})
//)

//const prettier = require("gulp-prettier");
//const plumber = require("gulp-plumber");
//const notify = require("gulp-notify");
//const pugLintStylish = require("puglint-stylish");
