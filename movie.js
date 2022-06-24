// for the play and pause button
let forms = document.querySelectorAll('form');
let form0 = document.forms[0];
let form1 = document.forms[1];
let form2 = document.forms[2];
let form3 = document.forms[3];
let form4 = document.forms[4];
let form5 = document.forms[5];

let aa = form0.elements[0];
let bb = form1.elements[0];
let cc = form2.elements[0];
let dd = form3.elements[0];
let ee = form4.elements[0];
let ff = form5.elements[0];

let all = [aa,bb,cc,dd,ee,ff];

// for the volume 
let videos = document.querySelectorAll('video');
let videoarrays = Array.from(videos);

let aaa = form0.elements[2];
let bbb = form1.elements[2];
let ccc = form2.elements[2];
let ddd = form3.elements[2];
let eee = form4.elements[2];
let fff = form5.elements[2];

let general = [aaa,bbb,ccc,ddd,eee,fff];

general.forEach((item)=>{
    item.addEventListener('change', ()=>{
        let change = item.value;
        let volume = 0 + '.' + change;
        videoarrays[0].volume = volume;
        videoarrays[1].volume = volume;
        videoarrays[2].volume = volume;
        videoarrays[3].volume = volume;
        videoarrays[4].volume = volume;
        videoarrays[5].volume = volume;
    });
});

function video1(){
    if(videoarrays[0].paused){
        videoarrays[0].play()
    }
    else{
        videoarrays[0].pause();
    }
}

function video2(){
    if(videoarrays[1].paused){
        videoarrays[1].play()
    }
    else{
        videoarrays[1].pause();
    }
}

function video3(){
    if(videoarrays[2].paused){
        videoarrays[2].play()
    }
    else{
        videoarrays[2].pause();
    }
}

function video4(){
    if(videoarrays[3].paused){
        videoarrays[3].play()
    }
    else{
        videoarrays[3].pause();
    }
}

function video5(){
    if(videoarrays[4].paused){
        videoarrays[4].play()
    }
    else{
        videoarrays[4].pause();
    }
}

function video6(){
    if(videoarrays[5].paused){
        videoarrays[5].play()
    }
    else{
        videoarrays[5].pause();
    }
}

all.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item === all[0]){
            video1();
        }
        else if(item === all[1]){
            video2();
        }
        else if(item === all[2]){
            video3();
        }
        else if(item === all[3]){
            video4();
        }
        else if(item === all[4]){
            video5();
        }
        else if(item === all[5]){
            video6();
        }
    });
});

// for the restart button
let restart1 = form0.elements[1];
let restart2 = form1.elements[1];
let restart3 = form2.elements[1];
let restart4 = form3.elements[1];
let restart5 = form4.elements[1];
let restart6 = form5.elements[1];

function start1(){
    videoarrays[0].load();
    videoarrays[0].play();
}

function start2(){
    videoarrays[1].load();
    videoarrays[1].play();
}

function start3(){
    videoarrays[2].load();
    videoarrays[2].play();
}

function start4(){
    videoarrays[3].load();
    videoarrays[3].play();
}

function start5(){
    videoarrays[4].load();
    videoarrays[4].play();
}

function start6(){
    videoarrays[5].load();
    videoarrays[5].play();
}

let all2 = [restart1,restart2,restart3,restart4,restart5,restart6];
all2.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item === all2[0]){
            start1();
        }
        else if(item === all2[1]){
            start2();
        }
        else if(item === all2[2]){
            start3();
        }
        else if(item === all2[3]){
            start4();
        }
        else if(item === all2[4]){
            start5();
        }
        else if(item === all2[5]){
            start6();
        }
    });
});

// for the volume
let volume1 = form0.elements[2];
let volume2 = form1.elements[2];
let volume3 = form2.elements[2];
let volume4 = form3.elements[2];
let volume5 = form4.elements[2];
let volume6 = form5.elements[2];

let all3 = [volume1,volume2,volume3,volume4,volume5,volume6];

function vol1(){
    var slider = 0 + '.' + document.getElementById('a').value;
    all3[0].volume = slider;
}

all3.forEach((item)=>{
    item.addEventListener('change', ()=>{
        vol1();
    });
});
console.log(window);

// for the arrow up button
let arrow = document.querySelector('.nine img');
const arrowVisibility = ()=>{
    if(window.scrollY > 400){
        arrow.style.visibility = 'visible';
    }
    else{
        arrow.style.visibility = 'hidden'
    }
}

document.addEventListener('scroll', () => {
    arrowVisibility();
});
arrow.addEventListener('click', ()=>{
      window.scrollTo({
          top: 0,
          behaviour: 'smooth'
      }); 
});

// for the mobile screen
var tog = document.querySelector('.one img');
var one = document.querySelector('one');
tog.addEventListener('click', ()=>{
    head2.style.display = 'block';
});

var head2 = document.querySelector('.head2');
window.addEventListener('resize', ()=>{
    if(window.innerWidth <= 672){
        head2.style.display = 'none';
    }
    else if(window.innerWidth > 672){
        head2.style.display = 'flex';
        tog.style.display = 'none';
    }
});


// var sociala = document.querySelector('.head2');
// var socialas = document.querySelectorAll('.head2 h1');
// window.addEventListener('resize', ()=>{
//     if(window.innerWidth >= 672){
//         tog.style.display = 'none';
//         sociala.style.display = 'block';
//     }
//     else if(window.innerWidth < 672){
//         tog.style.display = 'flex';
//         sociala.style.display = 'none';
//     }
// });

// function sap(){
//     scroll(0, 200);
// }

// function socio(){
//     if(sociala.classList.toggle('show')){
        
//     }
// }

// window.addEventListener('load', ()=>{
//     if(window.innerWidth >= 672){
//         tog.style.display = 'none';
//     }
//     else if(window.innerWidth < 672){
//         tog.style.display = 'block';
//     }
// });

// for the full screen
videos.forEach((item)=>{
    item.addEventListener('dblclick', ()=>{
        if(item.requestFullscreen){
            item.requestFullscreen()
        }
        else if (item.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen()}
        else if (item.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen()}
    });
});