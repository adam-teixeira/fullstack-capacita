const express = requite('express');
const app = express();

const PORT = 3000; //Utilize uma porta livre

app.get('/', (req, res) => {
    res.send('<h1>Hello from Node</h1>')
    res.json({message: 'Hello from Node'})
})

app.listen(PORT, () => {
    console.log('Servidor executando em http://localhost:${PORT}');
});