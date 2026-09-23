import type { Product } from "@/types/product";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_API, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      console.error(
        `Products API returned ${response.status}`,
      );

      return [];
    }

    const products: unknown = await response.json();

    if (!Array.isArray(products)) {
      console.error("Products API returned invalid data");

      return [];
    }

    return products as Product[];
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return [];
  }
}