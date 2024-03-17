// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



//list of current user names
const current_Users: string[]  = ["Dua", "Rahima", "Salwa", " maria", "Reema"];

//list of new usernames
const new_Users: string[]  = ["saniya", "RAHIMA", "salwa", " Farjah", "Zuni"];


const currUsers_lowerCase: string[] = current_Users.map((user => user.toLowerCase()));


new_Users.forEach(user =>{
    if(currUsers_lowerCase.includes(user.toLowerCase())){
        console.log(`Sorry, the username ${user} alreay taken please choose a diffrent one`)
    }
    else{console.log(` The username ${user} is available`)}
})




