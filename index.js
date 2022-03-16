    const Value = document.getElementById('value');
    const Decrease = document.querySelector('.decrease');
    const Increase = document.querySelector('.increase');
    const Reset = document.querySelector('.reset');;

    let count =0;

    Decrease.addEventListener('click',()=>{
        count--;
        Value.textContent = count;
        changeClr();
    });
    
    Increase.addEventListener('click',()=>{
        count++;
        Value.textContent = count;
        changeClr();
    });
    
    Reset.addEventListener('click',()=>{
        count = 0;
        Value.textContent = count;
        changeClr();
    });

    function changeClr(){
        if(count >0){
            Value.style.color = 'green';
        }
        else if(count<0){
            Value.style.color = 'red';
        }
        else{
            Value.style.color = 'black';
        }
    }
   
    