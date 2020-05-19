
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pancakes').del()
    .then(function () {
      // Inserts seed entries
      return knex('pancakes').insert([
        {type: 'chocolate chip'},
        {type: 'blueberry'},
        {type: 'lemon poppy'},
        {type: 'savoury'},
      ]);
    });
};
