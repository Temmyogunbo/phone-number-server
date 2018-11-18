import Joi from 'joi';
import PhoneNumbersController from '../controllers/PhoneNumbers';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/phone-numbers',
      handler: (request, h) => PhoneNumbersController.storePhoneNumbers(request.payload),
      options: {
        validate: {
          payload: {
            phoneNumbers: Joi.array().items(Joi.string()),
          },
        },
      },
    },
    {
      method: 'GET',
      path: '/phone-numbers',
      handler: (request, h) => PhoneNumbersController.getPhoneNumbers(h),
      options: {
        cache: {
          expiresIn: 30 * 1000,
          privacy: 'private',
        },
      },
    },
    {
      method: 'GET',
      path: '/',
      handler: () => 'Welcome to your to phone numbers generators',
    },
  ]);
};

export const name = 'phoneNumbers';
export default register;
