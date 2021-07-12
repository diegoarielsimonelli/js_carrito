const Productos = [
    { id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
    { id: 2, nombre: "Escalativa Catalana Vegana", precio: 900 },
    { id: 3, nombre: "Vegetales Asados", precio: 1500 },
    { id: 4, nombre: "Sushi Vegano", precio: 1200 },
    { id: 5, nombre: "Hamburgueza de Lentejas", precio: 950 },
    { id: 6, nombre: "Sandwich de milanesa de Seitán", precio: 920 }
    ];
    

for (const producto of Productos){
    let contenedor= document. createElement("div");
    contenedor.innerHTML=`<h3> ID: ${Productos.id}</h3>
                            <p> ${Productos.nombre}</p>
                            <b>$ ${Productos.precio}</b>
                            <button id="miBoton"> Agregar al Carrito</button>`;
    document.body.appendChild(contenedor);
}

let agregar;
let carrito=[{}]

function interactuar(){
    document.getElementById("miBoton")
    agregar=carrito.push(1)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}
function interactuar1(){
    document.getElementById("miBoton")
    agregar=carrito.push(2)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}
function interactuar2(){
    document.getElementById("miBoton")
    agregar=carrito.push(3)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}
function interactuar3(){
    document.getElementById("miBoton")
    agregar=carrito.push(4)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}
function interactuar4(){
    document.getElementById("miBoton")
    agregar=carrito.push(5)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}
function interactuar5(){
    document.getElementById("miBoton")
    agregar=carrito.push(6)
    alert("Se agregró el producto en el carrito");
    console.log(carrito)
}

let boton= document.getElementById("miBoton");
boton.addEventListener("click",comprar);

function comprar(){
    switch(agregar){
        case 1:
            interactuar
        case 2:
            interactuar1
        case 3:
            interactuar2
        case 4:
            interactuar3
        case 5:
            interactuar4
        case 6:
            interactuar5
            
    }
}