
//funcion para crear las ordenes.

function crearOrdenes(){
    let cosasParaOrdenar="";

    let productosDelaOrden=[]

    while(cosasParaOrdenar!=="FIN"){
        cosasParaOrdenar=prompt("Escriba el num del platillo y cuando haya finalizado escriba !FIN para terminar su pedido");
        let producto=menu.find(producto=>producto.id==cosasParaOrdenar);
        if(producto){
            
            productosDelaOrden.push(producto);
        }
    }
        let estadoDelaOrden="En Proceso"
        let orden={id:ordenes.length+1, 
            productos:productosDelaOrden,
            estado:estadoDelaOrden,}
           
    ordenes.push(orden);
    cargarOrdenes();
    console.log(ordenes);
    console.log(orden);
}

function respuestaBtnRealizarOrdenes(){
    crearOrdenes();
}

//funcion para cambiar el estado de la orden

function cambiarDeEstado(orden){
    ordenes=[]
    orden
    console.log(ordenes)
    }



//funcion para calcular precio

function calcularPrecio(productosDelaOrden){
    let precio=0;
    productosDelaOrden.forEach(producto=>precio+=producto.precio);
    return precio;
}

//funcion para obtener productos

function calcularOrden(productosDelaOrden){
    let productos="";
    productosDelaOrden.forEach(producto=>productos+=producto.nombre+", ");
    return productos
}
function respuestaBtnCambiarEstado(){
    cambiarDeEstado();
}




