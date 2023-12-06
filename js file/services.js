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

document.querySelectorAll("header .container ul li a").forEach(a => {

    a.addEventListener("click", (e) => {
        
        e.preventDefault();
        
        if (e.target.dataset.link === "About") {
            
            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Products") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/products.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Contact") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/contact.html"

            },1000)

        }

    })

})

document.querySelectorAll("header .container .links-inside li a").forEach(a => {

    a.addEventListener("click", (e) => {

        e.preventDefault();
        
        if (e.target.dataset.link === "About") {
            
            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Products") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/products.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Contact") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/contact.html"

            },1000)

        }

    })

})

document.querySelectorAll(".services .container .boxs .box .info span").forEach(span => {

    let classes = span.parentElement.parentElement.classList[1];

    span.dataset.name = classes;
    
    span.addEventListener("click", (e) => {

        let jsonObject = fetch("../json file/master.json")
        .then(response => response.json())
        .then(data => showInfo(data));

        function showInfo(data) {
            
            let ExitDiv = document.createElement("div");
            let ExitP = document.createElement("p")
            let ExitText = document.createTextNode("X");
            let paragraph = document.createElement("p");
            let details = document.createElement("div");
            ExitDiv.appendChild(ExitP);
            ExitP.appendChild(ExitText);
            details.appendChild(ExitDiv);
            details.appendChild(paragraph);
            details.classList.add("details")
            document.body.appendChild(details);
            document.querySelector(".overfolw").classList.add("open");
            document.querySelector(".details").classList.add("open");
            
            if (e.target.dataset.name == "Security") {
                
                let paragraphText = document.createTextNode(data.Security);
                details.dataset.name = "Security";
                paragraph.appendChild(paragraphText);
                
            }
            
            if (e.target.dataset.name == "FixingLssues") {

                let paragraphText = document.createTextNode(data.FixingLssues);
                details.dataset.name = "FixingLssues";
                paragraph.appendChild(paragraphText);
                
            }
            
            if (e.target.dataset.name == "Location") {

                let paragraphText = document.createTextNode(data.Location);
                paragraph.appendChild(paragraphText);
                details.dataset.name = "Location";
    
            }
            
            if (e.target.dataset.name == "Markting") {
    
                let paragraphText = document.createTextNode(data.Markting);
                paragraph.appendChild(paragraphText);
                details.dataset.name = "Markting";
    
            }
            
            if (span.dataset.name == "Coding") {
    
                let paragraphText = document.createTextNode(data.Coding);
                paragraph.appendChild(paragraphText);
                details.dataset.name = "Coding";

            }
            
            if (span.dataset.name == "Paints") {

                let paragraphText = document.createTextNode(data.Paints);
                paragraph.appendChild(paragraphText);
                details.dataset.name = "Paints";

            }
            
            document.querySelector(".details div p").onclick = () => {
            
                document.querySelector(".overfolw").classList.remove("open");
                document.querySelector(".details").classList.remove("open");
                document.querySelector(".details").remove();
                
            }
            
        document.onkeyup = function (e) {

            if (e.key === "Escape") {
                
                    document.querySelector(".overfolw").classList.remove("open");
                    document.querySelector(".details").classList.remove("open");
                    document.querySelector(".details").remove();
        
                }
            
            }

        }
        
    })
    
})
