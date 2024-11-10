import * as bcrypt from 'bcrypt';

export const decrpytPassword = async (
  hashedPassword: string,
  userInputtedPassword: string,
): Promise<any> => {
  return bcrypt
    .compare(userInputtedPassword, hashedPassword)
    .then((match) => {
      if (match) return true;
      return false;
    })
    .catch((err) => {
      console.log('Error while compareing password');
      return false;
    });
};
