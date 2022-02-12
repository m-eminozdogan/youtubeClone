import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "Not at all",
  "Random",
  "Bored",
  "Funny",
  "Science",
  "Oldschool",
  "G-Funk",
  "Cypher",
  "Jazz-rap",
  "İstanbul",
  "Flow",
  "Mountain",
  "Gaming",
  "DIY",
  "React",
  "CSS",
  "Mobile",
  "Responsive",
  "University"
];
function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
          key={index}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
export default CategoriesBar;
