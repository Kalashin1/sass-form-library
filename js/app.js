

// CHECLBOX THE DONE SIGN 
function check(){

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="green"/></svg>`

    let beforeElement = Array.from(document.querySelectorAll('.checkbox'));

    beforeElement.forEach((item)=>{
		
		item.innerHTML+=svg;
	})
}

check()




