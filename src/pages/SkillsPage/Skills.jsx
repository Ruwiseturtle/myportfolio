import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Skills.css";
import * as selectors from "../../redux/skills/skillsSelectors";
import * as thunks from "../../redux/skills/skillsThunks";
import CardSkill from '../../components/CardSkill/CardSkill';
import { useTranslation } from "react-i18next";

const SkillsPage = () => {
  const dispatch = useDispatch();
  const skills = useSelector(selectors.selectGetSkills);
  const { t } = useTranslation();
  
  useEffect(() => {
    dispatch(thunks.getSkillsThunk());
  }, [dispatch]);

  return (
    <div className="container-skills">
      <div className="text-mySkills">
        {/* текст "Мої" */}
        <p className="mySkills-text-white">{t("MySkills.My")}</p>
        {/* текст "Навички" */}
        <p className="mySkills-text-blue">{t("MySkills.Skills")}</p>
      </div>
      <p className="mySkills-text-aboutSkills">
        {/* текст "про сторінку Навички" */}
        {t("MySkills.Description skills")}
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
