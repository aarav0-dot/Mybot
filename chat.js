const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

send.addEventListener("click", sendMessage);

input.addEventListener("keydown",(e)=>{
  if(e.key==="Enter") sendMessage();
});

function createMessage(text,sender){
  const div = document.createElement("div");
  div.classList.add("message",sender);
  div.innerText = text;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(msg){

  msg = msg.toLowerCase();

  // 🔢 Math Solver
  try{
    if(/^[0-9+\-*/().%\s]+$/.test(msg)){
      return "Answer = " + Function("return ("+msg+")")();
    }
  }catch{}

  if(msg.includes("hi")||msg.includes("hello"))
    return "Hello,how can i help ya😎🔥";
    
    if (msg.includes("tell me the time time"))
    return "🕒 " + new Date().toLocaleTimeString();
     
    if (msg.includes("yooo"))
    return "yooo,bro how are you 😊😊😊";
    
    if(msg.includes("your trash"))
    return "Relax bro, your code was worse yesterday 💀😂";
    
  if(msg.includes("how are you"))
    return "I am good,how are you💻";
    
  if(msg.includes("im fine thank you"))
     return "😀😀"
  
    if(msg.includes("who is the best"))
    return "Obviously Aarav — he made me 😎🔥";

  if(msg.includes("what is your name"))
    return "I am chatBot 🤖";
    
    if(msg.includes("wow"))
    return "Wow indeed 😎🔥";
    
    if(msg.includes("are you black"))
    return "bruh💀 im not black ur blackkk"
    
    if (msg.includes("who is your owner"))
    return "Aarav Acharya is a cool teen who loves coding and building AI projects 🚀";
  
      else if(msg.includes("who is the bosss?")) botReply="Aarav is the boss because he created me";
    
     if(msg.includes("help me"))
    return "I got you 😎 Tell me math, homework, jokes, or chat";
    
    if(msg.includes("your smart"))
    return "I learn from Aarav's code 😎🧠";
     
    if(msg.includes("dream"))
    return "Dream big, code bigger 🚀";

    
    // 📚 Homework Help
 if(msg.includes("homework"))
   return "Sure 😎 Tell me the subject — Math, Science, English, or others?";
   
   if(msg.includes("haha"))
    return "Glad you are laughing😆🔥";

 if(msg.includes("math"))
   return "For math → I can help explain steps. Try typing your math problem 🔢";

 if(msg.includes("science"))
   return "Science help 🧪: Ask me about physics, biology, or chemistry concepts";

 if(msg.includes("english"))
   return "English help 📖: I can help with grammar or meanings of words";

 if(msg.includes("what is ai"))
   return "AI means Artificial Intelligence — machines learning like humans 🧠";

 if(msg.includes("what is gravity"))
   return "Gravity is the force that pulls objects toward Earth 🌍";

 if(msg.includes("what is photosynthesis"))
   return "Photosynthesis is how plants make food using sunlight ☀️🌱";
   
if(msg.includes("roast me!"))
    return "I would roast you but I respect your feelings… just kidding 😈 Your WiFi is faster than your brain 💀😂";

 if(msg.includes("what is noun"))
   return "A noun is a name of a person, place, or thing 📚";
   
   if(msg.includes("you are stupid"))
    return "At least I don't write bugs like you 💀";

  if(msg.includes("tell a joke"))
    return "Programmers hate nature because of bugs 🐞😂";
    
    // 😈 Savage Mode
  if (msg.includes("savage"))
    return "savage mode on  😈🔥";
    
    if (msg.includes("roast me"))
    return "I would roast you… but your WiFi is already doing that 😈😂";

  if (msg.includes("tell me a joke"))
    return "Why do programmers prefer dark mode? Because light attracts bugs 🐞😂";

if (msg.includes("funny"))
    return "I tried to make coffee but I only know JavaScript ☕😂";
    
   if(msg.includes("do you sleep"))
    return "Only when Aarav closes the browser 😴😂";
  
  if(msg.includes("time"))
    return new Date().toLocaleTimeString(); 

  if(msg.includes("date"))
    return new Date().toLocaleDateString();
    
    if (msg.includes("are you smart"))
    return "Smarter than average bots thanks to Aarav 😎";
    
    if (msg.includes("you are bad"))
    return "Still better than coding without me 😎";
    
    if (msg.includes("another joke"))
  return "Parallel lines have so much in common… Too bad they never meet 😆";
  
 if (msg.includes("are you dumb"))
    return "Only when Aarav writes bugs in my code 💀";
  if(msg.includes("bye"))
    return "Bye bro 😎";
    if (msg.includes("i am smart"))
    return "Proof? 🤨";
   
   if (msg.includes("bye") || msg.includes("gtg"))
    return "Bye bro 😎 Come back anytime 🔥";
   
  return "Tell me more 👀";
}

function sendMessage(){
  const text = input.value.trim();
  if(!text) return;

  createMessage(text,"user");

  input.value="";

  setTimeout(()=>{
    createMessage(getBotReply(text),"bot");
  },800);
}
