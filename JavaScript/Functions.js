
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
            if(orden.productos.length>0){
                eliminarOrdenErronea()
            }
            console.log("LISTA DE ORDENES",ordenes);
            console.log("ORDEN REALIZADA:", orden);
          
}

function respuestaBtnRealizarOrdenes(){
    crearOrdenes();
}

//funcion para cambiar el estado de la orden

function cambiarDeEstado(orden){
    ordenSeleccionada=prompt("ingrese el id de la orden que desea cambiar su estado");
    
    let encontrarOrden=ordenes.find(orden=> orden.id==ordenSeleccionada)
    let estadoDelaOrden="Listo"
    encontrarOrden.estado=estadoDelaOrden
    console.log(encontrarOrden)
    cargarOrdenes();
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

//funcion para Eliminar ordenes mal ingresadas

function eliminarOrdenErronea(orden){
alert("Acaba de ingresar de manera erronea tu menu, procederemos a eliminarlo")

let index=ordenes.findIndex(function(orden){
    return orden.productos.length>0
})
let eliminarOrdenErronea2=index+1
ordenes.splice(index, eliminarOrdenErronea2)
}

//funcion para eliminar ordenes

function eliminarOrdenes(){
    ordenaEliminar=prompt("ingrese el numero de orden que desea eliminar");

    let index= ordenes.findIndex(function(orden){
        return orden.id==ordenaEliminar
    })

    console.log("EL INDEX DE SU ORDEN ES N° ",index)
    ordenes.splice(index, ordenaEliminar)
    cargarOrdenes();
}

function respuestaBtnFinOrden(){
    eliminarOrdenes();
}


