import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const filepath = join(__dirname, 'assets/hello.txt');

// Callback Version
// readFile(filepath, 'utf8', (err, contents) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log('File Contents: ', contents);

//   const upperContents = contents.toUpperCase();
//   setTimeout(() => updateContents(filepath, upperContents), 10);
// });

// setInterval(() => process.stdout.write('**** \n')).unref();

// function updateContents(filepath: string, contents: string) {
//   writeFile(filepath, contents, (err) => {
//     if (err) throw err;
//     console.log('File Updated');
//   });
// }
//
async function run() {
  try {
    const contents = await readFile(filepath, 'utf8');
    console.log('File Contents: ', contents);

    await writeFile(filepath, contents.toUpperCase());
    console.log('File Updated');
  } catch (error) {
    console.log(error);
  }
}

run();
