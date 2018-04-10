app.directive('inventoryOneWay', function (store) {
    return {
        restrict: 'E',
        scope: {
            inventory: '@'
        },
        templateUrl: "app/views/inventory.html",
        link: function (scope, element, attrs) {
            scope.inventory = JSON.parse(scope.inventory);

            scope.addItem = function () {
                scope.inventory.push(scope.newItem);
                scope.newItem = {
                    name: "",
                    price: ""
                }
            }

            scope.standard = function () {
                scope.inventory = store.basicStore();
            }
            scope.magic = function () {
                scope.inventory = store.magicStore();
            }
            scope.legendary = function () {
                scope.inventory = store.legendaryStore();
            }

            scope.newItem = {
                name: "",
                price: ""
            }
        }
    }
});
