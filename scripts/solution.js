const exec = require('child_process').exec;

const exerciseNumber = process.argv[2];

if (!exerciseNumber) {
  console.error('You must provide the exercise number');
  process.exit(1);
}

const execChildProcess = (command, options = {}) => {
  console.info(`exec ${command} command in a subprocess...`);

  if (Object.keys(options).length) {
    console.info(`-> options: ${JSON.stringify(options, null, 2)}`);
  }

  return new Promise((resolve, reject) => {
    exec(command, options, (err, stdout, stderr) => {
      console.info(`subprocess output 👇\n\n${stdout}\n${stderr}`);

      if (err) {
        reject(err);

        return;
      }

      resolve(stdout);
    });
  });
};

execChildProcess(
  `git diff --no-index --color exercise-${exerciseNumber} exercise-${parseInt(exerciseNumber, 10) +
    1}`,
).catch(() => {
  // don't log anything, when a diff is found it exits with 1
});
