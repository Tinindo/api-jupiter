"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnUpdateFunction = exports.dropOnUpdateTrigger = exports.onUpdateTrigger = exports.onUpdateFunction = void 0;
function onUpdateFunction() {
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
exports.onUpdateFunction = onUpdateFunction;
function onUpdateTrigger(table) {
    return `
      CREATE TRIGGER ${table}_updated_at
      BEFORE UPDATE ON ${table}
      FOR EACH ROW
      EXECUTE PROCEDURE on_update_timestamp();
    `;
}
exports.onUpdateTrigger = onUpdateTrigger;
function dropOnUpdateTrigger(table) {
    return `DROP TRIGGER IF EXISTS ${table}_updated_at ON ${table} CASCADE`;
}
exports.dropOnUpdateTrigger = dropOnUpdateTrigger;
function deleteOnUpdateFunction() {
    return `DROP FUNCTION on_update_timestamp`;
}
exports.deleteOnUpdateFunction = deleteOnUpdateFunction;
