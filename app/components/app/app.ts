import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {UserStoryFormCmp} from '../user_story/user_story_form';
import {NameList} from '../../services/name_list';
import {UserStoryService} from '../../services/user_story_service';

@Component({
    selector: 'app',
    viewProviders: [NameList],
    providers: [UserStoryService],
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: HomeCmp, as: 'Home'},
    {path: '/about', component: AboutCmp, as: 'About'},
    {path: '/userStoryForm', component: UserStoryFormCmp, as: 'UserStoryForm'}
])
export class AppCmp {
}
