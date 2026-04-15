const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth: {
        user: "pruebassantidev@gmail.com",
        pass: "dflmbxklgrnyotxi"
    }
})



const sendEmail = (email, name, lastname) =>{

    const emailText = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        <h1>BienVenid@ ${name} ${lastname} a nuestra aplicación</h1>
        <h2>Política de uso</h2>
        <h3>Su cuenta con el email ${email} ha sido creada</h3>
        <h3>debes confirmar la cuenta</h3>
        <p style='background-color:"yellow"'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, facere recusandae harum facilis atque quaerat commodi, alias minima tenetur excepturi soluta dolor, asperiores dolores reiciendis ad voluptates exercitationem ut tempore. Quia facere minima rerum magni omnis eveniet corrupti nisi eum pariatur quod, tempora recusandae aspernatur veniam tenetur id et, tempore numquam hic nihil. Quisquam iusto neque voluptatem ipsam maxime laboriosam est! Iste, inventore quaerat tempore repellat iusto molestiae fuga perferendis, quos magnam nesciunt odit! Quaerat, ex, voluptatibus repudiandae enim adipisci, nostrum atque pariatur laudantium laborum quisquam quidem recusandae! Quasi perspiciatis aliquid, debitis temporibus provident distinctio alias sed tempora culpa laudantium.
        </p>
        <button>Confirmar</button>
    </body>
    </html>`

    //test para ver que la conexión es correcta con gmail, no es obligatorio ponerlo
    transporter.verify().then(res=>console.log("ok", res)).catch(err=>console.log("err", err));

    transporter.sendMail({
        from: 'Miapp <pruebasSantidev@gmail.com>',
        to: email,
        subject: 'Regitro en la aplicación',
        text: "te has registardo correctamente, gracias",
        html: emailText
    })
}

module.exports = sendEmail;

// 'jorge.jimsan1988@gmail.com'