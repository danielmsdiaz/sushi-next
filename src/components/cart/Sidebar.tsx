import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

//icon
import { ShoppingCart } from "lucide-react"

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="bg-sushiOrange text-white">
                    <ShoppingCart />
                    <p className="ml-1">Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Carrinho
                    </SheetTitle>
                </SheetHeader>

                <div>
                    ...
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between text-xs">
                    <h1 className="font-bold">Subtotal:</h1>
                    <p>...</p>
                </div>

                <Separator className="my-4" />

                <div className="text-center mt-5">
                    <Button>Finalizar Compra</Button>
                </div>


            </SheetContent>
        </Sheet>
    )
}

export default Sidebar