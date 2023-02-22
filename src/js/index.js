const btAdd = document.querySelector(".btn");


const createProduct = ( ) => {
	const product = document.querySelector(".input").value;
 	const container = document.querySelector(".box");
 	const list = document.querySelector(".box_list");

	const li = document.createElement("li");

	li.innerHTML = `<p>${product}</p>`;

	return list.appendChild( li );
 
}

btAdd.addEventListener("click", ( e ) =>{
  e.preventDefault();
  createProduct()
  
} );
