import Link from "next/link";

export default function NavBar() {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">Winrock RWA</h1>
      <nav className="flex gap-6 text-sm">
        <Link href="/features" className="hover:text-indigo-400">
          Features
        </Link>
        <Link href="/docs" className="hover:text-indigo-400">
          Docs
        </Link>
        <Link href="/community" className="hover:text-indigo-400">
          Community
        </Link>
      </nav>
    </header>
  );
}
