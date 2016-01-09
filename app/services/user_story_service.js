var UserStoryService = (function () {
    function UserStoryService() {
        this.userStories = [];
    }
    UserStoryService.prototype.get = function () {
        return this.userStories;
    };
    UserStoryService.prototype.add = function (value) {
        this.userStories.push(value);
    };
    return UserStoryService;
})();
exports.UserStoryService = UserStoryService;
//# sourceMappingURL=user_story_service.js.map