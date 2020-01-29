const getExerciseFromProcess = () => {
  const exNumber = process.argv[2];
  if(!process.env.APP_EXERCISE || !exNumber) {
    return null;
  }

  return exNumber;
}

module.exports = getExerciseFromProcess;
