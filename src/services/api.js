import axios from 'axios'

const STEAM_STORE_API_URL = 'https://store.steampowered.com'
// const STEAM_WEB_API_URL = 'https://api.steampowered.com'
// const STEAM_API_KEY = '386CB766EA1FB3DB8C92DF89C722FA78'

const SteamStoreAPI = {
    async getFeaturedAPI() {
        return await axios.get(`${STEAM_STORE_API_URL}/api/featured`);
    },

    async getSalePageAPI() {
        return await axios.get(`${STEAM_STORE_API_URL}/api/salepage`);
    },

    async getFeaturedCategoriesAPI() {
        return await axios.get(`${STEAM_STORE_API_URL}/api/featuredcategories`);
    },

    async getAppDetailsAPI(appids) {
        return await axios.get(`${STEAM_STORE_API_URL}/api/appdetails/?appids=${appids}`);
    },

    async getAppUserDetailsAPI(appids, filters) {
        return await axios.get(`${STEAM_STORE_API_URL}/api/appuserdetails/?appids=${appids}&filters=${filters}`);
    },

    async getPackageDetailsAPI(packageId, filters) {
        return await axios.get(`${STEAM_STORE_API_URL}/api/packagedetails/?packageids=${packageId}&filters=${filters}`);
    }
}

export default SteamStoreAPI