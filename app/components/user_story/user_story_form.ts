import {Component} from 'angular2/core';

import {UserStoryService} from '../../services/user_story_service';

@Component({
    selector: 'userStoryForm',
    templateUrl: './components/user_story/user_story_form.html',
    styleUrls: ['./components/user_story/user_story_form.css']
})
export class UserStoryFormCmp {
    constructor(private _userStoryService: UserStoryService) {  }

    title: string = '';

}
