/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{ //object which is answer and they are properties of answer
    
    message : "type your URL" ,
    name :"url"//properties
  }])
  .then((answers) => {
  
  const Url = answers.url;
   console.log(Url);

   var qr_svg = qr.image(Url);
   qr_svg.pipe(fs.createWriteStream("qr-image.png"));//require fs is changed into import

   fs.writeFile("msg.txt",Url,(err) => {
    if (err) throw err;
    console.log('successfully saved /tmp/hello');
  })


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });