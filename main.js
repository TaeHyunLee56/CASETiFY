//Header------------------------------------------------------------------
const headerTag = document.querySelector(".header");
const circleTag = document.querySelector(".header-circle2");
//원의 left값을 마우스의 x값 - 원의 반지름으로 해서 원이 좌우로 움직이도록 설정
headerTag.addEventListener("mousemove", function(e){
    circleTag.style.left = e.clientX+(-274) + 'px';
});

//Scroll------------------------------------------------------------------
const sec1ImgTagA = document.querySelectorAll(".sec1-itema");
const sec1ImgTagB = document.querySelectorAll(".sec1-itemb");

const sec2ImgTagA = document.querySelectorAll(".sec2-itema");
const sec2ImgTagB = document.querySelectorAll(".sec2-itemb");

const sec3TextTag = document.querySelector(".sec3-recasetify");

const sec4ContextTag = document.querySelector(".sec4-context");

document.addEventListener("scroll", function () {
    console.log(scrollY);
    //콘솔로 scrollY 값을 확인하고 if문으로 scrollY에 따라 클래스를 추가하고 제거하며 인터랙션 부여
    if (600 <= scrollY) {
        sec1ImgTagA.forEach( i => {
            i.classList.add("scroll");
        });
        sec1ImgTagB.forEach( i => {
            i.classList.add("scroll");
        });
    } else if (scrollY < 600) {
        sec1ImgTagA.forEach( i=> {
            i.classList.remove("scroll");
        });
        sec1ImgTagB.forEach( i=> {
            i.classList.remove("scroll");
        });
    }

    if (1200 <= scrollY) {
        sec2ImgTagA.forEach( i => {
            i.classList.add("scroll");
        });
        sec2ImgTagB.forEach( i => {
            i.classList.add("scroll");
        });
    } else if (scrollY < 1400) {
        sec2ImgTagA.forEach( i=> {
            i.classList.remove("scroll");
        });
        sec2ImgTagB.forEach( i=> {
            i.classList.remove("scroll");
        });
    }

    if (scrollY >= 2600) {
        sec3TextTag.innerHTML = "Re / CASETiFY";
        sec3TextTag.classList.add("scroll");
    } else if (scrollY >= 2400) {
        sec3TextTag.innerHTML = "Re / IMAGINE";
        sec3TextTag.classList.remove("scroll");
    } else {
        sec3TextTag.innerHTML = "Re / CLAIM";
        sec3TextTag.classList.remove("scroll");
    }


    if(scrollY >= 2800){
        sec4ContextTag.classList.add("scroll");
    }else{
        sec4ContextTag.classList.remove("scroll");
    }
});
