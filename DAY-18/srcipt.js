let ans  = '';
let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
buttons.forEach(
    (button)=>{
       button.addEventListener('click', ()=>{
        if(button.textContent === 'AC'){
           input.value = '';
           ans = '';
        }
        if(button.textContent === 'DE'){
           
        }
        if(button.textContent === '='){
            input.value = eval(ans);
            ans = '';
        }
        else{
            if(! (button.textContent === 'AC') )
            {  
                ans += button.textContent;
                input.value = ans;
            }
        }
       
       })
    }
)