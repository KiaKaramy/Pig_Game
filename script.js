let PermisonToPlay;
let HoldButton = document.querySelector(".Button-Hold");
let html = document.querySelector("html");
let Drop = document.querySelector(".Drop");
let num =0;
let SumPoint = 0;
let PointALL = document.querySelectorAll(".point-all");
let PointSet = document.querySelectorAll(".point-in-set");
let NewGameB = document.querySelector(".new-game");

let player = [
    {
    Sum:0,
    Number:1,
    side:"right",
    },{
    Sum:0,
    Number:2,
    side:"left",
    },
]
let DiceImg = document.querySelectorAll(".img-dice");

if(localStorage.getItem("PermisonToPlay") == null){
    PermisonToPlay = "right";
    localStorage.setItem("PermisonToPlay" , PermisonToPlay)
}else{
    PermisonToPlay = localStorage.getItem("PermisonToPlay");
}


TurnColor();
function TurnColor(){
    html.setAttribute('trun' , PermisonToPlay);
}


HoldButton.addEventListener("click" , ()=>{
ProcessToChange("continue");
});

function ProcessToChange(lost){
if (PermisonToPlay != "right") {
    PermisonToPlay = "right";
    localStorage.setItem("PermisonToPlay" , PermisonToPlay)
    TurnColor();
    
}else{
    PermisonToPlay = "left";
    localStorage.setItem("PermisonToPlay" , PermisonToPlay)

    TurnColor();
}
console.log(num +""+""+""+""+"+"+"+");

PointSet[num].innerHTML = "0";
if (lost != "lost") {
    player[num].Sum += SumPoint;
    if (player[num].Sum >= 100) {
        alert(player + num+ ""+""+"winnnnnnn")
        refresh();
    }
} 
PointALL[num].innerHTML = player[num].Sum;
if (num == 0) {
    num++;
}else{
    num = 0;
}

SumPoint=0;

console.log(player)

};

Drop.addEventListener("click" , ()=>{
    if (player[num].Sum < 100 ) {
     let Point = parseInt((Math.random() * 6) + 1);
     dice();
     DiceImg[Point-1].style.display = "block";
     SumPoint += Point;
     PointSet[num].innerHTML = `${SumPoint}`;

    if(Point == 1){
       ProcessToChange("lost");
     }

    }else{
        alert("player" +num+ ""+""+"winnnnnnn")
        refresh();
        
    }

});

function dice() {
    for(let i = 0 ; i< DiceImg.length; i++){
        DiceImg[i].style.display = "none";
    }

}

NewGameB.addEventListener("click" , ()=>{
refresh();
})

function refresh() {
    html.setAttribute("trun" , `win-${player[num].side}`);
    setTimeout(()=>{
        TurnColor();
    },4000)

    player = [
        {
        Sum:0,
        Number:1,
        side:"right",
        },{
        Sum:0,
        Number:2,
        side:"left",
        },
    ]
    num =0;
    SumPoint = 0;
    PointSet[0].innerHTML = `${SumPoint}`;
    PointSet[1].innerHTML = `${SumPoint}`;
    PointALL[0].innerHTML = player[num].Sum;
    PointALL[1].innerHTML = player[num].Sum;
    PermisonToPlay = "right";


}