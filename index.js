document.getElementById('imagenperfiljs').onmouseover = function () {
    document.getElementById('imagenperfiljs').src= "imagenes/obb2.png"
  };
  
  document.getElementById('imagenperfiljs').onmouseout = function () {
    document.getElementById('imagenperfiljs').src= "imagenes/obb.png"
  };


  const imagentouch = document.getElementById('imagenperfiljs');

  imagentouch.ontouchstart = function() {
    imagentouch.src = 'imagenes/obb2.png';
  };
  
  imagentouch.ontouchend = function() {
    imagentouch.src = 'imagenes/obb.png';
  };