let boxes =document.querySelectorAll(".box");
let resetBtn= document.getElementById('reset');
let newGameBtn= document.getElementById("new-game");
let msgContainer= document.querySelector(".mas-contaienr");
let msg = document.querySelector( ".msg" ); 
let trunO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],  
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerHTML="O";
            trunO=false;


        }else{
            box.innerHTML="X";
            trunO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disabledBoxes = () =>{
    for(let box of boxes){
        boxes.disabled=true;
    }
}
const enabledBoxes = () =>{
    for(let box of boxes){
        boxes.disabled=false;
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
    msg.innerText= "Congratulations, Winner is $(winner)";
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!="" && pos2!=""&& pos3!=""){
            console.log("Winner" , pos1);
            disabledBoxes();
            showWinner(pos1);
        }
    }
};
const r=()=>{
    trunO=true;
    enabledBoxes();
    msgContainer.classList.add( "hide");
}
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);