import React, { useState } from "react";
import { FaArrowUp, FaQuestionCircle, FaRegSmile } from "react-icons/fa";
import { getAnswer } from "./api/api";
import faq from "./api/faq.json";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const handleOnchange = (e) => setQuestion(e.target.value);

  const handleFormsubmit = async (e) => {
    e.preventDefault();
    if (!question) return;
    const userQuestion = question.trim();
    setisLoading(true);
    try {
      const resp = await getAnswer(userQuestion);
      if (resp.status === 200) {
        const { answer } = resp.data;
        setisLoading(false);
        setAnswer(answer);
      }
    } catch (error) {
      setisLoading(false);
      return;
    } finally {
      setisLoading(false);
    }
  };

  const displayList = answer.length === 0 ? faq : answer;

  return (
    <div
      className="min-h-screen flex flex-col items-center gap-10 px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-b 
    from-black to-blue-900"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl text-center px-6 sm:px-8 md:px-12 py-10 sm:py-12 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700">
          🤖 Smart FAQ Bot
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
          Type your question and get instant answers from our knowledge base.
        </p>

        {/* Input Form */}
        <form
          onSubmit={handleFormsubmit}
          className="flex w-full mt-5 border-0 border-b-1 border-blue-400  overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <input
            type="text"
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 outline-none bg-transparent text-white  placeholder-gray-400 text-sm sm:text-base md:text-lg"
            placeholder="Search FAQs..."
            value={question}
            onChange={handleOnchange}
          />
        </form>
      </div>

      {/* FAQ List */}
      <div
        className={
          !isLoading &&
          `faq-container text-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-xl w-full max-w-3xl overflow-y-auto max-h-[60vh]`
        }
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full py-10">
            <div className="animate-spin h-10 w-10 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full"></div>
          </div>
        ) : (
          <ul className="space-y-3 sm:space-y-4 md:space-y-5">
            {displayList.map((item, index) => (
              <li
                key={item.id}
                className="p-3  text-white sm:p-4 md:p-5 border-l-4 border-blue-600 rounded-lg  transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1 sm:mb-2 font-semibold">
                  <FaQuestionCircle className="text-blue-600" />
                  <span className="text-sm sm:text-base md:text-lg">
                    Question {index + 1}:
                  </span>
                </div>
                <p className="ml-5 text-xs sm:text-sm md:text-base">
                  {item.question}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-3 text-green-600 font-medium">
                  <FaRegSmile />
                  <span className="text-sm sm:text-base md:text-lg">
                    Answer:
                  </span>
                </div>
                <p className="ml-5 text-xs sm:text-sm md:text-base ">
                  {item.answer}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
