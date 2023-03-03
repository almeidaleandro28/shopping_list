const btAdd = document.querySelector(".btn");

const createBtnBought = ( ) => {
	const btn = document.createElement("button");
	btn.innerHTML = "brought";
	btn.classList.add("btn")
	return btn;
}

const createBtndelete=  () => {
	const btn = document.createElement("button");
	btn.innerHTML = "delete";
	btn.classList.add("btn");

	return btn;
}


const createProduct = ( ) => {
	const product = document.querySelector(".input").value;
 	const container = document.querySelector(".box");
 	const list = document.querySelector(".box_list");
	const containerButton = document.createElement("div");

	const li = document.createElement("li");

	containerButton.classList.add("buttons")
	containerButton.append( createBtnBought())
	containerButton.append( createBtndelete())

	li.innerHTML = `<div class="product">${product}</div>`;
	li.append( containerButton)


	
	return list.append( li );

}



btAdd.addEventListener("click", ( e ) =>{
  e.preventDefault();
  createProduct()
} );
