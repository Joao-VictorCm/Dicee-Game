var randomNumber1 = Math.random()
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) +1
console.log(randomNumber1)
console.log("/images/dice"+randomNumber1+".png")


function DicceRandon1(){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
}
DicceRandon1()

function DicceRandon2(){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
}

