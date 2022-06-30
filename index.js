// const data = require('./data.json');



const fs = require('fs');
if(process.argv[2] === 'read'){
  fs.readFile('data.json', 'utf8', (err, data) => {
  if (err){
    console.log(err);
  }
  const object = JSON.parse(data);

  for (const property in object.notes){
    console.log(`${property}: ${object.notes[property]}`)
  }

})
}
