var DatePicker = angular.module('DatePicker', []);

DatePicker.directive("datepicker", function(){
	function link(scope, element, attrs, controller) {
		element.datepicker({
			onSelect: function(dateText) {
				scope.$apply(function() {
					controller.$setViewValue(dateText);
				});
			},
			dateFormat: "dd/mm/yy"
			minDate: "0"
		});
	}
})return {
	require: "ngModel",
	link: link
};
 });