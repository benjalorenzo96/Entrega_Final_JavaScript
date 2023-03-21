// Función que se ejecuta al hacer click en el botón de compra
function comprar() {
  // Obtener los valores de los inputs del formulario
  const nombre = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const domicilio = document.getElementById("adr").value;
  const localidad = document.getElementById("city").value;
  const titular = document.getElementById("cname").value;
  const numTarjeta = document.getElementById("ccnum").value;
  const fechaVencimiento = document.getElementById("expmonth").value;

  // Si alguno de los campos está vacío, mostrar alerta de error
  if (!nombre || !email || !domicilio || !localidad || !titular || !numTarjeta || !fechaVencimiento) {
    Swal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: 'Te olvidaste de completar un dato',
      background: '#f44336', // Cambia el color de fondo a rojo
      color: '#fff', // Cambia el color de texto a blanco
      toast: true, // Cambia el estilo a toast
      position: 'top-end', // Cambia la posición del toast
      showConfirmButton: false, // Oculta el botón de confirmación
      timer: 5000 // Cierra automáticamente después de 3 segundos
  })
  } else {
    // Si todos los campos están completos, mostrar alerta de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      text: 'Pero que viva el fútbol!',
      background: '#198d15', 
      color: '#fff'
    })
  }
}

// Asignar la función comprar() al botón de compra
const botonCompra = document.getElementById("btn");
botonCompra.addEventListener("click", comprar);


