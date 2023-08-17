document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    
    calculateButton.addEventListener("click", function() {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        
        if (isNaN(base) || isNaN(height)) {
            resultDiv.innerHTML = "<p>Masukkan angka valid untuk panjang alas dan tinggi.</p>";
        } else {
            const area = 0.5 * base * height;
            const perimeter = base + 2 * Math.sqrt(Math.pow(height, 2) + Math.pow(base / 2, 2));
            
            resultDiv.innerHTML = `
                <p>Luas Segitiga: ${area.toFixed(2)}</p>
                <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
            `;
        }
    });
});
