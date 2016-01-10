import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {UserStory} from '../models/user_story';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Response} from 'angular2/http';

@Injectable()
export class UserStoryService {

    constructor(public http:Http) {
    }

    save(userStory:UserStory):Observable<Response> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var observable = this.http.post('user_stories', userStory.toJSONString(), {headers: headers});
        observable.map(res => res.json()).subscribe(
            data => console.info(data),
            err => console.error(err),
            () => console.info('Saving user story complete')
        );
        return observable;
    }
}
