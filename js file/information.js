
document.querySelectorAll(".pricing .plans .plan .foot a").forEach(a => {

    a.addEventListener("click", () => {

        document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/products.html"
                
            },1000)

    })

})

document.querySelector(".contact-link").addEventListener("click", () => {

    document.querySelector(".movePageAnimation").classList.add("open");
            
    setInterval(() => {
        
        window.location = "../html file/contact.html"
        
    },1000)

})

const colorsLi = document.querySelectorAll(".colors-list li");

let mainColors = localStorage.getItem("main-color");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        colorsLi.forEach(li => {
            
            li.classList.remove("active");

            e.currentTarget.classList.add("active");

            localStorage.setItem("main-color", e.target.dataset.color);
            
            document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));
            
        })
        
    })
    
})

if (mainColors !== null) {

    document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === localStorage.getItem("main-color")) {

            element.classList.add("active");

        }
        
    })

}

document.querySelector(".pricing .main-heading span").addEventListener("click", (e) => {

    document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html";
                
            },1000)

})