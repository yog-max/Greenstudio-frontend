// ── src/config/api.js ──
// All API URLs in one place
// Based on your exact Spring Boot controllers

const API = process.env.REACT_APP_API_URL;
console.log("Balesh: ",API);

const API_URLS = {

    REGISTER:           `${API}/user/register`,

    LOGIN:              `${API}/user/login`,

    GET_USERS:          `${API}/user/get`,

    DELETE_USER:        (userId) => `${API}/user/delete/${userId}`,

    UPDATE_USER:        (userId) => `${API}/user/update/${userId}`,

    GET_USER_BY_ID:     (userId) => `${API}/user/find/${userId}`,

    FORGET_PASSWORD:    (userName) => `${API}/user/forget/password/${userName}`,

    POST_BOOKING:       (userId) => `${API}/booking/eventpost/${userId}`,

    GET_BOOKINGS:       `${API}/booking/eventget`,

    DELETE_BOOKING:     (eventId) => `${API}/booking/event/delete/${eventId}`,

    GET_USER_BOOKINGS:  (userId) => `${API}/booking/find/eventbooking/${userId}`,

    UPDATE_BOOKING:     (eventId) => `${API}/booking/event/update/${eventId}`,

    APPROVE_BOOKING:    (eventId) => `${API}/booking/approve/${eventId}`,

    REJECT_BOOKING:     (eventId) => `${API}/booking/reject/${eventId}`,
   
    ADMIN_LOGIN:        `${API}/admin/login`,

};

export default API_URLS;