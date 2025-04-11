import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    cart: [],

    login: async (username) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/login",
                { username },
                { withCredentials: true }
            );
            console.log("Login response:", res);
            if (res.status === 200 && res.data.success) {
                const username = res.data.data?.username || "Guest";
                set({ user: username, isAuthenticated: true });
                localStorage.setItem("token", res.data.token);
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data);
        }
    },

    checkAuth: async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return set({ isAuthenticated: false, user: null });

            const res = await axios.get("http://localhost:5000/api/store/is-authenticated", {
                withCredentials: true,
            });
            if (res.data.authenticated) {
                set({ user: res.data.data.username, isAuthenticated: true });
            } else {
                set({ isAuthenticated: false, user: null });
            }
        } catch (error) {
            console.error("Auth check failed:", error.response?.data);
            set({ isAuthenticated: false, user: null });
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false, cart: [] });
    },

    addToCart: async (username, item) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/add-to-cart", { username, item });
            if (res.status === 200) {
                set({ cart: res.data.data.UserCart });
            }
        } catch (error) {
            console.error("Failed to add to cart:", error.response?.data);
        }
    },

    getCartItems: async (username) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/store/get-cart/${username}`);
            if (res.status === 200) {
                set({ cart: res.data.cartItems });
            }
        } catch (error) {
            console.error("Failed to fetch cart items:", error.response?.data);
        }
    },

    removeFromCart: async (username, itemId) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/remove-from-cart", {
                username,
                itemId
            });

            if (res.status === 200) {
                set({ cart: res.data.data.UserCart });
            }
        } catch (error) {
            console.error("Failed to remove from cart:", error.response?.data);
        }
    },
}));

export default useAuthStore;
