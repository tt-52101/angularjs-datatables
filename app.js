var app = angular.module('app', ['ngRows']);

// Config
app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);

// Controller
app.controller('main', function($scope) {
  var vm = $scope;

  // Generate random name data for testing
  var firstNames = ['Alan', 'Alice', 'Amber', 'Amanda', 'Barney', 'Bobby', 'Bethany', 'Casey', 'Clayton', 'Cody', 'Dillon', 'Dianne', 'Edward', 'Ethan', 'Eleanor', 'Frank', 'Francene', 'Gary', 'George', 'Georgia', 'Helen', 'Harry', 'Isaac', 'Julia', 'Justin', 'Keith', 'Kathleen', 'Larry', 'Martin', 'Mary', 'Mark', 'Megan', 'Nathan', 'Oliver', 'Philip', 'Ray', 'Rebecca', 'Steve', 'Sara', 'Tina', 'Terry', 'Vince', 'Walter', 'Zeke'];
  var lastNames = ['Adams', 'Brown', 'Blevins', 'Clayton', 'Dixon', 'Edwards', 'Fitzgerald', 'Gray', 'Greene', 'Harris', 'Ibanez', 'Jensen', 'Jefferson', 'Johnson', 'Kennedy', 'Lewis', 'Lincoln', 'Martin', 'McGuire', 'Motz', 'Meyer', 'Newton', 'Penn', 'Richards', 'Russell', 'Smith', 'Stevens', 'Sweet', 'Turner', 'Thompson', 'Vick', 'Waters', 'White', 'Woods'];

  vm.names = [];

  for (var i = 1; i <= 100000; i++) {
    var d = new Date('1/1/1970');
    d.setDate(d.getDate() + Math.floor(Math.random()*15000));
    vm.names.push({
      id: i,
      firstName: firstNames.randomElement(),
      lastName: lastNames.randomElement(),
      dob: d
    });
  }

  // (Optional) Create a selection Set for rows that can be processed by both this app and ngRows
  vm.selected = new Set();

  vm.deleteSelected = function() {
    vm.names = vm.names.filter(function(x) {
      return !vm.selected.has(x);
    });
    
    vm.deselectAll();
  };

  vm.deselectAll = function() {
    vm.selected.clear();
  }
});

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};