/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}
//Intl


//wep api
//Conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
    //Procesar la respuesta, y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON -> Data -> Renderizar info browser
    .then((responseJSON) => {
        const todosLosItems = [];
        responseJSON.data.forEach((item) => {

            /* const app = document.createElement("#app");
            app.className = "mt-10 grid grid-cols-2 gap-2" */

            //crear imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text-lg";

            //crear precio
            const price = document.createElement("div")
            price.textContent = formatPrice(item.price);
            price.className = "text-gray-600";

            //Creamos un contenedor el titulo y el precio
            const priceAndTitle = document.createElement("div");
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            //Metemos todo dentro de una trajeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);

            //Metemod todo dentro del contenedor principal
            const container = document.createElement("div");
            container.appendChild(card);

            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    });
