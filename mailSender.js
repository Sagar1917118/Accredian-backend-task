const nodemailer=require("nodemailer");
async function sendEmail(email,title,body){
    let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
    });
    let info=await transporter.sendMail({
        from:"Accredian Referral",
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`
    })
    console.log("Mail send successfully");
};
module.exports={sendEmail};