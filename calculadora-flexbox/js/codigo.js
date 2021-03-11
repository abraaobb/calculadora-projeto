function calcular(acao, valor) {
    if (acao == "acao") {
        switch (valor) {
            case 'c':
                document.getElementById('resultado').value = "";
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '(':
            case ')':
            case '.':
            case 'Math.sqrt':
                document.getElementById('resultado').value += valor;
                break;
            case '=':
                var valor_resultado = eval(document.getElementById('resultado').value);
                document.getElementById('resultado').value = valor_resultado;
        }
    } else if (acao == "valor") {
        document.getElementById('resultado').value += valor;
    }
}


Math.sqrt();