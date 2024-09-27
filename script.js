let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#comp");
const gencompchoice = () => {
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const draw = () => {
    msg.innerText="IT IS A DRAW . PLAY AGAIN";
    msg.style.backgroundColor = "black";
};
const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        user++;
        userscorepara.innerText=user;
        msg.innerText=`YOU WIN! YOUR ${userchoice} defeated ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        compscorepara.innerText=comp;
        msg.innerText=`YOU LOSE ${compchoice} defeated YOUR ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame=(userchoice) => {
       console.log("User choice=",userchoice);
       const compchoice = gencompchoice();
       console.log("Comp choice=",compchoice);

       if(userchoice === compchoice) {
         draw();
       }
       else{
        let userwin = true;
        if(userchoice === "stone"){
            userwin = compchoice === "paper" ? false : true;
        }
       else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
       }
       else{
        userwin = compchoice === "stone" ? false : true;
       }
       showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
     playGame(userchoice);
    });
});