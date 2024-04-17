export const success = <T>(data: T, message = 'Success') => {
  return {
    message,
    data,
  };
};
