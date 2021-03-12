import axios from 'axios';

const BACK_END_API_URL = 'http://localhost:3000';

const SteamStoreAPI = {
    async getFeaturedAPI() {
        return await axios.get(`${BACK_END_API_URL}/api/featured`);
    },

    async getSalePageAPI() {
        return await axios.get(`${BACK_END_API_URL}/api/salepage`);
    },

    async getFeaturedCategoriesAPI() {
        return await axios.get(`${BACK_END_API_URL}/api/featuredcategories`);
    },

    async getAppDetailsAPI(appids) {
        return await axios.get(`${BACK_END_API_URL}/api/appdetails/${appids}`);
    },

    async getAppUserDetailsAPI(appids, filters) {
        return await axios.get(`${STEAM_STORE_API_URL}/api/appuserdetails/?appids=${appids}&filters=${filters}`);
    },

    async getPackageDetailsAPI(packageId, filters) {
        return await axios.get(`${STEAM_STORE_API_URL}/api/packagedetails/?packageids=${packageId}&filters=${filters}`);
    }
}

export default SteamStoreAPI