function fizzBuzz(){
    //This must print 1-100 in the console
    //If divisible by 3, print fizz
    //If divisible by 5, print buzz
    //If divisible by 3 and 5, print fizzbuzz
    //Else, print the number
    for(i=1;i<=100;i++){
        if(i % 3 === 0){
            console.log("fizz");
        }
        else if(i % 5 === 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();