let answers = ["It is certain.","It is decidedly so.","Without a doubt.",
"Yes – definitely.","You may rely on it.","As I see it, yes.","Most likely.",
"Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.",
"Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.",
"My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]

window.onload = function() {
 let eight = document.getElementById("eight");
 let answer = document.getElementById("answer");
 let eightball = document.getElementById("eight-ball");
 let question = document.getElementById("question");

 eightball.addEventListener("click", function(){
     if (question.value.length < 1) {
         alert("enter question");
     } else {
        eight.innerText = "";
        let num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerText = answers(num);
     }
 })
}; 