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
    <div className="wrapper px-4 sm:px-0 mt-20 sm:mt-24">
      <Subheader title='Projects' icon={<LuSearch />} />
      <div className="flex flex-wrap justify-between gap-y-6">
        <ProjectsFeedClient projects={projects} />
        {projects.length === 0 && !error && <p className="text-[var(--muted)]">No projects found.</p>}
        {error && <p className="text-[var(--muted)]">Failed to load projects.</p>}
      </div>
    </div>
  );
}