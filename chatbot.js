function chatbot(qaPairs, userQuestion) {
    const normalizeText = (text) => {
      return text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").split(" ");
    };
    
    let bestMatchIndex = -1;
    let highestScore = 0;
  
    const userWords = normalizeText(userQuestion);
  
    for (let i = 0; i < qaPairs.length; i++) {
      const predefinedQuestion = qaPairs[i].question;
      const predefinedWords = normalizeText(predefinedQuestion);
  
      let score = 0;
      for (let word of userWords) {
        if (predefinedWords.includes(word)) {
          score++;
        }
      }
  
      if (score > highestScore) {
        highestScore = score;
        bestMatchIndex = i;
      }
    }
  
    return bestMatchIndex !== -1 ? qaPairs[bestMatchIndex].answer : "Sorry, I don't understand your question.";
  }

  const qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
  ];
  
  // Example user input
  const userQuestion = "What's the weather like today?";
  console.log(chatbot(qaPairs, userQuestion));  // Output: "The weather is sunny."