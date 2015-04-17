(function () {
    var profApp = angular.module('profApp', []);
    profApp.controller('NavCtrl', ['$scope', '$location', '$anchorScroll',
        function ($scope, $location, $anchorScroll) {
            $scope.goSection = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
        }]);
    profApp.controller('SkilCtrl', ['$scope', function ($scope) {
        this.lang_skills = [
            {'name': "Hadoop", "icon": "", "level": "Learning"},
            {'name': "D3.js", "icon": "", "level": "Learning"},
            {'name': "Angular JS", "icon": "", "level": "Good"},
            {'name': "Backbone.js", "icon": "", "level": "Good"},
            {'name': "Node.js", "icon": "", "level": "Good"},
            {'name': "Javascript", "icon": "", "level": "Good"},
            {'name': "jQuery", "icon": "", "level": "Good"},
            {'name': "PHP", "icon": "", "level": "Good"},
            {'name': "Java SE", "icon": "", "level": "Good"},
            {'name': "Android", "icon": "", "level": "Good"},
            {'name': "HTML5", "icon": "", "level": "Good"},
            {'name': "CSS3", "icon": "", "level": "Good"},
            {'name': "MySQL", "icon": "", "level": "Good"},
            {'name': "MongoDB", "icon": "", "level": "Good"},
            {'name': "Python", "icon": "", "level": "Know"},
            {'name': "Linux", "icon": "", "level": "Know"},
            {'name': "C#", "icon": "", "level": "Know"},
            {'name': "JSP", "icon": "", "level": "Know"},
            {'name': "Servlet", "icon": "", "level": "Know"}
        ];
        this.showLevel = function (inx) {
            var level = this.lang_skills[inx].level;
            if (level === "Good") {
                return "active";
            } else if (level === "Learning") {
                return "info";
            } else {
                return "";
            }
        };
    }]);
})();

