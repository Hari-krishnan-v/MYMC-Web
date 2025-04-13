import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    cart: [],

    login: async (username) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/store/login",
                { username },
                { withCredentials: true }
            );

            if (res.status === 200 && res.data.success) {
                const { token, data } = res.data;

                set({
                    user: data,
                    isAuthenticated: true,
                    cart: data.cart || [],
                });

                localStorage.setItem("token", token);
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
        }
    },

    checkAuth: async () => {
        set({ loading: true }); // Start loading

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                set({ isAuthenticated: false, user: null, cart: [], loading: false });
                return;
            }

            const res = await axios.get("http://localhost:5000/api/store/check-auth", {
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.data.authenticated) {
                const userData = res.data.data;
                set({
                    user: userData,
                    isAuthenticated: true,
                    cart: userData.cart || [],
                    loading: false,
                });
            } else {
                set({ isAuthenticated: false, user: null, cart: [], loading: false });
            }
        } catch (error) {
            console.error("Auth check failed:", error.response?.data || error.message);
            set({ isAuthenticated: false, user: null, cart: [], loading: false });
        }
    },


    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false, cart: [] });
    },

    addToCart: async (username, item) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/add-to-cart", {
                username,
                item,
            });
            if (res.status === 200) {
                set({ cart: res.data.data.UserCart });
            }
        } catch (error) {
            console.error("Failed to add to cart:", error.response?.data || error.message);
        }
    },

    getCartItems: async (username) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/store/get-cart/${username}`);
            if (res.status === 200) {
                set({ cart: res.data.cartItems });
            }
        } catch (error) {
            console.error("Failed to fetch cart items:", error.response?.data || error.message);
        }
    },

    removeFromCart: async (username, itemId) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/remove-from-cart", {
                username,
                itemId,
            });
            if (res.status === 200) {
                set({ cart: res.data.data.UserCart });
            }
        } catch (error) {
            console.error("Failed to remove from cart:", error.response?.data || error.message);
        }
    },

}));

export default useAuthStore;
