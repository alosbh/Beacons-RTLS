exports.up = function(knex) {
    return knex.schema.createTable('Beacon', function (table){
  
      table.increments();
      table.string('BeaconName').notNullable();
      table.decimal('Battery').notNullable();
      table.decimal('Minor').notNullable();
      table.decimal('Major').notNullable();
      table.decimal('LastUpdated',2).notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Beacon');
    
  };
  