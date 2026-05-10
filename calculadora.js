document.addEventListener('DOMContentLoaded', async () => {
    const apts = await window.vitalStaysApi.listApartments();
    const aptSelect = document.getElementById('calc-apartment');
    
    apts.forEach(apt => {
        const opt = document.createElement('option');
        opt.value = apt.price;
        opt.textContent = `${apt.name} - $${apt.price.toLocaleString()}`;
        aptSelect.appendChild(opt);
    });

    const inputs = ['calc-rent', 'calc-services', 'calc-deposit-months', 'calc-moving'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', updateCalc);
    });

    aptSelect.addEventListener('change', (e) => {
        if(e.target.value) {
            document.getElementById('calc-rent').value = e.target.value;
            updateCalc();
        }
    });

    function updateCalc() {
        const rent = parseFloat(document.getElementById('calc-rent').value) || 0;
        const services = parseFloat(document.getElementById('calc-services').value) || 0;
        const depositMonths = parseFloat(document.getElementById('calc-deposit-months').value) || 0;
        const moving = parseFloat(document.getElementById('calc-moving').value) || 0;

        const depositCost = rent * depositMonths;
        document.getElementById('res-monthly').textContent = `$${(rent + services).toLocaleString()}`;
        document.getElementById('res-upfront').textContent = `$${(rent + depositCost + moving).toLocaleString()}`;
        document.getElementById('bd-rent').textContent = `$${rent.toLocaleString()}`;
        document.getElementById('bd-deposit').textContent = `$${depositCost.toLocaleString()}`;
        document.getElementById('bd-moving').textContent = `$${moving.toLocaleString()}`;
    }
    updateCalc();
});