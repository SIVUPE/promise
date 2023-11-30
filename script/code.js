let mypromise = new Promise(args)
function args(resolve, reject) {
    let numb1 = +prompt("Enter a number only")
    let numb2 = +prompt("Enter a number only")
    if(typeof (numb1) == 'number') {
        resolve(`the number you entered is ${numb1 + numb2}`)
    }else{
        reject(`the number you entered is not ${numb1, numb2}`)
    }
    }

mypromise .then(
    completed=> console.log(completed)
    ).catch(
        rejected => console.log(rejected) 
    )

