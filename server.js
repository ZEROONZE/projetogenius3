const express =  require('express')



const app = express();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
app.listen(3001, () => { 
console.log('servidor em http://localhost:3001')

}
)

app.post('', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
        console.log(res.send);
      })
   
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });

