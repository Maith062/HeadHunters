import React, { useState } from "react";
import RecruiterCardItem from "./RecruiterCardsItems";
import "../CRCards.css";
import Modal from "../Modal";
import styled from 'styled-components';
import HelpIcon from '../HelpIcon';


const cardData = [
  {
    id: 1,
    title: "Card 1",
    src: "./photo/recruiter1.JPG",
    label: "Actively Hiring",
    name: "Jill Bobs",
    contact: "jill.bobs@nvidia.com",
    field: ["Technology", "Engineering"],
    company: "Nvidia",
  },
  {
    id: 2,
    title: "Card 2",
    src: "./photo/recruiter2.jpg",
    label: "Closed",
    name: "Meffery Jurray",
    contact: "meffery.jurray@morganstanley.com",
    field: ["Finance", "Technology"],
    company: "Morgan Stanley",
  },
  {
    id: 3,
    title: "Card 3",
    src: "./photo/recruiter3.jpg",
    label: "Actively Hiring",
    name: "Parandra Natel",
    contact: "parandra.natel@goldmansachs.com",
    field: ["Finance", "Technology"],
    company: "Goldman Sachs",
  },
  {
    id: 4,
    title: "Card 4",
    src: "./photo/recruiter4.jpg",
    label: "Actively Hiring",
    name: "Pelon Lusk",
    contact: "pelon.lusk@canada.ca",
    field: ["Commerce", "Government"],
    company: "Revenue Agency of Canada",
  },
  {
    id: 5,
    title: "Card 5",
    src: "./photo/recruiter5.jpeg",
    label: "Actively Hiring",
    name: "Lliver Oewis",
    contact: "lliver.oewis@pfizer.com",
    field: ["Health", "Science"],
    company: "Pfizer",
  },
  {
    id: 6,
    title: "Card 6",
    src: "./photo/recruiter6.jpg",
    label: "Actively Hiring",
    name: "Chris Liu",
    contact: "chris.liu@jj.com",
    field: ["Engineering", "Science"],
    company: "Johnson & Johnson",
  },
];

const cardText = [
  { id: 1, text: "Jill Bobs is a seasoned recruiter with Nvidia, focusing on the Technology and Engineering sectors. With over 10 years of experience in the industry, Jill has a knack for identifying top talent and matching them with the right opportunities. She is passionate about driving innovation and growth through strategic hiring." },
  { id: 2, text: "Meffery Jurray is a dedicated recruiter at Morgan Stanley, specializing in Finance and Technology. Known for his keen insight into market trends and exceptional interpersonal skills, Meffery has successfully closed numerous high-profile roles. Although not actively hiring at the moment, he continues to build relationships and networks within the industry." },
  { id: 3, text: "Parandra Natel is a proactive recruiter at Goldman Sachs, with expertise in both Finance and Technology. She has a strong background in sourcing and recruiting top-tier candidates for various roles. Parandra is committed to fostering a diverse and inclusive workplace, ensuring that Goldman Sachs remains a leader in the industry." },
  { id: 4, text: "Pelon Lusk is an experienced recruiter at the Revenue Agency of Canada, specializing in Commerce and Government roles. With a comprehensive understanding of public sector recruitment, Pelon excels at identifying candidates who can navigate the complexities of government operations. He is dedicated to enhancing public service efficiency through strategic hiring." },
  { id: 5, text: "Lliver Oewis is a highly skilled recruiter at Pfizer, focusing on Health and Science roles. With a deep understanding of the pharmaceutical industry, Lliver has a proven track record of recruiting top scientists and healthcare professionals. She is passionate about advancing medical research and innovation through strategic talent acquisition." },
  { id: 6, text: "Chris Liu is a dynamic recruiter at Johnson & Johnson, specializing in Engineering and Science roles. With a background in biomedical engineering, Chris brings technical expertise to his recruitment efforts. He is dedicated to finding and nurturing talent that drives Johnson & Johnson's mission of improving global health through innovation." },
];

function RecruiterCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardDetails, setCardDetails] = useState("");
  const [filterfield, setFilterfield] = useState("");
  const [filtercompany, setFiltercompany] = useState("");

  const openModal = (card) => {
    const details = cardText.find((text) => text.id === card.id);
    setSelectedCard(card);
    setCardDetails(details ? details.text : ""); // Fallback to empty string if details are not found
  };

  const closeModal = () => {
    setSelectedCard(null);
    setCardDetails("");
  };

  const handlefieldChange = (event) => {
    setFilterfield(event.target.value);
  };

  const handlecompanyChange = (event) => {
    setFiltercompany(event.target.value);
  };

  const resetFilters = () => {
    setFilterfield("");
    setFiltercompany("");
  };

  const filteredCards = cardData.filter((card) => {
    const matchesfield = !filterfield || card.field.includes(filterfield);
    const matchescompany = !filtercompany || card.company.toString() === filtercompany;
    return matchesfield && matchescompany;
  });

  const tooltipContent = [
    "The \"Select Field\" is used to choose the sector you're interested in.",    
    "The \"Select Company\" is used to choose a specific company you'd be interested in.",
    "The \"Reset\" is used to clear all fields and reset to original.",
    "You may click on the recruiter's card to get the email and learn additional information."

  ];

  return (
    <div className="cards-container">
      <div className="filters">
        <select value={filterfield} onChange={handlefieldChange}>
          <option value="">Select field</option>
          <option value="Engineering">Engineering</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Commerce">Commerce</option>
          <option value="Health">Health</option>
          <option value="Government">Government</option>
          <option value="Science">Science</option>
        </select>
        <select value={filtercompany} onChange={handlecompanyChange}>
          <option value="">Select company</option>
          <option value="Pfizer">Pfizer</option>
          <option value="Morgan Stanley">Morgan Stanley</option>
          <option value="Goldman Sachs">Goldman Sachs</option>
          <option value="Nvidia">Nvidia</option>
          <option value="Revenue Agency of Canada">Revenue Agency of Canada</option>
          <option value="Johnson & Johnson">Johnson & Johnson</option>
        </select>
        <button onClick={resetFilters}>Reset</button>
        <HelpIcon tooltipContent={tooltipContent} />
      </div>
      <div className="card-wrapper">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <RecruiterCardItem
              key={card.id}
              src={card.src}
              title={card.title}
              label={card.label}
              name={card.name}
              field={card.field}
              contact={card.contact}
              company={card.company}
              onClick={() => openModal(card)}
            />
          ))
        ) : (
          <p>No cards match the selected filters.</p>
        )}
      </div>

      <Modal show={selectedCard !== null} onClose={closeModal}>
        {selectedCard && (
          <div>
            <h2>{selectedCard.name}</h2>
            <ul className="details-list">
              <li>
                <strong>Field:</strong>{" "}
                {selectedCard.field.length > 0
                  ? selectedCard.field.join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Company:</strong> {selectedCard.company}
              </li>
              <li>
                <strong>Contact:</strong> {selectedCard.contact}
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

export default RecruiterCards;
