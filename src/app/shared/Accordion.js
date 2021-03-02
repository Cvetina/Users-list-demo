import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleOpenPosts = () => setIsShown((isOpen) => !isOpen);

  return (
    <div className="accordion-container">
      <div className="accordion-toggle boundaries" onClick={toggleOpenPosts}>
        <span>{title}</span>
        <span className={isShown ? "arrow-up" : "arrow-down"} />
      </div>
      {isShown && children}
    </div>
  );
};


export default Accordion;
