
import { useState } from "react";
import {
  Menu as MenuIcon,      
  X,
  Phone,
  MapPin,
  Camera,
  ArrowUpRight,
  UtensilsCrossed,
  ChefHat,
  Star,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import "./index.css";

const foodPhotos = {
  chicken: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=85",
  chicken2: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85",
  chicken3: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=85",
  chicken4: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85",
  mutton: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=85",
  mutton2: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=85",
  biryani: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=85",
  biryani2: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=85",
  rice: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=85",
  egg: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85",
  egg2: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85",
  curry: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85",
  gravy: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=800&q=85",
  leg: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85",
};

const menuCategories = [
  {
    name: "Chicken Biryani",
    short: "Chicken",
    description: "Fragrant rice, aromatic spices and chicken.",
    items: [
      { name: "Chicken Biryani Full", detail: "2 pcs chicken + 1 pc aloo", price: 130, image: foodPhotos.chicken },
      { name: "Chicken Biryani Full", detail: "2 pcs chicken + 1 pc egg + 1 pc aloo", price: 140, image: foodPhotos.chicken2 },
      { name: "Chicken Biryani Full", detail: "1 pc chicken + 1 pc leg + 1 pc aloo", price: 140, image: foodPhotos.chicken3 },
      { name: "Chicken Biryani Full", detail: "1 pc chicken + 1 pc leg + 1 pc egg + 1 pc aloo", price: 150, image: foodPhotos.chicken4 },
      { name: "Chicken Special", detail: "Special chicken biryani", price: 200, image: foodPhotos.biryani2 },
      { name: "Chicken Half", detail: "1 pc chicken + 1 pc aloo", price: 80, image: foodPhotos.chicken },
      { name: "Chicken Biryani Full", detail: "1 pc chicken + 1 pc aloo", price: 100, image: foodPhotos.biryani },
      { name: "Chicken Biryani Full", detail: "1 pc chicken + 1 pc egg + 1 pc aloo", price: 110, image: foodPhotos.egg },
      { name: "Chicken Biryani Full", detail: "1 pc leg + 1 pc aloo", price: 110, image: foodPhotos.leg },
      { name: "Chicken Biryani Full", detail: "1 pc leg + 1 pc egg + 1 pc aloo", price: 120, image: foodPhotos.biryani2 },
    ],
  },
  {
    name: "Mutton Biryani",
    short: "Mutton",
    description: "Aromatic biryani with delicious mutton.",
    items: [
      { name: "Mutton Biryani Half", detail: "1 pc mutton + 1 pc aloo", price: 140, image: foodPhotos.mutton },
      { name: "Mutton Biryani Full", detail: "1 pc mutton + 1 pc aloo", price: 160, image: foodPhotos.mutton2 },
      { name: "Mutton Biryani Full", detail: "1 pc mutton + 1 pc egg + 1 pc aloo", price: 170, image: foodPhotos.biryani },
      { name: "Mutton Special Biryani", detail: "Special mutton biryani", price: 250, image: foodPhotos.biryani2 },
    ],
  },
  {
    name: "Egg / Aloo Biryani",
    short: "Egg & Aloo",
    description: "Simple, satisfying and full of flavour.",
    items: [
      { name: "Egg Biryani", detail: "Egg biryani", price: 100, image: foodPhotos.egg2 },
      { name: "Aloo Biryani", detail: "Aloo biryani", price: 80, image: foodPhotos.rice },
    ],
  },
  {
    name: "Extras",
    short: "Extras",
    description: "Make your biryani meal extra special.",
    items: [
      { name: "1 Pc Chicken", detail: "Extra chicken piece", price: 40, image: foodPhotos.chicken2 },
      { name: "1 Pc Leg", detail: "Extra chicken leg", price: 50, image: foodPhotos.leg },
      { name: "1 Pc Mutton", detail: "Extra mutton piece", price: 90, image: foodPhotos.mutton2 },
      { name: "1 Pc Egg", detail: "Extra egg", price: 10, image: foodPhotos.egg },
      { name: "Gravy", detail: "Extra gravy", price: 10, image: foodPhotos.gravy },
    ],
  },
  {
    name: "Chicken & Mutton Chap",
    short: "Chap",
    description: "Enjoy chap with rich, flavourful gravy.",
    items: [
      { name: "Chicken Chap Korma", detail: "1 pc chicken + gravy", price: 60, image: foodPhotos.curry },
      { name: "Chicken Chap Korma", detail: "1 pc leg + gravy", price: 70, image: foodPhotos.chicken3 },
      { name: "Mutton Chap", detail: "1 pc mutton + gravy", price: 100, image: foodPhotos.mutton },
    ],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto my-5 h-px w-20 bg-amber-500" />
      <p className="text-sm leading-7 text-stone-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function FoodCard({ item }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-900/40 bg-[#15140f] transition duration-300 hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-xl hover:shadow-amber-950/20">
      <div className="relative h-48 overflow-hidden bg-stone-900 sm:h-52">
        {!imageFailed ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-amber-400">
            <UtensilsCrossed size={34} />
            <span className="text-sm">Shahi Biryani</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-amber-200 backdrop-blur">
          Freshly prepared
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1.5 text-sm font-extrabold text-black shadow-lg">
          ₹{item.price}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="min-h-12 font-serif text-lg font-bold text-amber-100 sm:text-xl">
          {item.name}
        </h3>
        <p className="mt-1 min-h-10 text-sm leading-5 text-stone-400">
          {item.detail}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-800 pt-4">
          <span className="text-xs text-stone-500">Price per serving</span>
          <a
            href="tel:+917323048752"
            aria-label={`Call to order ${item.name}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-bold text-black transition hover:bg-amber-300"
          >
            <Phone size={14} /> Order
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...menuCategories.map((category) => category.short)];

  const visibleCategories =
    activeCategory === "All"
      ? menuCategories
      : menuCategories.filter((category) => category.short === activeCategory);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0b09] text-stone-100">
      {/* Announcement bar */}
      <div className="bg-amber-500 px-3 py-2 text-center text-xs font-semibold text-black sm:text-sm">
        <MapPin className="mr-1 inline" size={14} />
        Mithapur, Opposite Chanakya National Law University, Patna
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-amber-900/30 bg-[#0b0b09]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400 bg-amber-950 font-serif text-3xl font-bold text-amber-400">
              S
            </div>
            <div>
              <span className="block font-serif text-lg font-extrabold tracking-wide text-amber-300 sm:text-2xl">
                SHAHI BIRYANI
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">
                A Royal Taste
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {[
              ["Home", "#home"],
              ["Menu", "#menu"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-stone-300 transition hover:text-amber-400"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+917323048752"
              className="rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
            >
              <Phone className="mr-2 inline" size={15} />
              Call to Order
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="rounded-lg border border-stone-700 p-2 text-amber-300 md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-stone-800 bg-[#11100c] px-5 py-4 md:hidden">
            {[
              ["Home", "#home"],
              ["Menu", "#menu"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block border-b border-stone-800 py-3 text-sm text-stone-200"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:+917323048752"
              className="mt-4 block rounded-full bg-amber-400 py-3 text-center font-bold text-black"
            >
              Call Now
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate flex min-h-[580px] items-center sm:min-h-[680px]"
        >
          <img
            src={foodPhotos.chicken}
            alt="Biryani rice with aromatic Indian spices"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0b09] via-transparent to-black/20" />

          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/40 px-4 py-2 text-xs font-semibold text-amber-300 sm:text-sm">
                <Star size={15} fill="currentColor" />
                Discover the Royal Flavour
              </div>

              <h1 className="font-serif text-5xl font-extrabold leading-[1.08] text-white sm:text-7xl lg:text-8xl">
                Taste the
                <span className="mt-2 block text-amber-400">Royal</span>
                Tradition.
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-stone-300 sm:text-base sm:leading-8">
                Savour flavour-packed biryani, aromatic spices, delicious
                chicken, mutton and more at Shahi Biryani, Mithapur, Patna.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-black transition hover:bg-amber-300"
                >
                  Explore Our Menu <ChevronRight size={19} />
                </a>
                <a
                  href="tel:+917323048752"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  <Phone size={17} /> 73230 48752
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/20 pt-6 text-xs text-stone-300 sm:text-sm">
                <span><ChefHat className="mr-2 inline text-amber-400" size={17} />Biryani & Chap</span>
                <span><MapPin className="mr-2 inline text-amber-400" size={17} />Mithapur, Patna</span>
                <span><ShoppingBag className="mr-2 inline text-amber-400" size={17} />Affordable Menu</span>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="border-y border-amber-900/40 bg-[#13110c]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
            {[
              ["01", "Biryani Favourites", "Chicken, mutton, egg and aloo."],
              ["02", "Extras & Chap", "Add a side or enjoy chap with gravy."],
              ["03", "Visit Us", "Find Shahi Biryani in Mithapur, Patna."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex items-start gap-4">
                <span className="font-serif text-3xl text-amber-500/70">{number}</span>
                <div>
                  <h3 className="font-semibold text-amber-100">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full food menu */}
        <section id="menu" className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Explore our food"
              title="Our Royal Menu"
              description="Discover your favourites. Every menu card includes a food photo, serving details and the price from our supplied menu."
            />

            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                    activeCategory === category
                      ? "border-amber-400 bg-amber-400 text-black"
                      : "border-stone-700 bg-stone-900 text-stone-300 hover:border-amber-400 hover:text-amber-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {visibleCategories.map((category) => (
              <div key={category.name} className="mb-14 last:mb-0">
                <div className="mb-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
                      {category.short}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500">
                    {category.items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.items.map((item, index) => (
                    <FoodCard
                      key={`${category.name}-${index}`}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            ))}

            <p className="mt-10 text-center text-xs leading-6 text-stone-500">
              Prices are reproduced from the supplied menu photo. Please call
              to confirm current prices and availability. Food photos are
              illustrative and may not depict the exact restaurant serving.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-amber-900/30 bg-[#14120d]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-amber-500/30" />
              <img
                src={foodPhotos.biryani}
                alt="A serving of Indian biryani"
                loading="lazy"
                className="relative h-[320px] w-full rounded-2xl object-cover sm:h-[460px]"
              />
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                Welcome to Shahi Biryani
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">
                Every Plate Has a
                <span className="block text-amber-400">Royal Touch.</span>
              </h2>
              <div className="my-6 h-px w-20 bg-amber-500" />
              <p className="text-sm leading-8 text-stone-300 sm:text-base">
                Discover chicken biryani, mutton biryani, egg biryani, aloo
                biryani, extras and chap with gravy from our menu.
              </p>
              <p className="mt-4 text-sm leading-8 text-stone-400 sm:text-base">
                Visit us in Mithapur, opposite Chanakya National Law University,
                Patna. Call us to ask about today's menu and availability.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-400 transition hover:text-amber-200"
              >
                Contact our restaurant <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="We are here for you"
              title="Visit Shahi Biryani"
              description="Have a question about the menu? Call us or get directions to our Mithapur location."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-amber-900/40 bg-[#14130f] p-7">
                <Phone className="mb-5 text-amber-400" size={27} />
                <h3 className="text-lg font-bold text-white">Call Us</h3>
                <p className="mt-3 text-sm text-stone-400">For enquiries and orders</p>
                <a href="tel:+917323048752" className="mt-4 block font-semibold text-amber-300 hover:text-amber-200">
                  73230 48752
                </a>
                <a href="tel:+917091450997" className="mt-2 block font-semibold text-amber-300 hover:text-amber-200">
                  70914 50997
                </a>
              </div>

              <div className="rounded-2xl border border-amber-900/40 bg-[#14130f] p-7">
                <MapPin className="mb-5 text-amber-400" size={27} />
                <h3 className="text-lg font-bold text-white">Our Location</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Mithapur, opposite Chanakya National Law University, Patna.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shahi+Biryani+Mithapur+Patna"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  Get directions <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="rounded-2xl border border-amber-900/40 bg-[#14130f] p-7">
                <Camera className="mb-5 text-amber-400" size={27} />
                <h3 className="text-lg font-bold text-white">Follow & Order</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Follow us on Instagram or visit our delivery platforms.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/shahibiryani1.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.swiggy.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    Swiggy
                  </a>
                  <a
                    href="https://www.zomato.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    Zomato
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/50 to-[#15120b] p-7 text-center sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                Your next meal awaits
              </p>
              <h3 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                Craving Something Royal?
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-400">
                Browse the menu and call us to ask about your favourite dish.
              </p>
              <a
                href="tel:+917323048752"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-black transition hover:bg-amber-300"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/40 bg-[#080807] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left">
          <a href="#home" className="font-serif text-2xl font-bold text-amber-300">
            SHAHI BIRYANI
            <span className="mt-1 block font-sans text-[10px] font-normal uppercase tracking-[0.3em] text-stone-500">
              A Royal Taste
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.Instagram.com/shahibiryani1.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2.5 text-sm text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
            >
              <Camera size={17} /> Instagram
            </a>
            <a
              href="https://www.swiggy.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-700 px-4 py-2.5 text-sm text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
            >
              Swiggy
            </a>
            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-700 px-4 py-2.5 text-sm text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
            >
              Zomato
            </a>
          </div>

          <p className="text-xs leading-6 text-stone-500">
            © {new Date().getFullYear()} Shahi Biryani.
            <br />Mithapur, Patna, Bihar.
          </p>
        </div> 
      </footer>

      {/* Mobile call button */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-500/30 bg-[#0b0b09]/95 p-3 backdrop-blur-lg sm:hidden">
        <a
          href="tel:+917323048752"
          className="flex items-center justify-center gap-2 rounded-full bg-amber-400 py-3 font-bold text-black"
        >
          <Phone size={18} /> Call Shahi Biryani
        </a>
      </div>
    </div>
  );
}