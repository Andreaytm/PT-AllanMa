$(document).ready(function() { 
    $("#datepicker").datepicker({dateFormat:"dd-mm-yy"}).val(); 
    $("#datepicker").datepicker({minDate:0}); 
});