import {
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiPython,
  SiDocker,
  SiGooglecloud,
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandCSharp, TbBrandAmazon } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

export const Skills = {
  services: [
    { name: 'Git', Icon: <SiGit /> },
    { name: 'Azure', Icon: <VscAzure /> },
    { name: 'Docker', Icon: <SiDocker /> },
    { name: 'AWS', Icon: <TbBrandAmazon /> },
    { name: 'GCP', Icon: <SiGooglecloud /> },
  ],
  frontend: [
    { name: 'HTML', Icon: <SiHtml5 /> },
    { name: 'CSS', Icon: <SiCss /> },
    { name: 'Javascript', Icon: <SiJavascript /> },
    { name: 'React', Icon: <SiReact /> },
    { name: 'Next.js', Icon: <TbBrandNextjs /> },
    { name: 'Tailwind CSS', Icon: <SiTailwindcss /> },
    { name: 'Motion', Icon: <SiFramer /> },
  ],
  backend: [
    { name: 'Node.js', Icon: <SiNodedotjs /> },
    { name: '.Net', Icon: <SiDotnet /> },
    { name: 'C#', Icon: <TbBrandCSharp /> },
    { name: 'Python', Icon: <SiPython /> },
  ],
  database: [{ name: 'MySQL', Icon: <SiMysql /> }],
};
