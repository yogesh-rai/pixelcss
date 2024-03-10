const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS files
function compileSass() {
    return gulp.src('pixelcss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
}

// Watch for changes in SCSS files
function watchFiles() {
    gulp.watch(['pixelcss/**/*.scss'], compileSass);
}

// Define tasks
exports.default = gulp.series(compileSass, watchFiles);