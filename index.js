const data = require('./data.json');

const fs = require('fs');
if(process.argv[2] === 'read'){
  const updatedData = JSON.stringify(data, null, 2);
  fs.readFile('data.json', 'utf8', (err, data) => {
  if (err){
    console.log(err);
  }
 const object = JSON.parse(data);
  for (const property in object.notes){
    console.log(`${property}: ${object.notes[property]}`)
  }
})
} else if (process.argv[2] === 'create'){
  const noteId = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[noteId] = newNote;
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, 'utf8', err =>{
console.log('it/`s working')
    if(err){
      console.log('error:', err)
    }
    for(const property in data.notes){
      console.log(`${property}: ${data.notes[property]}`)
    }
})
} else if (process.argv[2] === 'update') {
  const noteId = process.argv[3];
  const updatedNote = process.argv[4];
  data.notes[noteId] = updatedNote;
  const updatedData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', updatedData, 'utf8', err => {
    console.log('it/`s working')
    if (err) {
      console.log('error:', err)
    }
    for (const property in data.notes) {
      console.log(`${property}: ${data.notes[property]}`)
    }
})
}
