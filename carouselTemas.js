var carouselTemas  = function(id,datos){
    (function(_this){
        _this.datos = datos;
        _this.id = id;
        _this.div = document.createElement("div");
        _this.ul = document.createElement("ul");
        _this.li = document.createElement("li");
        return _this;
    })(this);

    this.render = function(){
        if(document.getElementById(this.id)){
            this.html()
        } else {
            throw "El elemento con el ID: "+ this.id +" no existe";
        }
    }
    this.html = function(){
        this.mainContainer = this.div.cloneNode(false);
            this.mainContainer.className = "container-fluid"
            this.mainContainer.style.border = "1px solid";

        this.divEncabezado = this.div.cloneNode(false);
            this.divEncabezado.className = "row";
            this.divEncabezado.style.border = "1px solid yellow";
            
        this.divContenido = this.div.cloneNode(false);
            this.divContenido.className = "row carousel-temas-contenido";
            this.divContenido.style.border = "1px solid gray";
            this.divContenido.innerHTML = "Contenido";

        this.mainContainer.append(this.divEncabezado)
        this.mainContainer.append(this.divContenido);
        document.getElementById(this.id).append(this.mainContainer);

        // crea el encabezado y sus elementos principales
        this.btnAnt = this.div.cloneNode(false);
            this.btnAnt.className = "col-md-2 col-sm-2 col-xs-2 carousel-temas-ant";
            this.btnAnt.innerHTML = "Prev";
            this.btnAnt.style.border = "1px solid blue";
            
        this.btnSig = this.btnAnt.cloneNode(false);
            this.btnSig.className = "col-md-2 col-sm-2 col-xs-2 carousel-temas-sig";
            this.btnSig.innerHTML = "Next";
            this.btnSig.style.border = "1px solid blue";
        
        this.divOpciones = this.div.cloneNode(false);
            this.divOpciones.className = "col-md-8 col-sm-8 col-xs-8 carousel-temas-opciones"
            this.divOpciones.style.overflowX = "scroll";

            this.divEncabezado.append(this.btnAnt)
            this.divEncabezado.append(this.divOpciones)
            this.divEncabezado.append(this.btnSig)

        this.agregaDatos()


    }
    this.agregaDatos = function(){
        var tDatos = this.datos.length;
        var aDatos = this.datos;
        console.log(this.datos);

        //Encabezado opciones   
        var Ul = this.ul.cloneNode(false);
            Ul.style.padding = "0";
            Ul.style.listStyle = "none";
            // Ul.style.overflowX = "hidden"
            Ul.style.width = (tDatos * (100 + 8)) + "px"

        this.divOpciones.append(Ul);
        for(var i = 0; i < tDatos; i++){
            var li = this.li.cloneNode(false);
            var divTexto = this.div.cloneNode(false);
            divTexto.innerHTML = aDatos[i].tema
            li.id = "liTema_"+aDatos[i].tema_id
            li.style.display = "inline-block";
            li.style.valing = "middle";
            li.style.margin = "0 4px";
            li.style.width = "100px";
            li.style.backgroundColor = "#f1f1f1";
            li.append(divTexto);
            Ul.append(li);
        }

        
    }
}