const gulp = require('gulp');
const uglify = require('gulp-uglify');
const liveReload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const gls = require('gulp-live-server');
const htmlMin = require('gulp-htmlmin');
const autoPrefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const zip = require('gulp-zip');
const babel = require('gulp-babel');

const STYLES_PATH = 'Resources/css/**/*.css';
const SCRIPTS_PATH = 'Resources/js/**/*.js'; // grabs js inside of folders inside of /js folder
const DEST_PATH = 'Resources/dist'; // route where all our compiled files will be stored
const HTML_PATH = 'Web-Info/**/*.html';

// HTML
gulp.task('html', () => {
console.log("Running html task");
return gulp.src(HTML_PATH)
.pipe(htmlMin({collapseWhitespace: true}))
.pipe(gulp.dest(DEST_PATH))
.pipe(liveReload());
})


// Styles
gulp.task('styles', () => {
console.log("Starting styles task"); 
 
return gulp.src(STYLES_PATH)
		.pipe(plumber(function (err) { 
			console.log('Styles Task Error'); 
			console.log(err.toString()); 
			this.emit('end');
		}))
        .pipe(sourcemaps.init()) 
        .pipe(autoPrefixer({ 
})) 
.pipe(minifyCss()) 
.pipe(sourcemaps.write()) 
.pipe(gulp.dest(DEST_PATH))
.pipe(liveReload());
});


// Clean
gulp.task('clean', () => {
return del.sync([DEST_PATH]); 
});


// Zip files
gulp.task('export', () => {
return gulp.src(['web-info/**/*', 'resources/**/*'])
.pipe(zip('website.zip'))
.pipe(gulp.dest('./')); 
});


gulp.task('watch', () => {
console.log("Gulp is watching");
require('./server.js'); 
liveReload.listen();
gulp.watch('web-info/index.html', ['html']);
gulp.watch(STYLES_PATH, ['styles']); 
});


gulp.task('default', ['html', 'styles', 'watch'], () => { 
console.log("Starting default task");
});