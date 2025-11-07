function ordenarNumeros() {
    const resDiv = document.getElementById('resultado');
    
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);

    const numeros = [n1, n2, n3];

    const sonIguales = n1 === n2 && n1 === n3;

    if (sonIguales) {
        resDiv.innerHTML = `<strong>Los 3 números son iguales: ${n1}</strong>.`;
    } else {
        const ordenAscendente = [numeros].sort((a, b) => a - b);
        
        const ordenDescendente = [ordenAscendente].reverse(); 

        resDiv.innerHTML = `
            <h4>Resultados:</h4>
            <p>De Mayor a Menor: ${ordenDescendente.join(', ')}</p>
            <p>De Menor a Mayor: ${ordenAscendente.join(', ')}</p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ejecutarBtn').addEventListener('click', ordenarNumeros);
});