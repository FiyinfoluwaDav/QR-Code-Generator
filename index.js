import { input } from '@inquirer/prompts';
import fs from "fs";
import qr from "qr-image-color";


const answer = await input({ message: 'Enter the website url' });
console.log(`Generating Qrcode for ${answer}...`);

// png with purple color and transparent background;
var png_string = qr.imageSync(answer, {
     type: 'png',
      color: "purple",
       transparent: true
     });

fs.writeFileSync("qr.png", png_string);
console.log("QR code saved as qr.png");
     