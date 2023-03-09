const broughtEnd = ( event ) => {

	const ev = event.target;
	const parent = ev.parentElement;
	const p = parent.parentElement;
	console.log( p)

	return p.classList.add("line")

}

const deleteTr = ( event ) => {
	const ev = event.target;
	const parent = ev.parentElement;
	const p = parent.parentElement;
 
  return p.remove()
}

export {
  broughtEnd,
  deleteTr
}