// import express from "express";
// import axios from "axios";
// require("dotenv").config();

// //Postar em uma url segura, no caso, uma url com um id unico para FRONT_PATH

// const N8N_PATH= process.env.N8N_PATH;
// const FRONT_PATH= process.env.FRONT_PATH;


// const app = express();
// app.use(express.json());

// app.post("/HumanForN8N", async (req, res) => {
//   const message = req.body.message;
  
//   if (message) {
//     // Envia para o n8n processar
//     await axios.post(N8N_PATH, {
//       from: message.from,
//       text: message.text?.body || "",
//     });
//   }

//   res.sendStatus(200);
// });

// app.post("/HumanForFront", async (req, res) => {
//   const message = req.body.message;
  
//   if (message) {
//     // Envia para o n8n processar
//     await axios.post(FRONT_PATH, {
//       from: message.from,
//       text: message.text?.body || "",
//     });
//   }

//   res.sendStatus(200);
// });

// app.listen(3000, () => console.log("Webhook ON"));
