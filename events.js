//not very feasible  should be avoided as it provides less features

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

////////////////////////////////// best method ////////////////////////////

// it takes three parameters, event name, call back function and last one is false by default

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById("ul").addEventListener(    /// parent
  "click",
  function (e) {
    console.log("Parent element clicked");
  },
  false
);

document.getElementById("owl").addEventListener(   /// child
  "click",
  function (e) {
    console.log('Owl clicked');
  },
  false
);

// Output: Owl Clicked \n Parent element clicked

// if we pass false as third arg then eventBubbling happens inner element  to  outer
//  if we pass true  then event capturing happens from outer to inner element

document.getElementById("owl").addEventListener(   /// child
  "click",
  function (e) {
    console.log('Owl clicked');
    e.stopPropagation();  //stops event from propogating to outer element
  },
  false
);


document.getElementById("images").addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        const removeIt = e.target.parentNode
        removeIt.remove();
    }
},false)