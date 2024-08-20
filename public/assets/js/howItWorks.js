var id = "";
$("#morning, #afternoon, #evening").on("click", function() {
	id = $(this).attr("id");
	$.each(["#morning, #afternoon, #evening"], function(k, v) {
		$(v).removeClass("selected");
	});
	$("#" + id).addClass("selected");
});
$("#getInShape, #saveMoney").on("click", function() {
	id = $(this).attr("id");
	$.each(["#getInShape, #saveMoney"], function(k, v) {
		$(v).removeClass("selected");
	});
	$("#" + id).addClass("selected");
});
$("#goButton").on("click", function() {
	$(this).toggleClass("selected");
});