// const data = require('./data.json');



const fs = require('fs');
if(process.argv[2] === 'read'){
  fs.readFile('data.json', 'utf8', (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data);

})
}
