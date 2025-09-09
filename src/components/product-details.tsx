
import { TracingBeam } from "../components/ui/tracing-beam";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
// import Image from "next/image"; // Removed. Use <img> tag instead.

export interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    gallery: string[];
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useDispatch();
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <div className="flex gap-2 mb-4">
          {product.gallery.map((img, i) => (
        <img
              key={i}
              src={img}
              alt={product.name + ' gallery'}
              className="w-20 h-20 object-cover rounded-lg border border-neutral-800 cursor-pointer hover:scale-105 transition"
              width={80}
              height={80}
            />
          ))}
        </div>
      <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-2xl border border-neutral-800 mb-4"
          width={600}
          height={320}
        />
      </div>
      <div>
        <TracingBeam>
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">{product.name}</h1>
          <p className="text-lg text-neutral-300 mb-4">{product.description}</p>
          <div className="text-2xl font-bold text-cyan-300 mb-6">${product.price.toFixed(2)}</div>
          <HoverBorderGradient
            as="button"
            className="w-full justify-center text-lg font-semibold py-2 mb-6"
            onClick={() => dispatch(addToCart({ productId: product.id, quantity: 1 }))}
          >
            Add to Cart
          </HoverBorderGradient>
        </TracingBeam>
      </div>
    </div>
  );
}
