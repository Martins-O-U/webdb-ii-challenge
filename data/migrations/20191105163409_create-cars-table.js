
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.integer('VIN').notNullable().unique();
        table.string('Make', 128).notNullable();
        table.string('Model', 128).notNullable();
        table.integer('Mileage').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
