import { create } from 'zustand';
import { Product } from '@/types/product';

type CartItem = Product & {
  quantity: number;
};

type States = {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  toggleCart: (isOpen: boolean) => void; // Função para abrir/fechar o carrinho
};

const useCartStore = create<States>((set) => ({
  cart: [],
  isCartOpen: false, // Estado para controlar a visibilidade do carrinho

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isCartOpen: true, // Abrir o carrinho ao adicionar um item
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
        isCartOpen: true, // Abrir o carrinho ao adicionar um item
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateCart: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  toggleCart: (isOpen) => set({ isCartOpen: isOpen }), // Alterar visibilidade do carrinho
}));

export default useCartStore;
