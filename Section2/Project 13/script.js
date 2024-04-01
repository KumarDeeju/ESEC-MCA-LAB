// 1.make function for check prime number
function checkPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
// select the submit button
document.getElementById('sub_id').addEventListener('click',
// put the click function
 function(){
     // in the function select input element of value
    let num = document.getElementById('input_id').value ;
    // then take variable and call function
    let check = checkPrime(num);
    // this variable to print the is prime or not prime in the answer box of input
    if(check){
        document.getElementById('result')
        .innerHTML = num + " Is a Prime Number";
    }else{
        document.getElementById('result')
        .innerHTML = num + " Is not a Prime Number";
    }

 });
 
 // then clear button to click then clear the input box of value ond output box also clear.
document.getElementById('id_clear').addEventListener('click', 
function(){
    document.getElementById('input_id').value = "";
    document.getElementById('result').innerHTML = "Result";
})

