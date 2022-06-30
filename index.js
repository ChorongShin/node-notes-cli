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
} else if (process.argv[2] === 'create'){
  const createText = JSON.stringify(process.argv[3])

  fs.writeFile('data.json', createText, 'utf8', (err,data) =>{
    const object = JSON.parse(data);
      const objectNotes = object.notes
  const objectId = object.nextId
  objectNotes.nextId = createText
   objectId++
    if(err){
      console.log('error:', err)
    }
    for(const property in object.notes){
      console.log(`${property}: ${object.notes[property]}`)
    }
})
}
