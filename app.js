(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.message = "";
        $scope.helpMessage = "";

        
        $scope.checkIfTooMuch = function() {
            var lunchList = $scope.lunchList;
            if (lunchList.length > 0) {
                var count = 0;
                var lunchArr = lunchList.split(",");
                var lunchArrSize = lunchArr.length;
                for (var i = 0; i < lunchArrSize; i++) {
                    if (lunchArr[i].trim().length > 0) {
                        count++;
                    }
                }
                $scope.message = count > 3 ? "Too much!" : "Enjoy!";
                $scope.helpMessage = count < lunchArrSize ? "I don't consider empty item!" : "";
            }else{
            	$scope.message = 'Please enter data first';
            }
        };
    }
})();
