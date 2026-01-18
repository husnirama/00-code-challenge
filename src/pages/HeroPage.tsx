import Header from "../components/Header";

function HeroPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />

        <div className="mx-auto mt-20 grid max-w-7xl items-center gap-2 px-12 md:grid-cols-2">
          <div>
            <h1 className="mt-6 text-6xl font-extrabold leading-tight text-white">
              I’m Husni Rama
            </h1>

            <h2 className="mt-4 text-[48px] font-extrabold leading-tight">
              <span className="text-red-500">A Data Enthusiast</span>
              <br />
              <span className="text-white">& Software Engineer</span>
            </h2>

            <div className="mt-10 flex gap-4">
              <button className="flex items-center gap-3 rounded-full bg-red-500 px-8 py-3 text-sm font-semibold tracking-widest text-white hover:bg-red-400">
                SEE PORTFOLIO
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  →
                </span>
              </button>

              <button className="flex items-center gap-3 rounded-full border-2 border-red-500 px-8 py-3 text-sm font-semibold tracking-widest text-white hover:bg-red-500/10">
                CONTACT ME
                <span className="grid h-6 w-6 place-items-center rounded-full border border-white/20">
                  ✉
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-[32px] bg-gradient-to-b from-red-500 via-pink-500 to-blue-600 p-[6px]">
              <div className="rounded-[26px] bg-white/10 backdrop-blur p-[4px]">
                <img
                  src="/profpic-bg.jpeg"
                  alt="Profile"
                  className="h-[480px] w-[480px] rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroPage;
