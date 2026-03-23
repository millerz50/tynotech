import { StoreProduct } from "@/types";

interface Props {
  product: StoreProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-lg font-semibold">${product.price}</p>

        {/* Laptop Specs */}
        {product.category === "laptop" && "specs" in product && (
          <div className="text-sm mt-2 space-y-1">
            <p>
              <b>CPU:</b> {product.specs.processor}
            </p>
            <p>
              <b>RAM:</b> {product.specs.ram}
            </p>
            <p>
              <b>Storage:</b> {product.specs.storage}
            </p>
          </div>
        )}

        <button className="btn btn-primary mt-3 w-full">Add to Cart</button>
      </div>
    </div>
  );
}
