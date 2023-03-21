const showToast = () => {
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  let error = false; // variable para verificar si hay algún error en los campos

  // validación del campo username
  if (username.value.trim().length < 5) {
    username.classList.add("error"); // añadir la clase "error" al campo
    error = true; // hay un error en los campos
  } else {
    username.classList.remove("error"); // remover la clase "error" del campo
  }

  // validación del campo email
  if (!email.value.trim().includes("@")) {
    email.classList.add("error"); // añadir la clase "error" al campo
    error = true; // hay un error en los campos
  } else {
    email.classList.remove("error"); // remover la clase "error" del campo
  }

  // validación del campo password
  if (!/[A-Z]/.test(password.value.trim())) {
    password.classList.add("error"); // añadir la clase "error" al campo
    error = true; // hay un error en los campos
  } else {
    password.classList.remove("error"); // remover la clase "error" del campo
  }

  if (!error) { // si no hay errores en los campos
    // guardar información en el LocalStorage
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("email", email.value.trim());
    localStorage.setItem("password", password.value.trim());

    Swal.fire({
      html: '<div style="font-size: 20px; font-weight: bold; text-align: center; margin-top: -10%">Registro exitoso</div>' +
        '<div style="font-size: 14px; text-align: center; margin-top: 4%">Muchas gracias por formar parte de nuestra comunidad #TodoCamisetasShop!</div>',
      icon: "success",
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      customClass: {
        container: 'my-swal-alert',
      },
    });
    
  } else { // si hay errores en los campos
    Swal.fire({
      html: '<div style="font-size: 20px; font-weight: bold; text-align: center; margin-top: -13%">Uy!</div>' +
      '<div style="font-size: 14px; text-align: center; margin-top: 4%">Por favor, revisa los datos ingresados.</div>',
    icon: "error",
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      customClass: {
        container: 'my-swal-alert',
      },
    });
  }
}


