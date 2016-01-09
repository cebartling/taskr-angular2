var UserStoryService = (function () {
    function UserStoryService() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    UserStoryService.prototype.get = function () {
        return this.names;
    };
    UserStoryService.prototype.add = function (value) {
        this.names.push(value);
    };
    return UserStoryService;
})();
exports.UserStoryService = UserStoryService;
//# sourceMappingURL=user_story_service.js.map