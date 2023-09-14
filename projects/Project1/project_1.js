const body  = document.querySelector("body")                // selected body tag
const buttons = document.querySelectorAll(".button")        // selected all tags with classname as button

buttons.forEach(button => {                                 // traversed over all the tags with button class
    button.addEventListener('click',function(e){            // Listens to button click event on each tag
        body.style.backgroundColor = e.target.id            // changing backgroundcolor of body with id
    })
});

