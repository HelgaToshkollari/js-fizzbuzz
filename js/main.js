for ( let i = 1; i <= 100; i++) {
    
    let number = i;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        number = "FizzBuzz";
    } else if (i % 3 == 0) {
        number = "Fizz";
    } else if (i % 5 == 0) {
        number = "Buzz";
    }

    console.log(number);

    
}