const fs = require('fs');
 fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
