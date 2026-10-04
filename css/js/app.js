document.getElementById("listaTurnos").innerHTML =
`
<div class="card">
🏠 Teletrabajo
<br>
15:00 - 23:00
</div>

<div class="card">
🏢 Oficina
<br>
15:00 - 23:00
</div>
`;

document.getElementById("contenedorStats").innerHTML =
`
<div class="card">
<h3>Estadísticas</h3>

<p>🏠 Teletrabajo: 10</p>
<p>🏢 Oficina: 8</p>
<p>👍 Libres: 11</p>
<p>✈️ Vacaciones: 2</p>

<p><b>Horas:</b> 143</p>
</div>
`;

function mostrarVista(id){

document.getElementById("turnos")
.classList.add("oculto");

document.getElementById("estadisticas")
.classList.add("oculto");

document.getElementById(id)
.classList.remove("oculto");

}
