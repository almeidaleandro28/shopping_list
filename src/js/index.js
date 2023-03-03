import { createBtnBought, createBtndelete } from "./buttons.js"

const btAdd = document.querySelector(".btn");

const broughtEnd = () => {
	return console.log( 'hello')
}

const deleteTr = () => {
	return console.log("deleted")
}



const createProduct = ( ) => {
	const product = document.querySelector(".input").value;
 	const container = document.querySelector(".box");
 	const list = document.querySelector(".box_list");
	const containerButton = document.createElement("div");

	const li = document.createElement("li");

	containerButton.classList.add("buttons")
	containerButton.append( createBtnBought( broughtEnd ) )
	containerButton.append( createBtndelete( deleteTr))

	li.innerHTML = `<div class="product">${product}</div>`;
	li.append( containerButton)

	return list.append( li );

}



btAdd.addEventListener("click", ( e ) =>{
  e.preventDefault();
  createProduct()
} );
