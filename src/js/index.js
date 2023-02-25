const btAdd = document.querySelector(".btn");

const createBtnBought = ( ) => {
	const btn = document.createElement("button");
	btn.innerHTML = "brought";
	btn.classList.add("btn")
	return btn;
}

const createBtnFinished =  () => {

}


const createProduct = ( ) => {
	const product = document.querySelector(".input").value;
 	const container = document.querySelector(".box");
 	const list = document.querySelector(".box_list");

	const li = document.createElement("li");

	li.innerHTML = `<p>${product}</p>`;
	li.classList.add("box_item");
	li.append( createBtnBought());

	console.log( createBtnBought());
	return list.appendChild( li );
}



btAdd.addEventListener("click", ( e ) =>{
  e.preventDefault();
  createProduct()
} );
