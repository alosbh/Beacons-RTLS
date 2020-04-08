exports.up = function(knex) {
    return knex.schema.createTable('SubCategory', function (table){
  
      table.increments();
      table.string('SubCategoryName').notNullable();
      table.decimal('CategoryID').notNullable();

      table.foreign('CategoryID').references('id').inTable('Category');
     
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('SubCategory');
    
  };
  