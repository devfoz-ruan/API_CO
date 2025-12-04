import "dotenv/config";
import App from "./app";

const app = new App

app.server.listen(process.env.PORT, ()=>{
    console.log(`API ESTA FUNCIONANDO NA PORTA: ${process.env.PORT}`)
});
