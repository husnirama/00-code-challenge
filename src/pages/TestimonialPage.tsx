import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type ITestimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  photoSrc?: string; // optional, e.g. "/testimonials/andi.jpg"
};

const testimonials: ITestimonial[] = [
  {
    quote:
      "Husni is highly reliable and detail-oriented. He translated unclear requirements into a clear solution and delivered results that were easy for the team to adopt.",
    name: "Andi Pratama",
    role: "Product Manager",
    company: "Confidential",
    // photoSrc: "/testimonials/andi.jpg",
  },
  {
    quote:
      "Strong analytical thinking and great communication. The dashboard he built made our metrics easier to understand and helped us make decisions faster.",
    name: "Siti Rahma",
    role: "Business Stakeholder",
    company: "Confidential",
    // photoSrc: "/testimonials/siti.jpg",
  },
  {
    quote:
      "Proactive, fast learner, and collaborative. Husni consistently produces clean, maintainable work and communicates progress clearly throughout the project.",
    name: "Michael Tan",
    role: "Tech Lead",
    company: "Confidential",
    // photo optional
  },
  {
    quote:
      "He didn’t just deliver the technical output — he also helped shape the approach so it aligned with the business goals. Great ownership and execution.",
    name: "Nadia Putri",
    role: "Data & Analytics",
    company: "Confidential",
  },
];

function TestimonialCard({ t }: { t: ITestimonial }) {
  return (
    <div className="rounded-2xl bg-white/10 p-8 backdrop-blur transition hover:bg-white/15">
      <p className="text-lg leading-relaxed text-white/85">
        <span className="text-red-400">“</span>
        {t.quote}
        <span className="text-red-400">”</span>
      </p>

      <div className="mt-6 flex items-center gap-4">
        {/* Avatar */}
        <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10">
          {t.photoSrc ? (
            <img
              src={t.photoSrc}
              alt={t.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-sm font-semibold text-white/70">
              {getInitials(t.name)}
            </div>
          )}
        </div>

        {/* Name & role */}
        <div>
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-sm text-white/70">
            {t.role}
            {t.company ? ` • ${t.company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function TestimonialPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="mx-auto max-w-7xl px-12 py-24">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-white">Testimonials</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              Feedback from colleagues and stakeholders on collaboration,
              quality, and impact.
            </p>
          </div>

          <Swiper
            modules={[Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={`${t.name}-${t.role}`}>
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional: style Swiper controls to match your theme */}
          <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #ef4444; /* red-500 */
        }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.35);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ef4444;
        }
      `}</style>
        </div>
      </div>
    </section>
  );
}

export default TestimonialPage;
