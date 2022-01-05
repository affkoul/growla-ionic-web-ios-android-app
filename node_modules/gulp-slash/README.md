# gulp-slash

> Apply [slash](https://www.npmjs.org/package/slash) to gulp file paths.

## Install

Install with [npm](https://npmjs.org/package/gulp-slash).

```
npm install --save-dev gulp-slash
```

## Usage

When used without arguments it returns an object stream for use with Gulp. The stream converts (in-place) the path,
base, cwd properties in each vinyl file.

```js
var gulp = require('gulp');
var gulpSlash = require('gulp-slash');

gulp.task('default', function () {
	return gulp.src('js/**/*.js')
		.pipe(gulpSlash())
		/* ... do work here ... */
});
```

When used with string argument, it acts per [slash](https://www.npmjs.org/package/slash).

```js
var gulpSlash = require('gulp-slash');
gulpSlash('c:\windows\file\path');  // c:/windows/file/path
```

When used with an object argument, it presumes the object is a vinyl file as used by Gulp. In converts (in-place) the path, base, cwd properties of the given object.

```js
var gutil = require('gulp-util');
var gulpSlash = require('gulp-slash');
var file = new gutil.File();
...
var sameFile = gulpSlash(file);
```
