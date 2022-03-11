function init() {
    cargarOrdenes();
}

function cargarOrdenes(){
        const nodoOrdenes = document.getElementById("tablaDeOrdenes");

        nodoOrdenes.innerHTML=""

        const table = document.createElement("table");
        table.setAttribute("id","listaOrdenes");
        table.setAttribute("class","table table-bordered");

        table.innerHTML=`
        <thead>
                    <tr>
                        <th>N°</th>
                        <th>Precio</th>
                        <th>Orden</th>
                        <th>Estado</th>
                    </tr>
                </thead>`;

        const tbody= document.createElement("tbody");
        ordenes.forEach((productosDelaOrden)=>{
            const tr= document.createElement("tr");
            tr.innerHTML=`<td>${productosDelaOrden.id}</td>
                          <td>${calcularPrecio(productosDelaOrden.productos)}</td>
                          <td>${calcularOrden(productosDelaOrden.productos)}</td>
                          <td>${productosDelaOrden.estado}</td>`;
            tbody.appendChild(tr);
        });
    

        table.appendChild(tbody);
        nodoOrdenes.appendChild(table);

        const btnOrdenRealizada= document.getElementById("pedidoRealizadoBtn");
        btnOrdenRealizada.addEventListener("click", respuestaBtnCambiarEstado);
               
        const btnRealizarOrdenes = document.getElementById("realizarOrdenBtn");
        btnRealizarOrdenes.addEventListener("click", respuestaBtnRealizarOrdenes); 
        
        }





