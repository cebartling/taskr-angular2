var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var UserStoryService = (function () {
    function UserStoryService(http) {
        this.http = http;
    }
    UserStoryService.prototype.save = function (userStory) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var observable = this.http.post('user_stories', userStory.toJSONString(), { headers: headers });
        observable.map(function (res) { return res.json(); }).subscribe(function (data) { return console.info(data); }, function (err) { return console.error(err); }, function () { return console.info('Saving user story complete'); });
        return observable;
    };
    UserStoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserStoryService);
    return UserStoryService;
})();
exports.UserStoryService = UserStoryService;
//# sourceMappingURL=user_story_service.js.map