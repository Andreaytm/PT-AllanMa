 	 $(document).ready(function() {
 	 	$(window).on("shown.bs.modal", function() { 
 	 	 		$("#datetimepicker5").datetimepicker({
 	 			format: "ddd DD MMM YYYY HH:mm",
 	 			defaultDate: moment(),
 	 			minDate: moment(),
 	 			maxDate: moment().add(365, "days"),
 	 			daysOfWeekDisabled: [1],
 	 			stepping: 30,
 	 			disabledHours: [00,01,02,03,04,05,06,07,08,19,20,21,22,23],
 	 	});
 	 });
});