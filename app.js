const closeBtn = document.querySelector(".menu")
const openBtn = document.querySelector(".menu1")
const sideBar = document.querySelector(".side-bar")



closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("active");
    openBtn.classList.remove("active")

})
openBtn.addEventListener("click",()=>{
    sideBar.classList.add("active");
    openBtn.classList.add("active");

})



//팝업부분 - 감사인사

const thank = document.querySelector("#thank");
const thankPop = document.querySelector('#thank-to');


thank.addEventListener("click",()=>{
    thankPop.classList.add("active");

    thank.classList.add('active')
    menContact.classList.remove('active');
    womenContact.classList.remove('active');
    menMind.classList.remove('active');
    womenMind.classList.remove('active');
    mapB.classList.remove('active');
    galleryB.classList.remove('active')
    
    // sideBar.classList.remove("active");

})
thankPop.addEventListener("click",()=>{
    thankPop.classList.remove("active");
    openBtn.classList.remove("active");
})

//팝업부분 - 연락하기

const menContact = document.querySelector("#contact-m");
const menContactPop = document.querySelector('#contact-m-b');
const womenContact = document.querySelector("#contact-w");
const womenContactPop = document.querySelector('#contact-w-b');

menContact.addEventListener("click",()=>{
    menContactPop.classList.add("active");

    thank.classList.remove('active')
    menContact.classList.add('active');
    womenContact.classList.remove('active');
    menMind.classList.remove('active');
    womenMind.classList.remove('active');
    mapB.classList.remove('active');
    galleryB.classList.remove('active')
    
   
    // sideBar.classList.remove("active");

})
menContactPop.addEventListener("click",()=>{
    menContactPop.classList.remove("active");
    openBtn.classList.remove("active");
})
womenContact.addEventListener("click",()=>{
    womenContactPop.classList.add("active");
   
    thank.classList.remove('active')
    menContact.classList.remove('active');
    womenContact.classList.add('active');
    menMind.classList.remove('active');
    womenMind.classList.remove('active');
    mapB.classList.remove('active');
    galleryB.classList.remove('active')

   
    // sideBar.classList.remove("active");

})
womenContactPop.addEventListener("click",()=>{
    womenContactPop.classList.remove("active");
    openBtn.classList.remove("active");
})

//팝업부분 - 마음 전하기

const menMind = document.querySelector("#mind-m");
const menMindPop = document.querySelector('#mind-m-b');
const womenMind = document.querySelector("#mind-w");
const womenMindPop = document.querySelector('#mind-w-b');

menMind.addEventListener("click",()=>{
    menMindPop.classList.add("active");

    thank.classList.remove('active')
    menContact.classList.remove('active');
    womenContact.classList.remove('active');
    menMind.classList.add('active');
    womenMind.classList.remove('active');
    mapB.classList.remove('active');
    galleryB.classList.remove('active')

    // sideBar.classList.remove("active");

})
menMindPop.addEventListener("click",()=>{
    menMindPop.classList.remove("active");
    openBtn.classList.remove("active");
})
womenMind.addEventListener("click",()=>{
    womenMindPop.classList.add("active");

    thank.classList.remove('active')
    menContact.classList.remove('active');
    womenContact.classList.remove('active');
    menMind.classList.remove('active');
    womenMind.classList.add('active');
    mapB.classList.remove('active');
    galleryB.classList.remove('active')

    // sideBar.classList.remove("active");

})
womenMindPop.addEventListener("click",()=>{
    womenMindPop.classList.remove("active");
    openBtn.classList.remove("active");
})

//팝업부분 - 지도

const mapB = document.querySelector("#map-b");
const mapPop = document.querySelector('#mapss');


mapB.addEventListener("click",()=>{
    mapPop.classList.add("active");

    thank.classList.remove('active')
    menContact.classList.remove('active');
    womenContact.classList.remove('active');
    menMind.classList.remove('active');
    womenMind.classList.remove('active');
    mapB.classList.add('active');
    galleryB.classList.remove('active')

    // sideBar.classList.remove("active");

})
mapPop.addEventListener("click",()=>{
    mapPop.classList.remove("active");
    openBtn.classList.remove("active");
})

//팝업부분 - 갤러리

const galleryB = document.querySelector("#gallery");
const galleryPop = document.querySelector('#gallery-b');
const stops = document.querySelector("#stop")


galleryB.addEventListener("click",()=>{
    galleryPop.classList.add("active");

    thank.classList.remove('active')
    menContact.classList.remove('active');
    womenContact.classList.remove('active');
    menMind.classList.remove('active');
    womenMind.classList.remove('active');
    mapB.classList.remove('active');
    galleryB.classList.add('active')
   
  
    // sideBar.classList.remove("active");

})
stops.addEventListener("click",()=>{
    galleryPop.classList.remove("active");
    openBtn.classList.remove("active");
})

