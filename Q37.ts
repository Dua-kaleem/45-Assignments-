// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.



function make_shirt( size = "Large", message = " I love Typescript!"):void{
    console.log(`I'm makng a ${size} T.shirt with the message "${message}".`);
}

// Making a large shirt with the default message
make_shirt("Large")
// Making a medium shirt with the default message
make_shirt("Medium")
// Making a small shirt with the default message
make_shirt("Small")
