import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set, get) => ({
    user: null,
    admin: null,
    isAuthenticated: null,
    isAdminAuthenticated: null,
    loading: false,
    error: null,
    cart: [],

    login: async (username) => {
        set({ loading: true, error: null }); // Start loading
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
                    error: null,
                    loading: false,
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
                return res.status(200)
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
    adminCheckAuth: async () => {
        set({ loading: true, error: null });

        try {
            const token = localStorage.getItem("admintoken");
            if (!token) {
                set({ isAdminAuthenticated: false, admin: null, loading: false });
                return;
            }

            const res = await axios.get("http://localhost:5000/api/store/admin-check-auth", {
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data);
            if (res.data.authenticated === true) {
                set({
                    isAdminAuthenticated: true,
                    admin: res.data.username,
                    loading: false,

                });
            } else {
                set({ isAdminAuthenticated: false, admin: null, loading: false });
            }
        } catch (error) {
            console.error("Admin auth check failed:", error.response?.data || error.message);
            set({ isAdminAuthenticated: false, admin: null, loading: false });
        }
    },
    logoutAdmin: () => {
        localStorage.removeItem("admintoken");
        set({ admin: null, isAdminAuthenticated: false });
    },

    adminLogin: async (username,password) => {
        try {
            set({ loading: true,error:null }); // Start loading
            const res = await axios.post(
                "http://localhost:5000/api/store/admin-login",
                { username,password },
                { withCredentials: true }
            );
            console.log(res.data);
            if (res.status === 200 && res.data.success) {

                const { token } = res.data;

                set({

                    isAdminAuthenticated: true,
                    admin: res.data.username,
                    error: null,
                    loading: false,
                });

                localStorage.setItem("admintoken", token);
            }
        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
            set({ loading: false,error: err.response?.data.error });
        }
    },
    addStoreItem: async (name,description,price,category) => {
        try {
            const res = await axios.post("http://localhost:5000/api/store/add", name,description,price,category);
            if (res.status === 201) {
                console.log("Item added successfully:", res.data);
            }
        } catch (error) {
            console.error("Failed to add item:", error.response?.data || error.message);
        }
    },
    updateStoreItem: async (id,name,description,price,category) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/store/update/${id}`, { name,description,price,category });
            if (res.status === 200) {
                console.log("Item updated successfully:", res.data);
            }
        } catch (error) {
            console.error("Failed to update item:", error.response?.data || error.message);
        }
    },
    deleteStoreItem: async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/store/delete/${id}`);
            if (res.status === 200) {
                console.log("Item deleted successfully:", res.data);
            }
        } catch (error) {
            console.error("Failed to delete item:", error.response?.data || error.message);
        }
    },
    luckyDraw: async (id) => {
        set({ loading: true, error: null }); // Start loading
        try {
            const res = await axios.post(`http://localhost:5000/api/store/lucky-draw/${id}`);
            if (res.status === 200) {
                console.log("Lucky draw successful:", res.data);
                set({ loading: false });
            }
        } catch (error) {
            console.error("Failed to participate in lucky draw:", error.response?.data || error.message);
        }
    },


}));

export default useAuthStore;
