import Subheader from '@/Components/Subheader/page';
import { LuSearch } from 'react-icons/lu';
import { createClient } from '@/utils/supabase/server';
import ProjectsFeedClient from './ProjectsClient';
import { CARD_ITEMS } from '@/Constants';

export const revalidate = 0;

export default async function ProjectFeed() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('Projects').select('*');

  let projects = data ?? [];

  // Fallback to static dummy data if Supabase fails (e.g. no valid API key)
  if (error || projects.length === 0) {
    if (error) {
      console.error('Supabase error fetching projects (using fallback):', JSON.stringify(error, null, 2));
    }
    
    projects = CARD_ITEMS.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      tags: item.description, // using description as tags for dummy data
      web_url: item.link || '',
      git_url: item.github || '',
      img_url: item.image || ''
    }));
  }

  return (
    <div className="wrapper px-4 sm:px-0 mt-20 sm:mt-24">
      <Subheader title='Projects' icon={<LuSearch />} />
      
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-y-6">
        <ProjectsFeedClient projects={projects} />
      </div>
    </div>
  );
}