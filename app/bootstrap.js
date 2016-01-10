var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var app_1 = require('./components/app/app');
browser_1.bootstrap(app_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=bootstrap.js.map