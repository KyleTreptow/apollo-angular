var app = angular.module("testApp", []);

app.controller("testCtrl", function ($scope, dice) {
  // definitions
  $scope.firstName = 'Kyle';
  $scope.lastName = 'Treptow';
  $scope.abilityLabels = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
  $scope.abilityLabelsFull = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  $scope.abilityValues = [10, 10, 10, 10, 10, 10];
  // function: sum
  $scope.getSum = function (total, num) {
    return total + num;
  }
  // function: roll stats
  $scope.statsMethod = 'standard';
  $scope.changeMethod = function (method) {
    if (method === 'augmented') {
      $scope.statsMethod = 'augmented';
    } else if (method === 'wild') {
      $scope.statsMethod = 'wild';
    } else {
      $scope.statsMethod = 'standard';
    }
  }
  $scope.resetStats = function () {
    $scope.abilityValues = [10, 10, 10, 10, 10, 10];
  }
  $scope.rollStats = function () {
    var newScores = [];
    if ($scope.statsMethod === 'wild') {
      for (i = 0; i < 6; i++) {
        var result = dice.roll(20);
        newScores.push(result);
      }
    } else {
      for (i = 0; i < 6; i++) {
        var score = [];
        for (j = 0; j < 4; j++) {
          var result = dice.roll(6);
          if ($scope.statsMethod === 'augmented') {
            if (result !== 1) {
              score.push(result);
            } else {
              j--;
            }
          } else {
            score.push(result);
          }
        }
        let lowest = Math.min.apply(Math, score);
        let sumRoll = score.reduce($scope.getSum) - lowest;
        newScores.push(sumRoll);
        // logs - start
        console.log('===============');
        console.log(score);
        console.log('Lowest: ' + lowest);
        console.log('Total: ' + sumRoll);
        console.log('===============');
        // logs - end
      }
    }


    $scope.abilityValues = newScores;
  }
  // function: roll dice
  $scope.dieRoll = 0;
  $scope.rollDice = function (num) {
    $scope.dieRoll = dice.roll(num);
  }
  $scope.test = 100;
  $scope.btnHandle = function () {
    $scope.test = dice.roll(100);
  }
  // define active state & toggle function
  $scope.isActive = false;
  $scope.activeButton = function () {
    $scope.isActive = !$scope.isActive;
  }
  // define active state & toggle function
  $scope.naviOpen = false;
  $scope.toggleNavi = function () {
    $scope.naviOpen = !$scope.naviOpen;
  }

  $scope.inventory = [{
    name: "+1 shortsword",
    price: "10 gp"
  }]

}).filter('calcMod', function () {
  return function (value) {
    return Math.floor((value - 10) / 2);
  };
});
