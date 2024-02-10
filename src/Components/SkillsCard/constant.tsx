import {
  SiGit,
  SiAzuredevops,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiCsharp,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const Skills = {
  services: [
    { name: 'Git', Icon: <SiGit /> },
    { name: 'Azure', Icon: <SiAzuredevops /> },
  ],
  frontend: [
    { name: 'HTML', Icon: <SiHtml5 /> },
    { name: 'CSS', Icon: <SiCss3 /> },
    { name: 'Javascript', Icon: <SiJavascript /> },
    { name: 'React', Icon: <SiReact /> },
    { name: 'Next.JS', Icon: <TbBrandNextjs /> },
    { name: 'Tailwind CSS', Icon: <SiTailwindcss /> },
    { name: 'Motion', Icon: <SiFramer /> },
  ],
  backend: [
    { name: 'Node.js', Icon: <SiNodedotjs /> },
    { name: '.Net', Icon: <SiDotnet /> },
    { name: 'C#', Icon: <SiCsharp /> },
  ],
  database: [{ name: 'Mysql', Icon: <SiMysql /> }],
};
