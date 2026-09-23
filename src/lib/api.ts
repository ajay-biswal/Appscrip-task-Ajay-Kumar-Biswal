import type { Product } from "@/types/product";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_API, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch products: ${response.status}`);
      return [];
    }

    const products: Product[] = await response.json();

    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
}
