let activeViewType = "";

$(document).ready(function() {
    let currentPath = window.location.pathname;

    if(currentPath.includes("landing")) {
        $("#content").addClass("d-flex");
    } else {
        //$("#mapping-section").addClass("d-none");
        $("#content").addClass("d-flex flex-column d-xl-flex flex-xl-row");
        $("#nav-div").remove();
    }

    $(".single-main-nav").on("click", function() {
		let viewType = $(this).data("viewType");

		if(activeViewType !== viewType) {
			if(activeViewType !== "") {
				$(`#sub-nav-${activeViewType}`).animate({
					left: "-=250"
				}, 300);

				$(".single-main-nav").removeClass("active");			
			}

			$(`#sub-nav-${viewType}`).animate({
				left: "+=250"
			}, 300);

			$(this).addClass("active");
			activeViewType = viewType;
		} else {
			$(this).removeClass("active");

			$(`#sub-nav-${viewType}`).animate({
				left: "-=250"
			}, 300);

			activeViewType = "";
		}
	})
})