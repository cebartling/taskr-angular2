var fs_1 = require('fs');
var yargs_1 = require('yargs');
var path_1 = require('path');
exports.PROJECT_ROOT = path_1.normalize(path_1.join(__dirname, '..'));
exports.ENV = yargs_1.argv['env'] || 'dev';
exports.DEBUG = yargs_1.argv['debug'] || false;
exports.PORT = yargs_1.argv['port'] || 5555;
exports.LIVE_RELOAD_PORT = yargs_1.argv['reload-port'] || 4002;
exports.DOCS_PORT = yargs_1.argv['docs-port'] || 4003;
exports.APP_BASE = yargs_1.argv['base'] || '/';
exports.ENABLE_HOT_LOADING = !!yargs_1.argv['hot-loader'];
exports.HOT_LOADER_PORT = 5578;
exports.BOOTSTRAP_MODULE = exports.ENABLE_HOT_LOADING ? 'hot_loader_bootstrap' : 'bootstrap';
exports.APP_TITLE = 'Taskr';
exports.APP_SRC = 'app';
exports.ASSETS_SRC = exports.APP_SRC + "/assets";
exports.TOOLS_DIR = 'tools';
exports.TMP_DIR = 'tmp';
exports.TEST_DEST = 'test';
exports.DOCS_DEST = 'docs';
exports.APP_DEST = "dist/" + exports.ENV;
exports.ASSETS_DEST = exports.APP_DEST + "/assets";
exports.BUNDLES_DEST = exports.APP_DEST + "/bundles";
exports.CSS_DEST = exports.APP_DEST + "/css";
exports.FONTS_DEST = exports.APP_DEST + "/fonts";
exports.LIB_DEST = exports.APP_DEST + "/lib";
exports.APP_ROOT = exports.ENV === 'dev' ? "" + exports.APP_BASE + exports.APP_DEST + "/" : "" + exports.APP_BASE;
exports.VERSION = appVersion();
exports.VERSION_NPM = '2.14.2';
exports.VERSION_NODE = '4.0.0';
exports.NPM_DEPENDENCIES = [
    { src: 'systemjs/dist/system-polyfills.js', dest: exports.LIB_DEST },
    { src: 'es6-shim/es6-shim.min.js', inject: 'shims', dest: exports.LIB_DEST },
    { src: 'reflect-metadata/Reflect.js', inject: 'shims', dest: exports.LIB_DEST },
    { src: 'systemjs/dist/system.src.js', inject: 'shims', dest: exports.LIB_DEST },
    { src: 'angular2/bundles/angular2-polyfills.js', inject: 'shims', dest: exports.LIB_DEST },
    { src: 'rxjs/bundles/Rx.min.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'angular2/bundles/angular2.min.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'angular2/bundles/router.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'angular2/bundles/http.min.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'jquery/dist/jquery.min.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'materialize-css/dist/js/materialize.min.js', inject: 'libs', dest: exports.LIB_DEST },
    { src: 'materialize-css/dist/css/materialize.min.css', inject: true, dest: exports.CSS_DEST }
];
exports.APP_ASSETS = [
    { src: exports.ASSETS_SRC + "/main.css", inject: true, dest: exports.CSS_DEST }
];
exports.NPM_DEPENDENCIES
    .filter(function (d) { return !/\*/.test(d.src); })
    .forEach(function (d) { return d.src = require.resolve(d.src); });
exports.DEPENDENCIES = exports.NPM_DEPENDENCIES.concat(exports.APP_ASSETS);
var SYSTEM_CONFIG_DEV = {
    defaultJSExtensions: true,
    paths: {
        'bootstrap': exports.APP_ROOT + "bootstrap",
        'hot_loader_bootstrap': exports.APP_ROOT + "hot_loader_bootstrap",
        '*': exports.APP_BASE + "node_modules/*"
    }
};
var SYSTEM_CONFIG_PROD = {
    defaultJSExtensions: true,
    bundles: {
        'bundles/app': ['bootstrap']
    }
};
exports.SYSTEM_CONFIG = exports.ENV === 'dev' ? SYSTEM_CONFIG_DEV : SYSTEM_CONFIG_PROD;
exports.SYSTEM_CONFIG_BUILDER = {
    defaultJSExtensions: true,
    paths: {
        '*': exports.TMP_DIR + "/*",
        'angular2/*': 'node_modules/angular2/*',
        'rxjs/*': 'node_modules/rxjs/*'
    }
};
function appVersion() {
    var pkg = JSON.parse(fs_1.readFileSync('package.json').toString());
    return pkg.version;
}
//# sourceMappingURL=config.js.map