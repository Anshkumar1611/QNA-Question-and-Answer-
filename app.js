// traversing the dom

//1. target + button - button and questions for traversing
// jb + btn click ho to - wali dikhe ---toggle use kro

const questionBtn=document.querySelectorAll(".question-btn");

questionBtn.forEach((btn)=> {
    btn.addEventListener("click",function(e){
        const question= e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})






// using selectors inside the element


// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

