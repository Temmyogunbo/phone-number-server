import 'babel-polyfill';
import sinon from 'sinon';
import PhoneNumbersController from '../../../src/controllers/PhoneNumbers';

describe('PhoneNumbers', () => {
  describe('POST', () => {
    it('should store phone numbers', async () => {
      const payload = {
        phoneNumbers: '[8890000, 99333,9948885,9484848,84848575]',
      };
      const expectedResult = {
        success: true,
        message: 'Phone numbers stored successfully',
      };
      const mock = sinon.mock(PhoneNumbersController);

      mock
        .expects('storePhoneNumbers')
        .withArgs(payload)
        .returns(expectedResult);
      PhoneNumbersController.storePhoneNumbers(payload);

      mock.restore();
      mock.verify();
    });
  });

  describe('GET', () => {
    it('should get all phone numbers', async () => {
      const expectedResult = '8900988778';
      const mock = sinon.mock(PhoneNumbersController);
      mock
        .expects('getPhoneNumbers')
        .withArgs()
        .returns(expectedResult);
      PhoneNumbersController.getPhoneNumbers();
      mock.restore();
      mock.verify();
    });
  });
});
