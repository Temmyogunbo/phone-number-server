import fs from 'fs';
import util from 'util';
import Boom from 'boom';


export default class PhoneNumbersController {
  static async storePhoneNumbers(phoneNumbers) {
    try {
      const stat = util.promisify(fs.stat);
      await stat('src/database/numbers.js');
      const numbers = phoneNumbers.phoneNumbers;
      const stream = fs.createWriteStream('src/database/numbers.js', {
        flags: 'a+',
      });
      numbers.forEach((number) => {
        stream.write(`${number.toString()}\n`);
      });
    } catch (error) {
      if (error.code === 'ENOENT') {
        return Boom.notFound('No such file or directory');
      }

      return Boom.badImplementation();
    }

    return { success: true, message: 'Phone numbers stored successfully' };
  }

  static async getPhoneNumbers(h) {
    let stream;
    try {
      const stat = util.promisify(fs.stat);
      await stat('src/database/numbers.js');
      stream = fs.createReadStream('src/database/numbers.js');
    } catch (error) {
      if (error.code === 'ENOENT') {
        return Boom.notFound('No such file or directory');
      }
      return Boom.badImplementation();
    }
    return h.response(stream);
  }
}
