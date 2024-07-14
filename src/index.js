var randomNumber1 = Math.random()
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) +1
console.log(randomNumber1)
console.log("/images/dice"+randomNumber1+".png")

var randomNumber2 = Math.random()
randomNumber2 = randomNumber2* 6
randomNumber2 = Math.floor(randomNumber2) +1

console.log(randomNumber2)
console.log("/images/dice"+randomNumber2+".png")


function DicceRandon1(){
    document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
}
DicceRandon1()

function DicceRandon2(){
    document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice"+randomNumber2+".png");
}
DicceRandon2()


    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
    }else if (randomNumber1 < randomNumber2 ){
         document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
    }else{
         document.querySelector("h1").innerHTML = "Draw"
    }

   
        



