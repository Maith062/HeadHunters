import React, {useState} from "react";
import "../../App.css";
import CandidateCards from "../candidates/CandidateCards";


export default function Candidate() {
  const [skillsData, setSkillsData] = useState({});
  return (
    <>
      <h1 className="candidate">Candidates</h1>
      <CandidateCards setSkillsData={setSkillsData} />
    </>
  );
}
