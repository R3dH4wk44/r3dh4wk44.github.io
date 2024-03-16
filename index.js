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
                pintarProductos(data);
                console.log(data);
             })
             .catch((error) => {
                       console.error("Unable to fetch data:", error)});
        }


        fetchJSON();
        function pintarProductos(data){
            let padre = document.getElementById('gridProductos');

            let cadena = "";

            data.forEach(producto => {
                cadena += `
                <div class=" productGrid col bg-slate-100 mx-10 md:mx-0 shadow-md rounded-lg flex flex-col overflow-hidden" id="gridProductos">
                <div class="productImg rounded-full"><img src="${producto.imagen}" class="w-full h-48 object-cover" alt=""></div>
                <div class="titile py-5 px-2">
                    <span class="text-xl font-bold">${producto.titulo}</span>
                </div>
                <div class="review flex px-2 py-0 align-middle items-center">
                    <i class="fa-regular fa-star"></i>
                    <span class="font-medium">&nbsp; ${producto.estrellas}</span><span class="font-light">${producto.valoraciones}</span>
                </div>
                <div class="price flex py-5 px-2 items-center justify-between">
                    <span class="font-bold">${producto.precio} <b class="font-extrabold">€</b></span>
                    <button class="rounded-full bg-green-500 buttonChart px-4 py-2 mx-10"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
            `
            });

            padre.innerHTML = cadena;
        }
     }
