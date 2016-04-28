var nodemailer = require('nodemailer');

exports.contactus = function(name, email, message) {


            // Create a SMTP transport object
            var transport = nodemailer.createTransport("SMTP", {

                host: "smtp.postmarkapp.com", // hostname
                port: 587, // port for secure SMTP
                auth: {
                    user: "f7ef2575-9ae0-4e8f-a95f-ced99bb9d745",
                    pass: "f7ef2575-9ae0-4e8f-a95f-ced99bb9d745"
                }

            });

            console.log('SMTP Configured');

            // Message object
            var message = {

                // sender info
                from:' <contactus@cannedhead.com> ',

                // Comma separated list of recipients
                to: 'contact@cannedhead.com, julian@cannedhead.com',

                // Subject of the message
                subject: name+' '+email, //

                headers: {
                    'X-Laziness-level': 1000
                },

                // HTML body
                html:'Hello, someone wants to contact you, <br/>'+ 
                     '<b>Name:</b> '+name+'<br/>'+
                     '<b>Email:</b> '+email+'<br/>'+
                     '<b>Message:</b><br/>'+message+'<br/>'       
            };

            console.log('Sending Mail');

            transport.sendMail(message, function(error){
                if(error){
                    console.log('Error occured');
                    console.log(error.message);
                    return;
                }
                console.log('Message sent successfully!');

                // if you don't want to use this transport object anymore, uncomment following line
                transport.close(); // close the connection pool
            });
};