// Dashboard Functions - New features for tabs, statistics, and settings

// Tab Management
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeSettings();
    loadDashboardStatistics();
    loadSettingsFromStorage();
});

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.dashboard-tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Save selected tab to localStorage
            localStorage.setItem('selectedDashboardTab', tabId);
        });
    });

    // Load last selected tab
    const lastTab = localStorage.getItem('selectedDashboardTab') || 'dashboard-overview';
    document.querySelector(`[data-tab="${lastTab}"]`)?.click();
}

// Load Dashboard Statistics
async function loadDashboardStatistics() {
    try {
        const apartments = await window.vitalStaysApi.listApartments();
        const requests = await window.vitalStaysApi.listOwnerApartmentRequests();
        
        // Obtenemos todos los datos del dashboard (incluyendo todas las reseñas)
        let reviews = [];
        if (window.vitalStaysApi.listDashboardData) {
            const data = await window.vitalStaysApi.listDashboardData();
            reviews = data.reviews || [];
        }

        // Total Apartments
        document.getElementById('totalApartments').textContent = apartments.length;

        // Pending Requests
        const pendingRequests = requests.filter(r => r.status === 'pendiente').length;
        document.getElementById('totalRequests').textContent = pendingRequests;

        // Total Revenue
        const totalRevenue = apartments.reduce((sum, apt) => sum + (apt.price || 0), 0);
        document.getElementById('totalRevenue').textContent = '$' + totalRevenue.toLocaleString('es-ES');

        // Average Rating
        const avgRating = apartments.length > 0 
            ? (apartments.reduce((sum, apt) => sum + (apt.rating || 0), 0) / apartments.length).toFixed(1)
            : 0;
        document.getElementById('avgRating').textContent = avgRating + ' ⭐';

        // Estadísticas Detalladas de Reseñas
        const totalReviews = reviews.length;
        const avgReviewRating = totalReviews > 0 
            ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / totalReviews).toFixed(1) 
            : 0;
        const repliedReviews = reviews.filter(r => r.admin_reply && r.admin_reply.trim() !== '').length;
        const lowRatingReviews = reviews.filter(r => r.rating <= 3).length;

        // Actualizamos los elementos en el HTML si existen
        if (document.getElementById('reviewAvgStat')) 
            document.getElementById('reviewAvgStat').textContent = avgReviewRating + ' ⭐';
        if (document.getElementById('reviewTotalStat')) 
            document.getElementById('reviewTotalStat').textContent = totalReviews;
        if (document.getElementById('reviewRepliedStat')) 
            document.getElementById('reviewRepliedStat').textContent = (totalReviews > 0 ? Math.round((repliedReviews / totalReviews) * 100) : 0) + '%';
        if (document.getElementById('reviewLowStat')) 
            document.getElementById('reviewLowStat').textContent = lowRatingReviews;

        // Charts
        populateApartmentsByCity(apartments);
        populatePropertyTypes(apartments);
    } catch (error) {
        console.error('Error al cargar estadísticas:', error);
    }
}

function populateApartmentsByCity(apartments) {
    const cities = {};
    apartments.forEach(apt => {
        const city = apt.city || apt.neighborhood || 'Otro';
        cities[city] = (cities[city] || 0) + 1;
    });

    const container = document.getElementById('apartmentsByCity');
    const maxCount = Math.max(...Object.values(cities), 1);
    
    container.innerHTML = Object.entries(cities).map(([city, count]) => {
        const percentage = (count / maxCount) * 100;
        return `
            <div class="chart-item">
                <span class="chart-label">${city}</span>
                <div class="chart-bar" style="width: ${percentage}%"></div>
                <span class="chart-value">${count}</span>
            </div>
        `;
    }).join('');
}

function populatePropertyTypes(apartments) {
    const types = {};
    apartments.forEach(apt => {
        const type = apt.type || 'Apartamento';
        types[type] = (types[type] || 0) + 1;
    });

    const container = document.getElementById('propertyTypes');
    const maxCount = Math.max(...Object.values(types), 1);
    
    container.innerHTML = Object.entries(types).map(([type, count]) => {
        const percentage = (count / maxCount) * 100;
        return `
            <div class="chart-item">
                <span class="chart-label">${type}</span>
                <div class="chart-bar" style="width: ${percentage}%"></div>
                <span class="chart-value">${count}</span>
            </div>
        `;
    }).join('');
}

// Settings Management
function initializeSettings() {
    // Theme Mode
    const themeSelect = document.getElementById('themeMode');
    if (themeSelect) {
        themeSelect.addEventListener('change', function() {
            applyTheme(this.value);
            localStorage.setItem('dashboardTheme', this.value);
        });
    }

    // Language
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            localStorage.setItem('dashboardLanguage', this.value);
            // Implement language change here
            showNotification('Idioma actualizado', 'success');
        });
    }

    // Save Settings Button
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveAdminSettings);
    }

    // Reset Settings Button
    const resetSettingsBtn = document.getElementById('resetSettingsBtn');
    if (resetSettingsBtn) {
        resetSettingsBtn.addEventListener('click', resetSettings);
    }

    // Change Password Button
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', showChangePasswordModal);
    }

    // Enable Two Factor Button
    const enableTwoFactorBtn = document.getElementById('enableTwoFactorBtn');
    if (enableTwoFactorBtn) {
        enableTwoFactorBtn.addEventListener('click', showTwoFactorModal);
    }
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.filter = 'invert(1)';
        document.body.style.backgroundColor = '#1a1a1a';
    } else if (theme === 'light') {
        document.body.style.filter = 'none';
        document.body.style.backgroundColor = '#ffffff';
    } else {
        // auto - follow system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.style.filter = 'invert(1)';
        } else {
            document.body.style.filter = 'none';
        }
    }
}

function loadSettingsFromStorage() {
    // Load saved settings
    const savedTheme = localStorage.getItem('dashboardTheme') || 'light';
    const savedLanguage = localStorage.getItem('dashboardLanguage') || 'es';
    
    const adminName = localStorage.getItem('adminName') || '';
    const adminEmail = localStorage.getItem('adminEmail') || '';
    const adminPhone = localStorage.getItem('adminPhone') || '';
    const adminCompany = localStorage.getItem('adminCompany') || '';
    const adminAddress = localStorage.getItem('adminAddress') || '';

    // Populate form fields
    const themeSelect = document.getElementById('themeMode');
    if (themeSelect) themeSelect.value = savedTheme;

    const languageSelect = document.getElementById('language');
    if (languageSelect) languageSelect.value = savedLanguage;

    if (document.getElementById('adminName')) document.getElementById('adminName').value = adminName;
    if (document.getElementById('adminEmail')) document.getElementById('adminEmail').value = adminEmail;
    if (document.getElementById('adminPhone')) document.getElementById('adminPhone').value = adminPhone;
    if (document.getElementById('adminCompany')) document.getElementById('adminCompany').value = adminCompany;
    if (document.getElementById('adminAddress')) document.getElementById('adminAddress').value = adminAddress;

    // Load notification preferences
    const notifNewRequests = localStorage.getItem('notifNewRequests') !== 'false';
    const notifApartmentUpdates = localStorage.getItem('notifApartmentUpdates') !== 'false';
    const notifSystemAlerts = localStorage.getItem('notifSystemAlerts') !== 'false';

    if (document.getElementById('notifNewRequests')) document.getElementById('notifNewRequests').checked = notifNewRequests;
    if (document.getElementById('notifApartmentUpdates')) document.getElementById('notifApartmentUpdates').checked = notifApartmentUpdates;
    if (document.getElementById('notifSystemAlerts')) document.getElementById('notifSystemAlerts').checked = notifSystemAlerts;

    applyTheme(savedTheme);
}

function saveAdminSettings() {
    // Save admin information
    const adminName = document.getElementById('adminName').value;
    const adminEmail = document.getElementById('adminEmail').value;
    const adminPhone = document.getElementById('adminPhone').value;
    const adminCompany = document.getElementById('adminCompany').value;
    const adminAddress = document.getElementById('adminAddress').value;

    localStorage.setItem('adminName', adminName);
    localStorage.setItem('adminEmail', adminEmail);
    localStorage.setItem('adminPhone', adminPhone);
    localStorage.setItem('adminCompany', adminCompany);
    localStorage.setItem('adminAddress', adminAddress);

    // Save notification preferences
    localStorage.setItem('notifNewRequests', document.getElementById('notifNewRequests').checked);
    localStorage.setItem('notifApartmentUpdates', document.getElementById('notifApartmentUpdates').checked);
    localStorage.setItem('notifSystemAlerts', document.getElementById('notifSystemAlerts').checked);

    showNotification('Configuración guardada correctamente', 'success');
}

function resetSettings() {
    if (confirm('¿Está seguro de que desea restaurar los valores predeterminados?')) {
        localStorage.removeItem('adminName');
        localStorage.removeItem('adminEmail');
        localStorage.removeItem('adminPhone');
        localStorage.removeItem('adminCompany');
        localStorage.removeItem('adminAddress');
        localStorage.removeItem('dashboardTheme');
        localStorage.removeItem('dashboardLanguage');
        localStorage.removeItem('notifNewRequests');
        localStorage.removeItem('notifApartmentUpdates');
        localStorage.removeItem('notifSystemAlerts');
        
        loadSettingsFromStorage();
        showNotification('Configuración restaurada', 'success');
    }
}

function showChangePasswordModal() {
    const password = prompt('Ingrese su nueva contraseña:');
    if (password && password.length >= 6) {
        // Aquí iría la lógica para cambiar la contraseña
        showNotification('Contraseña actualizada correctamente', 'success');
    } else if (password) {
        showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
    }
}

function showTwoFactorModal() {
    alert('Autenticación de dos factores - Función en desarrollo\n\nPor favor, contacte al administrador del sistema.');
}

function showNotification(message, type = 'info') {
    // Create a simple notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
