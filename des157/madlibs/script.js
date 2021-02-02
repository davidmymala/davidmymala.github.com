(function(){
    "use strict";

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");
    const formMain = document.querySelector("#form-main");
    const madlibMain = document.querySelector("#madlib-main");
    const box = document.querySelector("#box");



    myForm.addEventListener("submit", function(event){


        event.preventDefault();
        
        const foode = document.querySelector("#foode").value;
        const food1 = document.querySelector("#food1").value;
        const food2 = document.querySelector("#food2").value;
        const food3 = document.querySelector("#food3").value;
        const food4 = document.querySelector("#food4").value;


        const  output  = [`The <strong>${food1}</strong> was excellent along with <strong>${food2}</strong>, <strong>${food3},</strong> and <strong>${food4}</strong>. The seasoning was on point! I will be looking forward to come again!`, `The <strong>${food1}</strong> was terrible alongside the horrible <strong>${food2}</strong>, <strong>${food3}</strong>, and <strong>${food4}</strong>. The seasoning was terrible. I will not be returning to this establishment.`]; 

        const randomNum = Math.floor(Math.random() * 2)

        const randomOutput = output[randomNum]


        formMain.style.display ="none";
        box.style.background = "#F0DFAA";
        
        madlibMain.style.fontFamily = "Calibri";

        madlibMain.innerHTML += `
        <h1> ${foode} </h1>
        <p> ${randomOutput} </p>
        <a href="index.html"> refresh </a>`

    

        



    

     /* if (noun1 && noun2 && adj1 && verb1 && verb2) {
            var myText = `Here are the words: ${noun1}, ${noun2}, ${adj1}, ${verb1} and ${verb2}`;

        }
        else {
            var myText = "Please give me words so I can make your Mad Lib!";
        }

        madlib.innerHTML = myText;

        let formData = document.querySelectorAll("input[type=text]");

        for (let eachField of formData) {
            eachField.value = "";
        } */

    });


   
})();

