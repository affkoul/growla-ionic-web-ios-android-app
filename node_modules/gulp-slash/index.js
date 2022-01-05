var slash = require('slash');
var through = require('through2');

/**
 * Convert given text using node slash, or where no text is given, return a stream
 * that similarly converts gulp (vinyl) file paths in place.
 * @param {string|File} [candidate] Text or a vinyl file to convert
 * @returns {string|Transform} Converted text or file where given, else a transform stream for gulp
 */
module.exports = function gulpSlash(candidate) {
  'use strict';

  // no arguments implies stream
  if (arguments.length === 0) {
    return through.obj(function(file, encoding, done) {
      this.push(gulpSlash(file)); // requires named method
      done();
    });

  // text implies direct conversion
  } else if (typeof candidate === typeof '') {
    return slash(candidate);

  // object implies path,cwd,base fields are converted
  } else if (typeof candidate === typeof { }) {
    [ 'path', 'cwd', 'base' ].forEach(function (field) {
      var isValid = (field in candidate) && (typeof candidate[field] === typeof '');
      if (isValid) {
        candidate[field] = slash(candidate[field]);
      }
    });
    return candidate;
  }
}