import Header from "../components/Header";

function TestimonialPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
      </div>
    </section>
  );
}

export default TestimonialPage;
