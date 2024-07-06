document.addEventListener('DOMContentLoaded', () => {
    const foodItems = document.querySelectorAll('.food-item');
    const foodDonationForm = document.getElementById('food-donation-form');

    

    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            foodDonationForm.style.display = 'block';
        });
    });

    document.getElementById('money-donation-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your donation! Our team will send you the QR code for donating the respective amount.');
        this.reset();
    });

    document.getElementById('food-donation-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your food donation! Our team will send you the QR code for donating the respective amount.');
        this.reset();
    });

    document.getElementById('volunteer-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for volunteering! Our team will contact you shortly.');
        this.reset();
    });

    document.getElementById('custom-food-form').addEventListener('change', function(event) {
        let total = 0;
        this.querySelectorAll('input[type=checkbox]:checked').forEach(checkbox => {
            total += parseInt(checkbox.value);
        });
        document.getElementById('custom-total').textContent = total;
    });

    // Initial display of schemes for all states
    displaySchemes('all');
});
