const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "jeetbhuva70@gmail.com",
        pass: "xydvkoupcerpvlno"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailoption = {
        from: "jeetbhuva70@gmail.com",
        to: to,
        subject: "Your Password Reset OTP",
        text: `Your OTP is ${otp}`
    };
    transporter.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log("Error sending OTP email:", err);
        } else {
            console.log("OTP email sent successfully:", info.response);
        }
    });
};