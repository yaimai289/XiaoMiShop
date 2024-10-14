// 切换banner内内容
const contentBoxCollection = document.getElementsByClassName("content-box");

for (let contentBox of contentBoxCollection) {
    const titleBox = contentBox.getElementsByClassName("title-box")[0];
    const itemBoxCollection = contentBox.getElementsByClassName("item-box");

    if (itemBoxCollection.length > 1) {
        const liCollection = titleBox.getElementsByTagName("li");

        for (let li of liCollection) {
            li.addEventListener("mouseover", () => {
                const lis = li.parentNode.children;
                for (let liElse of lis) {
                    liElse.style.color = "#424242";
                    liElse.style.borderBottom = "2px solid rgba(0, 0, 0, 0)";
                }
                li.style.color = "#ff6700";
                li.style.borderBottom = "2px solid #ff6700";

                const itemBoxes = li.closest(".content-box").getElementsByClassName("item-box");
                for (let itemBoxElse of itemBoxes) {
                    itemBoxElse.style.height = "0px";
                }

                const itemBox = li.closest(".content-box").getElementsByClassName(`item-box ${li.className}`)[0];
                if (itemBox) {
                    itemBox.style.height = "614px";
                }
            });
        }
    }
}


// 轮播图
let slideIndex = 0;
const slides = Array.from(document.getElementsByClassName("carousel-slide"));
const dots = Array.from(document.getElementsByClassName("dot-button"));
let isCooldown = false;

function showSlide(index) {
    if (isCooldown) return;
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => (slide.style.opacity = 0));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.opacity = 1;
    dots[slideIndex].classList.add("active");

    isCooldown = true;
    setTimeout(() => {
        isCooldown = false;
    }, 1500);
    return;
}

document.getElementsByClassName("carousel-prev")[0].addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.getElementsByClassName("carousel-next")[0].addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});


showSlide(slideIndex);

setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000);


// 侧边工具栏
const sideTools = document.getElementsByClassName("sidetools")[0];
const toTopButton = document.getElementsByClassName('to-top')[0];

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        sideTools.style.height = "550px";
        toTopButton.style.height = "90px";
        toTopButton.style.marginTop = "10px";
    } else {
        sideTools.style.height = "450px";
        toTopButton.style.height = "0px";
        toTopButton.style.marginTop = "0px";
    }
};

toTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
