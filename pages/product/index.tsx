import Link from "next/link";

const ProductList = () => {
  let productId: number = 100;
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
};

export default ProductList;
