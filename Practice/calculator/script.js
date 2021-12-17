
let $operator = prompt("Welcome which operator u wanna use:\n+ - addition\n- - subtraction\n* - multiplication\n/ - division\n% - remainder\npow - power\nsqrt - square root.\nEnter here: ");
let i = 1;
let result; 

if($operator == '+' || $operator == '-' || $operator == '*' || $operator == '/' || $operator == '%' || $operator == 'pow' || $operator == 'sqrt'){
    if($operator == '+'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`${a} + ${b} = ${a+b}`);
        
    }
    else if($operator == '-'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`${a} - ${b} = ${a-b}`);
    }
    else if($operator == '*'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`${a} * ${b} = ${a*b}`);
    }
    else if($operator == '/'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`${a} / ${b} = ${ab}`);
    }
    else if($operator == '%'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`Remainder of ${a} / ${b} = ${a%b}`);
    }
    else if($operator == 'pow'){
        a = +prompt("First value: ");
        b = +prompt("Second value: ");
        result = console.log(`${a}^${b} = ${a**b}`);
    }
    else if($operator == 'sqrt'){
        a = +prompt("Value: ");
        result = console.log(`sqrt(${a}) = ${a**0.5}`);
    }
}else{
    result = console.log("Invalid Entry, Please try again.");
}
// result = document.getElementsByClassName(".result").innerText;
// console.log(result);