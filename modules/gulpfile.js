var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;
elixir(function(mix) {
    mix
        .sass('style.scss')
        .browserify('office.js')
        .browserify('shop.js')

        .copy('resources/assets/fonts', 'public/fonts')
        .copy('resources/assets/img', 'public/img')

        .scripts([
            'resources/assets/js/vendors/jquery.min.js',
            'resources/assets/js/vendors/bootstrap.min.js',
        ], 'public/js/vendor.js')

        .livereload([
            'public/**/*',
        ])
    ;
});
