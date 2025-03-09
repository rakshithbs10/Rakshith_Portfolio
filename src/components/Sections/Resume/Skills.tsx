import { FC, memo } from 'react';
import { SkillGroup as SkillGroupType } from '../../../data/dataDef';

// Import React Icons (or replace with your preferred icons)
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { TbMathMaxMin } from "react-icons/tb";
import { SiKeras } from "react-icons/si";
import { SiTaichigraphics } from "react-icons/si";
import { DiScrum } from "react-icons/di";

// Map skills to corresponding icons
const skillIcons: { [key: string]: JSX.Element } = {
  'HTML & CSS': <FaHtml5 className="text-orange-500 dark:text-orange-400" />,
  'JavaScript': <FaJs className="text-yellow-400 dark:text-yellow-300" />,
  'ReactJS': <FaReact className="text-blue-400 dark:text-blue-300" />,
  'Node.js': <FaNodeJs className="text-green-500 dark:text-green-400" />,
  'Express.js': <FaNodeJs className="text-green-600 dark:text-green-500" />,
  'MongoDB': <TbBrandMongodb className="text-green-700 dark:text-green-600" />,
  'PostgreSQL': <BiLogoPostgresql className="text-blue-600 dark:text-blue-500" />,
  'AWS(Cloud9 IDE, IAM, S3, EC2, Lambda, Cloud Watch, RDS, VPC, Cognito)': <FaAws className="text-orange-400 dark:text-orange-300" />,
  'Rest API': <TbApi className="text-blue-500 dark:text-blue-400" />,
  'NextJs': <RiNextjsFill className="text-blue-500 dark:text-blue-400" />,
  'Python': <FaPython className="text-blue-500 dark:text-blue-400" />,
  'SQL': <FaDatabase className="text-blue-600 dark:text-blue-500" />,
  'TypeScript': <SiTypescript className="text-blue-600 dark:text-blue-500" />,
  'GitHub': <FaGithub className="text-blue-600 dark:text-blue-500" />,
  'Visual Studio Code': <DiVisualstudio className="text-blue-600 dark:text-blue-500" />,
  'Postman API': <SiPostman className="text-blue-600 dark:text-blue-500" />,
  'Pandas': <SiPandas className="text-blue-600 dark:text-blue-500" />,
  'Numpy': <SiNumpy className="text-blue-600 dark:text-blue-500" />,
  'Matplotlib': <TbMathMaxMin className="text-blue-600 dark:text-blue-500" />,
  'Keras': <SiKeras className="text-blue-600 dark:text-blue-500" />,
  'Seaborn': <SiTaichigraphics className="text-blue-600 dark:text-blue-500" />,
  'Scrum': <DiScrum className="text-blue-600 dark:text-blue-500" />,
};

export const SkillGroup1: FC<{ skillGroup: SkillGroupType }> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;

  return (
    <div className="mb-6">
      <span className="text-xl font-bold text-gray-800 dark:text-black">{name}</span>
      <div className="mt-3 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup1.displayName = 'SkillGroup';

const SkillBadge: FC<{ skill: { name: string } }> = memo(({ skill }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-3 text-sm font-semibold text-gray-900 bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-lg dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 transition-transform duration-200 hover:scale-110">
      <div className="text-3xl">{skillIcons[skill.name] || '🔧'}</div>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
});

SkillBadge.displayName = 'SkillBadge';
