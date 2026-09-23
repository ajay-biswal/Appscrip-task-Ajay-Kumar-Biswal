"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Something went wrong</h1>

        <p>
          We couldn&apos;t load the products. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            border: 0,
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          TRY AGAIN
        </button>
      </div>
    </main>
  );
}