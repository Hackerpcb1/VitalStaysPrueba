(function () {
    const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop';
    const DEFAULT_APARTMENTS = [
        { id: 1, name: 'Apartamento Moderno en el Centro', price: 1200, city: 'Madrid', location: 'Madrid, España', neighborhood: 'Centro', bedrooms: 2, bathrooms: 2, size: 85, image: 'images/apartment1.jpg', images: ['images/apartment1.jpg', 'images/apartment1-1.jpg', 'images/apartment1-2.jpg'], rating: 5.0, reviews: 24, type: 'Apartamento', badge: 'Destacado', description: 'Apartamento moderno y luminoso, ideal para profesionales de la salud.' },
        { id: 2, name: 'Apartamento Espacioso con Vista', price: 1500, city: 'Barcelona', location: 'Barcelona, España', neighborhood: 'Eixample', bedrooms: 3, bathrooms: 2, size: 120, image: 'images/apartment2.jpg', images: ['images/apartment2.jpg', 'images/apartment2-1.jpg', 'images/apartment2-2.jpg'], rating: 4.5, reviews: 18, type: 'Apartamento', badge: 'Nuevo', description: 'Espacioso apartamento con excelente ubicación y mucha luz natural.' },
        { id: 3, name: 'Apartamento Céntrico y Acogedor', price: 1000, city: 'Valencia', location: 'Valencia, España', neighborhood: 'Ruzafa', bedrooms: 1, bathrooms: 1, size: 60, image: 'images/apartment3.jpg', images: ['images/apartment3.jpg', 'images/apartment3-1.jpg', 'images/apartment3-2.jpg'], rating: 4.0, reviews: 12, type: 'Apartamento', badge: '', description: 'Perfecto para estancias cómodas con acceso rápido a zonas clave.' },
        { id: 4, name: 'Loft Moderno en Malasaña', price: 1800, city: 'Madrid', location: 'Madrid, España', neighborhood: 'Malasaña', bedrooms: 2, bathrooms: 2, size: 95, image: 'images/apartment4.jpg', images: ['images/apartment4.jpg'], rating: 4.8, reviews: 32, type: 'Loft', badge: '', description: 'Loft moderno con acabados premium y excelente conectividad.' },
        { id: 5, name: 'Dúplex Acogedor', price: 900, city: 'Sevilla', location: 'Sevilla, España', neighborhood: 'Triana', bedrooms: 2, bathrooms: 1, size: 75, image: 'images/apartment5.jpg', images: ['images/apartment5.jpg'], rating: 4.3, reviews: 15, type: 'Dúplex', badge: '', description: 'Dúplex funcional y acogedor, ideal para una estancia prolongada.' },
        { id: 6, name: 'Penthouse con Vistas al Mar', price: 2200, city: 'Barcelona', location: 'Barcelona, España', neighborhood: 'Barceloneta', bedrooms: 3, bathrooms: 3, size: 150, image: 'images/apartment6.jpg', images: ['images/apartment6.jpg'], rating: 4.9, reviews: 45, type: 'Penthouse', badge: '', description: 'Penthouse exclusivo con vistas al mar y grandes espacios.' },
        { id: 7, name: 'Estudio Minimalista', price: 750, city: 'Madrid', location: 'Madrid, España', neighborhood: 'Lavapiés', bedrooms: 1, bathrooms: 1, size: 45, image: 'images/apartment7.jpg', images: ['images/apartment7.jpg'], rating: 4.2, reviews: 8, type: 'Estudio', badge: '', description: 'Estudio minimalista y práctico en zona céntrica.' },
        { id: 8, name: 'Casa con Jardín', price: 2500, city: 'Valencia', location: 'Valencia, España', neighborhood: 'Campanar', bedrooms: 4, bathrooms: 3, size: 200, image: 'images/apartment8.jpg', images: ['images/apartment8.jpg'], rating: 4.7, reviews: 28, type: 'Casa', badge: '', description: 'Casa amplia con jardín privado y espacios familiares.' },
        { id: 9, name: 'Apartamento Cerca del Hospital', price: 1100, city: 'Madrid', location: 'Madrid, España', neighborhood: 'Chamberí', bedrooms: 2, bathrooms: 1, size: 70, image: 'images/apartment9.jpg', images: ['images/apartment9.jpg'], rating: 4.6, reviews: 21, type: 'Apartamento', badge: '', description: 'Ubicación estratégica para profesionales que trabajan en hospitales cercanos.' },
        { id: 10, name: 'Apartamento Luminoso', price: 1350, city: 'Barcelona', location: 'Barcelona, España', neighborhood: 'Gràcia', bedrooms: 2, bathrooms: 1, size: 75, image: 'images/apartment10.jpg', images: ['images/apartment10.jpg'], rating: 4.4, reviews: 19, type: 'Apartamento', badge: '', description: 'Apartamento luminoso con distribución funcional y ambiente tranquilo.' }
    ];
    const DEFAULT_REVIEWS = [
        { id: 1, user_name: 'María García', user_location: 'Madrid', rating: 5, comment: 'Encontré mi apartamento ideal en menos de una semana. El proceso fue muy sencillo y el equipo muy profesional.', avatar_url: 'images/avatar1.jpg' },
        { id: 2, user_name: 'Carlos Rodríguez', user_location: 'Barcelona', rating: 5, comment: 'Excelente servicio y apartamentos de calidad. La plataforma es muy fácil de usar y el soporte es increíble.', avatar_url: 'images/avatar2.jpg' },
        { id: 3, user_name: 'Ana Martínez', user_location: 'Valencia', rating: 5, comment: 'La mejor experiencia de alquiler que he tenido. Todo verificado y transparente. Totalmente recomendado.', avatar_url: 'images/avatar3.jpg' }
    ];

    let supabaseClient = null;
    let clientPromise = null;

    function unique(list) {
        return [...new Set((list || []).filter(Boolean))];
    }

    function getConfig() {
        return window.__SUPABASE_CONFIG__ || {};
    }

    function isConfigured() {
        const config = getConfig();
        return Boolean(config.supabaseUrl && config.supabaseAnonKey);
    }

    function deriveLocation(location) {
        const parts = String(location || '').split(',').map(part => part.trim()).filter(Boolean);
        const last = parts[parts.length - 1] || '';
        const city = last.toLowerCase() === 'españa' && parts.length > 1 ? parts[parts.length - 2] : last;
        return {
            city,
            neighborhood: parts.length > 1 ? parts[0] : ''
        };
    }

    function normalizeStatus(status) {
        if (!status) return 'pending';
        const s = String(status).toLowerCase();
        if (s === 'activo' || s === 'active') return 'active';
        if (s === 'pendiente' || s === 'pending') return 'pending';
        if (s === 'pausado' || s === 'paused') return 'paused';
        if (s === 'rechazado' || s === 'rejected') return 'rejected';
        return s;
    }

    function normalizeApartment(apartment) {
        const locationData = deriveLocation(apartment.location);
        const images = Array.isArray(apartment.images) ? apartment.images.filter(Boolean) : [];
        const mainImage = apartment.image || images[0] || FALLBACK_IMAGE;
        return {
            id: apartment.id,
            name: apartment.name || '',
            price: Number(apartment.price || 0),
            city: apartment.city || locationData.city,
            location: apartment.location || '',
            neighborhood: apartment.neighborhood || locationData.neighborhood,
            bedrooms: Number(apartment.bedrooms || 0),
            bathrooms: Number(apartment.bathrooms || 0),
            size: Number(apartment.size || 0),
            image: mainImage,
            images: unique([mainImage, ...images]),
            rating: apartment.rating === null || apartment.rating === undefined ? null : Number(apartment.rating),
            reviews: apartment.reviews === null || apartment.reviews === undefined ? null : Number(apartment.reviews),
            type: apartment.type || 'Apartamento',
            status: normalizeStatus(apartment.status),
            featured: Boolean(apartment.featured),
            verified: Boolean(apartment.verified),
            badge: apartment.badge || '',
            description: apartment.description || '',
            coordinates: apartment.coordinates || null
        };
    }

    function getLocalOwnerRequests() {
        try {
            return JSON.parse(localStorage.getItem('ownerApartmentRequests') || '[]');
        } catch (error) {
            return [];
        }
    }

    function saveLocalOwnerRequests(requests) {
        localStorage.setItem('ownerApartmentRequests', JSON.stringify(requests || []));
    }

    function normalizeOwnerApartmentRequest(request) {
        return {
            id: request.id,
            owner_name: request.owner_name || '',
            owner_email: request.owner_email || '',
            owner_phone: request.owner_phone || '',
            property_name: request.property_name || '',
            property_type: request.property_type || 'Apartamento',
            location: request.location || '',
            price: request.price === null || request.price === undefined ? null : Number(request.price),
            bedrooms: request.bedrooms === null || request.bedrooms === undefined ? null : Number(request.bedrooms),
            bathrooms: request.bathrooms === null || request.bathrooms === undefined ? null : Number(request.bathrooms),
            size: request.size === null || request.size === undefined ? null : Number(request.size),
            description: request.description || '',
            amenities: request.amenities || '',
            image_url: request.image_url || '',
            availability_date: request.availability_date || null,
            status: request.status || 'pendiente',
            submitted_at: request.submitted_at || new Date().toISOString()
        };
    }

    async function getClient() {
        if (supabaseClient) return supabaseClient;
        if (clientPromise) return clientPromise;

        clientPromise = new Promise((resolve, reject) => {
            try {
                if (!window.supabase || !window.supabase.createClient) {
                    throw new Error('La librería de Supabase no está cargada.');
                }

                const config = getConfig();
                if (!config.supabaseUrl || !config.supabaseAnonKey) {
                    throw new Error('Falta la configuración pública de Supabase.');
                }

                supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey, {
                    auth: {
                        persistSession: true,
                        autoRefreshToken: true,
                        detectSessionInUrl: true
                    }
                });

                resolve(supabaseClient);
            } catch (error) {
                clientPromise = null;
                reject(error);
            }
        });

        return clientPromise;
    }

    async function listApartments(options = {}) {
        const limit = options.limit || null;
        const featuredOnly = options.featured === true;

        if (!isConfigured()) {
            let list = featuredOnly ? DEFAULT_APARTMENTS.filter(a => a.badge === 'Destacado' || a.featured) : DEFAULT_APARTMENTS;
            return list.slice(0, limit || list.length).map(normalizeApartment);
        }

        const client = await getClient();
        let query = client.from('apartments').select('*').order('id', { ascending: true });
        
        if (featuredOnly) query = query.eq('featured', true);
        if (limit) query = query.limit(limit);

        const { data, error } = await query;
        if (error) throw error;
        return (data || []).map(normalizeApartment);
    }

    async function getApartmentById(id) {
        if (!id) return null;

        if (!isConfigured()) {
            const apartment = DEFAULT_APARTMENTS.find(item => String(item.id) === String(id));
            return apartment ? normalizeApartment(apartment) : null;
        }

        const client = await getClient();
        const { data, error } = await client.from('apartments').select('*').eq('id', id).maybeSingle();
        if (error) throw error;
        return data ? normalizeApartment(data) : null;
    }

    async function getSession() {
        if (!isConfigured()) return null;
        const client = await getClient();
        const { data, error } = await client.auth.getSession();
        if (error) throw error;
        return data.session || null;
    }

    async function getCurrentUser() {
        if (!isConfigured()) return null;
        const client = await getClient();
        const { data, error } = await client.auth.getUser();
        if (error) throw error;
        return data.user || null;
    }

    async function isAdminUser(userId) {
        if (!userId || !isConfigured()) return false;
        const client = await getClient();
        const { data, error } = await client.from('admins').select('user_id').eq('user_id', userId).maybeSingle();
        if (error && error.code !== 'PGRST116') throw error;
        return Boolean(data);
    }

    async function isCurrentUserAdmin() {
        const user = await getCurrentUser();
        return isAdminUser(user && user.id);
    }

    async function getCurrentAdminRole() {
        const user = await getCurrentUser();
        if (!user || !isConfigured()) return null;
        const client = await getClient();
        const { data, error } = await client.from('admins').select('role').eq('user_id', user.id).maybeSingle();
        if (error) return 'admin'; // fallback
        return data ? data.role : 'admin';
    }

    async function requireAdminSession() {
        const user = await getCurrentUser();
        if (!user) throw new Error('Debes iniciar sesión como administrador.');
        const isAdmin = await isAdminUser(user.id);
        if (!isAdmin) throw new Error('Este usuario no tiene permisos de administrador.');
        return user;
    }

    async function signInAdmin(email, password) {
        if (!isConfigured()) throw new Error('Configura Supabase antes de usar el panel admin.');
        const client = await getClient();
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;
        const user = data.user || null;
        if (!(await isAdminUser(user && user.id))) {
            await client.auth.signOut();
            throw new Error('El usuario existe pero no está registrado en la tabla de administradores.');
        }
        return user;
    }

    async function signOutAdmin() {
        if (!isConfigured()) return;
        const client = await getClient();
        await client.auth.signOut();
    }

    async function uploadApartmentImages(files) {
        const cleanFiles = (files || []).filter(Boolean);
        if (!cleanFiles.length) return [];

        await requireAdminSession();
        const client = await getClient();
        const config = getConfig();
        const bucket = config.supabaseBucket || 'apartment-images';
        const urls = [];

        for (const file of cleanFiles) {
            const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
            const path = `apartments/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`;
            const { error } = await client.storage.from(bucket).upload(path, file, { cacheControl: '3600', upsert: false });
            if (error) throw error;
            const { data } = client.storage.from(bucket).getPublicUrl(path);
            urls.push(data.publicUrl);
        }

        return urls;
    }

    async function saveApartment(apartmentInput, newGalleryFiles) {
        await requireAdminSession();
        const client = await getClient();
        const uploadedUrls = await uploadApartmentImages(newGalleryFiles);
        const existingImages = Array.isArray(apartmentInput.images) ? apartmentInput.images.filter(Boolean) : [];
        const provisionalMain = apartmentInput.image || existingImages[0] || uploadedUrls[0] || '';
        const normalized = normalizeApartment({
            ...apartmentInput,
            image: provisionalMain,
            images: unique([provisionalMain, ...existingImages, ...uploadedUrls])
        });

        const payload = {
            name: normalized.name,
            location: normalized.location,
            city: normalized.city,
            neighborhood: normalized.neighborhood,
            price: normalized.price,
            bedrooms: normalized.bedrooms,
            bathrooms: normalized.bathrooms,
            size: normalized.size,
            image: normalized.image,
            images: normalized.images,
            description: normalized.description,
            badge: normalized.badge || '',
            type: normalized.type || 'Apartamento',
            status: normalized.status || 'pending',
            featured: normalized.featured,
            verified: normalized.verified,
            coordinates: normalized.coordinates,
            rating: normalized.rating,
            reviews: normalized.reviews
        };

        const response = normalized.id
            ? await client.from('apartments').update(payload).eq('id', normalized.id).select().single()
            : await client.from('apartments').insert(payload).select().single();

        if (response.error) throw response.error;
        return normalizeApartment(response.data);
    }

    async function deleteApartment(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('apartments').delete().eq('id', id);
        if (error) throw error;
    }

    async function submitRentalInquiry(formData) {
        if (!isConfigured()) throw new Error('Configura Supabase para guardar solicitudes.');
        const client = await getClient();
        const payload = {
            apartment_id: formData.apartmentId ? Number(formData.apartmentId) : null,
            apartment_name: formData.apartmentName || '',
            apartment_area: formData.apartmentArea || '',
            full_name: formData.fullName || '',
            email: formData.email || '',
            phone: formData.phone || '',
            dni: formData.dni || '',
            birth_date: formData.birthDate || null,
            nationality: formData.nationality || '',
            move_in_date: formData.moveInDate || null,
            rental_period: formData.rentalPeriod || '',
            occupation: formData.occupation || '',
            workplace: formData.workplace || '',
            monthly_income: formData.monthlyIncome ? Number(formData.monthlyIncome) : null,
            employment_type: formData.employmentType || '',
            num_occupants: formData.numOccupants ? Number(formData.numOccupants) : null,
            has_pets: formData.hasPets === 'si',
            pets_details: formData.petsDetails || null,
            emergency_contact: formData.emergencyContact || '',
            reference_notes: formData.references || null,
            additional_comments: formData.additionalComments || null
        };

        const { data, error } = await client.from('rental_inquiries').insert(payload);
        if (error) throw error;
    }

    async function submitOwnerApartmentRequest(formData) {
        const payload = {
            owner_name: formData.ownerName || '',
            owner_email: formData.ownerEmail || '',
            owner_phone: formData.ownerPhone || '',
            property_name: formData.propertyName || '',
            property_type: formData.propertyType || 'Apartamento',
            location: formData.location || '',
            price: formData.price ? Number(formData.price) : null,
            bedrooms: formData.bedrooms ? Number(formData.bedrooms) : null,
            bathrooms: formData.bathrooms ? Number(formData.bathrooms) : null,
            size: formData.size ? Number(formData.size) : null,
            description: formData.description || '',
            amenities: formData.amenities || '',
            image_url: formData.imageUrl || '',
            availability_date: formData.availabilityDate || null,
            status: 'pendiente'
        };

        if (!isConfigured()) {
            const requests = getLocalOwnerRequests();
            const localRequest = normalizeOwnerApartmentRequest({
                ...payload,
                id: Date.now(),
                submitted_at: new Date().toISOString()
            });
            requests.unshift(localRequest);
            saveLocalOwnerRequests(requests);
            return { id: localRequest.id };
        }

        const client = await getClient();
        const { data, error } = await client.from('owner_apartment_requests').insert(payload);
        if (error) throw error;
    }

    async function listOwnerApartmentRequests() {
        if (!isConfigured()) {
            return getLocalOwnerRequests().map(normalizeOwnerApartmentRequest);
        }

        await requireAdminSession();
        const client = await getClient();
        const { data, error } = await client
            .from('owner_apartment_requests')
            .select('*')
            .order('id', { ascending: false });
        if (error) throw error;
        return (data || []).map(normalizeOwnerApartmentRequest);
    }

    async function updateOwnerApartmentRequestStatus(id, status) {
        if (!['pendiente', 'contactado', 'aprobado', 'rechazado'].includes(status)) {
            throw new Error('Estado de solicitud no vÃ¡lido.');
        }

        if (!isConfigured()) {
            const requests = getLocalOwnerRequests();
            const updated = requests.map(request => String(request.id) === String(id) ? { ...request, status } : request);
            saveLocalOwnerRequests(updated);
            return;
        }

        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('owner_apartment_requests').update({ status }).eq('id', id);
        if (error) throw error;
    }

    async function saveOwner(owner) {
        await requireAdminSession();
        const client = await getClient();
        const payload = {
            name: owner.name || 'Sin nombre',
            email: owner.email || '',
            phone: owner.phone || '',
            apts: Number(owner.apts || 0),
            payment: owner.payment === 'paid' ? 'paid' : 'pending',
            since: owner.since || new Date().toISOString().slice(0, 10)
        };

        const { data, error } = await client
            .from('owners')
            .upsert(payload, { onConflict: 'email' })
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    // --- Dashboard Data & Management ---
    async function listDashboardData() {
        await requireAdminSession();
        const client = await getClient();
        
        const [users, bookings, messages, reviews, faqs, owners, admins, logs, todos, payments, calendarEvents, settings] = await Promise.all([
            client.from('profiles').select('*').order('created_at', { ascending: false }),
            client.from('rental_inquiries').select('*').order('created_at', { ascending: false }),
            client.from('contact_messages').select('*').order('created_at', { ascending: false }),
            client.from('reviews').select('*').order('created_at', { ascending: false }),
            client.from('faqs').select('*').order('order_index', { ascending: true }),
            client.from('owners').select('*').order('since', { ascending: false }),
            client.from('admins').select('*').order('user_id', { ascending: false }),
            client.from('activity_logs').select('*').order('created_at', { ascending: false }).limit(50),
            client.from('todos').select('*').order('created_at', { ascending: false }),
            client.from('payments').select('*').order('created_at', { ascending: false }),
            client.from('calendar_events').select('*').order('event_date', { ascending: true }),
            client.from('site_settings').select('*')
        ]);

        return {
            users: users.data || [],
            bookings: bookings.data || [],
            messages: messages.data || [],
            reviews: reviews.data || [],
            faqs: faqs.data || [],
            owners: owners.data || [],
            admins: (admins.data || []).map(a => ({ ...a, email: a.email || '', name: a.name || 'Admin' })),
            logs: logs.data || [],
            todos: todos.data || [],
            payments: payments.data || [],
            calendarEvents: calendarEvents.data || [],
            settings: settings.data || []
        };
    }

    async function saveTodo(todo) {
        await requireAdminSession();
        const client = await getClient();
        const payload = { text: todo.text, priority: todo.priority, done: todo.done };
        const { data, error } = todo.id 
            ? await client.from('todos').update(payload).eq('id', todo.id).select().single()
            : await client.from('todos').insert(payload).select().single();
        if (error) throw error;
        return data;
    }

    async function deleteTodo(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('todos').delete().eq('id', id);
        if (error) throw error;
    }

    async function saveFaq(faq) {
        await requireAdminSession();
        const client = await getClient();
        const payload = { question: faq.q, answer: faq.a, order_index: faq.order || 0 };
        const { data, error } = faq.id 
            ? await client.from('faqs').update(payload).eq('id', faq.id).select().single()
            : await client.from('faqs').insert(payload).select().single();
        if (error) throw error;
        return data;
    }

    async function saveReview(review) {
        await requireAdminSession();
        const client = await getClient();
        const payload = {
            user_name: review.user_name || 'Usuario',
            apartment_name: review.apartment_name || 'General',
            rating: Math.max(1, Math.min(5, Number(review.rating || 5))),
            comment: review.comment || '',
            status: review.status === 'pending' ? 'pending' : 'published',
            user_location: review.user_location || '',
            avatar_url: review.avatar_url || '',
            admin_reply: review.admin_reply || ''
        };

        const { data, error } = review.id
            ? await client.from('reviews').update(payload).eq('id', review.id).select().single()
            : await client.from('reviews').insert(payload).select().single();

        if (error) throw error;
        return data;
    }

    async function deleteReview(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('reviews').delete().eq('id', id);
        if (error) throw error;
    }

    async function deleteFaq(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('faqs').delete().eq('id', id);
        if (error) throw error;
    }

    async function saveSiteSettings(settingsArray) {
        await requireAdminSession();
        const client = await getClient();
        // settingsArray: [{key: 'hero_title', value: '...'}, ...]
        const { error } = await client.from('site_settings').upsert(settingsArray, { onConflict: 'key' });
        if (error) throw error;
    }

    async function savePayment(payment) {
        await requireAdminSession();
        const client = await getClient();
        const payload = {
            owner_name: payment.owner_name || 'Sin nombre',
            concept: payment.concept || 'Ingreso registrado',
            amount: Number(payment.amount || 0),
            due_date: payment.due_date || null,
            status: payment.status || 'paid',
            paid_at: payment.paid_at || null
        };
        const { data, error } = payment.id
            ? await client.from('payments').update(payload).eq('id', payment.id).select().single()
            : await client.from('payments').insert(payload).select().single();
        if (error) throw error;
        return data;
    }

    async function deletePayment(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('payments').delete().eq('id', id);
        if (error) throw error;
    }

    async function saveCalendarEvent(event) {
        await requireAdminSession();
        const client = await getClient();
        const payload = {
            title: event.title || 'Evento',
            event_date: event.event_date,
            status: event.status || 'active'
        };
        const { data, error } = event.id
            ? await client.from('calendar_events').update(payload).eq('id', event.id).select().single()
            : await client.from('calendar_events').insert(payload).select().single();
        if (error) throw error;
        return data;
    }

    async function deleteCalendarEvent(id) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('calendar_events').delete().eq('id', id);
        if (error) throw error;
    }

    async function addActivityLog(action, severity = 'info') {
        const user = await getCurrentUser();
        if (!user || !isConfigured()) return;
        const client = await getClient();
        await client.from('activity_logs').insert({
            user_email: user.email,
            action: action,
            severity: severity
        });
    }

    async function updateUserStatus(profileId, status) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('profiles').update({ status }).eq('id', profileId);
        if (error) throw error;
    }

    async function getPublicContent() {
        const config = getConfig();
        if (!config.supabaseUrl || !config.supabaseAnonKey) return { settings: [], faqs: [], reviews: DEFAULT_REVIEWS };
        const client = await getClient();
        const [settings, faqs, reviews] = await Promise.all([
            client.from('site_settings').select('*'),
            client.from('faqs').select('*').order('order_index', { ascending: true }),
            client.from('reviews').select('*').eq('status', 'published').order('created_at', { ascending: false })
        ]);
        return { settings: settings.data || [], faqs: faqs.data || [], reviews: reviews.data || [] };
    }

    async function updateRentalInquiryStatus(id, status) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('rental_inquiries').update({ status }).eq('id', id);
        if (error) throw error;
    }

    async function updateContactMessageStatus(id, status) {
        await requireAdminSession();
        const client = await getClient();
        const { error } = await client.from('contact_messages').update({ status }).eq('id', id);
        if (error) throw error;
    }

    window.vitalStaysApi = {
        fallbackImage: FALLBACK_IMAGE,
        defaultApartments: DEFAULT_APARTMENTS.map(normalizeApartment),
        isConfigured,
        getClient,
        listApartments,
        getApartmentById,
        getSession,
        getCurrentUser,
        isCurrentUserAdmin,
        getCurrentAdminRole,
        requireAdminSession,
        signInAdmin,
        signOutAdmin,
        saveApartment,
        deleteApartment,
        submitRentalInquiry,
        submitOwnerApartmentRequest,
        listOwnerApartmentRequests,
        updateOwnerApartmentRequestStatus,
        saveOwner,
        listDashboardData,
        saveTodo,
        deleteTodo,
        saveReview,
        deleteReview,
        saveFaq,
        deleteFaq,
        saveSiteSettings,
        savePayment,
        deletePayment,
        saveCalendarEvent,
        deleteCalendarEvent,
        addActivityLog,
        updateUserStatus,
        updateRentalInquiryStatus,
        updateContactMessageStatus,
        markMessageRead: (id) => updateContactMessageStatus(id, 'read'),
        getPublicContent
    };
})();
