const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.post('/createfile', (req, res) => {
  const folderPath = './files'; // replace with your folder path
  const dt =new Date();
  const fn =dt.toISOString().slice(0,10); 
//   const hr=dt.getHours();
//   const min=dt.getMinutes();
//   const sec=dt.getSeconds();
  
  const fileName=`${fn}.txt`;

  const filePath = path.join(folderPath, fileName);
  const content=new Date().getTime();

  fs.writeFile(filePath, `${content} in ms`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      console.log(`File ${filePath} created successfully`);
      res.send(`File ${filePath} created successfully`);
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
