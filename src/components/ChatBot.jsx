import React, { useState, useRef, useEffect } from "react";

const BasicChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSubmit = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      const newBotMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      scrollToBottom(); // Scroll to the bottom after adding the bot response
    }, 500);
    setInput("");
  };

  const generateBotResponse = (userInput) => {
    // Define your question-answer pairs here
    const qaPairs = [
      {question: "What is the function of a court?",
        
        answer:
          "Courts serve as forums for resolving disputes, interpreting laws, and ensuring justice is served.",
      },
      {
        question: "What types of cases do courts handle?",
        answer:
          "Courts handle a wide range of cases, including criminal cases, civil cases, family law cases, and administrative cases.",
      },
      {
        question: "How much the fee does the lawyer get from us?",
        answer:
          "Well, the fees for a lawyer can vary depending on the type of case and the lawyer's experience. It's best to consult with a lawyer directly to get an accurate estimate.",
      },

      // Add more question-answer pairs as needed
    ];

    // Search for a matching question and return the corresponding answer
    const matchedPair = qaPairs.find(
      (pair) => pair.question.toLowerCase() === userInput.toLowerCase()
    );
    return matchedPair
      ? matchedPair.answer
      : "I'm sorry, I don't understand that question.";
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === "user" ? (
              <div className="user-message">
                <div className="user-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ) : null}
            {message.sender === "bot" ? (
              <div className="bot-message">
                <div className="bot-icon">
                  <img
                    src="assets\chatbot logo.jpg"
                    style={{ width: "30px" }}
                  />
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ) : null}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMessageSubmit();
            }
          }}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default BasicChatbot;
