// code your solution here
// create a function superbowlWin()
// the function should recieve 1 argument,an Array of Objects 
// each object has two properties: year and result
// use find() to test each object to see if the result is "W" a win
// it should return the year when the win was recorded 
// if there is no win ,it should return sadly, undefined
function superbowlWin(record) {
    let win = record.find(record => record.result === "W");
    if (win) { // if and else for as conditionals
        return win.year;
    }else {
        return undefined;// undefined cannot be put in string
    }
}