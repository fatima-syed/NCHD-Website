//default carousel background 1
var imageIndex = 0;
showImage();

function showImage() {
    var i;
    var images = document.getElementsByClassName('bgimg');
    var dots = document.getElementsByClassName('dots');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    imageIndex++;
    if (imageIndex > images.length) imageIndex = 1;
    images[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
    setTimeout(showImage, 5000); // Change image every 5 seconds
}

//change image when user clicks on dot
function chooseImage(n) {
    imageIndex = n;
    showImage();
    clearInterval(timer);
}

//popup display
window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        2000
    )
});

//popup hide
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});


//stats counter animation
const scrollOffset = 100;
const scrollElement = document.querySelector("#goals");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

window.addEventListener('scroll', () => {
    if (elementInView(scrollElement, scrollOffset)) {
        changeStats();
    }
})

function changeStats() {
    const numb1 = document.querySelector(".numb1");
    let counter1 = 0;
    setInterval(() => {
        if (counter1 == 134) {
            clearInterval();
        } else {
            counter1 += 1;
            numb1.textContent = counter1;
        }
    }, 15);

    const numb2 = document.querySelector(".numb2");
    let counter2 = 0;
    setInterval(() => {
        if (counter2 == 250) {
            clearInterval();
        } else {
            counter2 += 1;
            numb2.textContent = counter2;
        }
    }, 5);

    const numb3 = document.querySelector(".numb3");
    let counter3 = 0;
    setInterval(() => {
        if (counter3 == 75) {
            clearInterval();
        } else {
            counter3 += 1;
            numb3.textContent = counter3;
        }
    }, 25);
}