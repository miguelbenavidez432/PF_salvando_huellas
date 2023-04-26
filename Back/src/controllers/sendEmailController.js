const nodemailer = require('nodemailer')
require('dotenv').config()

const sendEmail = async (emailU) =>{

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'mob432@gmail.com',
            pass: process.env.nodemailer,
        }
    }

    const message = {
        from: 'mob432@gmail.com',
        to: emailU,
        subject: 'Correo de prueba',
        text: ' Este es un correo de prueba '
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}

module.exports = {
    sendEmail
}