import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Skills.css";
import * as selectors from "../../redux/skills/skillsSelectors";
import * as thunks from "../../redux/skills/skillsThunks";
import CardSkill from '../../components/CardSkill/CardSkill';


const SkillsPage = () => {
  const dispatch = useDispatch();
  const skills = useSelector(selectors.selectGetSkills);

  useEffect(() => {
    dispatch(thunks.getSkillsThunk());
  }, [dispatch]);

  return (
    <div className="container-skills">
      <div className="text-mySkills">
        <p className="mySkills-text-white">My</p>
        <p className="mySkills-text-blue">Skills</p>
      </div>
      <p className="mySkills-text-aboutSkills">
        List of my skills. It will increase over time. If you need a developer
        who has these skills, feel free to contact me. I will always be happy
        for you!
      </p>
      <div className="box-skills">
        <ul className="list-skills">
          {Array.isArray(skills) && skills.length > 0 ? (
            skills.map((skill, index) => (
              <CardSkill key={index} skill={skill}></CardSkill>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SkillsPage;
