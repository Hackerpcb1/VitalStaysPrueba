// JavaScript for Apartment Rental Website

const UI_PREFERENCES = {
    themeKey: 'vitalStaysTheme',
    languageKey: 'vitalStaysLanguage'
};

const LANGUAGE_CONTENT = {
    es: {
        menuTitle: 'Preferencias',
        lightMode: 'Modo claro',
        darkMode: 'Modo oscuro',
        language: 'Idioma',
        spanish: 'Español',
        english: 'Inglés',
        popupTitle: 'Elige tu idioma',
        popupSubtitle: 'Selecciona cómo quieres ver Vital Stays.',
        continueButton: 'Continuar',
        navHome: 'Inicio',
        navListings: 'Listados',
        navOwners: 'Publica tu apartamento',
        navDashboard: 'Dashboard',
        navContact: 'Contacto',
        account: 'Cuenta',
        heroTitle: 'Estancias verificadas para profesionales de la salud',
        heroSubtitle: 'Descubre miles de apartamentos verificados en las mejores ubicaciones. Tu nuevo hogar te está esperando.',
        locationLabel: 'Ubicación',
        locationPlaceholder: '¿Dónde quieres vivir?',
        priceLabel: 'Precio Máximo',
        anyPrice: 'Cualquier precio',
        search: 'Buscar',
        viewApartments: 'Ver Todos los Apartamentos',
        publishApartment: 'Publicar mi apartamento',
        featuredTitle: 'Apartamentos Destacados',
        featuredSubtitle: 'Descubre nuestras mejores opciones seleccionadas especialmente para ti',
        whyChoose: '¿Por qué elegirnos?',
        featureSearchTitle: 'Búsqueda Fácil',
        featureSearchText: 'Encuentra el apartamento perfecto con nuestros filtros avanzados y búsqueda intuitiva.',
        featureVerifiedTitle: 'Verificado',
        featureVerifiedText: 'Todos nuestros apartamentos están verificados y cumplen con estándares de calidad.',
        featurePricesTitle: 'Mejores Precios',
        featurePricesText: 'Precios competitivos y transparentes sin comisiones ocultas.',
        featureSupportTitle: 'Soporte 24/7',
        featureSupportText: 'Nuestro equipo está disponible para ayudarte en cualquier momento.',
        ownersKicker: 'Para propietarios',
        ownersTitle: '¿Tienes un apartamento para profesionales de la salud?',
        ownersText: 'Envía la información de tu propiedad y nuestro equipo la revisará para incorporarla a Vital Stays.',
        joinButton: 'Solicitar unirme',
        faqTitle: 'Preguntas Frecuentes',
        faqSubtitle: 'Resolvemos las dudas más comunes sobre alquileres, solicitudes y publicación de apartamentos.',
        faq1Q: '¿Los apartamentos están verificados?',
        faq1A: 'Sí. Revisamos la información principal de cada propiedad antes de mostrarla en la plataforma para ofrecer opciones confiables.',
        faq2Q: '¿Cómo solicito alquilar un apartamento?',
        faq2A: 'Entra al detalle del apartamento que te interesa y usa la opción de contacto. El formulario enviará tu solicitud con los datos necesarios para iniciar el proceso.',
        faq3Q: '¿Vital Stays está pensado para profesionales de la salud?',
        faq3A: 'Sí. La plataforma está orientada a profesionales que necesitan estancias cómodas, confiables y bien ubicadas durante asignaciones, rotaciones o traslados.',
        faq4Q: '¿Puedo publicar mi apartamento en la plataforma?',
        faq4A: 'Sí. Puedes enviar una solicitud desde la sección “Publica tu apartamento”. El equipo revisará la información y te contactará para continuar.',
        faq5Q: '¿Qué información necesita un propietario?',
        faq5A: 'Nombre, contacto, ubicación, precio estimado, características del apartamento, descripción, disponibilidad e imágenes si las tiene.',
        faq6Q: '¿Cuánto tardan en responder una solicitud?',
        faq6A: 'Normalmente revisamos las solicitudes en un plazo de 24 a 48 horas y luego contactamos al solicitante para confirmar los siguientes pasos.',
        testimonialsTitle: 'Lo que dicen nuestros clientes',
        ctaTitle: '¿Listo para encontrar tu nuevo hogar?',
        ctaText: 'Únete a miles de personas que ya encontraron su apartamento perfecto',
        ctaButton: 'Comenzar Ahora',
        adminTitle: 'Panel de Administración',
        addApartment: '+ Agregar Nuevo Apartamento',
        ownerRequestsTitle: 'Solicitudes de Nuevos Apartamentos',
        ownerRequestsText: 'Personas que quieren publicar sus apartamentos en Vital Stays.',
        refresh: 'Actualizar',
        registeredApartments: 'Apartamentos Registrados',
        logout: 'Cerrar Sesión'
    },
    en: {
        menuTitle: 'Preferences',
        lightMode: 'Light mode',
        darkMode: 'Dark mode',
        language: 'Language',
        spanish: 'Spanish',
        english: 'English',
        popupTitle: 'Choose your language',
        popupSubtitle: 'Select how you want to view Vital Stays.',
        continueButton: 'Continue',
        navHome: 'Home',
        navListings: 'Listings',
        navOwners: 'List your apartment',
        navDashboard: 'Dashboard',
        navContact: 'Contact',
        account: 'Account',
        heroTitle: 'Verified stays for healthcare professionals',
        heroSubtitle: 'Discover verified apartments in the best locations. Your new home is waiting for you.',
        locationLabel: 'Location',
        locationPlaceholder: 'Where do you want to live?',
        priceLabel: 'Max Price',
        anyPrice: 'Any price',
        search: 'Search',
        viewApartments: 'View All Apartments',
        publishApartment: 'List my apartment',
        featuredTitle: 'Featured Apartments',
        featuredSubtitle: 'Discover our best options selected especially for you',
        whyChoose: 'Why choose us?',
        featureSearchTitle: 'Easy Search',
        featureSearchText: 'Find the perfect apartment with advanced filters and intuitive search.',
        featureVerifiedTitle: 'Verified',
        featureVerifiedText: 'All apartments are verified and meet quality standards.',
        featurePricesTitle: 'Best Prices',
        featurePricesText: 'Competitive, transparent prices with no hidden fees.',
        featureSupportTitle: '24/7 Support',
        featureSupportText: 'Our team is available to help you at any time.',
        ownersKicker: 'For owners',
        ownersTitle: 'Do you have an apartment for healthcare professionals?',
        ownersText: 'Send your property information and our team will review it to add it to Vital Stays.',
        joinButton: 'Request to join',
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'We answer the most common questions about rentals, applications, and apartment listings.',
        faq1Q: 'Are the apartments verified?',
        faq1A: 'Yes. We review the main information for each property before displaying it on the platform to offer reliable options.',
        faq2Q: 'How do I apply to rent an apartment?',
        faq2A: 'Open the apartment details and use the contact option. The form will send your request with the information needed to start the process.',
        faq3Q: 'Is Vital Stays designed for healthcare professionals?',
        faq3A: 'Yes. The platform is designed for professionals who need comfortable, reliable, well-located stays during assignments, rotations, or relocations.',
        faq4Q: 'Can I list my apartment on the platform?',
        faq4A: 'Yes. You can submit a request from “List your apartment”. Our team will review the information and contact you to continue.',
        faq5Q: 'What information does an owner need to provide?',
        faq5A: 'Name, contact details, location, estimated price, apartment features, description, availability, and images if available.',
        faq6Q: 'How long does it take to receive a response?',
        faq6A: 'We normally review requests within 24 to 48 hours and then contact the applicant to confirm the next steps.',
        testimonialsTitle: 'What our clients say',
        ctaTitle: 'Ready to find your new home?',
        ctaText: 'Join thousands of people who have already found their perfect apartment',
        ctaButton: 'Get Started',
        adminTitle: 'Admin Dashboard',
        addApartment: '+ Add New Apartment',
        ownerRequestsTitle: 'New Apartment Requests',
        ownerRequestsText: 'People who want to publish their apartments on Vital Stays.',
        refresh: 'Refresh',
        registeredApartments: 'Registered Apartments',
        logout: 'Log Out'
    }
};

const TRANSLATION_SELECTORS = [
    { selector: '#navMenu a[href="index.html"]', key: 'navHome' },
    { selector: 'nav a[href="listings.html"]', key: 'navListings' },
    { selector: 'nav a[href="owner-request.html"]', key: 'navOwners' },
    { selector: 'nav a[href="dashboard.html"]', key: 'navDashboard' },
    { selector: 'nav a[href="contacto.html"]', key: 'navContact' },
    { selector: '#userMenuBtn span', key: 'account' },
    { selector: '.hero-content h1', key: 'heroTitle' },
    { selector: '.hero-content > p', key: 'heroSubtitle' },
    { selector: '.search-field:nth-child(1) label', key: 'locationLabel' },
    { selector: '#heroLocationSearch', key: 'locationPlaceholder', attr: 'placeholder' },
    { selector: '.search-field:nth-child(2) label', key: 'priceLabel' },
    { selector: '#heroPriceSearch option[value=""]', key: 'anyPrice' },
    { selector: '.btn-search', key: 'search' },
    { selector: '.hero-buttons a[href="listings.html"]', key: 'viewApartments' },
    { selector: '.hero-buttons a[href="owner-request.html"]', key: 'publishApartment' },
    { selector: '.features-section .section-title', key: 'whyChoose' },
    { selector: '.feature-card:nth-child(1) h3', key: 'featureSearchTitle' },
    { selector: '.feature-card:nth-child(1) p', key: 'featureSearchText' },
    { selector: '.feature-card:nth-child(2) h3', key: 'featureVerifiedTitle' },
    { selector: '.feature-card:nth-child(2) p', key: 'featureVerifiedText' },
    { selector: '.feature-card:nth-child(3) h3', key: 'featurePricesTitle' },
    { selector: '.feature-card:nth-child(3) p', key: 'featurePricesText' },
    { selector: '.feature-card:nth-child(4) h3', key: 'featureSupportTitle' },
    { selector: '.feature-card:nth-child(4) p', key: 'featureSupportText' },
    { selector: '.featured .section-title', key: 'featuredTitle' },
    { selector: '.featured .section-subtitle', key: 'featuredSubtitle' },
    { selector: '.owners-section .section-kicker', key: 'ownersKicker' },
    { selector: '.owners-section h2', key: 'ownersTitle' },
    { selector: '.owners-section p', key: 'ownersText' },
    { selector: '.owners-section .btn', key: 'joinButton' },
    { selector: '.faq-section .section-title', key: 'faqTitle' },
    { selector: '.faq-section .section-subtitle', key: 'faqSubtitle' },
    { selector: '.faq-item:nth-child(1) summary', key: 'faq1Q' },
    { selector: '.faq-item:nth-child(1) p', key: 'faq1A' },
    { selector: '.faq-item:nth-child(2) summary', key: 'faq2Q' },
    { selector: '.faq-item:nth-child(2) p', key: 'faq2A' },
    { selector: '.faq-item:nth-child(3) summary', key: 'faq3Q' },
    { selector: '.faq-item:nth-child(3) p', key: 'faq3A' },
    { selector: '.faq-item:nth-child(4) summary', key: 'faq4Q' },
    { selector: '.faq-item:nth-child(4) p', key: 'faq4A' },
    { selector: '.faq-item:nth-child(5) summary', key: 'faq5Q' },
    { selector: '.faq-item:nth-child(5) p', key: 'faq5A' },
    { selector: '.faq-item:nth-child(6) summary', key: 'faq6Q' },
    { selector: '.faq-item:nth-child(6) p', key: 'faq6A' },
    { selector: '.testimonials .section-title', key: 'testimonialsTitle' },
    { selector: '.cta-section h2', key: 'ctaTitle' },
    { selector: '.cta-section p', key: 'ctaText' },
    { selector: '.cta-section .btn', key: 'ctaButton' },
    { selector: '.admin-header h1', key: 'adminTitle' },
    { selector: '#addNewBtn', key: 'addApartment' },
    { selector: '.owner-requests-section h2', key: 'ownerRequestsTitle' },
    { selector: '.owner-requests-section .admin-section-header p', key: 'ownerRequestsText' },
    { selector: '#refreshOwnerRequestsBtn', key: 'refresh' },
    { selector: '.admin-section:not(.owner-requests-section) h2', key: 'registeredApartments' },
    { selector: '#logoutBtn', key: 'logout' }
];

function getSavedLanguage() {
    return localStorage.getItem(UI_PREFERENCES.languageKey) || 'es';
}

function getSavedTheme() {
    return localStorage.getItem(UI_PREFERENCES.themeKey) || 'light';
}

function applyTheme(theme) {
    const selectedTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', selectedTheme);
    try {
        localStorage.setItem(UI_PREFERENCES.themeKey, selectedTheme);
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.warn('Espacio de almacenamiento local lleno. No se guardará la preferencia de tema.');
        }
    }
    document.querySelectorAll('[data-theme-option]').forEach(button => {
        button.classList.toggle('active', button.dataset.themeOption === selectedTheme);
    });
}

function setElementText(element, value) {
    const icon = element.querySelector('svg');
    if (icon) {
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
        });
        element.append(document.createTextNode(` ${value}`));
        return;
    }

    element.textContent = value;
}

function applyLanguage(language) {
    const selectedLanguage = language === 'en' ? 'en' : 'es';
    const content = LANGUAGE_CONTENT[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    try {
        localStorage.setItem(UI_PREFERENCES.languageKey, selectedLanguage);
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.warn('Espacio de almacenamiento local lleno. No se guardará la preferencia de idioma.');
        }
    }

    TRANSLATION_SELECTORS.forEach(item => {
        document.querySelectorAll(item.selector).forEach(element => {
            if (!content[item.key]) return;
            if (item.attr) {
                element.setAttribute(item.attr, content[item.key]);
            } else {
                setElementText(element, content[item.key]);
            }
        });
    });

    document.querySelectorAll('#featured-list .btn-small').forEach(button => {
        button.textContent = selectedLanguage === 'en' ? 'View Details' : 'Ver Detalles';
    });

    document.querySelectorAll('[data-language-option]').forEach(button => {
        button.classList.toggle('active', button.dataset.languageOption === selectedLanguage);
    });

    const popupContinue = document.getElementById('languagePopupContinue');
    if (popupContinue) popupContinue.textContent = content.continueButton;
    const popupTitle = document.getElementById('languagePopupTitle');
    if (popupTitle) popupTitle.textContent = content.popupTitle;
    const popupSubtitle = document.getElementById('languagePopupSubtitle');
    if (popupSubtitle) popupSubtitle.textContent = content.popupSubtitle;
}

function buildSettingsMenu() {
    const nav = document.querySelector('nav');
    const navMenu = document.querySelector('#navMenu');
    if (!nav || document.getElementById('settingsMenuWrapper')) return;

    // Desktop Settings Button (next to hamburger)
    const wrapper = document.createElement('div');
    wrapper.className = 'settings-menu-wrapper';
    wrapper.id = 'settingsMenuWrapper';
    wrapper.innerHTML = `
        <button class="settings-toggle" id="settingsToggle" type="button" aria-label="Preferencias" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        </button>
        <div class="settings-panel" id="settingsPanel">
            <h3 data-settings-title>Preferencias</h3>
            <div class="settings-group">
                <span data-settings-theme>Modo</span>
                <div class="segmented-control">
                    <button type="button" data-theme-option="light">Claro</button>
                    <button type="button" data-theme-option="dark">Oscuro</button>
                </div>
            </div>
            <div class="settings-group">
                <span data-settings-language>Idioma</span>
                <div class="segmented-control">
                    <button type="button" data-language-option="es">Español</button>
                    <button type="button" data-language-option="en">English</button>
                </div>
            </div>
        </div>
    `;

    nav.appendChild(wrapper);

    // Mobile Settings in Menu
    if (navMenu) {
        const mobileSettingsLi = document.createElement('li');
        mobileSettingsLi.className = 'settings-menu-mobile';
        mobileSettingsLi.innerHTML = `
            <div class="settings-mobile-content">
                <h4 data-settings-title>Preferencias</h4>
                <div class="settings-group">
                    <span data-settings-theme>Modo</span>
                    <div class="segmented-control">
                        <button type="button" data-theme-option="light">Claro</button>
                        <button type="button" data-theme-option="dark">Oscuro</button>
                    </div>
                </div>
                <div class="settings-group">
                    <span data-settings-language>Idioma</span>
                    <div class="segmented-control">
                        <button type="button" data-language-option="es">Español</button>
                        <button type="button" data-language-option="en">English</button>
                    </div>
                </div>
            </div>
        `;
        navMenu.appendChild(mobileSettingsLi);

        // Add event listeners to mobile settings buttons
        mobileSettingsLi.querySelectorAll('[data-theme-option]').forEach(button => {
            button.addEventListener('click', () => applyTheme(button.dataset.themeOption));
        });

        mobileSettingsLi.querySelectorAll('[data-language-option]').forEach(button => {
            button.addEventListener('click', () => applyLanguage(button.dataset.languageOption));
        });
    }

    const toggle = document.getElementById('settingsToggle');
    const panel = document.getElementById('settingsPanel');
    toggle.addEventListener('click', function () {
        const isOpen = wrapper.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (event) {
        if (!wrapper.contains(event.target)) {
            wrapper.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    wrapper.querySelectorAll('[data-theme-option]').forEach(button => {
        button.addEventListener('click', () => applyTheme(button.dataset.themeOption));
    });

    wrapper.querySelectorAll('[data-language-option]').forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.languageOption));
    });
}

function buildLanguagePopup() {
    if (document.getElementById('languagePopup')) return;

    const popup = document.createElement('div');
    popup.className = 'language-popup';
    popup.id = 'languagePopup';
    popup.innerHTML = `
        <div class="language-popup-card">
            <h2 id="languagePopupTitle">Elige tu idioma</h2>
            <p id="languagePopupSubtitle">Selecciona cómo quieres ver Vital Stays.</p>
            <div class="language-popup-options">
                <button type="button" data-popup-language="es">Español</button>
                <button type="button" data-popup-language="en">English</button>
            </div>
            <button type="button" class="btn btn-primary" id="languagePopupContinue">Continuar</button>
        </div>
    `;

    document.body.appendChild(popup);

    let selectedLanguage = 'es';
    popup.querySelectorAll('[data-popup-language]').forEach(button => {
        button.classList.toggle('active', button.dataset.popupLanguage === selectedLanguage);
        button.addEventListener('click', function () {
            selectedLanguage = button.dataset.popupLanguage;
            popup.querySelectorAll('[data-popup-language]').forEach(option => {
                option.classList.toggle('active', option === button);
            });
            applyLanguage(selectedLanguage);
        });
    });

    document.getElementById('languagePopupContinue').addEventListener('click', function () {
        applyLanguage(selectedLanguage);
        popup.classList.add('closing');
        setTimeout(() => popup.remove(), 180);
    });
}

function updateSettingsLabels() {
    const content = LANGUAGE_CONTENT[getSavedLanguage()];
    
    // Update all occurrences (desktop and mobile)
    document.querySelectorAll('[data-settings-title]').forEach(el => {
        el.textContent = content.menuTitle;
    });
    
    document.querySelectorAll('[data-settings-theme]').forEach(el => {
        el.textContent = getSavedLanguage() === 'en' ? 'Theme' : 'Modo';
    });
    
    document.querySelectorAll('[data-settings-language]').forEach(el => {
        el.textContent = content.language;
    });
    
    document.querySelectorAll('[data-theme-option="light"]').forEach(el => {
        el.textContent = content.lightMode;
    });
    
    document.querySelectorAll('[data-theme-option="dark"]').forEach(el => {
        el.textContent = content.darkMode;
    });
    
    document.querySelectorAll('[data-language-option="es"]').forEach(el => {
        el.textContent = content.spanish;
    });
    
    document.querySelectorAll('[data-language-option="en"]').forEach(el => {
        el.textContent = content.english;
    });

    // Update active states for theme and language
    const savedTheme = getSavedTheme();
    document.querySelectorAll('[data-theme-option]').forEach(button => {
        button.classList.toggle('active', button.dataset.themeOption === savedTheme);
    });

    const savedLanguage = getSavedLanguage();
    document.querySelectorAll('[data-language-option]').forEach(button => {
        button.classList.toggle('active', button.dataset.languageOption === savedLanguage);
    });
}

function initializePreferences() {
    const hadSavedLanguage = Boolean(localStorage.getItem(UI_PREFERENCES.languageKey));
    applyTheme(getSavedTheme());
    buildSettingsMenu();
    applyLanguage(getSavedLanguage());
    updateSettingsLabels();
    if (!hadSavedLanguage) buildLanguagePopup();

    // Cargar contenido dinámico desde Supabase
    loadDynamicContent();

    document.addEventListener('click', function (event) {
        if (event.target.matches('[data-language-option], [data-popup-language]')) {
            setTimeout(updateSettingsLabels, 0);
        }
    });
}

async function loadDynamicContent() {
    if (!window.vitalStaysApi || !window.vitalStaysApi.getPublicContent) return;

    try {
        const { settings, faqs, reviews } = await window.vitalStaysApi.getPublicContent();

        // 1. Aplicar configuraciones (Hero, Stats, Contacto, Social)
        settings.forEach(item => {
            const value = item.value;
            switch(item.key) {
                case 'hero_title': document.querySelector('.hero-content h1')?.setProperty('textContent', value); break;
                case 'hero_subtitle': document.querySelector('.hero-content > p')?.setProperty('textContent', value); break;
                case 'stat_apartments': document.querySelector('.hero-stats .stat:nth-child(1) h3')?.setProperty('textContent', value); break;
                case 'stat_clients': document.querySelector('.hero-stats .stat:nth-child(2) h3')?.setProperty('textContent', value); break;
                case 'stat_cities': document.querySelector('.hero-stats .stat:nth-child(3) h3')?.setProperty('textContent', value); break;
                case 'contact_email': document.querySelectorAll('.footer-section ul li').forEach(li => { if(li.textContent.includes('📧')) li.textContent = `📧 ${value}`; }); break;
                case 'contact_phone': document.querySelectorAll('.footer-section ul li').forEach(li => { if(li.textContent.includes('📱')) li.textContent = `📱 ${value}`; }); break;
                case 'contact_address': document.querySelectorAll('.footer-section ul li').forEach(li => { if(li.textContent.includes('📍')) li.textContent = `📍 ${value}`; }); break;
                case 'social_facebook': document.querySelectorAll('a[aria-label="Facebook"]').forEach(a => a.setAttribute('href', value)); break;
                case 'social_instagram': document.querySelectorAll('a[aria-label="Instagram"]').forEach(a => a.setAttribute('href', value)); break;
                case 'social_linkedin': document.querySelectorAll('a[aria-label="LinkedIn"]').forEach(a => a.setAttribute('href', value)); break;
                case 'social_twitter': document.querySelectorAll('a[aria-label="Twitter"]').forEach(a => a.setAttribute('href', value)); break;
            }
        });

        // 2. Renderizar FAQs dinámicamente
        const faqGrid = document.getElementById('faq-dynamic-container');
        if (faqGrid && faqs.length > 0) {
            faqGrid.innerHTML = faqs.map(f => `
                <details class="faq-item">
                    <summary>${escapeHtml(f.question)}</summary>
                    <p>${escapeHtml(f.answer)}</p>
                </details>
            `).join('');
        }

        // 3. Renderizar Reseñas dinámicamente
        const reviewsContainer = document.getElementById('reviews-container');
        if (reviewsContainer && reviews.length > 0) {
            reviewsContainer.innerHTML = reviews.map(r => `
                <div class="testimonial-card">
                    <div class="stars">${'⭐'.repeat(r.rating || 5)}</div>
                    <p>"${escapeHtml(r.comment)}"</p>
                    <div class="testimonial-author">
                        <img src="${escapeHtml(r.avatar_url || 'images/avatar1.jpg')}" alt="${escapeHtml(r.user_name)}"
                            onerror="this.src='https://i.pravatar.cc/100?img=${r.id}'">
                        <div>
                            <h4>${escapeHtml(r.user_name)}</h4>
                            <span>${escapeHtml(r.user_location || 'Cliente')}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

    } catch (error) {
        console.error('Error cargando contenido dinámico:', error);
    }
}

// Helper para actualizar texto de forma segura sin romper iconos
Object.defineProperty(Element.prototype, 'setProperty', {
    value: function(prop, val) {
        if (this && val) {
            if (prop === 'textContent') this.textContent = val;
            else this[prop] = val;
        }
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    initializePreferences();

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link (mobile only)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});

// Function to filter apartments on listings page
function filterApartments() {
    // Check if we're on the listings page with dynamic data
    if (typeof apartmentsData !== 'undefined') {
        // Use the listings.js filter function
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const priceFilter = document.getElementById('price-filter').value;

        const filtered = apartmentsData.filter(apartment => {
            let show = true;

            // Filter by search term (name or location)
            if (searchTerm) {
                const name = apartment.name ? apartment.name.toLowerCase() : '';
                const location = apartment.location ? apartment.location.toLowerCase() : '';
                if (!name.includes(searchTerm) && !location.includes(searchTerm)) {
                    show = false;
                }
            }

            // Filter by price
            if (priceFilter && show) {
                const maxPrice = parseInt(priceFilter);
                if (apartment.price > maxPrice) {
                    show = false;
                }
            }

            return show;
        });

        // Re-render the apartments with filtered data
        renderApartments(filtered);
    } else {
        // Fallback for static HTML cards
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const priceFilter = document.getElementById('price-filter').value;
        const apartments = document.querySelectorAll('.apartment-card');

        apartments.forEach(apartment => {
            const title = apartment.querySelector('h3').textContent.toLowerCase();
            const price = parseInt(apartment.dataset.price);

            let showApartment = true;

            if (searchTerm && !title.includes(searchTerm)) {
                showApartment = false;
            }

            if (priceFilter) {
                const maxPrice = parseInt(priceFilter);
                if (price > maxPrice) {
                    showApartment = false;
                }
            }

            apartment.style.display = showApartment ? 'block' : 'none';
        });
    }
}

// Function to clear all filters
function clearFilters() {
    document.getElementById('search').value = '';
    document.getElementById('price-filter').value = '';

    // Check if we're on the listings page with dynamic data
    if (typeof renderApartments !== 'undefined') {
        // Re-render all apartments
        renderApartments(apartmentsData);
    } else {
        // Fallback for static HTML cards
        filterApartments();
    }
}

// Add event listener for clear filters button
document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }
});

// Function to change main image on apartment detail page
function changeImage(src) {
    document.getElementById('main-image').src = src;
}

// Function to contact owner - redirects to contact form with apartment info
function contactOwner() {
    const apartmentTitle = document.getElementById('apartment-title').textContent;
    const apartmentLocation = document.getElementById('apartment-location').textContent
        .replace('Ubicación: ', '')
        .replace(/^📍\s*/, '');
    const apartmentId = getUrlParameter('id');

    // Redirect to contact page with apartment information
    window.location.href = `contacto.html?id=${apartmentId}&name=${encodeURIComponent(apartmentTitle)}&area=${encodeURIComponent(apartmentLocation)}`;
}

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildRatingMarkup(apartment) {
    if (!apartment.rating) return '';
    return `<div class="card-rating"><div class="stars">${'<span class="star filled">★</span>'.repeat(Math.floor(apartment.rating))}${apartment.rating % 1 >= 0.5 ? '<span class="star half">★</span>' : ''}${'<span class="star">★</span>'.repeat(5 - Math.ceil(apartment.rating))}</div><span class="rating-text">${apartment.rating.toFixed(1)}${apartment.reviews ? ` (${apartment.reviews} reseñas)` : ''}</span></div>`;
}

async function loadFeaturedApartments() {
    const container = document.getElementById('featured-list');
    if (!container || !window.vitalStaysApi) return;

    try {
        const apartments = await window.vitalStaysApi.listApartments({ limit: 3, featured: true });
        const fallbackImg = window.vitalStaysApi.fallbackImage;
        const language = getSavedLanguage();
        const detailText = language === 'en' ? 'View Details' : 'Ver Detalles';

        container.innerHTML = apartments.map(apt => {
            const badgeHTML = apt.badge ? `<div class="card-badge${apt.badge === 'Nuevo' ? ' new' : ''}">${apt.badge}</div>` : '';
            return `
                <div class="apartment-card">
                    ${badgeHTML}
                    <img src="${escapeHtml(apt.image || '')}" alt="${escapeHtml(apt.name)}" onerror="this.src='${fallbackImg}'">
                    <div class="card-content">
                        <div class="card-header">
                            <h3>${escapeHtml(apt.name)}</h3>
                            <div class="card-location">📍 ${escapeHtml(apt.location)}</div>
                            ${buildRatingMarkup(apt)}
                        </div>
                        <div class="card-features">
                            <span>🛏️ ${apt.bedrooms} Habitación${apt.bedrooms !== 1 ? 'es' : ''}</span>
                            <span>🚿 ${apt.bathrooms} Baño${apt.bathrooms !== 1 ? 's' : ''}</span>
                            <span>📐 ${apt.size} m²</span>
                        </div>
                        <div class="card-footer">
                            <div class="price">$${apt.price.toLocaleString()}<span>/mes</span></div>
                            <a href="apartment-detail.html?id=${encodeURIComponent(apt.id)}" class="btn btn-small">${detailText}</a>
                        </div>
                    </div>
                </div>`;
        }).join('');
    } catch (error) {
        console.error('Error al cargar destacados:', error);
    }
}

function bindThumbnailClickHandlers() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.onclick = function () {
            currentSlide(index + 1);
        };
    });
}

function updateMetaTag(selector, content) {
    const tag = document.querySelector(selector);
    if (tag && content) {
        tag.setAttribute('content', content);
    }
}

// Function to load apartment detail data from Supabase
async function loadApartmentImages() {
    const apartmentId = getUrlParameter('id');
    if (!apartmentId) return;

    const fallback = window.vitalStaysApi ? window.vitalStaysApi.fallbackImage : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop';
    const apartment = window.vitalStaysApi ? await window.vitalStaysApi.getApartmentById(apartmentId) : null;

    if (!apartment) return;

    document.title = `${apartment.name || 'Apartamento'} - Vital Stays`;
    updateMetaTag('meta[property="og:title"]', document.title);
    updateMetaTag('meta[name="twitter:title"]', document.title);
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
        const summary = apartment.description || `Apartamento en ${apartment.location || 'ubicación premium'} con galería de imágenes y detalles completos.`;
        descriptionTag.setAttribute('content', summary.slice(0, 155));
        updateMetaTag('meta[property="og:description"]', summary.slice(0, 155));
        updateMetaTag('meta[name="twitter:description"]', summary.slice(0, 155));
    }

    // Populate text fields
    const titleEl = document.getElementById('apartment-title');
    const priceEl = document.getElementById('apartment-price');
    const locationEl = document.getElementById('apartment-location');
    const descriptionEl = document.getElementById('apartment-description');
    const featuresEl = document.getElementById('apartment-features');

    if (titleEl) titleEl.textContent = apartment.name || '';
    if (priceEl) priceEl.textContent = `$${(apartment.price || 0).toLocaleString()}/mes`;
    if (locationEl) locationEl.textContent = `\uD83D\uDCCD ${apartment.location || ''}`;
    if (descriptionEl) descriptionEl.textContent = apartment.description || 'Sin descripci\u00f3n disponible.';
    if (featuresEl) {
        featuresEl.innerHTML = `
            <li>\uD83D\uDECF\uFE0F ${apartment.bedrooms} Habitaci\u00f3n${apartment.bedrooms !== 1 ? 'es' : ''}</li>
            <li>\uD83D\uDEBF ${apartment.bathrooms} Ba\u00f1o${apartment.bathrooms !== 1 ? 's' : ''}</li>
            <li>\uD83D\uDCD0 ${apartment.size} m\u00b2</li>
        `;
    }

    // Build image list: use images[] if available, else single image field
    const imageList = (apartment.images && apartment.images.length > 0)
        ? apartment.images
        : (apartment.image ? [apartment.image] : [fallback]);

    updateMetaTag('meta[property="og:image"]', imageList[0]);
    updateMetaTag('meta[name="twitter:image"]', imageList[0]);

    // Set main image
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageList[0];
        mainImage.onerror = function () { this.src = fallback; };
    }

    // Build thumbnails dynamically
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = imageList.map((img, i) =>
            `<img src="${img}" alt="Imagen ${i + 1}" onerror="this.src='${fallback}'">`
        ).join('');
    }

    // Build dots dynamically
    const dotsContainer = document.querySelector('.dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = imageList.map((_, i) =>
            `<span class="dot" onclick="currentSlide(${i + 1})"></span>`
        ).join('');
    }

    slideIndex = 1;
    bindThumbnailClickHandlers();
}

// Slideshow variables
let slideIndex = 1;
let slideTimer = null;

// Function to show slides
function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.thumbnail-images img');
    const dots = document.querySelectorAll('.dot');

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].className += " active";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    // Update main image to match current slide
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = slides[slideIndex - 1].src;
    }
}

// Function to auto-advance slides
function autoSlides() {
    const slides = document.querySelectorAll('.thumbnail-images img');
    if (!slides || slides.length === 0) return;

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    showSlides(slideIndex);

    // Continue auto-play every 3 seconds
    slideTimer = setTimeout(autoSlides, 3000);
}

// Function to change slide (manual control)
function changeSlide(n) {
    // Clear auto-play timer when manually changing
    if (slideTimer) {
        clearTimeout(slideTimer);
    }
    showSlides(slideIndex += n);
    // Restart auto-play
    slideTimer = setTimeout(autoSlides, 3000);
}

// Function to set current slide
function currentSlide(n) {
    // Clear auto-play timer when manually selecting
    if (slideTimer) {
        clearTimeout(slideTimer);
    }
    showSlides(slideIndex = n);
    // Restart auto-play
    slideTimer = setTimeout(autoSlides, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', async function () {
    // Add event listeners for filters if on listings page
    const searchInput = document.getElementById('search');
    const priceFilter = document.getElementById('price-filter');

    if (searchInput && priceFilter) {
        searchInput.addEventListener('input', filterApartments);
        priceFilter.addEventListener('change', filterApartments);
    }

    // Load apartment images if on detail page
    if (document.getElementById('main-image')) {
        await loadApartmentImages();
        setTimeout(() => {
            showSlides(slideIndex);
            slideTimer = setTimeout(autoSlides, 3000);
        }, 100);
    }

    await loadFeaturedApartments();

    // Add event listener for user menu button
    const userMenuBtn = document.getElementById('userMenuBtn');
    if (userMenuBtn) {
        userMenuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openAuthModal();
        });
    }

    // Close modal when clicking outside
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.addEventListener('click', function (e) {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
    }
});

// ===== SEARCH FUNCTIONALITY =====

// Search from hero section
function searchFromHero() {
    const location = document.getElementById('heroLocationSearch').value;
    const price = document.getElementById('heroPriceSearch').value;

    // Build query string
    let queryParams = [];
    if (location) queryParams.push(`location=${encodeURIComponent(location)}`);
    if (price) queryParams.push(`maxPrice=${price}`);

    // Redirect to listings page with search parameters
    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    window.location.href = `listings.html${queryString}`;
}

// ===== AUTHENTICATION MODAL FUNCTIONS =====

// Open authentication modal
function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'flex';
        showLoginForm(); // Show login form by default
    }
}

// Close authentication modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Show login form
function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
}

// Show register form
function showRegisterForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simple validation
    if (!email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Store user session (in a real app, this would be handled by a backend)
    const user = {
        email: email,
        loginDate: new Date().toISOString()
    };

    if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    // Close modal and show success message
    closeAuthModal();
    alert('¡Inicio de sesión exitoso! Bienvenido de vuelta.');

    // Update UI to show logged in state
    updateUserUI(email);
}

// Handle register form submission
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerPasswordConfirm').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (!acceptTerms) {
        alert('Debes aceptar los términos y condiciones');
        return;
    }

    // Store user data (in a real app, this would be handled by a backend)
    const user = {
        name: name,
        email: email,
        registerDate: new Date().toISOString()
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Close modal and show success message
    closeAuthModal();
    alert('¡Registro exitoso! Bienvenido a RentaApartamentos.');

    // Update UI to show logged in state
    updateUserUI(email);
}

// Update UI to show logged in user
function updateUserUI(email) {
    const userMenuBtn = document.getElementById('userMenuBtn');
    if (userMenuBtn) {
        const userName = email.split('@')[0];
        userMenuBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>${userName}</span>
        `;
    }
}

// Social login functions (placeholders for future implementation)
function loginWithGoogle() {
    alert('Inicio de sesión con Google próximamente disponible.\n\nEsta funcionalidad requiere integración con Google OAuth.');
}

function loginWithFacebook() {
    alert('Inicio de sesión con Facebook próximamente disponible.\n\nEsta funcionalidad requiere integración con Facebook Login.');
}

function loginWithApple() {
    alert('Inicio de sesión con Apple próximamente disponible.\n\nEsta funcionalidad requiere integración con Sign in with Apple.');
}

// --- Scroll Animations (Dashboard and general) ---
(function initScrollEffects() {
    const progressBar = document.getElementById('scrollProgressBar');
    const backToTop = document.getElementById('backToTop');

    // Update scroll progress bar
    function updateScrollProgress() {
        if (!progressBar) return;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }

    // Toggle back-to-top button visibility
    function toggleBackToTop() {
        if (!backToTop) return;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // Scroll event listeners (throttled for performance)
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateScrollProgress();
                toggleBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Back to top click handler
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Intersection Observer for scroll animations (fade-in)
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
})();
