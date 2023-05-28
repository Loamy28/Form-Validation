const form = document.querySelector("form"),
        subBtn = form.querySelector(".subBtn"),
        allInput = form.querySelectorAll(".first input");

    
subBtn.addEventListener("click", ()=>{
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');  
        }else{
            form.classList.remove('secActive');
        }
    })
})