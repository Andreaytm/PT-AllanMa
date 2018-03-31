var app = angular.module('mydp', []);

app.controller('MainCtrl', function($scope) {
  $scope.date = '31/03/2018';
});

app.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
}); /*http://www.abequar.net/posts/jquery-ui-datepicker-with-angularjs*/
