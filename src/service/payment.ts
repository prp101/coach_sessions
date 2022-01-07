import * as mongo from '../db/mongo_db';

// Luhn Algorithm
async function validateCcreditCardNumber (cardNumber: number) {
    let digit, digits, flag, sum, _i, _len;
    flag = true;
    sum = 0;
    digits = (cardNumber + '').split('').reverse();
    for (_i = 0, _len = digits.length; _i < _len; _i++) {
        digit = digits[_i];
        digit = parseInt(digit, 10);
        if ((flag = !flag)) {
            digit *= 2;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
};

async function pay (clientId: string, creditCard: number, cvv: number, sessionId: string) {
    const cardValidation = await validateCcreditCardNumber(creditCard);
    if (!cardValidation) throw new Error('Credit Card not valid');

    console.log('Payment Accepted');

    const sessionObject = {
        _id: sessionId,
        paid: true,
    }
    await mongo.saveSession(sessionObject);
    return('Payment Accepted');
}

export {
    pay,
}