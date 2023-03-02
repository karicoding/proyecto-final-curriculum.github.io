
// Función para la animación de las barras de progreso - sección "Habilidades"
  function htmlmove() {
    var elem = document.getElementById("htmlBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function cssmove() {
    var elem = document.getElementById("cssBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function javascriptmove() {
    var elem = document.getElementById("javascriptBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 35) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function bootmove() {
    var elem = document.getElementById("bootBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function excelmove() {
    var elem = document.getElementById("excelBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function comumove() {
    var elem = document.getElementById("comuBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function equipomove() {
    var elem = document.getElementById("equipoBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function automove() {
    var elem = document.getElementById("autoBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function aprendemove() {
    var elem = document.getElementById("aprendeBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 55) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function multimove() {
    var elem = document.getElementById("multiBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function inglesmove() {
    var elem = document.getElementById("inglesBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function alemanmove() {
    var elem = document.getElementById("alemanBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }


// Función para la validación del formulario - sección "Contacto"
  function validar() {
    var form = document.form;
    
    if(form.nombre.value==0) {
      alert("El campo NOMBRE está vacío");
      form.nombre.value="";
      form.nombre.focus();
      return false;
    }    

    if(form.correo.value==0) {
      alert("El campo CORREO ELECTRONICO está vacío");
      form.correo.value="";
      form.correo.focus();
      return false;
    } 

    if(form.telefono.value==0) {
      alert("El campo TELEFONO está vacío");
      form.telefono.value="";
      form.telefono.focus();
      return false;
    } 

    if(form.mensaje.value==0) {
      alert("El campo MENSAJE está vacío");
      form.mensaje.value="";
      form.mensaje.focus();
      return false;
    } 

    alert("SU MENSAJE FUE ENVIADO CON EXITO");
    form.submit();
}
