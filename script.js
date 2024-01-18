const wrapper =document.getElementsByClassName("box");
Array.from(wrapper).forEach((e) => {
    e.addEventListener("click",()=>{
        console.log(e.targrt)
    })
});
