import { BackgroundPaths } from "@/components/ui/background-paths";
import { SpinningLogos } from "@/components/ui/spinning-logos";
import { BookForm } from "@/components/ui/book-form";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero */}
      <BackgroundPaths title="We Help Local Businesses Get More Customers With Paid Ads" />

      {/* Platforms section */}
      <section id="services" className="bg-black">
        <div className="text-center pt-16 px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Platforms We Master
          </p>
          <h2 className="text-3xl font-bold text-white">
            We run ads everywhere your customers are
          </h2>
        </div>
        <SpinningLogos />
      </section>

      {/* Book a call section */}
      <section id="book" className="bg-black border-t border-white/10 py-24 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Get Started</p>
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Book your free strategy call</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          30 minutes. No pressure. Walk away with a clear growth plan — even if you don&apos;t work with us.
        </p>
        <BookForm />
      </section>

      <footer className="bg-black border-t border-white/10 text-center py-6 text-slate-500 text-sm">
        © 2025 <span className="text-blue-400 font-semibold">ScaleX Marketing</span>. All rights reserved.
      </footer>
    </main>
  );
}
