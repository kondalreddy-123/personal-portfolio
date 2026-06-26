let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
let turno=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame=()=>
{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if (turno) {
            box.innerText= "kohli";
              box.style.backgroundColor="blue";
            turno = false;
        }
        else{
            box.innerText= "rohit";
            box.style.backgroundColor="pink";
            turno = true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const enableboxes=()=>{
    for(let box of boxes){
        box.innerText="";
         box.style.backgroundColor="green";

        box.disabled=false; 
    }
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
         box.style.backgroundColor="green";

        box.innerText="";
    }
};
const show=(winner)=>{
    msg.innerText=`congratulations you are Winner, ${winner}`;
    msg.style.fontSize="50px";
    msg.style.backgroundColor="red";
     msg.style.color="aqua";
   msgcontainer.classList.remove("hide");
   disableboxes();
};

const checkwinner=()=>
{
    for(let pattern of win){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
        show(pos1);}
      }
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);