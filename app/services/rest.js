app.service('restService', function ($http) {
  this.cachedResponse = "";
  this.sampleRequest = function(callback) {
    $http.get("https://httpbin.org/get")
    .then(function(data) {
      if(!this.cachedResponse) {
        this.cachedResponse = data;
      } else {
        alert("Pulling response from cache");
      }
      callback(data);
    })
  }
});
