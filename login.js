//////////////LOGIN///////////////////////////////////////////////////////////////
document.getElementById('login').addEventListener('submit', (e)=>{// la e indica que es un event.preventDefault() y se usa una funcion flecha
    //se optiene el form registro
    //se uso un btn submit por eso se scrribio event.preventDefault() y (event)
  e.preventDefault();
 //const login = document.getElementById("login");
 //login.onclick = (e) => {
 //e.preventDefault();
  const loCorreo = document.getElementById("usernameLo").value;
  const loPassword = document.getElementById("passwordLo").value;

  var User = JSON.parse(localStorage.getItem('Users')) || [];// se le llamo a la key del local storage users tambien//se creo un array llmado users //aun no entiendo porque el [],es sobre algo de maej de excepciones// aqui se esta relizando una funcion flecha en un let
  const userExist= User.find(user => user.correo === loCorreo && user.password === loPassword)

  if (loCorreo.trim() && loPassword.trim()) {

    var User = JSON.parse(localStorage.getItem('Users')) || [];// se le llamo a la key del local storage users tambien//se creo un array llmado users //aun no entiendo porque el [],es sobre algo de maej de excepciones// aqui se esta relizando una funcion flecha en un let
    const userExist= User.find(user => user.correo === loCorreo && user.password === loPassword)

    if (!userExist) {
      
      alert('correo o contraseña incorrecta')

    }else{

      alert('iniciando, hi ' + loCorreo)
      window.location.href = "index.html";
      
    }

  } else {

    alert("Input field has no value");
  }
})