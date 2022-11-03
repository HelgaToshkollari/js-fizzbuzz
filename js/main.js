let result = document.getElementById("result");


for ( let i = 1; i <= 100; i++) {

    let square = document.createElement("div");

    square.classList.add("square");

    result.append(square);

    if ( i % 3 === 0 && i % 5 === 0 ){
        square.classList.add("fizzBuzz");
        square.append("fizzBuzz");

    } else if ( i % 5 === 0 ) {
        square.classList.add("buzz");
        square.append("buzz");


    } else if ( i % 3 === 0 ) {
        square.classList.add("fizz");
        square.append("fizz");
    } else {
        result.append(square);
        square.append(i);
    }
    
   
    
}