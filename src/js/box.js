const checkbox1 = document.getElementById('renta');
const checkbox2 = document.getElementById('venta');

function handleCheckboxChange(changedCheckbox, otherCheckbox) {
    if (changedCheckbox.checked) {
        otherCheckbox.checked = false;
    }
    changedCheckbox.value = changedCheckbox.checked ? "vender" : "rentar";
    otherCheckbox.value = "rentar";
}

checkbox1.addEventListener('change', () => handleCheckboxChange(checkbox1, checkbox2));
checkbox2.addEventListener('change', () => handleCheckboxChange(checkbox2, checkbox1));
