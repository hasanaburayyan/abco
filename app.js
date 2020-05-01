//ABCO node server

// External Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Returns logs then deletes them!
app.get('/', function(req, res) {
  console.log('I have been pinged!')
  res.send("<h1>ABCO Node Server Reporting For Duty</h1>")
});

app.get('/api/contactForm', function(req, res) {
  res.send("<h1>Api Contact Form Endpoint Ready For Action</h1>")
});

// Create one user
app.post('/api/contactForm', async (req, res) => {
  console.log(req.body);
  sendMail(req)
  const {companyName, email, accountNumber, contactPerson, newOrder, productName, quantity, startingNumber, shippingAddress, comments} = req.body;

  res.status(200).json({
    success: true,
    message: "Boom"
  })
});

async function sendMail(req) {
  const {companyName, email, accountNumber, contactPerson, newOrder, productName, quantity, startingNumber, shippingAddress, billingAddress, comments} = req.body;

  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers:'SSLv3'
    },
    auth: {
      user: 'abco.printing.leads@outlook.com',
      pass: 'Lucylaith2!'
    }
  });

// setup e-mail data, even with unicode symbols
  // TODO: Add abcopriting to list

  var mailOptions = {
    from: '"Website Order" <abco.printing.leads@outlook.com>', // sender address
    to: "hasanaburayyan21@gmail.com", // list of receivers
    subject: "ABCO NEW CUSTOMER ORDER ACTION REQUIRED!", // Subject line
    text: `NEW LEAD: ${companyName}, ${email}, ${contactPerson}, ${newOrder}, ${productName}, ${quantity}, ${shippingAddress}, ${billingAddress} , ${comments}`, // plain text body
    html: `<h1>${companyName} has placed a new order!</h1>` +
      `<u><b><h3>Order info</h3></b></u>` +
      `<p>Company Name: ${companyName}</p>
                 <p>Email: ${email}</p>
                 <p>Account Number: ${accountNumber}</p>
                 <p>Contact Person: ${contactPerson}</p>
                 <p>New Order: ${newOrder}</p>
                 <p>Product Name: ${productName}</p>
                 <p>Quantity: ${quantity}</p>
                 <p>Starting Number: ${startingNumber}</p>
                 <p>Shipping Address: ${shippingAddress}</p>
                 <p>Billing Address: ${billingAddress}</p>
                 <p>Additional Comments: ${comments}</p>`
  }

// send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }

    console.log('Message sent: ' + info.response);
  });

}

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log('Your app is listening on port 3000' );
});
