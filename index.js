import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config();

const supabaseUrl = 'https://dpisjorauglcofczvsxl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)