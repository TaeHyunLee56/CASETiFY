//전체 섹션별 스크롤------------------------------------------------------------------
const sections = document.querySelectorAll('.sec');
const sectionCount = sections.length;

sections.forEach(function(section, index) {
    section.addEventListener("mousewheel", function(event) {
        //기본 페이지 스크롤 동작을 막음
        event.preventDefault();
        //delta 값 설정
        //event.wheelDelta = 마우스 휠의 회전 정도, event.detail = Firefox에서 사용되는 대체 속성
        const delta = event.wheelDelta / 120 || -event.detail / 3;
        //delta 값으로 다음 섹션으로 갈지 이전 섹션으로 갈지 확인
        //window.pageYOffset로 현재 스크롤 위치를 확인하고, getBoundingClientRect().top로 상단 거리를 확인하여 이동할 위치 설정
        const moveTop = window.pageYOffset + (delta < 0 ? section.nextElementSibling.getBoundingClientRect().top : section.previousElementSibling.getBoundingClientRect().top);
        //계산된 이동 위치인 moveTop 값으로 스크롤 이동
        //behavior: 'smooth' = 부드러운 스크롤
        window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
    });
});


//SEC1--------------------------------------------------------------------------------
const sec1Color = document.querySelectorAll(".sec1-case-color");

document.addEventListener("mousemove", function(e) {
    //마우스 위치에 따라 색상이 변하도록 하기 위해서 마우스의 x와 Y위치를 확인
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    //마우스의 이동 범위를 확인
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    //RGB에 적용하기 위해서 255로 나누어줌
    let red = mouseX / windowWidth * 255;
    let green = mouseY / windowHeight * 255;
    let blue = (red + green) / 2;
    //RGB 색상 부여
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";
    //케이스에 변화되는 색상을 적용
    sec1Color.forEach(function(x) {
        x.style.fill = color;
    });
});

const sec1h1Tag = document.querySelector(".sec1 h1");
//웹사이트 리소스가 로드되면 클래스를 추가하여 애니메이션을 만듦
window.addEventListener('DOMContentLoaded', function() {
    sec1h1Tag.classList.add('move');
});


//SEC2------------------------------------------------------------------
//SEC2-이미지 슬라이드
const itemAImgTag = document.querySelector(".itemA-img");
const itemBImgTag = document.querySelector(".itemB-img");
const itemCImgTag = document.querySelector(".itemC-img");
const itemDImgTag = document.querySelector(".itemD-img");

const itemATextTag = document.querySelector(".itemA-text");
const itemBTextTag = document.querySelector(".itemB-text");
const itemCTextTag = document.querySelector(".itemC-text");
const itemDTextTag = document.querySelector(".itemD-text");

const sec2leftBtnTag = document.querySelector(".sec2-leftbtn");
const sec2rightBtnTag = document.querySelector(".sec2-rightbtn");

let num = 1;
sec2rightBtnTag.addEventListener("click", function(){
    num++;
    selectCases.forEach(selectCase => {
        selectCase.classList.remove("selected");
    })
    //총 아이템이 12개이기 때문에 num이 9보다 커지면 다시 1로 설정하여 마지막 아이템 다음에 첫 번쨰 아이템이 이어서 나옴
    if(num>9){
        num = 1;
    }
    itemAImgTag.src = `images/custom/sec2-item${num}.png`
    itemBImgTag.src = `images/custom/sec2-item${num+1}.png`
    itemCImgTag.src = `images/custom/sec2-item${num+2}.png`
    itemDImgTag.src = `images/custom/sec2-item${num+3}.png`
    //itemText는 배열이기 때문에 num-1로 시작
    itemATextTag.innerHTML = itemText[num-1];
    itemBTextTag.innerHTML = itemText[num];
    itemCTextTag.innerHTML = itemText[num+1];
    itemDTextTag.innerHTML = itemText[num+2];
});
sec2leftBtnTag.addEventListener("click", function(){
    num--;
    selectCases.forEach(selectCase => {
        selectCase.classList.remove("selected");
    })
    if(num<1){
        num = 9;
    }
    itemAImgTag.src = `images/custom/sec2-item${num}.png`
    itemBImgTag.src = `images/custom/sec2-item${num+1}.png`
    itemCImgTag.src = `images/custom/sec2-item${num+2}.png`
    itemDImgTag.src = `images/custom/sec2-item${num+3}.png`

    itemATextTag.innerHTML = itemText[num-1];
    itemBTextTag.innerHTML = itemText[num];
    itemCTextTag.innerHTML = itemText[num+1];
    itemDTextTag.innerHTML = itemText[num+2];
});
const itemText = [
    "iPhone",
    "Galaxy S series",
    "AirPods Pro",
    "Galaxy Buds",
    "AirPods",
    "Galaxy Z Fold",
    "Galaxy Z Flip",
    "AirTag",
    "iPad",
    "MacBook",
    "Apple Watch",
    "Galaxy Watch"
]

//SEC2-선택된 상품
const selectCases = document.querySelectorAll(".item img");
console.log(selectCases)
selectCases.forEach(selectCase => {
    selectCase.addEventListener("click", function(){
        //선택을 표시하는 클래스를 다 지웠다가 다시 추가하여 선택된 아이템에만 선택 표시가 나타나도록 설정
        selectCases.forEach(selectCase => {
            selectCase.classList.remove("selected");
        })
        selectCase.classList.add("selected");
    });
} )

//가격----------------------------------------------------------------------------------
const priceTags = document.querySelectorAll(".custom-fin .price");
const priceFinTag = document.querySelector(".sec4-fin-price");
console.log(priceTags);
//초기 가격 설정
let price = 72000;

priceTags.forEach(priceTag => {
    priceTag.innerHTML = `₩ ${price}`;
})
priceFinTag.innerHTML = `₩ ${price}`;
// if(customMagsafe.classList.contains("hidden")){
//     price = price + 6000;
//     priceTag.innerHTML = price;
// }

//next,back 버튼---------------------------------------------------------------
//각각의 NEXT,BACK 버튼 클릭 시 클래스를 추가하고 제거하며 다음 단계로 이동하거나 이전 단계로 돌아감
const nextBtn1Tag = document.querySelector(".next-btn1");
const step2Tag = document.querySelector(".step2");
nextBtn1Tag.addEventListener("click", function(){
    step2Tag.classList.add("open");

});

const nextBtn2Tag = document.querySelector(".next-btn2");
const backBtn2Tag = document.querySelector(".back-btn2");
backBtn2Tag.addEventListener("click", function(){
    step2Tag.classList.remove("open");
});

const step3Tag = document.querySelector(".step3");
nextBtn2Tag.addEventListener("click", function(){
    step3Tag.classList.add("open");
});

const step4Tag = document.querySelector(".step4");
const nextBtn3Tag = document.querySelector(".next-btn3");
const backBtn3Tag = document.querySelector(".back-btn3");
backBtn3Tag.addEventListener("click", function(){
    step3Tag.classList.remove("open");
});
nextBtn3Tag.addEventListener("click", function(){
    step4Tag.classList.add("open");
});

const nextBtn4Tag = document.querySelector(".next-btn4");
const backBtn4Tag = document.querySelector(".back-btn4");
backBtn4Tag.addEventListener("click", function(){
    step4Tag.classList.remove("open");
});

const sec4Tag = document.querySelector(".sec4");
nextBtn4Tag.addEventListener("click", function(){
    sec4Tag.classList.add("open");
});

const finBackTag = document.querySelector(".sec4-back");
finBackTag.addEventListener("click", function(){
    sec4Tag.classList.remove("open");
});

//색 커스텀---------------------------------------------------------------------
const customColor = document.querySelectorAll(".custom-case-color");
console.log(customColor);
const customColorFin = document.querySelectorAll(".custom-finish .custom-case-color");
const customColorInput = document.querySelector(".custom-tag-color");
console.log(customColorInput)
//input color의 value값을 통해 케이스의 색상 변경
customColorInput.addEventListener("input", function(){
    customColor.forEach(function(element) {
        element.style.fill = customColorInput.value;
    });
    customColorFin.forEach(function(element) {
        element.style.fill = customColorInput.value;
    });
});

//맥세이프 커스텀-----------------------------------------------------------------
const customMagsafe = document.querySelector(".custom-case-magsafe");
const customMagsafeFin = document.querySelector(".custom-finish .custom-case-magsafe");

const customMagsafeInput = document.querySelector(".custom-tag-magsafe");

const magFinPrice = document.querySelector(".sec4-fin-magprice");

//토글을 사용하여 체크박스 클릭에 따라 클래스가 추가되어 맥세이프가 나타남
customMagsafeInput.addEventListener('input', function() {
    customMagsafe.classList.toggle("hidden");
    customMagsafeFin.classList.toggle("hidden");

    //가격 변경 
    //hidden이라는 클래스를 가지고 있으면 가격을 올리고 아니면 다시 가격을 내림
    if(customMagsafe.classList.contains("hidden")){
        price = price + 6000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        //--FinPrice 부분들은 커스텀 완료 후 가격을 확인할 수 있는 부분에 적용하기 위함
        magFinPrice.innerHTML = "₩ 6000";
    }else{
        price = price - 6000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        magFinPrice.innerHTML = "₩ 0";
    }
});

//스트랩 커스텀-----------------------------------------------------------------
const customStrap = document.querySelector(".custom-case-strap");
const customStrapFin = document.querySelector(".custom-finish .custom-case-strap");

const customStrapInput = document.querySelector(".custom-tag-strap");

const strapFinPrice = document.querySelector(".sec4-fin-strapprice");

//토글을 사용하여 체크박스 클릭에 따라 클래스가 추가되어 스트랩이 나타남
customStrapInput.addEventListener('input', function() {
    customStrap.classList.toggle("hidden");
    customStrapFin.classList.toggle("hidden");

    //가격 변경
    //hidden이라는 클래스를 가지고 있으면 가격을 올리고 아니면 다시 가격을 내림
    if(customStrap.classList.contains("hidden")){
        price = price + 12000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        //--FinPrice 부분들은 커스텀 완료 후 가격을 확인할 수 있는 부분에 적용하기 위함
        strapFinPrice.innerHTML = "₩ 12000";
    }else{
        price = price - 12000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        strapFinPrice.innerHTML = "₩ 0";
    }

});

//텍스트 작성
const strapText = document.querySelector(".custom-strap-text");
const strapTextFin = document.querySelector(".custom-finish  .custom-strap-text");
console.log(strapTextFin)
const strapTextInput = document.querySelector(".custom-tag-straptext");
//innerHTML을 통해 input value값을 넣어 작성한 글씨가 이미지에 나타나도록 함
strapTextInput.addEventListener("input", function(){
    let newStrapText = strapTextInput.value;
    strapText.innerHTML = newStrapText;
    strapTextFin.innerHTML = newStrapText;
});


//이미지 커스텀------------------------------------------------------------------------
const customImage = document.querySelector(".custom-case-img");
const customImageFin = document.querySelector(".custom-finish .custom-case-img");
const customImageDel = document.querySelector(".custom-image-del");

const customImageInput = document.querySelector(".custom-tag-image");

const imgFinPrice = document.querySelector(".sec4-fin-imgprice");


customImageInput.addEventListener('change', function(event) {
    //upload 클래스가 추가되어 있으면 가격을 그대로 두고, 아니면 클래스를 추가하며 가격을 올려서
    //이미지가 바뀔떄마다 가격이 올라가는 것을 방지
    if(customImage.classList.contains("upload")){
        price = price;
    }else{
        customImage.classList.add("upload");
        price = price + 10000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        //--FinPrice 부분들은 커스텀 완료 후 가격을 확인할 수 있는 부분에 적용하기 위함
        imgFinPrice.innerHTML = "₩ 10000";
    }

    //input file로 업로드된 파일의 Url을 배경이미지로 연결하여 이미지 커스텀 구현
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var imageUrl = e.target.result;
        customImage.style.backgroundImage = "url('" + imageUrl + "')";
        customImageFin.style.backgroundImage = "url('" + imageUrl + "')";
    };
    reader.readAsDataURL(file);
});

//file 변경 시 첨부파일부분을 업로드된 파일 이름으로 변경
document.querySelector('#file').addEventListener('change', function() {
    let fileName = this.value;
    document.querySelector('.upload-name').value = fileName;
});
//파일 삭제 버튼 클릭
customImageDel.addEventListener("click", function(){
    //처음에 이미지를 업로드 하지 않았으면 가격이 내려가지 않도록 contains upload판별
    if(customImage.classList.contains("upload")){
        //contains upload라면 contains delete 여부에 따라 가격이 내려가되, 한 번 내리면 또 내려가지 않도록 함
        if(customImage.classList.contains("delete")){
            price = price;
        }else{
            customImage.classList.add("delete");
            customImage.classList.remove("upload");
            price = price - 10000;
            priceTags.forEach(priceTag => {
                priceTag.innerHTML = `₩ ${price}`;
            })
            //--FinPrice 부분들은 커스텀 완료 후 가격을 확인할 수 있는 부분에 적용하기 위함
            priceFinTag.innerHTML = `₩ ${price}`;
            imgFinPrice.innerHTML = "₩ 0";
        }
    }else{
        price = price;
    }
    //업로드된 파일 이름으로 변경된 첨부파일 부분을 다시 원래대로 돌리고 이미지도 초기 이미지로 다시 교체
    document.querySelector('.upload-name').value = "";
    customImage.style.backgroundImage = "url('images/custom/iphone-back.png')";
    customImageFin.style.backgroundImage = "url('images/custom/iphone-back.png')";
});


//패턴 커스텀----------------------------------------------------
const pat1Tag = document.querySelector(".pattern1");
const pat2Tag = document.querySelector(".pattern2");
const pat3Tag = document.querySelector(".pattern3");
const pat4Tag = document.querySelector(".pattern4");

console.log(pat1Tag);
//각 패턴 클릭에 따라 케이스에 다른 패턴이 들어감
pat1Tag.addEventListener("click", function(){
    console.log("cl")
    customImage.style.backgroundImage = "url('images/custom/pattern-img1.png')";
    customImageFin.style.backgroundImage = "url('images/custom/pattern-img1.png')";

});
pat2Tag.addEventListener("click", function(){
    console.log("cl")
    customImage.style.backgroundImage = "url('images/custom/pattern-img2.png')";
    customImageFin.style.backgroundImage = "url('images/custom/pattern-img2.png')";
});
pat3Tag.addEventListener("click", function(){
    console.log("cl")
    customImage.style.backgroundImage = "url('images/custom/pattern-img3.png')";
    customImageFin.style.backgroundImage = "url('images/custom/pattern-img3.png')";
});
pat4Tag.addEventListener("click", function(){
    console.log("cl")
    customImage.style.backgroundImage = "url('images/custom/iphone-back.png')";
    customImageFin.style.backgroundImage = "url('images/custom/iphone-back.png')";
    
});

//텍스트 커스텀--------------------------------------------------------------------

//영어만 작성할 수 있도록 제한
function handleOnInput(e)  {
    e.value = e.value.replace(/[^A-Za-z]/ig, '')
};

//텍스트 작성
const customText = document.querySelector(".custom-case-text");
const customTextFin = document.querySelector(".custom-finish .custom-case-text");

const customTextInput = document.querySelector(".custom-tag-text");

const textFinPrice = document.querySelector(".sec4-fin-textprice");

//입력된 글씨가 케이스 이미지에 나타남
customTextInput.addEventListener("input", function(){
    let newText = customTextInput.value;
    console.log(newText.length)
    customText.innerHTML = newText;
    //최종 완성 페이지에서 커스텀한 부분들이 동일하게 적용될 수 있도록 같이 적용
    customTextFin.innerHTML = newText;


    //문자의 길이가 0이 아니면 (= 문자가 적힌 상태에서)
    //write 클래스가 들어있으면 가격을 추가로 올리지 않고, 들어있지 않으면 write을 추가하며 가격을 올림
    //이렇게 하면 텍스트를 작성할 때마다 가격이 무한대로 올라가는 것을 막을 수 있음
    if(customText.classList.contains("write")){
        price = price;
    }else{
        customText.classList.add("write");
        price = price + 8000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        textFinPrice.innerHTML = "₩ 8000"
    }    
    //input에 적힌 문자의 길이로 텍스트가 입력된 상태인지 판별
    if(newText.length == 0){
        //텍스트가 지워지면 올라갔던 8000을 다시 빼줌
        price = price - 8000;
        priceTags.forEach(priceTag => {
            priceTag.innerHTML = `₩ ${price}`;
        })
        priceFinTag.innerHTML = `₩ ${price}`;
        textFinPrice.innerHTML = "₩ 0"
        //텍스트를 썼다가 다시 다 지우면 문자의 길이가 0이 되고 write 클래스도 제거해줘서 텍스트를 또다시 썼을 때 가격이 올라가지 않는 오류 제거
        customText.classList.remove("write"); 
    }
});

//텍스트 위치
//각각의 버튼 클릭에 따라 클래스를 추가하고 제거하며 텍스트 위치를 커스텀할 수 있도록 구현
const TextPos1Tag = document.querySelector(".custom-textpos1");
const TextPos2Tag = document.querySelector(".custom-textpos2");
const TextPos3Tag = document.querySelector(".custom-textpos3");
console.log(TextPos1Tag)

TextPos1Tag.addEventListener("click", function(){
    customText.classList.remove("pos2");
    customText.classList.remove("pos3");
    customText.classList.add("pos1");

    customTextFin.classList.remove("pos2");
    customTextFin.classList.remove("pos3");
    customTextFin.classList.add("pos1");
});
TextPos2Tag.addEventListener("click", function(){
    customText.classList.remove("pos1");
    customText.classList.remove("pos3");
    customText.classList.add("pos2");

    customTextFin.classList.remove("pos1");
    customTextFin.classList.remove("pos3");
    customTextFin.classList.add("pos2");
});
TextPos3Tag.addEventListener("click", function(){
    customText.classList.remove("pos1");
    customText.classList.remove("pos2");
    customText.classList.add("pos3");

    customTextFin.classList.remove("pos1");
    customTextFin.classList.remove("pos2");
    customTextFin.classList.add("pos3");
});

//텍스트 스타일
//각각의 버튼 클릭에 따라 클래스를 추가하고 제거하며 텍스트 스타일을 커스텀할 수 있도록 구현
const TextStyle1Tag = document.querySelector(".custom-textstyle1");
const TextStyle2Tag = document.querySelector(".custom-textstyle2");
const TextStyle3Tag = document.querySelector(".custom-textstyle3");
TextStyle1Tag.addEventListener("click", function(){
    customText.classList.remove("style2");
    customText.classList.remove("style3");
    customText.classList.add("style1");

    customTextFin.classList.remove("style2");
    customTextFin.classList.remove("style3");
    customTextFin.classList.add("style1");
});
TextStyle2Tag.addEventListener("click", function(){
    customText.classList.remove("style1");
    customText.classList.remove("style3");
    customText.classList.add("style2");

    customTextFin.classList.remove("style2");
    customTextFin.classList.remove("style3");
    customTextFin.classList.add("style1");
});
TextStyle3Tag.addEventListener("click", function(){
    customText.classList.remove("style1");
    customText.classList.remove("style2");
    customText.classList.add("style3");

    customTextFin.classList.remove("style2");
    customTextFin.classList.remove("style3");
    customTextFin.classList.add("style1");
});

//텍스트 색상
//input color의 value값을 style의 컬러에 적용하여 각인 색상을 커스텀할 수 있도록 구현
const textColorInput = document.querySelector(".textcolors");
const textColorInputColor = document.querySelector(".textcolor0");
textColorInput.addEventListener("input", function(){
    textColorInputColor.style.backgroundColor = textColorInput.value;
    customText.style.color = textColorInput.value;
    customTextFin.style.color = textColorInput.value;
});

//기본적으로 검은색과 흰색으로 설정할 수 있는 버튼도 구현
const textColorB = document.querySelector(".textcolor1");
const textColorW = document.querySelector(".textcolor2");
textColorB.addEventListener("click", function(){
    customText.style.color = "#000";
    customTextFin.style.color = "#000";
});
textColorW.addEventListener("click", function(){
    customText.style.color = "#fff";
    customTextFin.style.color = "#fff";
});


