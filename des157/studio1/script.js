(function(){
    "use strict";

    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        const noun1 = document.querySelector("#noun1").value;
        const noun2 = document.querySelector("#noun2").value;
        const adj1 = document.querySelector("#adj1").value;
        const verb1 = document.querySelector("#verb1").value;


        if (noun1 && noun2 && adj1 && verb1) {
            var myText = `Here are the words: ${noun1}, ${noun2}, ${adj1}, and ${verb1}`;

        }
        else {
            var myText = "Please give me words so I can make your Mad Lib!";
        }

        madlib.innerHTML = myText;

        let formData = document.querySelectorAll("input[type=text]");

        for (let eachField of formData) {
            eachField.value = "";
        }

    });


   
})();