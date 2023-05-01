const nodemailer = require('nodemailer')
require('dotenv').config()


const sendEmail = async (nameU, lastNameU, passwordU, idNumbU, emailU, phoneU, addressU ) =>{

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'mob432@gmail.com', //salvanbohuellasjesusmaria@gmail.com
            pass: process.env.nodemailer,           //salvandohuellasjesusmaria@gmail.com   
        }
    }

    const message = {
        from: 'mob432@gmail.com',
        to: emailU,
        subject: `BIENVENIDO ${nameU}`,
        text: `BIENVENIDOS A SALVANDO HUELLAS
        
        TE REGISTRASTE CON LOS SIGUIENTES DATOS

        NOMBRE: ${nameU}
        APELLIDO: ${lastNameU}
        PASSWORD: ${passwordU}
        DNI: ${idNumbU}
        TELEFONO: ${phoneU}
        DIRECCIÓN: ${addressU}
        `
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}

const sendEmailUpdate = async (token, emailU, ) =>{

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
        subject: `Solicitud de cambio de contraseña de ${emailU}`,
        text: `
        <h3>Click en el link para reestablecer su contraseña</h3>
        <p>http://localhost:5173/1/resetpass/${token}</p>
        `

    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}

const sendEmailAdoption = async (emailU, adopted_homeA, ) =>{

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'mob432@gmail.com',               //salvanbohuellasjesusmaria@gmail.com
            pass: process.env.nodemailer,           //salvandohuellasjesusmaria@gmail.com   
        }
    }

    const message = {
        from: 'mob432@gmail.com',
        to: emailU,
        subject: `SOLICITUD DE ADOPCIÓN REALIZADA`,
        text: `
        TU SOLICITUD DE ADOPCIÓN FUE REALIZADA CON EXITO ${adopted_homeA}
        `
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}

module.exports = {
    sendEmail,
    sendEmailUpdate,
    sendEmailAdoption,
}