
/*************
 *
 * docs: https://supabase.com/docs/reference/javascript/introduction
 * query joins: https://supabase.com/docs/guides/database/joins-and-nesting
 * oauth testing: https://lptzasniijvqdaztkxgc.supabase.co/auth/v1/authorize?provider=google
 *
 * project: https://supabase.com/dashboard/project/lptzasniijvqdaztkxgc
 *
 *
 */
import { createClient } from '@supabase/supabase-js';

import { publicEnv } from 'src/core/envConfig';

export const supabase = createClient(publicEnv().SUPABASE_URL, publicEnv().SUPABASE_KEY);
