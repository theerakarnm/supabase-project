const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = 'https://dpisjorauglcofczvsxl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const showAll = async () => {
  let { data: db_test, error } = await supabase
  .from('db_test')
  .select('*')

console.log(db_test);
}

showAll();