export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    const task1 = true;
    // eslint-disable-next-line
    const task3 = false;
  }

  return [task, task2];
}
