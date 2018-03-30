$(document).ready(function() { 
    $("#date").datepicker({dateFormat:"dd-mm-yy"}).val(); 
    $("#date").datepicker({minDate:0}); 
});