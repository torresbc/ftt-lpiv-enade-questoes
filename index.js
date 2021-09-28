const express = require('express');
const app = express();
const port = 3000;


function recursive_calc(result, m, n) {
    if (m === n + 1) {
        return result;
    }

    console.log(result);
    result *= m + (1 / m);
    return recursive_calc(result, m + 1, n);
}


app.get('/iterative', (req, res) => {
    console.log(req.query);

    let m = Number(req.query.m);
    let n = Number(req.query.n);

    if (m > n) {
        res.status(400).json('Parâmetro Inválido: Valor de M superior à N')
    }
    else if (m <= 0) {
        res.status(400).json('Parâmetro Inválido: Valor de M inferior à 0')
    }
    else {
        let result = 1;
        for (var i = m; i <= n; i++) {
            result *= i + (1 / i);

            console.log(result);
        }
        res.send(`Resultado: ${result}`)
    }
});


app.get('/recursive', (req, res) => {
    console.log(req.query);

    let m = Number(req.query.m);
    let n = Number(req.query.n);

    let result = 1;
    if (m > n) {
        res.status(400).json('Parâmetro Inválido: Valor de M superior à N')
    }
    else if (m <= 0) {
        res.status(400).json('Parâmetro Inválido: Valor de M inferior ou igual à 0')
    }
    else {
        result = recursive_calc(result, m, n);
        res.send(`Resultado: ${result}`)
    }
});

app.listen(port, () => console.log(`Ouvindo porta ${port}`));

