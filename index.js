//import
var express = require("express");
var app = express();
var Connect = require("./models/connection").connect;
//import routes
var routes_appweb = require("./routes-appweb");
//sirviendo archivos estaticos
app.use("/files",express.static("public"));
//motor del template
app.set("template engine","pug");

//express-formidable para enviar parametros de un form
var formidable = require("express-formidable");
app.use(formidable({
	keepExtensions: true,
	encoding: 'utf-8'
}));

//renderizando las vistas
app.get("/",function(request,response){
    var request = new Connect.Request();
    var consulta = "SELECT * FROM Categoria";

        request.query(consulta, function (err, recordset) {
            
            if (err){
                console.log(err);
            }else{
                //var resultado = recordset;
                response.render("index.pug",{datos : recordset.recordset, test: "success"});
                /*
                if(recordset.length > 0){
                    response.render("index.pug",{datos : resultado});
                }else{
                    console.log('No hay datos');
                }
                /* */
                //response.send(recordset);
                //console.log(recordset);
                //console.log("-------------------");
                //console.log(recordset.recordset[0].NombreCategoria);
            }
            
        });
});

// aplicando routes
app.use("/appweb",routes_appweb);
//ejecutando las vistas
app.listen(8080);