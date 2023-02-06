const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        optionA: "largest railway station",
        optionB: "highest railway station",
        optionC: "longest railway station",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Exposure to sunlight helps a person improve his health because",
        optionA: "the infrared light kills bacteria in the body",
        optionB: " resistance power increases",
        optionC: "the pigment cells in the skin get stimulated and produce a healthy tan",
        optionD: "None of the mentioned",
        correctOption: "optionD"
    },

    {
        question: "For galvanizing iron which of the following metals is used?",
        optionA: "Aluminium",
        optionB: "Copper",
        optionC: "Lead",
        optionD: "Zinc",
        correctOption: "optionD"
    },

    {
        question: "'.MOV' extension refers usually to what kind of file?",
        optionA: "Image file",
        optionB: "Animation/movie file",
        optionC: "Audio file",
        optionD: "MS Office document",
        correctOption: "optionB"
    },

    {
        question: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
        optionA: "URL (Universal Resource Locator)",
        optionB: "LAN (Local Area Network)",
        optionC: "WAN (Wide Area Network)",
        optionD: "World Wide Web",
        correctOption: "optionC"
    },

    {
        question: "The true discount on a bill of Rs. 540 is Rs. 90. The banker's discount is:",
        optionA: "Rs. 60",
        optionB: "Rs. 108",
        optionC: "Rs. 110",
        optionD: "Rs. 112",
        correctOption: "optionB"
    },

    {
        question: "Find the correctly spelt words. ",
        optionA: "Ommineous",
        optionB: "Omineous",
        optionC: "Ominous",
        optionD: "Omenous",
        correctOption: "optionC"
    },

    {
        question: "Find the correctly spelt words.",
        optionA: "Asspersion",
        optionB: "Voluptuous",
        optionC: "Voguei",
        optionD: "Equestrain",
        correctOption: "optionB"
    },

    {
        question: "Find the correctly spelt words.",
        optionA: "Lckadaisicle",
        optionB: "Lackdaisical",
        optionC: "Lackadisical",
        optionD: "Lackadaisical",
        correctOption: "optionD"
    },

    {
        question: "Find the correctly spelt words.",
        optionA: "Eflorescence",
        optionB: "Efllorescence",
        optionC: "Efflorescence",
        optionD: "Efflorascence",
        correctOption: "optionC"
    },

    {
        question: "The fields in an interface are implicitly specified as",
        optionA: "static only",
        optionB: "protected ",
        optionC: "private",
        optionD: "both static and final",
        correctOption: "optionD"
    },

    {
        question: "Which attribute is used to provide an advisory text about an element or its contents?",
        optionA: "tooltip",
        optionB: "dir",
        optionC: "title",
        optionD: "head",
        correctOption: "optionC"
    },


    {
        question: "Which of the following attributes of text box control allow to limit the maximum character?",
        optionA: "size",
        optionB: "len",
        optionC: "maxlength",
        optionD: "all of these",
        correctOption: "optionC"
    },

    {
        question: "Web pages starts with which ofthe following tag?",
        optionA: "<:Body>",
        optionB: "<:Title>",
        optionC: "<:Html>",
        optionD: "<:Form>",
        correctOption: "optionC"
    },

    {
        question: "HTML is a subset of",
        optionA: "SGMT",
        optionB: "SGML",
        optionC: "SGMD",
        optionD: "None of these",
        correctOption: "optionB"
    },

    {
        question: " <a> and </a> are the tags used for",
        optionA: "Adding image",
        optionB: "Aligning text",
        optionC: "Audio-voiced text",
        optionD: "Adding links to your page",
        correctOption: "optionD"
    },

    {
        question: " JavaScript arrays are written with _____Adding image",
        optionA: "round brackets ()",
        optionB: "curly brackets {}",
        optionC: "double quotes  ",
        optionD: "square brackets []",
        correctOption: "optionD"
    },

    {
        question: "Which JavaScript operator is used to determine the type of a variable?",
        optionA: "typeof",
        optionB: "TypeOf",
        optionC: "typeOf",
        optionD: "sizeof",
        correctOption: "optionA"
    },

    {
        question: "In JavaScript a variable contains one value while an object may contain ___.",
        optionA: "One value",
        optionB: "Two values",
        optionC: "Three values",
        optionD: "Many values",
        correctOption: "optionD"
    },

    {
        question: "Which JavaScript method is used to get a number as a string? ?",
        optionA: "toString()",
        optionB: "intToString()",
        optionC: "parseInteger()",
        optionD: "All of the above",
        correctOption: "optionA"
    },

    {
        question: "DTD's are",
        optionA: "Part of Name spaces",
        optionB: "Document type declaration in XML",
        optionC: "Ways to create templates for out does type",
        optionD: "None of these",
        correctOption: "optionC"
    },

    {
        question: "A much better approach to establish the base URL is to use ?",
        optionA: "HEAD element",
        optionB: "BASE element",
        optionC: "both (a) and (b)",
        optionD: "none of these",
        correctOption: "optionB"
    },

    {
        question: "NetBIOS is developed by:?",
        optionA: "IBM",
        optionB: "Microsoft",
        optionC: "Sun",
        optionD: "None of these",
        correctOption: "optionA"
    },

    {
        question: "In Java byte, short, int and long all of these are ?",
        optionA: "	signed",
        optionB: " 	unsigned",
        optionC: "	Both of the above",
        optionD: "None of these",
        correctOption: "optionA"
    },

    {
        question: "Suspend thread can be revived by using ?",
        optionA: "yield() method",
        optionB: "Suspend() method",
        optionC: "	start() method",
        optionD: "resume() method",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}