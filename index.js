window.onload = () => {

    //Declaraciones de variables necesarias

        //Login

    var modalLogin = document.getElementById('modalLogin');
    let buttonLogin= document.getElementById('loginButton');

    //Event Listeners

    buttonLogin.addEventListener('click', login);


    //Funciones

    function login(){
        modalLogin.setAttribute('style', 'display:block');
        console.log("Estoy Aquí")
    }

}