import React, { useState } from "react";
import "./FAQ.css"; // Import your custom styles if necessary


const faqData = [
  { question: "Why should i hire marcaids for handling my digital marketing?", answer: "Hiring Marcaids means partnering with a team that understands the unique needs of their clients. We specialize in crafting tailored marketing strategies to build your brand, increase your visibility, and attract your ideal clients." },
  { question: "How much do you charge your clients?", answer: "Our offerings can be customised or tailored as per your requirements. Whether you wish to choose full fledged digital marketing or a specialized service, we're here to offer you the best ones." },
  { question: "What are the metrics used by you to measure success of a campaign/ROI", answer: "The metrics we use to measure the success of our campaigns include: 1. Click through rate,2. ROAS,3. Impressions,4. Cost per thousand impressions,5. Cost per click,6. Cost per acquisition,7. Cost per lead,8. Ad spends"},
  { question: "Why my business needs digital marketing and what kind of impact can I expect if I onboard with Marcaids?", answer: "Every business whether small or big needs digital marketing in today's time to ensure better visibility and awareness in a highly competitive market. Marcaids will work on every aspect of your digital marketing strategies to ensure your growth is on a steady path and ahead of other competitors. " },
  { question: "Have you worked with any interior designer before? If yes which services did you cater to?", answer: "Yes, we have worked with interior designers, providing services like social media marketing, SEO optimization, PPC advertising, and portfolio development. Our goal is to help designers build a strong online presence and attract more clients through effective digital strategies. " },
  { question: "Do you have a portfolio/testimonials sharing your work as a marketing agency and what kind of results have you generated?", answer: "ans" },
  { question: "How are you gonna help us with closing clients?", answer: "We help you close clients by following a simple, effective process. First, we conduct in-depth market research to understand your audience and identify what they're looking for. Then, we create a compelling offer tailored to meet their needs. Finally, we connect you directly to qualified leads, making the process smooth and hassle-free so you can focus on doing what you do best: delivering amazing design services." },
  // Add more questions and answers here
];


const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close the currently opened FAQ
    } else {
      setExpandedIndex(index); // Open the clicked FAQ
    }
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq">
      <h2>FAQs</h2>
      <h1>Frequently Asked Questions</h1>
      <p>Have Questions? We're here to help.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className='faq-search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {/* FAQ List */}
      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{expandedIndex === index ? "-" : "+"}</span>
              </div>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
