chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var seconds10 = document.getElementById("thebutton-s-10s");
		
		seconds10.addEventListener("DOMSubtreeModified", function(){
			checkRelock();
		}, false);
		
		var seconds = document.getElementById("thebutton-s-1s");
		
		seconds.addEventListener("DOMSubtreeModified", function(){
			checkRelock();
		}, false);
	}
	}, 10);
});

function checkRelock(){
	var seconds10 = document.getElementById("thebutton-s-10s");
	var seconds = document.getElementById("thebutton-s-1s");
	var value = parseInt(seconds10.innerText) * 10 + parseInt(seconds.innerText);
	if (value >= 59)
	{
		var containers = document.getElementsByClassName("thebutton-container");
		var lock = containers[0];
		if(lock.classList.contains("active")){
			lock.classList.remove("unlocked");
			lock.classList.add("locked");
		}
	}
}