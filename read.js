const fs = require('fs');
for(let i=0;i<data.json.notes.length;i++){
 fs.readFile(data.json.notes[i], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);


})
}
