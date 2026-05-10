// Owner apartment request form
document.getElementById('ownerRequestForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const formData = {
        ownerName: document.getElementById('ownerName').value.trim(),
        ownerEmail: document.getElementById('ownerEmail').value.trim(),
        ownerPhone: document.getElementById('ownerPhone').value.trim(),
        availabilityDate: document.getElementById('availabilityDate').value,
        propertyName: document.getElementById('propertyName').value.trim(),
        propertyType: document.getElementById('propertyType').value,
        location: document.getElementById('propertyLocation').value.trim(),
        price: document.getElementById('propertyPrice').value,
        bedrooms: document.getElementById('propertyBedrooms').value,
        bathrooms: document.getElementById('propertyBathrooms').value,
        size: document.getElementById('propertySize').value,
        imageUrl: document.getElementById('propertyImageUrl').value.trim(),
        description: document.getElementById('propertyDescription').value.trim(),
        amenities: document.getElementById('propertyAmenities').value.trim()
    };

    try {
        await window.vitalStaysApi.submitOwnerApartmentRequest(formData);
        document.getElementById('ownerRequestForm').style.display = 'none';
        document.getElementById('ownerSuccessMessage').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error al enviar solicitud de propietario:', error);
        alert(error.message || 'No se pudo enviar la solicitud. Intentalo nuevamente.');
    } finally {
        submitButton.disabled = false;
    }
});

const today = new Date().toISOString().split('T')[0];
document.getElementById('availabilityDate').setAttribute('min', today);
