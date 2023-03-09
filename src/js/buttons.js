const createBtnBought = ( fun) => {
	const btn = document.createElement("button");
	btn.innerHTML = "brought";
	btn.classList.add("btn")

  btn.addEventListener("click", fun );
  
	return btn;
}

const createBtndelete =  ( fun) => {
	const btn = document.createElement("button");
	btn.innerHTML = "delete";
	btn.classList.add("btn");

  btn.addEventListener("click", fun);

	return btn;
}

export {
  createBtnBought,
  createBtndelete
}