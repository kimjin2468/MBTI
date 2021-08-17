const startBtnEl = document.querySelector("#start");
const mainEl = document.querySelector("#main")
const qna = document.querySelector("#qna")

function addAnswer(answerText,qIdex) {
  let a = document.querySelector('.aBox');
  let answer = document.createElement("button");
  answer.classList.add("answerList");
  a.appendChild(answer);
  answer.innerText = answerText;

  answer.addEventListener("click", function() {
    let children = document.querySelectorAll(".answerList");
    for(let i=0; i<children.length; i++){
      children[i].disabled = true;
      children[i].style.display = "none";
    }
    goNext(++qIdex)
  }, false)
}


function goNext(qIdex) {
  let q = document.querySelector(".qBox");
  q.innerText = qnaList[qIdex].q;
  for(let i in qnaList[qIdex].a){
    addAnswer(qnaList[qIdex].a[i].answer, qIdex);
  }
}


function begin() {
  mainEl.style.WebkitAnimation = "fadeOut 1s";
  mainEl.style.animation = "fadeOut 1s";
   setTimeout(() => {
    
    qna.style.animation = "fadeIn 1s";
    qna.style.WebkitAnimation ="fadeIn 1s";
    setTimeout(() => {
      mainEl.style.display = "none";
      qna.style.display="block"
    },450)
    let qIdex=0;
    goNext(qIdex);
   },450)
 
  
}

console.log(qna)