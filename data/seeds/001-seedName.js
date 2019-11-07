
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {VIN: "4273894728", make: "Honda", model: "Civic", mileage: "184637"},
        {VIN: "73482923", make: "Toyota", model: "Highlander", mileage: "342678"},
        {VIN: "47328789", make: "Benz", model: "Matrix", mileage: "153278"}
      ]);
    });
};
