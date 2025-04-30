import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set)=>({
            cart : [],
            setCart: (newCart) => set({ cart:
                newCart
            }),
        }),
        {
            name:"cart-storage",
        }
    )
)