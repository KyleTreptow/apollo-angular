app.service('dice', function () {
  this.roll = function (num) {
    return Math.floor(Math.random() * Math.floor(num)) + 1;
  }
  this.roll20 = function () {
    return this.roll(20);
  }
});
