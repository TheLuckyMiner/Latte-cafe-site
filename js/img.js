window.addEventListener("DOMContentLoaded", function() {
	var content = document.querySelector(".content");
	content.addEventListener("click", function(event) {
		var target = event.target;
			if (target = target.closest(".pic")) {
				event.preventDefault();
				var a = content.querySelectorAll(".pic");
				var img = content.querySelectorAll("img");
				var selected = [].indexOf.call(a, target);
				[].forEach.call(a, function(el, i) {
					(i == selected) ? (el.classList.add("active"), img[i].classList.add("active")):
					(el.classList.remove("active"), img[i].classList.remove("active"))
				})
			}
		})
	});