function solicitarUsuario() {
   
    let usuario = prompt ("Ingrese su nombre");

        while (!usuario ) {
        alert ( "Los datos soliciatados son obligatorios")
        usuario = prompt ("Ingrese su nombre")
    
} 
}

solicitarUsuario();

function constatarMayoriaDeEdad(){
    let edad = confirm("¿Eres mayor de 18 años?");

    if (edad == true) {
         alert( "bienvenido a nuestra Tienda"); 
    } else {
        alert( "No estas autorizado a navegar por nuestra tienda"); 
        
        alert ("Gracias por visitar nuestra tienda")


    }
   
    
    
}
 

constatarMayoriaDeEdad();


const productos = [
        //Aperitivos
        {
            id:"aperitivos01",
            titulo: "Aperitivo 01",
            imagen: "./img/aperitivo/01.jpg",
            categoria: {
                nombre: "Aperitivos",
                id: "aperitivos"
    
            },
            precio: 706
    
        },
    
        {
            id:"aperitivos02",
            titulo: "Aperitivo 02",
            imagen: "./img/aperitivo/02.jpg",
            categoria: {
                nombre: "Aperitivos",
                id: "aperitivos"
    
            },
            precio: 1020
    
        },
        {
            id:"aperitivos03",
            titulo: "Aperitivo 03",
            imagen: "./img/aperitivo/03.jpg",
            categoria: {
                nombre: "Aperitivos",
                id: "aperitivos"
    
            },
            precio: 1780
    
        },

        {
            id:"aperitivos04",
            titulo: "Aperitivo 04",
            imagen: "./img/aperitivo/04.jpg",
            categoria: {
                nombre: "Aperitivos",
                id: "aperitivos"
    
            },
            precio: 1780
    
        },

     
        //Vinos y Espumantes
        
        {
            id:"vinosyespumantes02",
            titulo: "Vinos y Espumantes 02",
            imagen: "./img/vinosyespumantes/02.jpg",
            categoria: {
                nombre: "Vinos y Espumantes",
                id: "vinosyespumantes"
    
            },
            precio: 1920
    
        },  
        {
            id:"vinosyespumantes03",
            titulo: "Vinos y Espumantes 03",
            imagen: "./img/vinosyespumantes/02.jpg",
            categoria: {
                nombre: "Vinos y Espumantes",
                id: "vinosyespumantes"
    
            },
            precio: 1920
    
        },  

         //spirits
        
         {
            id:"spirits01",
            titulo: "Spirit 01",
            imagen: "./img/spirits/01.jpg",
            categoria: {
                nombre: "Spirits",
                id: "spirits"
    
            },
            precio: 6510
    
        },   
    
        {
            id:"spirit02",
            titulo: "Spirit 02",
            imagen: "./img/spirits/02.jpg",
            categoria: {
                nombre: "Spirits",
                id: "spirits"
    
            },
            precio: 6083
    
        }, 
        {
            id:"spirit03",
            titulo: "Spirit 03",
            imagen: "./img/spirits/03.jpg",
            categoria: {
                nombre: "Spirits",
                id: "spirits"
    
            },
            precio: 6083
    
        }, 

             
        
        //listos para tomar
    
        {
            id:"listosparatomar01",
            titulo: "Listos para tomar 01",
            imagen: "./img/listosparatomar/01.jpg",
            categoria: {
                nombre: "Listos para tomar",
                id: "listosparatomar"
    
            },
            precio: 250
    
        },   
        {
            id:"listosparatomar02",
            titulo: "Listos para tomar 02",
            imagen: "./img/listosparatomar/02.jpg",
            categoria: {
                nombre: "Listos para tomar",
                id: "listosparatomar"
    
            },
            precio: 300
    
        },  
        {
            id:"listosparatomar03",
            titulo: "Listos para tomar 03",
            imagen: "./img/listosparatomar/03.jpg",
            categoria: {
                nombre: "Listos para tomar",
                id: "listosparatomar"
    
            },
            precio: 300
    
        },  
    
        
        
        // cervezas
        {
            id:"cervezas01",
            titulo: "Cerveza 01",
            imagen: "./img/cervezas/01.jpg",
            categoria: {
                nombre: "Cervezas",
                id: "cervezas"
    
            },
            precio: 706
    
        },
        {
            id:"cervezas02",
            titulo: "Cerveza 02",
            imagen: "./img/cervezas/02.jpg",
            categoria: {
                nombre: "Cervezas",
                id: "cervezas"
    
            },
            precio: 2334
    
        },
        {
            id:"cervezas03",
            titulo: "Cerveza 03",
            imagen: "./img/cervezas/03.jpg",
            categoria: { 
                nombre: "Cervezas",
                id: "cervezas"
    
            },
            precio: 2334
    
        },
    
    ];

    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal")

    function cargarProductos (productosElegidos){
        
        contenedorProductos.innerHTML = "";
        
        productosElegidos.forEach(producto => {
            
            const div = document.createElement ("div");
            div.classList.add("producto");
            div.innerHTML = `
            <img class="producto-imagen" src= "${producto.imagen}" alt="${producto.titulo}"> 
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div> 
            `;

            contenedorProductos.append(div);
        })
    }
  

    cargarProductos(productos);

    botonesCategorias.forEach(boton => {
        boton.addEventListener ("click", (e) => {
           
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add ("active");

            if (e.currentTarget.id !="todos") {
                const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;
                const productosBoton = productos.filter (producto => producto.categoria.id === e.currentTarget.id);
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos); 
            }
        
        })

    })
    
   

    




    