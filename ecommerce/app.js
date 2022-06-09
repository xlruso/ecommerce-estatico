const items = document.getElementById('items');
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})
items.addEventListener('click', e => {
    addCarrito(e);
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


//* Cuando hacemos click en el boton, mando todo el elemento a setCarrito

const addCarrito = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('btn'));
    if(e.target.classList.contains('btn')) {
        setCarrito(e.target.parentElement);
    }
  e.stopPropagation();
}

//* Capturar elementos de addCarrito

const setCarrito = objeto => {
    //console.log(objeto)
    const producto = {
        id: 1, // aca tengo que buscar la forma de que tome el data-id del json
        //title: aca tengo que buscar la forma de que tome el title del json
        //precio: aca tengo que buscar la forma de que tome el precio del json o del html
        cantidad: 1
    }
    console.log(producto)
}