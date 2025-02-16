/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = (state: any) => (next: (arg0: any) => any) => (action: any) => {
  console.log(state);
  console.log(action);
  return next(action);
};

export default logger;
