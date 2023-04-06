import express from "express";

import "./database";

const app = express();

app.get("/", function(request, response) {
    return response.json({message: 'Olá NLW 05'})
})

app.post('/', (request, response) => {
    return response.json({message: "Uusário cadastrado com sucesso!"});
});

app.listen(3333, () => console.log('Server is running on port 3333'));