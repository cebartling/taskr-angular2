export class UserStory {

    constructor(public title:string) {
    }

    toJSONString():string {
        return JSON.stringify(this);
    }
}
