import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "100px auto",
        padding: 20,
      }}
    >
      <h1>Dubai Property Management</h1>

      <p>
        Professional property management and real estate services for owners and
        investors in Dubai.
      </p>

      <Link href="/resources">Explore Resources →</Link>
    </main>
  );
}
