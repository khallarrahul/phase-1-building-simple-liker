// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  mimicServerCall()
  .then(function(data){return data})
  .catch(function(error){
    alert("Error");
    document.body.innerHTML += error.message
    // function hideModal() {return document.querySelector("#modal").classList.add("hidden")}
    // setTimeout(hideModal, 3000)
  })
 
})
//Removes error message after 3 seconds after web page loads

const likeGlyph = document.querySelectorAll(".like-glyph");
console.log(likeGlyph)
likeGlyph.forEach((glyph) => {
  glyph.addEventListener("click", clickFun);
})
function clickFun(e){
  const heart = e.target;
  mimicServerCall()
  .then(() => {
    if(heart.textContent === FULL_HEART){
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart")
    }
  
    else if (heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART;
      heart.classList.add("activated-heart")
    }
  })
  .catch(function(error){
    alert("Error");
    document.body.innerHTML += error.message
    // function hideModal() {return document.querySelector("#modal").classList.add("hidden")}
    // setTimeout(hideModal, 3000)
  })
  // const heart = e.target;
  // console.log(heart.innerHTML)
  // if(heart.textContent === FULL_HEART){
  //   heart.textContent = EMPTY_HEART;
  //   heart.classList.remove("activated-heart")
  // }

  // else if (heart.textContent === EMPTY_HEART){
  //   heart.textContent = FULL_HEART;
  //   heart.classList.add("activated-heart")
  // }
//   if (likeGlyph.innerHTML === FULL_HEART)
//   {
//     likeGlyph.innerHTML = EMPTY_HEART;
//     likeGlyph.classList.remove("activated-heart")
//   }
// else if (likeGlyph.innerHTML === EMPTY_HEART)
// {
//   likeGlyph.innerHTML = FULL_HEART;
//   likeGlyph.classList.add("activated-heart")
// }
// else if (likeGlyph.innerHTML !== FULL_HEART && likeGlyph.innerHTML !== EMPTY_HEART) {
//   console.log("error");
// }

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
