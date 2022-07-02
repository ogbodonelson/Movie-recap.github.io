// for the too handsome to handle quiz
let form = document.getElementById('handsome');
let span = document.querySelector('span');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let array = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    let correct = ['b','a','a','b','a','a','b','a','a','a'];
    let score = 0;
    array.forEach((item,index)=>{
        if(item === correct[index]){
            span.textContent = score += 10;
        }
        else if(item != correct[index]){
            span.textContent = score += 0;
        }
    });

    scroll(0,0);

    let interval = setInterval(change, 10);
    let point = 0;

    function change (){
        if(point == score){
            clearInterval(interval);
            span.textContent = point;
        }
        else{
            point ++;
            span.textContent = point;
        }
    };
});