// src/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

// Substitua com as suas credenciais do Supabase
const SUPABASE_URL = 'https://pcwjczjbjhwlwctxkveu.supabase.co'; // Substitua pelo URL do seu projeto
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjd2pjempiamh3bHdjdHhrdmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NzYyNjYsImV4cCI6MjA0MjE1MjI2Nn0.4w9RCzWZl6SiaEdfmG11y1s9stpdvtumiuxS5vMmDjU'; // Substitua pela sua chave de API

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
