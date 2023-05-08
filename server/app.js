require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/sendmail', function (req, res) {
  const form = req.body;
  console.log('post request received !');
  console.log(form);
  console.log(process.env.USER);
  console.log(process.env.PASS);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'gerard.papajoueur.fr',
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  })

  const message = {
    from: process.env.USER,
    to: 'gerard.hubert@mail.fr',
    subject: `Message de ${form.name} < ${form.email} >`,
    html: `<p>${form.content}</p>`
  }

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('ERREUR', error);
      res.status(501).json({ status: 501, error: error })
    } else {
      console.log('EMAIL SENT', info.response);
      res.status(201).json({ status: 201, info })
    }
  })

  // verify connection configuration
  // transporter.verify(function (error, success) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages");
  //   }
  // });
})

app.listen(port, () => console.log(`server started at port ${port}`));