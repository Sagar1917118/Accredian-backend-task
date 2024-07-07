const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();
const {sendEmail}=require("../mailSender");
async function SaveReferal(req,res){
    try{
        const {sender_name,sender_id,sender_email,target_name,target_id,target_email,target_phone,course_name,course_id}=req.body;
        //missing fields
        if(!course_id||!course_name||!sender_email||!sender_name||!target_email||!target_name||!target_phone){
            return res.status(400).json({
                success:false,
                message:"All fileds are not available",
            })
        }
        //referrer and referee can not be same
        if(sender_email==target_email){
            return res.status(400).json({
                success:false,
                message:"Invalid Refer",
            })
        }
        const newData=await prisma.accradianreferal.create({
            data:{
                sender_name:sender_name,
                sender_id:sender_id,
                sender_email:sender_email,
                target_name:target_name,
                target_id:target_id,
                target_email:target_email,
                target_phone:target_phone,
                course_name:course_name,
                course_id:course_id
            }
             });
                sendEmail(target_email,`REFERREL for a course on Accredian`,`
                Congratualations for the referal of the course ...${course_name}... by ${sender_email}\n.Buy the course on Accredian and earn Money`);
             return res.status(200).json({
                success:true,
                message:newData
             })
         }catch(err){
            console.log(err.message);
            return res.status(400).json({
                success:false,
                message:err.message,
            })
         }finally{
            await prisma.$disconnect();
         }
}
module.exports={SaveReferal};