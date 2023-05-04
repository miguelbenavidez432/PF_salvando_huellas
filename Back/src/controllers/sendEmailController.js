const nodemailer = require('nodemailer')
require('dotenv').config()


const sendEmail = async (nameU, lastNameU, passwordU, emailU, phoneU, addressU ) =>{

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
        text: 
        
        `Click en el link para reestablecer su contraseña
        http://localhost:5173/resetpass?token=${token}`
        

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

const sendEmailCarts = async (emailU, nameU, lastNameU, price, articles) =>{

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
        subject: `COMPRA REALIZADA CON ÉXITO`,
        text: `
        ${nameU} ${lastNameU}, su compra fue realizada exitosamente.

        Productos: 
        ${articles}

        Precio final: ${price}
        Esperamos que disfute de nuestros producto. Puede dejar su comentario de los productos comprado.
        Saludos
        `
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}

const sendEmailUpdateStatus = async (user, status) =>{

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
        to: user.emailU,
        subject: status === 'accepted'? `ADOPCIÓN ACEPTADA ` : `ADOPCIÓN RECHAZADA`,
        text: 
        status === 'accepted'?
        `
        ${user.nameU} ${user.lastNameU}, su solicitud de adopción fue aprobada con éxito.

        En breve un representante de Salvado Huellas se pondrá en contacto con usted
        ` :
        `
        ${user.nameU} ${user.lastNameU}, su solicitud de adopción fue rechazada.

        Si tienes alguna consulta, puede contactarse con nosotros a través de Whastsapp +54 9 3525 41-8986
        `
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(message)

}


module.exports = {
    sendEmail,
    sendEmailUpdate,
    sendEmailAdoption,
    sendEmailCarts,
    sendEmailUpdateStatus,
}