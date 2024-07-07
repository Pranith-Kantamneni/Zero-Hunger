document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
});
