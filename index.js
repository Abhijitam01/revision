const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('1.0.0')

program.command('count')
  .description('count the number of the lines of the file')
  .argument('<file>' , 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8' , (err,data) => {
        if(err) {
            console.log(err);

        } else {
            const lines = data.split('\n').length;
            console.log(`their are ${lines} lines in ${file}`);
        }
    })
  })

  program.parse();