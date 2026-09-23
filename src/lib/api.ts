const PRODUCTS_API_URL = process.env.PRODUCTS_API_URL;

export async function getProducts() {
  if (!PRODUCTS_API_URL) {
    throw new Error("PRODUCTS_API_URL is not configured");
  }

  const response = await fetch(PRODUCTS_API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}