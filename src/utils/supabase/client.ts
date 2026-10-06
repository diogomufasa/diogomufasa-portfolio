
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ehowshtfftzqrpeozggg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'dummy_key_to_prevent_crash_in_dev';

export const createClient = () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );
