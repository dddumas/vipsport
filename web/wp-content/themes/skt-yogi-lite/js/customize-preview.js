/**
 * Live-update changed settings in real time in the Customizer preview.
 */

( function( $ ) {
		api = wp.customize;

	// Site title.
	api( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.header .header-inner .logo h1' ).text( to );
		} );
	} );

	// Site tagline.
	api( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.header span.tagline' ).text( to );
		} );
	} );
} )( jQuery );