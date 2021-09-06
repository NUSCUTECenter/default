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
					left: "-=300"
				}, 300);

				$(".single-main-nav").removeClass("active");			
			}

			$(`#sub-nav-${viewType}`).animate({
				left: "+=300"
			}, 300);

			$(this).addClass("active");
			activeViewType = viewType;
		} else {
			$(this).removeClass("active");

			$(`#sub-nav-${viewType}`).animate({
				left: "-=300"
			}, 300);

			activeViewType = "";
		}
	})

	$("#btn-return").on("click", function() {
		history.back();
	})

	$("#search-locations").on("keyup", function() {
		let searchTerm = $(this).val().toLowerCase();

		if(searchTerm !== "") {
			$(".single-location").each((index, location) => {
				if($(location).data("locationName").toLowerCase().includes(searchTerm)) {
					$(location).addClass("d-flex").removeClass("d-none");
				} else {
					$(location).removeClass("d-flex").addClass("d-none");
				}
			})
		} else {
			$(".single-location").removeClass("d-none");
		}
	})

	$(".single-year-select").click(function() {
		if(!$(this).hasClass("active")) {
			var numView = $(this).data("num-view");

			// Deselect the current overlay
			$(".single-year-select.active").each(function() {
				$(this).removeClass("active");
			})

			// Activate overlay
			if(numView !== "default") {
				var numToSelect = parseInt(numView);
				($(".leaflet-control-layers-overlays .leaflet-control-layers-selector")[numToSelect]).click();
			} else {
				let numLayers = $(".leaflet-control-layers-overlays .leaflet-control-layers-selector").length;
				($(".leaflet-control-layers-overlays .leaflet-control-layers-selector")[numLayers-1]).click();
			}

			$(this).addClass("active");
		}
	})
})