document.addEventListener('DOMContentLoaded', async () => {
    const apts = await window.vitalStaysApi.listApartments();
    const container = document.getElementById('compare-table-container');

    let selected = [null, null, null];

    function render() {
        let html = '<table class="compare-table" id="compareTable">';
        
        html += '<tr><th>Característica</th>';
        for(let i=0; i<3; i++) {
            html += `<th><select class="compare-select" onchange="window.updateCompare(${i}, this.value)">`;
            html += `<option value="">-- Seleccionar Apartamento --</option>`;
            apts.forEach(apt => {
                const isSel = selected[i] && selected[i].id === apt.id ? 'selected' : '';
                html += `<option value="${apt.id}" ${isSel}>${apt.name}</option>`;
            });
            html += `</select></th>`;
        }
        html += '</tr>';

        html += '<tr><td>Imagen</td>';
        for(let i=0; i<3; i++) {
            const apt = selected[i];
            html += `<td>${apt ? `<img src="${apt.image}" alt="${apt.name}">` : '-'}</td>`;
        }
        html += '</tr>';

        html += '<tr><td>Precio (Mensual)</td>';
        for(let i=0; i<3; i++) { html += `<td>${selected[i] ? '$' + selected[i].price.toLocaleString() : '-'}</td>`; }
        html += '</tr>';

        html += '<tr><td>Tamaño</td>';
        for(let i=0; i<3; i++) { html += `<td>${selected[i] ? selected[i].size + ' m²' : '-'}</td>`; }
        html += '</tr>';

        html += '<tr><td>Habitaciones</td>';
        for(let i=0; i<3; i++) { html += `<td>${selected[i] ? selected[i].bedrooms : '-'}</td>`; }
        html += '</tr>';

        html += '<tr><td>Baños</td>';
        for(let i=0; i<3; i++) { html += `<td>${selected[i] ? selected[i].bathrooms : '-'}</td>`; }
        html += '</tr>';

        html += '<tr><td>Ubicación</td>';
        for(let i=0; i<3; i++) { html += `<td>${selected[i] ? selected[i].location : '-'}</td>`; }
        html += '</tr>';

        html += '</table>';
        container.innerHTML = html;
    }

    window.updateCompare = (col, id) => {
        selected[col] = id ? apts.find(a => a.id == id) : null;
        render();
    };

    render();

    document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        const element = document.getElementById('compareTable');
        html2pdf().set({ margin: 0.5, filename: 'vitalstays-comparador.pdf', html2canvas: { scale: 2 }, jsPDF: { orientation: 'landscape' } }).from(element).save();
    });
});