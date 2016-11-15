import * as gulp from 'gulp';
import {join} from 'path';
import Config from '../../config';

export = () => {
  let src = [
    'node_modules/systemjs/**/*',
    'node_modules/core-js/**/*',
    'node_modules/@angular/**/*',
    'node_modules/rxjs/**/*',
    'node_modules/angulartics2/**/*',
    'node_modules/lodash/**/*',
    'node_modules/ng2-translate/**/*',
    'node_modules/@ngrx/**/*',
    'node_modules/@progress/**/*',
    'node_modules/@telerik/**/*',
    'node_modules/zone.js/**/*'
  ];
  return gulp.src(src, { base: 'node_modules' })
    .pipe(gulp.dest(join(Config.APP_DEST + '/node_modules')));
};
