
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let header = document.querySelector('header');
let buttons = document.getElementsByClassName('h-button');
let profile = document.querySelector("#profile");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

function f(event) {
    profile.scrollIntoView();
}
function up() {
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', (e) => {
    console.log(document.documentElement.scrollTop);

    // header
    if(document.documentElement.scrollTop === 0) {
        header.style.backgroundColor = 'transparent'
        header.style.color = '#fff'
        for(let button of buttons) {
            button.classList.add('black');
        }
        
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.color = 'black'
        for(let button of buttons) {
            button.classList.remove('black');
        }
    }

    // item translete
    if(document.documentElement.offsetWidth < 750) {
        if(document.documentElement.scrollTop > 1500) {
            item1.classList.add('translate');
        } else {
            item1.classList.remove('translate')
        }
        if(document.documentElement.scrollTop > 2300) {
            item2.classList.add('translate');
            item4.classList.add('translate');
        } else {
            item2.classList.remove('translate');
            item4.classList.remove('translate');
        }
        if(document.documentElement.scrollTop > 3700) {
            item3.classList.add('translate');
            item5.classList.add('translate');
        } else {
            item3.classList.remove('translate')
            item5.classList.remove('translate')
        }
    } else {
        if(document.documentElement.scrollTop > 960) {
            item1.classList.add('translate');
        } else {
            item1.classList.remove('translate')
        }
        if(document.documentElement.scrollTop > 1650) {
            item2.classList.add('translate');
            item4.classList.add('translate');
        } else {
            item2.classList.remove('translate')
            item4.classList.remove('translate')
        }
        if(document.documentElement.scrollTop > 2450) {
            item3.classList.add('translate');
            item5.classList.add('translate');
        } else {
            item3.classList.remove('translate')
            item5.classList.remove('translate')
        }
    }
})


// const target = document.getElementById('target'); // 요소의 id 값이 target이라 가정

// const item1Rect = item1.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
// const item1Top = item1Rect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.

// const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
// //const scrolledTopLength = pageYOffset; // window 객체 없이 pageYOffset 메서드를 써도 가능하다.
// const absoluteTop = scrolledTopLength + item1Top; // 절대좌표


document.addEventListener("DOMContentLoaded", function() {
    let tabs = document.querySelectorAll('.index li');
    let switchF = document.getElementById('switchF');
    let switchB = document.getElementById('switchB');
    let FE = document.getElementById("front");
    let BE = document.getElementById("back");
  
    for (var i = 0, len = tabs.length; i < len; i++) {
      tabs[i].addEventListener("click", function() {
        if (this.classList.contains('active')) return;
  
        var parent = this.parentNode,
            innerTabs = parent.querySelectorAll('li');
  
        for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
          innerTabs[index].classList.remove('active');
        }
        
        this.classList.add('active');

      });
    }

    switchB.addEventListener("click", () => {
        FE.classList.add("hidden");
        BE.classList.remove("hidden");
    })
    switchF.addEventListener("click", () => {
        FE.classList.remove("hidden");
        BE.classList.add("hidden");
    })
});
