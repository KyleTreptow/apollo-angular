app.directive('toggleButton', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.classToggled = false;
      scope.toggleClass = function() {
        scope.classToggled = !scope.classToggled;
        if(scope.classToggled) {
          element[0].classList.add('button--active');
        } else {
          element[0].classList.remove('button--active');
        }
      }
      element.on('click', function(e) {
        e.preventDefault();
        scope.toggleClass();
      });
    }
  }
});
