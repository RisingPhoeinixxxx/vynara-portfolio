let userName = "";

const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});

function sendMessage(){

    const text = userInput.value.trim();

    if(text === "") return;

    addUserMessage(text);

    if(userName === ""){

        userName = text;

        setTimeout(() => {

            addAIMessage(`Nice to meet you, ${userName} 👋

I'm VIN-AI, the intelligent digital assistant of C L Vinaya.

You can ask me about:

🚀 Projects
💻 Skills
🎓 Education
📜 Certifications
🎯 Goals
🤝 Interview Questions
📞 Contact Information

What would you like to know?`);

        },500);

        userInput.value = "";

        return;
    }

    processQuestion(text);

    userInput.value = "";
}

function addUserMessage(text){

    const div = document.createElement("div");

    div.className = "message user";

    div.innerHTML = text;

    chatBody.appendChild(div);

    scrollToBottom();
}

function addAIMessage(text){

    const div =
    document.createElement("div");

    div.className =
    "message ai";

    div.innerHTML =
    text.replace(/\n/g,"<br>");

    chatBody.appendChild(div);

    scrollToBottom();

    const cleanText =
    text.replace(/🚀|💻|🎓|📜|🎯|📞|🤝/g,'');

    speak(cleanText);
}

function processQuestion(question){

    const q = question.toLowerCase();

    /* INTERVIEW QUESTIONS */
    if(
    q.includes("interview")
){

    addAIMessage(`I can help with interview preparation.

Try asking:

• Tell me about yourself
• What are your strengths?
• What are your weaknesses?
• Why should we hire you?
• Tell me about teamwork
• What are your career goals?
• What technologies do you know?

I'm ready whenever you are! 🚀`);

    return;
}

    if(
        q.includes("introduce yourself") ||
        q.includes("tell me about yourself")
    ){

        addAIMessage(interview.introduction);
        return;
    }

    if(q.includes("strength")){

        addAIMessage(interview.strengths);
        return;
    }

    if(q.includes("weakness")){

        addAIMessage(interview.weaknesses);
        return;
    }

    if(q.includes("teamwork")){

        addAIMessage(interview.teamwork);
        return;
    }

    if(q.includes("leadership")){

        addAIMessage(interview.leadership);
        return;
    }

    if(
        q.includes("hire you") ||
        q.includes("why should we hire you")
    ){

        addAIMessage(interview.hire);
        return;
    }

    if(q.includes("motivation")){

        addAIMessage(interview.motivation);
        return;
    }

    if(q.includes("goal")){

        addAIMessage(interview.goals);
        return;
    }

    if(q.includes("future")){

        addAIMessage(interview.future);
        return;
    }

    if(
        q.includes("proud project") ||
        q.includes("best project")
    ){

        addAIMessage(interview.proudProject);
        return;
    }

    if(
        q.includes("technology") ||
        q.includes("skills")
    ){

        addAIMessage(interview.technologies);
        return;
    }

    /* KNOWLEDGE BASE */

    const response =
    searchKnowledge(question);

    if(response){

        addAIMessage(response);
        return;
    }

    addAIMessage(`That's a great question, ${userName}.

My knowledge base is still expanding.

Try asking about:

🚀 Projects
💻 Skills
🎓 Education
📜 Certifications
🎯 Goals
🤝 Interview Questions
📞 Contact`);
}

function scrollToBottom(){

    chatBody.scrollTop = chatBody.scrollHeight;
}

document
.querySelectorAll(".suggestion-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.innerText;

        if(userName === ""){

            addAIMessage("Please tell me your name first 😊");

            return;
        }

        processQuestion(text);

    });

});