import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ebjpyegvkboiifdeixri.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVianB5ZWd2a2JvaWlmZGVpeHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NjIyMTIsImV4cCI6MjA5OTQzODIxMn0.9Q6pA21azyFhp_0hSOfg8AZtZyKxL0w88J7tsNQ8xoU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
