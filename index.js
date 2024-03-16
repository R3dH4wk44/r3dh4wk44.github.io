window.onload = () => {

    function noAprendido(){
        window.alert('Todavía no me has enseñado como funciona esto :(');
        console.log('si')
    }

     const buttons = document.querySelectorAll('.buttonChart');

     buttons.forEach(button => {
        button.addEventListener('click',noAprendido);
        
     });


     function fetchJSON(){
        
        fetch("./src/json/productos.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error (` Error HTTP! Estatus: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                var productosJSON = JSON.parse(data);
                console.log(data);
             })
             .catch((error) => 
                       console.error("Unable to fetch data:", error));
        }

        fetchJSON();
     }
     


