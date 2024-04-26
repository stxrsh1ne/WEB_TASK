const table = document.getElementById('myTable');

for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td');
        if ((i % 2 !== 0 && j % 2 === 0) || (i % 2 === 0 && j % 2 !== 0)) {
            cell.style.backgroundColor = 'white';
        } else {
            if (i % 2 === 0) {
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = 'green';
            }
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}