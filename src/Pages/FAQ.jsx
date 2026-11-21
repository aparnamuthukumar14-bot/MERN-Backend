
import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "How can I apply for admission?",
      answer:
        "You can contact the college admissions office or visit the college campus to get information about the admission process and required documents."
    },
    {
      question: "What courses are offered by the college?",
      answer:
        "Bright Valley College offers undergraduate and postgraduate programmes across different academic departments. Contact the admissions office for the current course list."
    },
    {
      question: "How can students access the college portal?",
      answer:
        "Students can visit the College Portal page and use their registered login details. Portal access depends on the account permissions provided by the college."
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "Visit the Login page and select Forgot Password. Follow the instructions shown on the screen. Contact the college administrator if you need further assistance."
    },
    {
      question: "Does the college provide placement support?",
      answer:
        "The college placement department supports students through career guidance, skill development activities, interview preparation and placement-related opportunities."
    },
    {
      question: "How can I contact the college?",
      answer:
        "You can visit the Contact page to find the college contact information and submit an enquiry."
    },
    {
      question: "Can faculty members access the portal?",
      answer:
        "The college portal is designed to support students, faculty members and administrators with relevant information and services."
    },
    {
      question: "Does the college have library facilities?",
      answer:
        "The college provides library-related information through the Library section of the College Portal."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our college.</p>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <h2>How Can We Help You?</h2>
          <p>
            Explore the questions below to learn more about Bright Valley College.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
