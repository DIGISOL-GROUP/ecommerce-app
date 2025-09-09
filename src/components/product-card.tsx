import { BackgroundGradient } from "../components/ui/background-gradient";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
// import Image from "next/image"; // Removed. Use <img> tag instead.

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <BackgroundGradient className="rounded-3xl p-4 transition-transform group-hover:scale-105 duration-300" containerClassName="hover:z-10">
          <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full h-40 object-cover mb-4 border border-neutral-800"
          width={240}
          height={160}
        />
        <h3 className="text-lg font-bold text-white mb-2 text-center">{product.name}</h3>
        <p className="text-cyan-400 font-semibold text-xl mb-4">${product.price.toFixed(2)}</p>
        <HoverBorderGradient
          as="button"
          className="w-full justify-center text-base font-semibold py-2"
          onClick={() => dispatch(addToCart({ productId: product.id, quantity: 1 }))}
        >
          Add to Cart
        </HoverBorderGradient>
    </BackgroundGradient>
  );
}
