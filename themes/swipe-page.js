$( document ).on( "pageinit", "[data-role='page'].history-swipe", function() {
	var page = "#" + $( this ).attr( "id" ),
		// Get the filename of the next page that we stored in the data-next attribute
		next = $( this ).jqmData( "next" ),
		// Get the filename of the previous page that we stored in the data-prev attribute
		prev = $( this ).jqmData( "prev" );
	
	// Check if we did set the data-next attribute
	if ( next ) {
		// Prefetch the next page
		$.mobile.loadPage( next + ".html" );
		// Navigate to next page on swipe left
		$( document ).on( "swipeleft", page, function() {
			$.mobile.changePage( next + ".html", { transition: "slide" });
		});
		// Navigate to next page when the "next" button is clicked
	}
	// Disable the "next" button if there is no next page

	// The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
	if ( prev ) {
		$( document ).on( "swiperight", page, function() {
			$.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
		});
	}
});