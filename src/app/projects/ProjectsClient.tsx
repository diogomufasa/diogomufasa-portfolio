'use client';

import Projects from './projects';

export default function ProjectsClient({ projects }: any) {
  // IntersectionObserver logic has been replaced by framer-motion inside Card component.
  return <Projects projects={projects} />;
}