document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('dateInput');

    dateInput.addEventListener('blur', () => {
        const inputValue = dateInput.value;
        if (inputValue) {
            const [day, month, year] = inputValue.split('.');
            dateInput.value = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
    });
});
