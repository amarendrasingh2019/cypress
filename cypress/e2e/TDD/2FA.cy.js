describe('Get ', () => {
    it('Get and apply 2FA', () => {
        // const speakeasy = require('speakeasy');

        // // Replace 'your_secret_key' with your actual secret key
        // const secretKey = 'KPJEM4HKFHTDVGAV';
        
        // // Generate a time-based OTP (TOTP)
        // const otp = speakeasy.totp({
        //   secret: secretKey,
        //   encoding: 'base32', // Adjust encoding based on your secret key format
        // });
        
        // cy.log('Generated OTP:', otp);

        const speakeasy = require('speakeasy');

const secretKey = 'VFJIC3BUVFWIZDNJ';

// Try different encodings
const encodingsToTry = ['base64'];

for (const encoding of encodingsToTry) {
  try {
    const otp = speakeasy.totp({
      secret: secretKey,
      encoding: encoding,
    });

    cy.log(`Encoding '${encoding}' produced OTP: ${otp}`);
  } catch (error) {
    cy.log(`Encoding '${encoding}' failed: ${error.message}`);
  }
}

    })
});