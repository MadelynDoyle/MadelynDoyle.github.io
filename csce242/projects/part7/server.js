const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/send", async (req, res) => {
    const { name, phone, email, inquiry } = req.body;


    const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: "doylemr@email.sc.edu",         
            pass: "Rfycike2#"              
        }
    });

    const mailOptions = {
        from: email,
        to: "doylemr@email.sc.edu",               
        subject: "New Contact Form Submission",
        text: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Message: ${inquiry}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Something went wrong!" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
