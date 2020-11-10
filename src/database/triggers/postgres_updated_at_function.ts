export function onUpdateFunction() {
  return `
      CREATE OR REPLACE FUNCTION on_update_timestamp()
      RETURNS trigger AS $$
      BEGIN
        NEW.updated_at = now();
        RETURN NEW;
      END;
    $$ language 'plpgsql';
  `;
}

export function onUpdateTrigger(table) {
  return `
      CREATE TRIGGER ${table}_updated_at
      BEFORE UPDATE ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE on_update_timestamp();
    `;

}

export function dropOnUpdateTrigger(table) {
  return `DROP TRIGGER IF EXISTS ${table}_updated_at ON ${table} CASCADE`
}

export function deleteOnUpdateFunction() {
  return `DROP FUNCTION on_update_timestamp`
}