function greet(name) {
    console.log("Hello " + name);
    // return greeting here
    };

    greet("Dor");

function addNumbers(num1, num2) {
    return num1 + num2;
        // return sum here
    }
    let result = addNumbers(2,4);
    console.log(result);

    let x = 10;
 
    function changeValue() {
        x = 2;
        return x;
        // declare a new x locally here
    }
    changeValue(x);
    console.log(x);

    function outerFunction() {
        let count = 0;
        return {
            innerFunction () {
                count++;
                return count;
            }
            // update count here
        }
    }
    let counter = outerFunction();
    console.log(counter.innerFunction());
    console.log(counter.innerFunction(1));
