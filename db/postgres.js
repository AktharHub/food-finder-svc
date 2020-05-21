const { Pool, Client } = require('pg');

var config = {
    user: 'sstvpewockruxo', 
    database: 'd60kgv9jgo4l0', 
    password: '10afe1fbdef4b4c679b5299c94dddd43d5e406b14897a75146cea482c49b0049', 
    host: 'ec2-52-201-55-4.compute-1.amazonaws.com', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};
const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});
// pool.query("select * from food_items", function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }
//     console.log('number1:', res);
// });

module.exports = {

      getFoodItems : function() {
        
          const res =  pool.query("select * from food_items", function(err, res) {
            if(err) {
                return console.error('error running query', err);
            }
            // console.log('number2:', res);
            return res;
        });
        console.log('number2:', res)
    },

    sum: function(a,b) {
        return a+b
    },

    getFoodItems1 : async function() {
        
        const res = await pool.query('select * from food_items')
        // await pool.end();
        // console.log('number2:', res);
        return res;
  },


}
