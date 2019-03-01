var express = require("express");
var router = express.Router();

var Connect = require("./models/connection").connect;

router.get("/",function(request,response){
    response.render("appweb/index.pug")
});

router.post("/",function(request,response){
    //console.log("Metodo POST");
    var id_categoria = request.fields.id_categoria;
    var nombre_categoria = request.fields.nombre_categoria;
    var descripcion_categoria = request.fields.descripcion_categoria;
    var detalles_categoria = request.fields.detalles_categoria;
    //console.log(id_categoria);
    //console.log(nombre_categoria);
    //console.log(descripcion_categoria);
    //console.log(detalles_categoria);

    var consulta = "INSERT INTO Categoria(CategoriaID,NombreCategoria,DescripcionCategoria,DetallesCategoria) VALUES ('"+id_categoria+"','"+nombre_categoria+"','"+descripcion_categoria+"','"+detalles_categoria+"')";

    //console.log(consulta);

    /* */
    var request = new Connect.Request();

    request.query(consulta,function (err, recordset) {
        if (err){
            console.log(err);
        }else{
            //console.log(recordset.recordset);
            //console.log(recordset.recordset[0].NombreCategoria);
            response.render("appweb/index.pug");
        }
    });
    /* */
});

router.get("/edit/:id",function(request,response){
    var id = request.params.id;
    /* */
    var request = new Connect.Request();
    var consulta = "SELECT * FROM Categoria WHERE CategoriaID = "+id;
    /**/
    request.query(consulta,function (err, recordset) {
        if (err){
            console.log(err);
        }else{
            //console.log(recordset.recordset);
            //console.log(recordset.recordset[0].NombreCategoria);
            response.render("appweb/editar.pug",{datos : recordset.recordset,test: "success"});
        }
    });
    /* */
});

router.post("/edit/:id",function(request,response){
    var id = request.params.id;
    var id_categoria = request.fields.id_categoria;
    var nombre_categoria = request.fields.nombre_categoria;
    var descripcion_categoria = request.fields.descripcion_categoria;
    var detalles_categoria = request.fields.detalles_categoria;
    //console.log(id);
    //console.log(id_categoria);
    //console.log(nombre_categoria);
    //console.log(descripcion_categoria);
    //console.log(detalles_categoria);

    var consulta = "UPDATE dbo.Categoria SET NombreCategoria ='"+nombre_categoria+"', DescripcionCategoria = '"+descripcion_categoria+"',DetallesCategoria = '"+detalles_categoria+"' WHERE CategoriaID = '"+id+"'";

    //console.log(consulta);
    /* */
    var request = new Connect.Request();

    request.query(consulta,function (err, recordset) {
        if (err){
            console.log(err);
        }else{
            //console.log(recordset.recordset);
            //console.log(recordset.recordset[0].NombreCategoria);
            response.render("appweb/index.pug");
        }
    });
    /* */
});

module.exports = router;