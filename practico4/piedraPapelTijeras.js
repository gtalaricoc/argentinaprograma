let jugada = {0: "piedra",1: "papel",2: "tijeras"};
  function obtenerJugadaComputadora(){
    let numeroAleatorio= Math.ceil(Math.random()*3);
    return jugada[numeroAleatorio]; 
  }
    
  function obtenerJugadaUsuario() {
    let jugadaUsuario = ("Ingresa tu jugada: piedra, papel o tijeras");
    if (!["piedra", "papel", "tijeras"].includes(jugadaUsuario)) {
      console.log("Jugada inválida. Inténtalo nuevamente.");
      return obtenerJugadaUsuario(); 
    }
    return jugadaUsuario;
  }
  
  function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora == jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora == "piedra" && jugadaUsuario == "tijeras") ||
      (jugadaComputadora == "tijeras" && jugadaUsuario == "papel") ||
      (jugadaComputadora == "papel" && jugadaUsuario == "piedra")
    ) {
      return "Gana la computadora";
    } else {
      return "Gana el usuario";
    }
  }
  
  function jugarPiedraPapelTijeras() {
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
  
    console.log("La computadora eligió: ${jugadaComputadora}.");
    console.log("El usuario eligió: ${jugadaUsuario}.");
    console.log("El resultado fue: ${resultado}.");
  }
  
  jugarPiedraPapelTijeras();
  