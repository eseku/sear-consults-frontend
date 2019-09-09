const express = require('express');
const path = require('path')
const hbs = require('hbs')
const port = process.env.port || 3000
const app = express()

//Config Paths
const publicDir = path.join(__dirname, '../public')
let viewsPath = path.join( __dirname, '../templates/views' );
let partialsPath = path.join( __dirname, '../templates/partials' );

app.set('view engine', 'hbs')
app.set( 'views', viewsPath );
app.use(express.static(publicDir))
hbs.registerPartials( partialsPath );


app.get( '/', ( req, res ) => {
	res.render('index')
} )

app.get('*', (req,res)=>{
  res.send('<h1>Oops, the page you are looking for does not exist</h1>')
})

app.listen(port, ()=>{
  console.log("port", port);
})
