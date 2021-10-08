var navToggler=document.querySelectorAll("#brand img")[1];
var navbar=document.querySelector("nav div");
const navToggle=()=>{
				if (navbar.style.display=="none"|| window.getComputedStyle(navbar). display=="none"){
				navbar.style.display="block";
				navToggler.src="images/icon-close.svg"}
				else {
				navbar.style.display="none";
				navToggler.src="images/icon-hamburger.svg"	
				}
}
navToggler.addEventListener("click",navToggle);

var dropdownBtns=document.querySelectorAll("li .nav-link");
dropdownBtns.forEach(btn=>{
     const toggle=()=>{
     let nextElm=btn.nextElementSibling;
     	let status=window.getComputedStyle(nextElm). display|| nextElm.style.display;
     				for (let i = 0; i < dropdownBtns.length; i++) {
 dropdownBtns[i].classList.remove("active"); dropdownBtns[i].nextElementSibling.classList.remove("active");
}
if(status=="none"){nextElm.classList.add("active");
btn.classList.add("active")} else nextElm.classList.remove("active");
     	}
				btn.addEventListener("click", toggle);
});
