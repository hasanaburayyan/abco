//ABCO node server

// External Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(bodyParser());


// Returns logs then deletes them!
app.get('/', function(req, res) {
  res.send("<h1>ABCO Node Server Reporting For Duty</h1>")
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
  const {companyName, email, accountNumber, contactPerson, newOrder, productName, quantity, startingNumber, shippingAddress, comments} = req.body;

    const abco_pass = 'RqtFLLx+qia5IDSA/AMC0g==';
    const send = require('gmail-send')({
      user: 'abco.printing.leads.@gmail.com',
      pass: abco_pass,
      to: 'hasanaburayyan@hotmail.com; hasanaburayyan21@gmail.com; abcoprinting@gmail.com',
      subject: 'ABCO NEW CUSTOMER ORDER ACTION REQUIRED!',
    });

    send({
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
                 <p>Additional Comments: ${comments}</p>`,
    }, (error, result, fullResult) => {
      if (error) console.error(error);
      console.log(result);
    });
}

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log('Your app is listening on port 3000' );
});
