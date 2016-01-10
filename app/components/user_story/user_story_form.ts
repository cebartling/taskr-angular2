import {Component} from 'angular2/core';
//import {NgForm}    from 'angular2/common';

import {UserStoryService} from '../../services/user_story_service';
import {UserStory} from '../../models/user_story';

@Component({
    selector: 'userStoryForm',
    templateUrl: './components/user_story/user_story_form.html',
    styleUrls: ['./components/user_story/user_story_form.css'],
    providers: [UserStoryService],
    bindings: [UserStoryService]
})
export class UserStoryFormCmp {

    model = new UserStory('Untitled!');

    constructor(public userStoryService:UserStoryService) {
    }

    onSubmit() {
        this.userStoryService.save(this.model);
    }
}
