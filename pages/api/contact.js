import nodemailer from 'nodemailer'

export default async function (req, res){
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    }
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'rhodes.naji@gmail.com',
      subject: 'Ithaca Veterinary Specialists - Contact Form',
      html: `
        <h1> Submitted from Ithaca Veterinary Specialists Contact Form </h1>
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Message:</strong> ${message} </p>
      `
    })
  } catch(error){
    return res.status(500).json({
      error: error.message || error.toString() 
    })
  } 

  return res.status(200).json({error: ""})

}