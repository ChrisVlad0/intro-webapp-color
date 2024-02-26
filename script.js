document.addEventListener('DOMContentLoaded', function () {
    const inputRed = document.getElementById('inputRed');
    const inputGreen = document.getElementById('inputGreen');
    const inputBlue = document.getElementById('inputBlue');
    const inputColor = document.getElementById('inputColor'); // Nuevo input color picker
    const outputColor = document.getElementById('outputColor');
    const outputHex = document.getElementById('outputHex');
  
    function updateColor() {
        const colorValue = inputColor.value;
        const red = parseInt(colorValue.slice(1, 3), 16) || 0;
        const green = parseInt(colorValue.slice(3, 5), 16) || 0;
        const blue = parseInt(colorValue.slice(5, 7), 16) || 0;

        inputRed.value = red;
        inputGreen.value = green;
        inputBlue.value = blue;

        document.getElementById('textInputRed').value = red;
        document.getElementById('textInputGreen').value = green;
        document.getElementById('textInputBlue').value = blue;

        const rgbColor = `rgb(${red},${green},${blue})`;
        const hexColor = rgbToHex(red, green, blue);

        outputColor.style.backgroundColor = rgbColor;
        outputHex.value = hexColor;
    }

    function updateColorFromTextInput() {
        const red = parseInt(document.getElementById('textInputRed').value) || 0;
        const green = parseInt(document.getElementById('textInputGreen').value) || 0;
        const blue = parseInt(document.getElementById('textInputBlue').value) || 0;

        inputRed.value = red;
        inputGreen.value = green;
        inputBlue.value = blue;

        const rgbColor = `rgb(${red},${green},${blue})`;
        const hexColor = rgbToHex(red, green, blue);

        outputColor.style.backgroundColor = rgbColor;
        outputHex.value = hexColor;
    }

    function rgbToHex(r, g, b) {
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        };
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    inputRed.addEventListener('input', updateColor);
    inputGreen.addEventListener('input', updateColor);
    inputBlue.addEventListener('input', updateColor);

    // Agregar eventos para cambios en los campos de entrada de texto
    document.getElementById('textInputRed').addEventListener('input', updateColorFromTextInput);
    document.getElementById('textInputGreen').addEventListener('input', updateColorFromTextInput);
    document.getElementById('textInputBlue').addEventListener('input', updateColorFromTextInput);

    // Agregar evento para cambios en el input color picker
    inputColor.addEventListener('input', updateColor);

    // Inicializar el color al cargar la página
    updateColor();
});
