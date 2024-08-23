function cargarEncabezado(){
    fetch("/templates/encabezado-principal.html")
    .then(response => response.text())
    .then(data => {document.getElementById('caja-encabezado-principal').innerHTML = data })
    .catch(error => alert("Error cargando el encabezado", error));
}
cargarEncabezado();
