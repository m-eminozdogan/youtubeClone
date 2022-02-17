import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos";
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
  "University",
];
function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
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
