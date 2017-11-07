var gulp = require('gulp');
//var sass = require('gulp-sass');
gulp.task("all",function(){
	gulp.src("./**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu"))
})



gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu"))
})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/css/"))
})
gulp.task("images",function(){
	gulp.src("image/**/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/img/"))
})
gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/html/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/js/"))
})
gulp.task("font",function(){
	gulp.src("font/**")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/font/"))
})
gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/php"))
})

gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:/phpStudy/WWW/mobliegoujiu/css/"))
})

gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("image/**/*.{jpg,png,gif,bmp}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("font/**",["font"]);
	gulp.watch("php/*.php",["php"]);
	gulp.watch("scss/*.scss",["sass"]);
})