import Subheader from '@/Components/Subheader/page';
import { pageStyles } from '@/Constants';
import { LuSearch } from 'react-icons/lu';
import { createClient } from '@/utils/supabase/server';
import ProjectsFeedClient from './ProjectsClient';

export const revalidate = 0;

export default async function ProjectFeed() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('Projects').select('*')

  if (error) {
    console.error('Supabase error fetching projects:', JSON.stringify(error, null, 2));
  }

  const projects = data ?? [];

  return (
    <div className={pageStyles.wrapper}>
      <Subheader title='Projects' icon={<LuSearch />} />
      <div className={pageStyles.feed_child2}>
        <ProjectsFeedClient projects={projects} />
        {projects.length === 0 && !error && <p>No projects found.</p>}
        {error && <p>Failed to load projects.</p>}
      </div>
    </div>
  );
}