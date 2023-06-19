//Header------------------------------------------------------------------
const headerOverlayTag = document.querySelector(".header-overlay");
const headerOverlayH2Tag = document.querySelector(".header-overlay h2");
//웹사이트 리소스가 로드되면 클래스를 추가하여 애니메이션을 만듦
window.addEventListener('DOMContentLoaded', function() {
    headerOverlayTag.classList.add('open');
    headerOverlayH2Tag.classList.add('open');
});

//Scroll------------------------------------------------------------------
const sec1TextTag = document.querySelector(".sec1-text");
const sec1pTags = document.querySelectorAll(".sec1-text p");

const sec2Img1Tags = document.querySelector(".sec2-img1");
const sec2Img2Tags = document.querySelector(".sec2-img2");
const sec2Img3Tags = document.querySelector(".sec2-img3");
const sec2Img4Tags = document.querySelector(".sec2-img4");
const sec2Text1Tag = document.querySelector(".sec2-text1");
const sec2Text2Tag = document.querySelector(".sec2-text2");
const sec2Text3Tag = document.querySelector(".sec2-text3");
const sec2Text4Tag = document.querySelector(".sec2-text4");

//화면 중앙과 sec1P의 중앙 사이의 거리를 확인하고 그 거리가 50 이하이면 클래스를 추가하여 글씨 색을 진하게 만듦
let windowMid = window.innerHeight/2;
document.addEventListener("scroll", function(){
    sec1pTags.forEach(sec1p =>{
        let sec1pTop = sec1p.getBoundingClientRect().top;
        let sec1pMid = sec1pTop + sec1p.getBoundingClientRect().height/3;
        if(Math.abs(sec1pMid-windowMid) < 50){
            sec1p.classList.add("middle");
        }else{
            sec1p.classList.remove("middle");
        }
    })

    //콘솔로 scrollY 값을 확인하고 if문으로 scrollY에 따라 클래스를 추가하고 제거하며 인터랙션 부여
    console.log(scrollY);

    if(1200 <= scrollY) {
        sec2Img1Tags.classList.add("scroll");
        sec2Text1Tag.classList.add("scroll");
    }
    if(1500 <= scrollY){
        sec2Img2Tags.classList.add("scroll");
        sec2Text2Tag.classList.add("scroll");
    }
    if(1800 <= scrollY){
        sec2Img3Tags.classList.add("scroll");
        sec2Text3Tag.classList.add("scroll");
    }
    if(2100 <= scrollY){
        sec2Img4Tags.classList.add("scroll");
        sec2Text4Tag.classList.add("scroll");
    }

});
