let questions = [
    {
        id: 1,
        question: "What are the effects of eating disorders?",
        answer:"Worrying about weight and relationship with food",
        options: [
            "Interest in eating unhealthy foods",
            "Obsession about arranging meals weeks in advance",
            "Worrying about weight and relationship with food",
            "Fear of consuming what is affordable"
        ]   
    },
    {
        id: 2,
        question: "In a year, how many people suffer from a mental health problem?",
        answer: "1 out of 4",
        options: [
          "1 out of 6",
          "1 out of 3",
          "1 out of 4",
          "1 out of 10"
        ]
      },
      {
        id: 3,
        question: "What physical symptoms of depression don't exist?",
        answer: "Getting more sleep",
        options: [
          "Getting more sleep",
          "Decreased desire for sex",
          "Constipation",
          "Appetite loss"
        ]
      },
      {
        id: 4,
        question: "What should you avoid doing if you're having a conversation regarding someone's mental health?",
        answer: "Tell them you'll bring it up with other people",
        options: [
          "Reassure the individual",
          "Tell them you'll bring it up with other people",
          "Pose simple questions and invite people to share their experiences",
          "Select a suitable location that makes them feel at ease"
        ]
      },
      {
        id: 5,
        question: "How many people have a mental health problem globally?",
        answer: "450 million",
        options: [
          "450 million",
          "300 million",
          "100 million",
          "550 million"
        ]
      },
      {
        id: 6,
        question: "What is mental health?",
        answer: "An essential part of overall health and wellbeing",
        options: [
          "More than the absence of mental disorders",
          "An essential part of overall health and wellbeing",
          "A condition that only affects some people",
          "None of the above"
        ]
      },
      {
        id: 7,
        question: "Poor mental health raises the chance of chronic physical ailments like",
        answer: "All of the above",
        options: [
          "Heart disease",
          "Stroke",
          "Cancer",
          "All of the above"
        ]
      },
      {
        id: 8,
        question: "Sigmund Freud believed that human personality consists of three elements: Id, Ego and?",
        answer: "Superego",
        options: [
          "Superego",
          "Spirit",
          "Instinct",
          "Soul"
        ]
      },
      {
        id: 9,
        question: "Half of all mental illness occurs before a person turns ___ years old.",
        answer: "14",
        options: [
          "18",
          "21",
          "14",
          "30"
        ]
      },
      {
        id: 10,
        question: "Which of the following are real illnesses?",
        answer: "All of above",
        options: [
          "Diabetes",
          "Anxiety",
          "Flu",
          "All of above"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "result.html";
    }
    console.log(question_count);

let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points++
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}