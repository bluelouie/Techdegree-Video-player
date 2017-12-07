


let cues = $('.cue');
let video = $("video")[0];


$(document).ready(function () {
	$('video, audio').mediaelementplayer();

	video.addEventListener("timeupdate", function() {
		for (var i = 0; i < cues.length; i++) {

			var start = cues[i].getAttribute("data-start");
			var end = cues[i].getAttribute("data-end");
			var now = video.currentTime;


			if (now >= start && now <= end) {
				cues[i].className = "nth";
			} else {
				cues[i].className = "cue";
			}
		}
	});

	video.onplaying = () => {
		for (i = 0; i < cues.length; i++) {
			cues[i].addEventListener("click", function (evt) {
				video.currentTime = 0;
				var start = parseFloat(this.getAttribute("data-start"));
				video.currentTime = start;
				video.play();
			}, false);
		}






	}



});
