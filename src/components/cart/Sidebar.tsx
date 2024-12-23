"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/stores/cart";

// Icon
import { ShoppingCart } from "lucide-react";

const Sidebar = () => {
    const cart = useCartStore((state) => state.cart);
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const toggleCart = useCartStore((state) => state.toggleCart);

    return (
        <Sheet open={isCartOpen} onOpenChange={(open) => toggleCart(open)}>
            <SheetTrigger asChild>
                <Button className="bg-sushiOrange text-white">
                    <ShoppingCart />
                    <p className="ml-1">Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="space-y-4">
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <h2 className="text-sm font-medium">{item.name}</h2>
                                    <p className="text-xs text-gray-500">{`R$ ${item.price.toFixed(2)}`}</p>
                                    <p className="text-xs">Quantidade: {item.quantity}</p>
                                </div>
                                <p className="text-sm font-bold">{`R$ ${(item.price * item.quantity).toFixed(2)}`}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Seu carrinho está vazio</p>
                    )}
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between text-xs">
                    <h1 className="font-bold">
                        Subtotal: R$ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </h1>
                    <p>...</p>
                </div>

                <Separator className="my-4" />

                <div className="text-center mt-5">
                    <Button>Finalizar Compra</Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
