const env = (typeof process !== 'undefined' && process.env) ? process.env : {};
const config = {
  supabaseUrl: env.SUPABASE_URL || 'https://tnkugtdypllgbceapfuz.supabase.co',
  supabaseAnonKey: env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRua3VndGR5cGxsZ2JjZWFwZnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMDI4MDcsImV4cCI6MjA5MzY3ODgwN30.I0EGEJNNZ7cw5kmMD2kvHD6YSMidfCl8orDHMP89iQg',
  supabaseBucket: env.SUPABASE_BUCKET || 'apartment-images'
};

if (typeof window !== 'undefined') {
  window.__SUPABASE_CONFIG__ = config;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = function handler(req, res) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.status(200).send(`window.__SUPABASE_CONFIG__ = ${JSON.stringify(config)};`);
  };
}
