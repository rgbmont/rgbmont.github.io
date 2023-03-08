document.getElementById('imagenperfiljs').onmouseover = function () {
    document.getElementById('imagenperfiljs').src= "imagenes/obb2.png"
  };
  
  document.getElementById('imagenperfiljs').onmouseout = function () {
    document.getElementById('imagenperfiljs').src= "imagenes/obb.png"
  };


  const imagenperfiltouch = document.getElementById('imagenperfiljs');

  imagenperfiltouch.ontouchstart = function() {
    imagen.src = 'imagenes/obb2.png';
  };
  
  imagenperfiltouch.ontouchend = function() {
    imagen.src = 'imagenes/obb.png';
  };