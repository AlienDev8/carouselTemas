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
            // this.mainContainer.style.border = "1px solid";

        this.divEncabezado = this.div.cloneNode(false);
            this.divEncabezado.className = "row";
            this.divEncabezado.style.height = "40px";
            
        this.divContenido = this.div.cloneNode(false);
            this.divContenido.className = "row carousel-temas-contenido";
            this.divContenido.style.border = "1px solid gray";
            this.divContenido.innerHTML = "Contenido";

        this.mainContainer.append(this.divEncabezado)
        this.mainContainer.append(this.divContenido);
        document.getElementById(this.id).append(this.mainContainer);

        // crea el encabezado y sus elementos principales
        this.btnAnt = this.div.cloneNode(false);
            this.btnAnt.className = "col-md-1 col-sm-1 col-xs-1 carousel-temas-ant";
            this.btnAnt.innerHTML = "Prev";
            this.btnAnt.style.textAlign = "center";
            this.btnAnt.style.paddingTop = "10px";
            this.btnAnt.style.backgroundColor = "gray";
            this.btnAnt.style.height = "40px";
            this.btnAnt.style.cursor = "pointer";
            this.btnAnt.addEventListener("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                _this.moverScrolll("prev");
            }, false);
            
            this.btnSig = this.btnAnt.cloneNode(false);
            this.btnSig.className = "col-md-1 col-sm-1 col-xs-1 carousel-temas-sig";
            this.btnSig.innerHTML = "Next";
            this.btnSig.style.textAlign = "center";
            this.btnSig.style.paddingTop = "10px";
            this.btnSig.style.backgroundColor = "gray";
            this.btnSig.style.height = "40px";
             this.btnSig.style.cursor = "pointer";
            this.btnSig.addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    _this.moverScrolll("next");
            }, false);
        
        this.divOpciones = this.div.cloneNode(false);
            this.divOpciones.className = "col-md-10 col-sm-10 col-xs-10 carousel-temas-opciones"
            // this.divOpciones.style.overflowX = "auto";
            this.divOpciones.style.padding = "0";
            // this.divOpciones.style.height = "40px";

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
            Ul.style.marginBottom = "0px";
            Ul.style.listStyle = "none";
            // Ul.style.overflowX = "hidden"
            Ul.style.width = (tDatos * (150 + 4)) + "px"

        this.divOpciones.append(Ul);
        for(var i = 0; i < tDatos; i++){
            var li = this.li.cloneNode(false);
            var divTexto = this.div.cloneNode(false);
            divTexto.style.textAlign = "center";            
            // divTexto.style.verticalAlign = "top"; 
            // divTexto.style.height = "40px"; 
            // divTexto.style.width = "150px"; 
            divTexto.style.padding = "4px";             
            // divTexto.style.backgroundColor = "#cdcdcd";
            divTexto.innerHTML = aDatos[i].tema

            li.id = "liTema_"+aDatos[i].tema_id
            li.style.display = "inline-block";
            li.style.verticalAlign = "top";
            li.style.margin = "0 2px";
            li.style.lineHeight = "16px";
            li.style.borderRadius = "4px";
            li.style.width = "150px";
            li.style.height = "40px";
            li.style.backgroundColor = "#dcdcdc";
            li.append(divTexto);
            Ul.append(li);
        }

        
    }
}