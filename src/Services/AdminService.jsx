import api from './api';
import.meta.env.VITE_BASEURL
const AdminService = {
    getallSites : () => api.get("/api/organisation/sites"),
}

export default AdminService;