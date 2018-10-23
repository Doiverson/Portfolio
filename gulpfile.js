var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var bs = require('browser-sync').create();

// browser-sync
// gulp.task('bs', function(){
//     var bsOptions = {}
//     bsOptions.files = ['./**/index.html', './css/**/*.css'];
//     bsOptions.port  = 3000;
//     bs.init(bsOptions)gul
// });

// タスク名と変数名は別々にしといた方が見やすいよ :)
gulp.task("browserSync", function () {
    bs.init({
        server: {
            baseDir: "./", // ルートとなるディレクトリを指定
        },
        port: 8080 // Portはこのオプションで変えれる
    });
});

// Sassコンパイルタスク
gulp.task('sass', function(){
    gulp.src('./scss/**/*.scss')
        .pipe(plumber()) // ←ここが追加
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css/'))
        .pipe(bs.stream()) // Sassのコンパル後、BrowserSyncのリロードを行う
});

gulp.task('html', function() {
    gulp.src(['**/*.html'])
        .pipe(bs.stream())
});

// watchタスク(**/*.scss変更時に実行するタスク)
// gulp.task('sass-watch', ['sass'], function(){
//     var watcher = gulp.watch('./scss/**/*.scss', ['sass']);
//     watcher.on('change', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
// });

// gulpのデフォルト動作としてsass-watchを実行
// gulp.task('default', ['bs','sass-watch']);

// gulpのデフォルトはwatchタスクを一緒に書いた方が楽かな
gulp.task('default', ['browserSync'], function () {
    gulp.watch('scss/**/*.scss',['sass']);
    gulp.watch('**/*.html', ['html']);
});
