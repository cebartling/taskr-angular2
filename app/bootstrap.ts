import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
//import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));
