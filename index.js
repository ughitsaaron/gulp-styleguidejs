"use strict";
var gutil = require('gulp-util'),
    PluginError = gutil.PluginError,
    StyleGuide = require('styleguidejs'),
    sg = new StyleGuide(),
    through = require('through2'),
    PLUGIN_NAME = "gulp-styleguidejs";

module.exports = function(filename, options) {
  options = options || {};
  filename = filename || "index.html";

  return through.obj(function(file, enc, cb) {

    if(file.isNull()) {
      cb(null, file);
      return;
    }

    if(file.isStream()) {
      cb(new PluginError(PLUGIN_NAME, "Streaming not supported"));
    }

    try {
      sg.addSource(file.contents);
      sg.render(options, function(err, data) {
        if(err) throw err;
        if(data.length) {
          file.contents = new Buffer(data);
          file.path = filename;
          cb(null, file);
        }
      });
    } catch(err) {
      throw new PluginError(PLUGIN_NAME, err);
    }
  });
};