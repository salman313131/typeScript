const number1 = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;
const button = document.getElementById('add')!;

function add(num1 :number,num2: number){
    console.log(num1+num2)
}


    button.addEventListener('click',()=>{
        const num1 = number1.value
        const num2 = number2.value
        add(+num1,+num2)
    })
