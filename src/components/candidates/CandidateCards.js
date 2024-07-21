import React, { useState, useEffect } from "react";
import CRCardItem from "./CandidateCardItems";
import "../CRCards.css";
import Modal from "../Modal";
import HelpIcon from '../HelpIcon';

const cardData = [
  
  {
    id: 1,
    title: "Card 1",
    src: "./photo/candidate1.jpg",
    label: "Open to Network",
    name: "Bill Jobs",
    contact: "bill.jobs@email.com",
    skills: ["Kubernetes", "Java"],
    education: ["Bachelor"],
    experience: 0,
  },
  {
    id: 2,
    title: "Card 2",
    src: "./photo/candidate2.jpg",
    label: "Open to Network",
    name: "Jeffery Mushu",
    contact: "jeffery.mushu@email.com",
    skills: ["C++", "Java"],
    education: ["Masters"],
    experience: 1,
  },
  {
    id: 3,
    title: "Card 3",
    src: "./photo/candidate3.jpg",
    label: "Open to Network",
    name: "Narandra Okonwo",
    contact: "narandra.okonwo@email.com",
    skills: ["C++", "Docker"],
    education: ["Bachelor"],
    experience: 4,
  },
  {
    id: 4,
    title: "Card 4",
    src: "./photo/candidate4.jpg",
    label: "Open to Network",
    name: "Melon Musk",
    contact: "melon.musk@email.com",
    skills: ["Java", "Python"],
    education: ["Masters"],
    experience: 5,
  },
  {
    id: 5,
    title: "Card 5",
    src: "./photo/candidate5.jpg",
    label: "Open to Network",
    name: "Olivia Lewis",
    contact: "olivia.lewis@email.com",
    skills: ["Angular", "React.js", "C++"],
    education: ["PHD"],
    experience: 6,
  },
  {
    id: 6,
    title: "Card 6",
    src: "./photo/candidate6.jpg",
    label: "Open to Network",
    name: "Dav Karlsson",
    contact: "dav.karlsson@email.com",
    skills: ["Python", "Java", "C++"],
    education: ["Bachelor"],
    experience: 3,
  },
];

const cardText = [
  { id: 1, text: " I have a strong understanding of Kubernetes and Java. I am passionate about writing clean, efficient code and continuously learning new technologies to stay updated in the ever-evolving tech industry. I thrive in collaborative environments and am eager to contribute my skills to a dynamic team." },
  { id: 2, text: "My experience includes managing social media campaigns, creating content, and utilizing SEO best practices to increase online visibility. I am proficient in using tools such as C++, Java, and their applications on various social media platforms. I am highly organized, detail-oriented, and enjoy working in fast-paced environments where I can apply my creativity and strategic thinking to deliver measurable results." },
  { id: 3, text: "I excel in agile and waterfall methodologies and have a proven track record of implementing process improvements that enhance productivity and efficiency. I am a strong leader and team player, committed to driving project success and achieving organizational goals." },
  { id: 4, text: "I am dedicated to delivering high-quality designs that meet client needs and exceed expectations. I am excited to bring my creativity and technical skills to a dynamic team where I can contribute to impactful design projects." },
  { id: 5, text: "With a strong analytical background and three years of experience as a data analyst, I specialize in transforming complex data into actionable insights. My expertise includes data visualization, statistical analysis, and proficiency in tools such as React, SQL, and Angular. I have a keen ability to identify trends and patterns that drive business decisions and improve performance. I am highly detail-oriented and enjoy working in environments where I can leverage my analytical skills to solve problems and support data-driven strategies." },
  { id: 6, text: "My background includes handling inquiries, resolving issues, and ensuring customer satisfaction through effective communication and problem-solving skills. I am proficient in using CRM software, including Salesforce and Zendesk, and have a proven track record of meeting and exceeding performance metrics. I am dedicated to delivering a positive customer experience." }
];

// function CandidateCards() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [cardDetails, setCardDetails] = useState("");
//   const [filterSkill, setFilterSkill] = useState("");
//   const [filterEducation, setFilterEducation] = useState("");
//   const [filterExperience, setFilterExperience] = useState("");

function CandidateCards({ setSkillsData, displayCards = true }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardDetails, setCardDetails] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [filterEducation, setFilterEducation] = useState("");
  const [filterExperience, setFilterExperience] = useState("");

  const openModal = (card) => {
    const details = cardText.find((text) => text.id === card.id);
    setSelectedCard(card);
    setCardDetails(details ? details.text : ""); // Fallback to empty string if details are not found
  };

  const closeModal = () => {
    setSelectedCard(null);
    setCardDetails("");
  };

  const handleSkillChange = (event) => {
    setFilterSkill(event.target.value);
  };

  const handleEducationChange = (event) => {
    setFilterEducation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setFilterExperience(event.target.value);
  };

  const resetFilters = () => {
    setFilterSkill("");
    setFilterEducation("");
    setFilterExperience("");
  };

  const filteredCards = cardData.filter((card) => {
    const matchesSkill = !filterSkill || card.skills.includes(filterSkill);
    const matchesEducation =
      !filterEducation || card.education.includes(filterEducation);
    const matchesExperience =
      !filterExperience || card.experience.toString() === filterExperience;
    return matchesSkill && matchesEducation && matchesExperience;
  });

  // Extract and set skills data
  useEffect(() => {
    const skillsMap = {};
    cardData.forEach((card) => {
      card.skills.forEach((skill) => {
        if (!skillsMap[skill]) {
          skillsMap[skill] = 0;
        }
        skillsMap[skill] += 1;
      });
    });
    setSkillsData(skillsMap);
  }, [setSkillsData]);

  const tooltipContent = [
    "The \"Select Skill\" is used to choose the skill you're interested in.",    
    "The \"Select Education\" is used to choose the education level you're be interested in (ex: Bachelors).",
    "The \"Select Experience\" is used to choose the years of experience you want.",
    "The \"Reset\" is used to clear all fields and reset to original.",
    "You may click on the candidate's card to get the email and learn additional information."
  ];



  return (
    <div className="cards-container">
        {displayCards && (
        <>
          <div className="filters">
            <select value={filterSkill} onChange={handleSkillChange}>
              <option value="">Select Skill</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="Kubernetes">Kubernetes</option>
              <option value="Angular">Angular</option>
              <option value="React.js">React.js</option>
            </select>
            <select value={filterEducation} onChange={handleEducationChange}>
              <option value="">Select Education</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
              <option value="PHD">P.H.D.</option>
            </select>
            <select value={filterExperience} onChange={handleExperienceChange}>
              <option value="">Select Experience</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
            </select>
            <button onClick={resetFilters}>Reset</button>
            <HelpIcon tooltipContent={tooltipContent}/>
          </div>

          <div className="card-wrapper">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <CRCardItem
                  key={card.id}
                  src={card.src}
                  title={card.title}
                  label={card.label}
                  name={card.name}
                  skills={card.skills}
                  contact={card.contact}
                  education={card.education}
                  experience={card.experience}
                  onClick={() => openModal(card)}
                />
              ))
            ) : (
              <p>No cards match the selected filters.</p>
            )}
          </div>
        </>
      )}

      <Modal show={selectedCard !== null} onClose={closeModal}>
        {selectedCard && (
          <div>
            <h2>{selectedCard.name}</h2>
            <p>{selectedCard.text}</p>
            <ul className="details-list">
              <li>
                <strong>Skills:</strong>{" "}
                {selectedCard.skills.length > 0
                  ? selectedCard.skills.join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Education:</strong>{" "}
                {selectedCard.education.length > 0
                  ? selectedCard.education.join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Experience:</strong>{" "}
                {typeof selectedCard.experience === "number"
                  ? `${selectedCard.experience} years`
                  : selectedCard.experience.join(", ")}
              </li>
              <li>
                <strong>Contact:</strong>{" "}
                {selectedCard.contact}
              </li>
              <li>
                <strong>About {selectedCard.name}: </strong>
                {cardDetails}
              </li>
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CandidateCards;
