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
            
        } else if (e.target.dataset.link === "About") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html"
                
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
        
        if (e.target.dataset.link === "Service") {
            
            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/services.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "About") {

            document.querySelector(".movePageAnimation").classList.add("open");
            
            setInterval(() => {
                
                window.location = "../html file/master.html"
                
            },1000)
            
        } else if (e.target.dataset.link === "Contact") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/contact.html"

            },1000)

        }

    })

})

document.querySelectorAll(".products .up .left .spans .show").forEach(span => {

    span.addEventListener("click", (e) => {

        document.querySelector(".overfolw").classList.add("open");

        let img =  e.target.parentElement.parentElement.parentElement.children[0];
        let h2 = e.target.parentElement.parentElement.parentElement.children[1].innerHTML;
        let price = e.target.parentElement.parentElement.parentElement.children[2].children[0];
        let dataStars = e.target.parentElement.parentElement.parentElement.dataset.stars;
        let dataWatches = e.target.parentElement.parentElement.parentElement.dataset.watches;
        
        let maindiv = document.createElement("div");
        maindiv.classList.add("toggle");

        let exit = document.createElement("i");
        exit.classList.add("exit")
        exit.classList.add("fa-regular")
        exit.classList.add("fa-circle-xmark");

        exit.addEventListener("click", () => {

            maindiv.remove();
            
            document.querySelector(".overfolw").classList.remove("open");

        })

        let divimge = document.createElement("div")
        divimge = img.cloneNode(true);

        let heading = document.createElement("h2");
        let headingText = document.createTextNode(h2);
        heading.appendChild(headingText);

        let divI = document.createElement("div");
        divI.classList.add("stars");
        let ione = document.createElement("i");
        ione.classList.add("fa-solid");
        ione.classList.add("fa-star");
        divI.appendChild(ione)

        let itwo = document.createElement("i");
        itwo.classList.add("fa-solid");
        itwo.classList.add("fa-star");
        divI.appendChild(itwo)

        let ithree = document.createElement("i");
        ithree.classList.add("fa-solid");
        ithree.classList.add("fa-star");
        divI.appendChild(ithree)

        let ifour = document.createElement("i");
        ifour.classList.add("fa-solid");
        ifour.classList.add("fa-star");
        divI.appendChild(ifour)

        let ifive = document.createElement("i");
        ifive.classList.add("fa-solid");
        ifive.classList.add("fa-star");
        divI.appendChild(ifive);

        if (dataStars == 1) {

            ione.classList.add("c-orange");

        } else if (dataStars == 2) {

            ione.classList.add("c-orange");
            itwo.classList.add("c-orange");

        } else if (dataStars == 3) {

            ione.classList.add("c-orange");
            itwo.classList.add("c-orange");
            ithree.classList.add("c-orange");

        } else if (dataStars == 4) {

            ione.classList.add("c-orange");
            itwo.classList.add("c-orange");
            ithree.classList.add("c-orange");
            ifour.classList.add("c-orange");

        } else if (dataStars == 5) {

            ione.classList.add("c-orange");
            itwo.classList.add("c-orange");
            ithree.classList.add("c-orange");
            ifour.classList.add("c-orange");
            ifive.classList.add("c-orange");

        }

        let spans = document.createElement("div");
        spans.classList.add("last")

        let spanprice = document.createElement("span");
        spanprice = price.cloneNode(true);

        let span = document.createElement("span");
        span.classList.add("add-cards");
        let spanText= document.createTextNode(dataWatches);
        let spanicon = document.createElement("i")
        spanicon.classList.add("fa");
        spanicon.classList.add("fa-eye");
        span.appendChild(spanText);
        span.appendChild(spanicon);

        spans.appendChild(spanprice);
        spans.appendChild(span);

        maindiv.appendChild(exit);
        maindiv.appendChild(divimge);
        maindiv.appendChild(heading);
        maindiv.appendChild(divI);
        maindiv.appendChild(spans);
        document.body.appendChild(maindiv);

        
    })
    
})

let arrayTasks = [];

if (localStorage.getItem("tasks")) {
    
    arrayTasks = JSON.parse(localStorage.getItem("tasks"));
    
}

let Array1 = [];

let AddProducts = [];

document.querySelectorAll(".products .box .spans .add").forEach(span => {
    
    span.addEventListener("click", (e) => {

        e.stopPropagation();
        
        document.querySelector(".right p").classList.add("none");
        
        let totalPrice = document.querySelector(".right .totalPrice");
        let img =  e.target.parentElement.parentElement.parentElement.children[0];
        let price =  +e.target.parentElement.parentElement.children[0].dataset.price;
        let name = e.target.parentElement.parentElement.parentElement.dataset.name;

        if (!AddProducts.includes(name)) {
            
            AddProducts.push(name);
        
            addarrayTasks(name, price);
            
            addTasksToLocalstorag(arrayTasks);
            
            Array1.push(price);
            
            function calc(...numbers) {
                
                let result = parseInt(document.querySelector(".TotalNumberPrice").innerHTML);
                
                for(let i = 0; i < numbers.length; i++) {
                    
                    let total = result + numbers[i];
    
                    document.querySelector(".TotalNumberPrice").innerHTML = `${total} $`;
                    
                }
                
            } 
            
            calc(...Array1);
            
            let mainDiv = document.createElement("div");
            mainDiv.classList.add("main-Card");
    
            let divimge = document.createElement("div");
            divimge.classList.add("div-imge");
            divimge = img.cloneNode(true);
            mainDiv.appendChild(divimge);
    
            let DecrementAndIncrement = document.createElement("span");
            DecrementAndIncrement.classList.add("DecAndInc");
            let Inc = document.createElement("span");
            let Inctext = document.createTextNode("+");
            Inc.appendChild(Inctext);
            let Dec = document.createElement("span");
            Dec.classList.add("stop");
            let Dectext = document.createTextNode("-");
            Dec.appendChild(Dectext);
            DecrementAndIncrement.appendChild(Dec);
            DecrementAndIncrement.appendChild(Inc);
            mainDiv.appendChild(DecrementAndIncrement);
            
            let counter = document.createElement("span");
            counter.classList.add("counter");
            let counterText = document.createTextNode(1);
            counter.appendChild(counterText);
            mainDiv.appendChild(counter);
            let count = (parseInt (counter.innerHTML));
            
            let removeAndPriceDiv = document.createElement("div");
            removeAndPriceDiv.classList.add("removeAndPriceDiv");
            
            let spanPrice = document.createElement("span");
            spanPrice.classList.add("price");
            let spanPriceText =document.createTextNode(price + " " + `$`);
            spanPrice.appendChild(spanPriceText);
            removeAndPriceDiv.appendChild(spanPrice);
            
            let spanRemove = document.createElement("span");
            spanRemove.classList.add("remove");
            let spanRemoveText = document.createTextNode("Remove")
            spanRemove.appendChild(spanRemoveText);
            removeAndPriceDiv.appendChild(spanRemove);
            
            mainDiv.appendChild(removeAndPriceDiv); // price and remove spans
            totalPrice.before(mainDiv);
    
            mainDiv.setAttribute("data-price", parseInt (e.target.parentElement.parentElement.children[0].innerHTML));
            mainDiv.setAttribute("data-name", e.target.parentElement.parentElement.parentElement.dataset.name);
            
            Inc.addEventListener("click", (e) => {
                
                let dataPrice = e.target.parentElement.parentElement.dataset.price;
                
                if (count < 5) {
                    
                    count += 1;   
                    counter.innerHTML = count;
    
                    let yourSelf = parseInt(spanPrice.innerHTML);
    
                    let newPrice = yourSelf += +dataPrice;
    
                    spanPrice.innerHTML = `${newPrice} $`;
    
                    if (count == 5) {
    
                        Inc.classList.add("stop");
    
                    }
    
                    if (count > 1) {
    
                        Dec.classList.remove("stop");
    
                    }
    
                    let result = parseInt(document.querySelector(".TotalNumberPrice").innerHTML);
    
                    result += +dataPrice;
    
                    document.querySelector(".TotalNumberPrice").innerHTML = `${result} $`;

                }
                
            })
    
            Dec.addEventListener("click", (e) => {
                
                if (count > 1) {
                    
                    let dataPrice = e.target.parentElement.parentElement.dataset.price;
    
                    count -= 1;
    
                    counter.innerHTML = count;
    
                    let yourSelf = parseInt(spanPrice.innerHTML);
    
                    let newPrice = yourSelf -= +dataPrice;
    
                    spanPrice.innerHTML = `${newPrice} $`;
    
                    let result2 = parseInt(document.querySelector(".TotalNumberPrice").innerHTML);
    
                    result2 -= +dataPrice;
    
                    document.querySelector(".TotalNumberPrice").innerHTML = `${result2} $`;
    
                    Inc.classList.remove("stop");           
    
                }
    
                if (count == 1 ) {
    
                    Dec.classList.add("stop");
        
                }
    
            })

            spanRemove.onclick = function (e) {
    
                let name = e.target.parentElement.parentElement.dataset.name;
    
                let checkName = AddProducts.filter(function(element) {
    
                    return element != name;
    
                })
    
                AddProducts = checkName;
    
                let result2 = parseInt (document.querySelector(".TotalNumberPrice").innerHTML);
    
                let priceMinus = parseInt(e.target.previousElementSibling.innerHTML);
                
                e.target.parentElement.parentElement.remove();
    
                
                function  minus(...numbers) {
                    
                    result2 -= numbers;
                    
                    document.querySelector(".TotalNumberPrice").innerHTML = `${result2} $`;
                }
                
                minus(priceMinus);
    
                if (document.querySelector(".TotalNumberPrice").innerHTML == "0 $") {
    
                    document.querySelector(".right p").classList.remove("none");
    
                }

            }
        
        }
        
    })
    
})

function addarrayTasks(name, price) {

    const task = {

        id: Date.now(),
        title: name,
        price: price,
        completed: false,
        
    }

    arrayTasks.push(task);

}

function addTasksToLocalstorag(arrayTasks) {

    window.localStorage.setItem("tasks", JSON.stringify(arrayTasks));

}