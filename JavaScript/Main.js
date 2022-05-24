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
        ordenes.map((orden=>{
            const tr= document.createElement("tr");
        tr.innerHTML=`<td>${orden.id}</td>
                      <td>${calcularPrecio(orden.productos)}</td>
                      <td>${calcularOrden(orden.productos)}</td>
                      <td>${orden.estado}</td>`;
        tbody.appendChild(tr);
        }));
    

        table.appendChild(tbody);
        nodoOrdenes.appendChild(table);

        const btnOrdenRealizada= document.getElementById("pedidoRealizadoBtn");
        btnOrdenRealizada.addEventListener("click", respuestaBtnCambiarEstado);
               
        const btnRealizarOrdenes = document.getElementById("realizarOrdenBtn");
        btnRealizarOrdenes.addEventListener("click", respuestaBtnRealizarOrdenes); 

        const btnFinalizarOrden = document.getElementById("finalizarOrdenBtn");
        btnFinalizarOrden.addEventListener("click", respuestaBtnFinOrden);        
        }





