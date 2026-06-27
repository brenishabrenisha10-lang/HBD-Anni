function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");

    startConfetti();
}

function showPhoto() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");

    startConfetti();
}

function startConfetti() {

    const container = document.getElementById("confetti");

    container.innerHTML = "";

    for(let i=0;i<120;i++){

        let confetti=document.createElement("div");

        confetti.innerHTML="🎉";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-20px";
        confetti.style.fontSize=(15+Math.random()*20)+"px";
        confetti.style.animation=`fall ${3+Math.random()*2}s linear forwards`;

        container.appendChild(confetti);
    }
}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
