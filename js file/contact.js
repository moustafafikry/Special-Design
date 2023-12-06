let navbarToggler = document.querySelector(".navbar-toggler"); 

navbarToggler.onclick = function () {

    navbarToggler.classList.toggle("active");

    let linksInside = document.querySelector(".links-inside");
    
    if (navbarToggler.classList.contains("active")) {

            linksInside.classList.remove("none");

    } else {

        linksInside.classList.add("none");

    }

}

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

// move page animation 

document.querySelectorAll("header .container ul li a").forEach(a => {

    a.addEventListener("click", (e) => {

        e.preventDefault();

        
        if (e.target.dataset.link === "Service") {
            
            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/services.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Products") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/products.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "About") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/master.html"

            },1000)

        }

    })

})

document.querySelectorAll("header .container .links-inside li a").forEach(a => {

    a.addEventListener("click", (e) => {

        e.preventDefault();

        if (e.target.dataset.link === "Serivce") {
            
            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/services.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "About") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Products") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/products.html"

            },1000)

        }

    })

})

let Emails = /^(\w{8,20})((\d{3})?)@gmail.(com|org|net)$/ig; // 8 - 3 =>   start with minmim 5 character 
let Names = /^(\w{4,20})((\d{1,3})?)/ig;
let Phones = /01(0|1|2)\d{8}$/ig;
let passwords = /\w{8,}((\d+)?)/ig;

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let textarea = document.getElementById("textarea");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {

    e.preventDefault();

    if (email.value.match(Emails) && name.value.match(Names) && phone.value.match(Phones) && password.value.match(passwords)) {

        document.querySelector(".infoform .name .value").innerHTML = name.value;
        document.querySelector(".infoform .phone .value").innerHTML = phone.value;
        document.querySelector(".infoform .email .value").innerHTML = email.value;
        document.querySelector(".infoform .password .value").innerHTML = "********";

        localStorage.setItem("name", name.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        if (textarea.value !== "") {

            localStorage.setItem("message", textarea.value);

        }

        name.value = "";
        phone.value = "";
        email.value = "";
        password.value = "";
        textarea.value = "";

        document.querySelector(".infoform").classList.add("open");

    }
    
})

document.querySelectorAll(".saveinfo span").forEach(span => {
    
    span.addEventListener("click", () => {

        if (span.dataset.status == "cansel") {
    
            document.querySelector(".infoform").classList.remove("open");

            localStorage.removeItem("name");
            localStorage.removeItem("phone");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("message");
    
        } else {

            document.querySelector(".infoform").classList.remove("open");

        }

    });

})
