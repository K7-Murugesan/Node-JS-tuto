const httpServer = require( 'http' )

const server = httpServer.createServer( (req, res)=>{
 
    //------req part---------------
    // console.log( req.url );
    // console.log( req.method );
    // console.log( req.headers );
    // process.exit()
    //------------------------------

    //----- res part----------------
    res.setHeader("Content-type", "text/html")
    res.write( "<html>" )
    res.write( "<h1>Response from Server</h1>" )
    res.write( "</html>" )
    res.end()
    //------------------------------------------
}  )

server.listen(4000)
