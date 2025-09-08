export default function Home() {
  const features = [
    {
      title: "On-chain Registry",
      description: "Track asset ownership using immutable smart contracts."
    },
    {
      title: "Compliance Ready",
      description: "Integrated KYC/AML modules keep your platform aligned with regulations."
    },
    {
      title: "Real-time Settlement",
      description: "Experience instant settlement with blockchain finality."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-24 text-center">
        <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-500">
          Tokenize Real World Assets
        </h2>
        <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto mb-10">
          Build, issue, and trade tokenized assets with a modern blockchain interface.
        </p>
        <div className="flex justify-center gap-4">
          <a
            className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
            href="#start"
          >
            Launch App
          </a>
          <a
            className="px-8 py-3 rounded-lg border border-indigo-400/50 hover:bg-indigo-800/30 transition-colors"
            href="#learn"
          >
            Read Docs
          </a>
        </div>
      </section>

      <section id="features" className="grid gap-8 sm:grid-cols-3 pb-24">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 bg-white/5 rounded-xl backdrop-blur border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-indigo-100/80">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
