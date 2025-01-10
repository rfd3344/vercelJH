
/*************
 *
 * docs: https://supabase.com/docs/reference/javascript/introduction
 *
 * project: https://supabase.com/dashboard/project/lptzasniijvqdaztkxgc
 */
import { createClient } from '@supabase/supabase-js';

import { publicEnv } from 'src/core/envConfig';

export const supabase = createClient(publicEnv().SUPABASE_URL, publicEnv().SUPABASE_KEY);
