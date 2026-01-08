import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL!);

export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function initViewsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS site_stats (
      id INTEGER PRIMARY KEY DEFAULT 1,
      total_views INTEGER DEFAULT 0,
      unique_visitors INTEGER DEFAULT 0,
      visitor_hashes TEXT DEFAULT '',
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT single_row CHECK (id = 1)
    )
  `;
  // Asegurar que existe la fila (empezando con 540 visitas base)
  await sql`
    INSERT INTO site_stats (id, total_views, unique_visitors, visitor_hashes)
    VALUES (1, 540, 180, '')
    ON CONFLICT (id) DO NOTHING
  `;
}

export async function recordPageView(visitorHash: string) {
  // Incrementar views y agregar visitor si es nuevo (todo en una sola query)
  await sql`
    UPDATE site_stats 
    SET 
      total_views = total_views + 1,
      unique_visitors = CASE 
        WHEN visitor_hashes NOT LIKE '%' || ${visitorHash} || '%' 
        THEN unique_visitors + 1 
        ELSE unique_visitors 
      END,
      visitor_hashes = CASE 
        WHEN visitor_hashes NOT LIKE '%' || ${visitorHash} || '%' 
        THEN visitor_hashes || ${visitorHash} || ',' 
        ELSE visitor_hashes 
      END,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `;
}

export async function getPageViewStats() {
  const result = await sql`
    SELECT total_views, unique_visitors FROM site_stats WHERE id = 1
  `;
  return result[0] || { total_views: 0, unique_visitors: 0 };
}

