# gulp-styleguidejs

> Generate a styleguide from your CSS, by adding [YAML](http://en.wikipedia.org/wiki/YAML) data in the comments. It generates a [self-contained html](https://rawgithub.com/EightMedia/styleguide.js/master/test/expected/index.html) file. Works great for component based CSS.

_Issues with output should be reported on the styleguide.js [issue tracker](https://github.com/EightMedia/styleguide.js/issues)_

A [gulp](https://github.com/gulpjs/gulp) wrapper for [styleguide.js](https://github.com/EightMedia/styleguide.js) by [EightMedia](https://github.com/EightMedia/)

## Install
```bash
$ npm install gulp-styleguidejs --save-dev
```

## How to use

```javascript
var gulp = require('gulp'),
    styleguidejs = require('gulp-styleguidejs');

gulp.task('default', function() {
  gulp.src('app.css')
  .pipe(styleguidejs())
  .pipe(gulp.dest('docs'));
});
```

## API
### styleguidejs([, options])

#### options
Type: `object`
Default: none

gulp-styleguidejs takes all styleguide.js [options](https://github.com/EightMedia/styleguide.js#user-content-customize-look-and-feel). If no options object is provided, gulp-styleguidejs will automatically output to `index.html`. If an options object is given it must contain a value for `outputFile`.

## Markup
Styleguide.js uses YAML to markup CSS files and generate styleguides.

From the styleguide.js documentation:

```css
/***
  title: Square buttons
  section: Buttons
  description: Very pretty square buttons
  example: |
    <a href="" class="btn btn-small">button</a>
    <a href="" class="btn btn-medium">button</a>
    <a href="" class="btn btn-large">button</a>
***/

.btn{
  display: inline-block;
  padding: .3em .6em;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: darkslateblue;
}
.btn:hover{
  background-color: # 38306E;
}
.btn-small{
  font-size: .8em;
}
.btn-medium{
  font-size: 1em;
}
.btn-large{
  font-size: 1.3em;
}
```

Find out more about using styleguide.js by reading its [documentation](https://github.com/EightMedia/styleguide.js).
