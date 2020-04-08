exports.up = function(knex) {
    return knex.schema.createTable('Tooling', function (table){
  
      table.increments();
      table.decimal('BeaconID').notNullable();
      table.string('ToolName').notNullable();
      table.string('ToolDescription').notNullable();
      table.decimal('SubCategoryID').notNullable();

      table.foreign('BeaconID').references('id').inTable('Beacon');
      table.foreign('SubCategoryID').references('id').inTable('SubCategory');
     
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('Tooling');
    
  };
  