////////////////REGISTRO//////////////////////////////////////////////////////////

document.getElementById('registro').addEventListener('submit', (e)=>{// la e indica que es un event.preventDefault() y se usa una funcion flecha
 //se optiene el form registro
 //se uso un btn submit por eso se scrribio event.preventDefault() y (event)
    e.preventDefault();

    var reCorreo = document.getElementById('correo').value;
    var rePassword = document.getElementById('contrasena').value;    

    if (reCorreo.trim() &&  rePassword.trim()) {

        var User = JSON.parse(localStorage.getItem('Users')) || [];// se le llamo a la key del local storage users tambien//se creo un array llmado users //aun no entiendo porque el [],es sobre algo de maej de excepciones// aqui se esta relizando una funcion flecha en un let
        const userExist= User.find(user => user.correo === reCorreo)

        if (!userExist) { //si es diferente a ususrio existente

            User.push({ correo: reCorreo, password: rePassword });

            localStorage.setItem('Users', JSON.stringify(User));

            alert('usuario registrado exitosamente');

            window.location.href = "login.html";
        
        }else{
            alert ('el usuario ya existe')
        }

    }else{
        alert('complete los espacios vacios')
    }
})
//TE ADOROOOOOOOOOOOOOOOOOOOOOOOOOOOO te amo
