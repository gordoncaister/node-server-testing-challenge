
exports.up = function(knex) {
  return knex.schema
    .createTable("pancakes",t =>{
        t.increments();
        t.string("type").notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("pancakes")
};
