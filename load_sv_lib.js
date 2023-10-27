function status( s ) { document.getElementById( "status" ).innerHTML = s; console.log( s ); }
svlib.then( function(Module) {
    //
    // SunVox Library was successfully loaded.
    // Here we can perform some initialization:
    //
    svlib = Module;
    status( "SunVoxLib loading is complete" );
    var ver = sv_init( 0, 44100, 2, 0 ); //Global sound system init
    if( ver >= 0 )
    {
	status( "init ok" );
    }
    else
    {
	status( "init error" );
	return;
    }
    sv_open_slot( 0 ); //Open sound slot 0 for SunVox; you can use several slots simultaneously (each slot with its own SunVox engine)
    //
    // Try to load and play some SunVox file:
    //
    status( "loading test song..." );
    var req = new XMLHttpRequest();
    req.open( "GET", "music/test.sunvox", true );
    req.responseType = "arraybuffer";
    req.onload = function( e ) 
    {
	if( this.status != 200 )
	{
	    status( "file not found" );
	    return;
	}
	var arrayBuffer = this.response;
	if( arrayBuffer ) 
	{
	    var byteArray = new Uint8Array( arrayBuffer );
	    if( sv_load_from_memory( 0, byteArray ) == 0 )
	    {
		fileSize = byteArray.byteLength;
		status( "song loaded" );
	    }
	    else
	    {
		status( "song load error" );
	    }
	}
    };
    req.send( null );
} );
