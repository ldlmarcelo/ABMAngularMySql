const express = require('express')
const morgan = require ('morgan')
//inicializaciones: funciones de inicialización de clases
const app = express();
//configuraciones
app.set('port', process.env.Port || 4000);
app.path('views', path.join(__dirname,'views'));
app.engine('.hbs',engine({
    defaultlayout: "main",
    layoutsDir: path.join(app.get('views'), 'loyouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

helpers: require('./lib/hadlebars.js')
app.set('view engine','.hbs');
//Middelwares: funciones que se ejecutan cada vez que un cliente solicita una petición al servidor
app.use(morgan('dev'));
//Variables globales
app.use((req, res, next)=>{
    next();
})
//Routes
app.use(require('./routers/index.js'));
app.use('/links', require('./routers/links'));

//Public: Código al cual va acceder el navegador

//starting the server
app.listen(app.get('port'),() => {
    console.log('Serve on port',app.get('port'));
})



