const wrapper =document.getElementsByClassName("box");
const ans =Array.from(document.getElementsByClassName("ans"));
const sign =document.getElementsByClassName("Sign");
for (let index = 0; index < wrapper.length; index++) {
    wrapper[index].addEventListener("click",()=>{
        ans[index].classList.toggle("active")
        sign[index].classList.toggle("activate")
        
    })
    
}
