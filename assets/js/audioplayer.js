$(document).ready(function(){
		$("#play1").on("click", function() {
			document.getElementById("myTune1").play();
		});
		$("#pause1").on("click", function() {
			document.getElementById("myTune1").pause()
		});
		$("#stop1").on("click", function() {
			document.getElementById("myTune1").pause();
			document.getElementById("myTune1").currentTime = 0;
		});

		$("#play2").on("click", function() {
			document.getElementById("myTune2").play();
		});
		$("#pause2").on("click", function() {
			document.getElementById("myTune2").pause()
		});
		$("#stop2").on("click", function() {
			document.getElementById("myTune2").pause();
			document.getElementById("myTune2").currentTime = 0;
		});

		$("#play3").on("click", function() {
			document.getElementById("myTune3").play();
		});
		$("#pause3").on("click", function() {
			document.getElementById("myTune3").pause()
		});
		$("#stop3").on("click", function() {
			document.getElementById("myTune3").pause();
			document.getElementById("myTune3").currentTime = 0;
		});

		$("#play4").on("click", function() {
			document.getElementById("myTune4").play();
		});
		$("#pause4").on("click", function() {
			document.getElementById("myTune4").pause()
		});
		$("#stop4").on("click", function() {
			document.getElementById("myTune4").pause();
			document.getElementById("myTune4").currentTime = 0;
		});

		$("#play5").on("click", function() {
			document.getElementById("myTune5").play();
		});
		$("#pause5").on("click", function() {
			document.getElementById("myTune5").pause()
		});
		$("#stop5").on("click", function() {
			document.getElementById("myTune5").pause();
			document.getElementById("myTune5").currentTime = 0;
		});

		$("#play6").on("click", function() {
			document.getElementById("myTune6").play();
		});
		$("#pause6").on("click", function() {
			document.getElementById("myTune6").pause()
		});
		$("#stop6").on("click", function() {
			document.getElementById("myTune6").pause();
			document.getElementById("myTune6").currentTime = 0;
		});
	});