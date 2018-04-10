app.directive('restComponent', function (restService) {
    return {
        restrict: 'E',
        templateUrl: "app/views/rest.html",
        link: function (scope, element, attrs) {
            scope.sampleRest = function() {
                restService.sampleRequest(function(data) {
                    scope.output = data;
                })
            }
        }
    }
});
