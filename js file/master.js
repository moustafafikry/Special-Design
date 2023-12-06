let navbarToggler = document.querySelector(".navbar-toggler");

let links = document.querySelector(".links-inside"); 

links.onclick = (e) => {

    e.stopPropagation();

}

navbarToggler.onclick = function (e) {

    e.stopPropagation();

    navbarToggler.classList.toggle("active");

    let linksInside = document.querySelector(".links-inside");
    
    if (navbarToggler.classList.contains("active")) {

            linksInside.classList.remove("none");

    } else {

        linksInside.classList.add("none");

    }

}

document.addEventListener("click", (e) => {

    if (e.target !== navbarToggler && e.target !== links) {

        if (!links.classList.contains("none")) {
            
            links.classList.toggle("none");

            navbarToggler.classList.toggle("active");

        }

    }

})

let buttonShowImges = document.querySelector(".introduction-text > span");

buttonShowImges.onclick = function () {

    let firstImg = document.querySelector(".first .first-img");

    firstImg.classList.toggle("move-left");

    let thecoundImg = document.querySelector(".thecound .first-img");

    thecoundImg.classList.toggle("move-right");

    buttonShowImges.classList.toggle("animate-left");

    buttonShowImges.classList.toggle("animate-right");

    buttonShowImges.classList.toggle("animate-color");

}

// switch color 

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

document.querySelector(".toggle-settings i").onclick = function () {

    document.querySelector(".toggle-settings i").classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("show");

};

let firstImg = document.querySelector(".first-img");

let thecoundImg = document.querySelector(".thecound .first-img");
    
let imgsArray = ["../imgs/0.jpg", "../imgs/1.jpg", "../imgs/2.jpg", "../imgs/3.jpg", "../imgs/4.jpg", "../imgs/5.jpg", "../imgs/6.jpg", "../imgs/7.jpg", "../imgs/8.jpg", "../imgs/9.jpg", "../imgs/10.jpg", "../imgs/11.jpg", "../imgs/12.jpg", "../imgs/13.jpg", "../imgs/14.jpg", "../imgs/15.jpg", "../imgs/16.jpg", "../imgs/17.jpg", "../imgs/18.jpg", "../imgs/19.jpg", "../imgs/20.jpg", "../imgs/21.jpg"];

let thirdImg = document.querySelector(".our-skills .row .boxs .box img");

let imgsArray2 = ["../imgs/newRandom/0.jpg", "../imgs/newRandom/1.jpg", "../imgs/newRandom/2.jpg",  "../imgs/newRandom/3.jpg", "../imgs/newRandom/4.jpg", "../imgs/newRandom/5.jpg", "../imgs/newRandom/6.jpg", "../imgs/newRandom/7.jpg", "../imgs/newRandom/8.jpg", "../imgs/newRandom/9.jpg", "../imgs/newRandom/10.jpg"];

let ImgOption = true;

let ImgInterval;

function randomImgs() {

    if (ImgOption === true) {

        ImgInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            let randomNumberTwo = Math.floor(Math.random() * imgsArray.length);

            let randomNumberThree = Math.floor(Math.random() * imgsArray2.length);
            
            firstImg.lastElementChild.src = `../imgs/${randomNumber}.jpg`;
            
            thecoundImg.lastElementChild.src = `../imgs/${randomNumberTwo}.jpg`;

            thirdImg.src =  `../imgs/newRandom/${randomNumberThree}.jpg`;

            let animateElement = document.querySelectorAll(".our-skills .box .animation div");

            animateElement.forEach(ele => {
                
                ele.classList.add("animate");

            })
    
        }, 1000)

        let animateColumnShadow = document.querySelector(".column-shadow");

        animateColumnShadow.classList.add("animate");

        document.querySelector(".feature .animate").classList.add("open");
            
    }

}

const randombuttoms = document.querySelectorAll(".random-setting span");

let randomStatus = localStorage.getItem("random-status");

randombuttoms.forEach(span => {

    span.addEventListener("click", (e) => {

        randombuttoms.forEach(span => {
            
            span.classList.remove("active");

        })

        e.currentTarget.classList.add("active");

        if (e.target.dataset.random === "yes") {

            localStorage.setItem("random-status", true);

            ImgOption = true;

            randomImgs();

        } else {

            localStorage.setItem("random-status", false);

            ImgOption = false;

            clearInterval(ImgInterval);
            
            let animateElement = document.querySelectorAll(".our-skills .box .animation div");

            animateElement.forEach(ele => {
                
                ele.classList.remove("animate");

            })

            let animateColumnShadow = document.querySelector(".column-shadow");

            animateColumnShadow.classList.remove("animate");

            document.querySelector(".feature .animate").classList.remove("open");

        }
        
    })
    
})


if (randomStatus !== null) {

    if (randomStatus === "true") {

        ImgOption = true;

    } else {

        ImgOption = false;

    }

    randombuttoms.forEach(span => {

        span.classList.remove("active");
        
    })

    if (randomStatus === "true") {

        document.querySelector(".random-setting .yes").classList.add("active");

        ImgOption = true;

        randomImgs();

    } else {

        document.querySelector(".random-setting .no").classList.add("active");

    }

}

const carousel = document.querySelector(".wrapper .container .carousel");

const arrowBtns = document.querySelectorAll(".wrapper .container > i");

const firstCardWidth = carousel.querySelector(".cardd").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth  : firstCardWidth ;

    })

});

const dragStart = (e) => {

    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
    
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft- (e.pageX - startX);

}

const dragStop = () => {

    isDragging = false;
    carousel.classList.remove("dragging");

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

document.querySelectorAll(".cardd > span").forEach(span => {

    span.addEventListener("click", (e) => {

        document.querySelector(".movePageAnimation").classList.add("open");
            
        setInterval(() => {
            
            window.location = "../html file/information.html"
            
        },1000)

    })

})

window.onscroll = () => {

    let scrollTop = document.querySelector(".back-to-top");

    this.scrollY >= 500 ? scrollTop.classList.remove("hidden") : scrollTop.classList.add("hidden")

    document.querySelector(".back-to-top").addEventListener("click", () => {

        window.scrollTo ({

            top: 0,
            behavior: "smooth"

        })

    })

    if (this.scrollY >= 1250) {
        
        let spans = document.querySelectorAll(".our-skills .skills ul li span");

        spans.forEach(span => {

            let width = span.dataset.width;

            span.style.width = `${width}%`;

        })
    }

}

let jsonObject = fetch("../json file/master.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {

    document.querySelector(".boxs .box > .text").innerHTML = data.intro;

    document.getElementById("textOne").innerHTML = data.text;
    document.getElementById("textTwo").innerHTML = data.text2;
    let showInfo = document.querySelector(".show-info");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let spanText = document.createTextNode("name:")
    let span2 = document.createElement("span");
    let spanText2 = document.createTextNode(data.name)

    showInfo.appendChild(div);
    div.appendChild(span)
    div.appendChild(span2)
    span.appendChild(spanText);
    span2.appendChild(spanText2);

    let div2 = document.createElement("div");
    let span3 = document.createElement("span");
    let spanText3 = document.createTextNode("title:")
    let span4 = document.createElement("span");
    let spanText4 = document.createTextNode(data.title)

    showInfo.appendChild(div2);
    div2.appendChild(span3)
    div2.appendChild(span4)
    span3.appendChild(spanText3);
    span4.appendChild(spanText4);

    let divAge = document.createElement("div");
    let spanAge = document.createElement("span");
    let spanTextAge = document.createTextNode("age:")
    let spanAge2 = document.createElement("span");
    let spanTextAge2 = document.createTextNode(data.age)

    showInfo.appendChild(divAge);
    divAge.appendChild(spanAge)
    divAge.appendChild(spanAge2)
    spanAge.appendChild(spanTextAge);
    spanAge2.appendChild(spanTextAge2);

    let divSkills = document.createElement("div");
    let spanSkills = document.createElement("span");
    let spanTextSkills = document.createTextNode("skills:")
    let spanSkills2 = document.createElement("span");
    let spanTextSkills2 = document.createTextNode(data.skills)

    showInfo.appendChild(divSkills);
    divSkills.appendChild(spanSkills)
    divSkills.appendChild(spanSkills2)
    spanSkills.appendChild(spanTextSkills);
    spanSkills2.appendChild(spanTextSkills2);

    let divCountry = document.createElement("div");
    let spanCountry = document.createElement("span");
    let spanTextCountry = document.createTextNode("country:")
    let spanCountry2 = document.createElement("span");
    let spanTextCountry2 = document.createTextNode(data.country)

    showInfo.appendChild(divCountry);
    divCountry.appendChild(spanCountry)
    divCountry.appendChild(spanCountry2)
    spanCountry.appendChild(spanTextCountry);
    spanCountry2.appendChild(spanTextCountry2);

}

document.getElementById("infoButton").addEventListener("click", () => {

    document.querySelector(".show-info").classList.add("open");

    document.querySelector(".overfolw").classList.add("open");

    document.addEventListener("contextmenu", function (e) {

        e.preventDefault();

    })

})

document.onkeyup = function (e) {

    if (e.key === "Escape") {

        console.log("YES")

        document.querySelector(".show-info").classList.remove("open");

        document.querySelector(".overfolw").classList.remove("open");

    }
    
}

document.querySelector(".show-info i").addEventListener("click", () => {

    document.querySelector(".show-info").classList.remove("open");

    document.querySelector(".overfolw").classList.remove("open");

})

document.querySelectorAll(".gallery .container .row img").forEach(img => {
    
    img.addEventListener("click", (e) => {

        let showImg = document.createElement("div");
        let popupBox = document.createElement("div");
        let popupImg = document.createElement("img");
        let Exit = document.createElement("span");
        let ExitText = document.createTextNode("X");

        Exit.className = "close";

        Exit.appendChild(ExitText);

        showImg.appendChild(Exit);

        Exit.addEventListener("click", (e) => {

            document.querySelector(".overfolw").classList.remove("open");

            showImg.classList.remove("open");

        })

        document.onkeyup = function (e) {

            if (e.key === "Escape") {
                
                document.querySelector(".overfolw").classList.remove("open");

                showImg.classList.remove("open");
        
            }
            
        }
        
        document.querySelector(".overfolw").classList.add("open");

        if (img.alt !== null) {
        
            let h2 = document.createElement("h2");
            
            let alt = document.createTextNode(img.alt)
        
            h2.appendChild(alt);
        
            showImg.appendChild(h2);
            
        }
    
        showImg.classList.add("showImg");

        showImg.classList.add("open");

        document.body.appendChild(showImg);

        popupBox.className = "popupBox";

        popupImg.src = img.src;

        popupBox.appendChild(popupImg);

        showImg.appendChild(popupBox);

    })

})

let showBullet = document.querySelector(".settings-box .option-box .bullet-control .yes");

showBullet.addEventListener("click", () => {

    document.querySelector(".nav-bullet").classList.add("open");

})

let NotshowBullet = document.querySelector(".settings-box .option-box .bullet-control .no");

NotshowBullet.addEventListener("click", () => {

    document.querySelector(".nav-bullet").classList.remove("open");

})

let showAndHiddenBullet = document.querySelectorAll(".settings-box .option-box .bullet-control span");

showAndHiddenBullet.forEach(span => {

    span.addEventListener("click", (e) => {

        showAndHiddenBullet.forEach(span => {

            span.classList.remove("active");

            e.target.classList.add("active");

            localStorage.setItem("bullet-status", e.target.dataset.bullet);

        });

    });

});


let bulletStatus = localStorage.getItem("bullet-status");

if (bulletStatus !== null) {

    if (bulletStatus === "yes") {

        document.querySelector(".nav-bullet").classList.add("open");

    };
    
    showAndHiddenBullet.forEach(span => {
        
        span.classList.remove("active");

        if (span.dataset.bullet === bulletStatus) {

            span.classList.add("active");

        };

    });

};

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
            
        } else if (e.target.dataset.link === "Contact") {

            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/contact.html"

            },1000)

        }

    })

});

document.querySelectorAll("header .container .links-inside li a").forEach(a => {

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
            
        } else if (e.target.dataset.link === "Contact") {
            
            document.querySelector(".movePageAnimation").classList.add("open");

            setInterval(() => {

                window.location = "../html file/contact.html"

            },1000)

        }

    })

})

let pageChildren = document.querySelectorAll(".page > div");

let pageChildrenNumber = pageChildren.length;

for (let i = 1; i < pageChildrenNumber ; i++) {

    let navBullet = document.querySelector(".nav-bullet");

    let bullet = document.createElement("div");

    navBullet.appendChild(bullet);

    bullet.classList.add("bullet");

    bullet.dataset.section  = pageChildren[i].dataset.section;

    
}

let navBullet = document.querySelectorAll(".nav-bullet div");

navBullet.forEach(nav => {

    nav.addEventListener("click", (e) => {

        if (e.target.dataset.section === "wrapper") {

                window.scrollTo({

                    top: 800,
                    behavior: "smooth"

                })

        } else if (e.target.dataset.section === "our-skills") {

            // document.querySelector(".our-skills").scrollIntoView({ // diffrent way 

            //     behavior: "smooth"

            // })

            window.scrollTo({

                top: 1500,
                behavior: "smooth"

            })

        } else if (e.target.dataset.section === "gallery") {

            window.scrollTo({

                top: 2200,
                behavior: "smooth"

            })

        } else if (e.target.dataset.section === "timeline") {

            document.querySelector(".timeline").scrollIntoView({

                behavior: "smooth"

            })

        } else if (e.target.dataset.section === "feature") {

            window.scrollTo({

                top: 4100,
                behavior: "smooth"

            })

        } else if (e.target.dataset.section === "testimoials") {

            window.scrollTo({

                top: 4800,
                behavior: "smooth"

            })

        } else if (e.target.dataset.section === "Footer") {

            window.scrollTo({

                top: 4800,
                behavior: "smooth"

            })

        }

    })

})

let spans = document.querySelectorAll(".option-box .header-control span");

spans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.dataset.fixed == "yes") {

            document.querySelector(".header").classList.add("fixed");

        } else {

            document.querySelector(".header").classList.remove("fixed");

        }

        spans.forEach(span => {

            span.classList.remove("active");

            e.target.classList.add("active");

        })

        localStorage.setItem("Header-Fixed", e.target.dataset.fixed);

    })

})

let HeaderFixed = localStorage.getItem("Header-Fixed");

if (HeaderFixed !== null) {

    if (HeaderFixed == "yes") {

        document.querySelector(".header").classList.add("fixed");

    } else {

        document.querySelector(".header").classList.remove("fixed");

    }

    spans.forEach(span => {

        span.classList.remove("active");

        if (span.dataset.fixed == HeaderFixed) {

            span.classList.add("active");

        }

    })

}

// reset control

document.querySelector(".option-box .reset-control span").onclick = () => {

    localStorage.clear();
    
    window.location.reload();

}



