window.onload = () => {

    function noAprendido(){
        window.alert('Todavía no me has enseñado como funciona esto :(');
        console.log('si')
    }

     const buttons = document.querySelectorAll('.buttonChart');

     buttons.forEach(button => {
        button.addEventListener('click',noAprendido);
        console.log(button);
     });
}