import { createClient } from '@supabase/supabase-js';

const supabaseUrlDev = process.env.SUPABASE_URL_DEV!;
const supabaseKeyDev = process.env.SUPABASE_KEY_DEV!;

export const devSupabase = createClient(supabaseUrlDev, supabaseKeyDev);
