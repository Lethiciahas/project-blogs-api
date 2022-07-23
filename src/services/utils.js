function validationEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
 }

 module.exports = validationEmail;

 // referência do regex utilizado: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/