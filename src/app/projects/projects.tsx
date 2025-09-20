'use client';
import Card from '@/Components/Card';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string;
  web_url: string;
  git_url: string;
  img_url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <>
      {[...projects]
        .sort((a, b) => b.id - a.id)
        .map((d) => (
          <div key={d.id}>
            <Card
              id={d.id}
              title={d.title}
              tags={d.tags}
              image={d.img_url}
              link={d.web_url}
              github={d.git_url}
              description={d.description}
            />
          </div>
        ))}
    </>
  );
}