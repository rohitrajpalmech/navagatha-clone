import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Offset for fixed navbar */}
      <div className="h-20 md:h-[84px]" />

      {/* HERO */}
      <section className="relative isolate">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-living.jpg"
            alt="Warm living room with modern wooden furniture"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white dark:to-black" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/50 backdrop-blur md:text-sm">
              Premium • Hand‑crafted • Made in India
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Furniture that feels like home.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">
              Discover thoughtfully designed pieces that blend comfort, durability, and elegance.
              Customize finishes, sizes, and fabrics—made to fit your lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/collections"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
              >
                Shop Collections
              </Link>
              <Link
                href="/configurator"
                className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Try 3D Configurator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-gray-200 bg-gray-50/60 py-6 dark:border-gray-800 dark:bg-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Free Delivery*", desc: "Within city limits on eligible orders", icon: "🚚" },
            { title: "5‑Year Warranty", desc: "On structure & hardware", icon: "🛡️" },
            { title: "Easy EMIs", desc: "Flexible payment options", icon: "💳" },
            { title: "Sustainable Wood", desc: "Certified sourcing & finishes", icon: "🌱" },
          ].map((v) => (
            <div key={v.title} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-black dark:ring-gray-800">
              <div className="text-2xl">{v.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{v.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section id="main" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white">Explore Categories</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Discover styles curated for modern Indian homes.
            </p>
          </div>
          <Link href="/collections" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Sofas & Seating", src: "/images/sofa1.jpg", href: "/collections/living" },
            { title: "Beds & Wardrobes", src: "/images/bed1.jpg", href: "/collections/bedroom" },
            { title: "Dining Sets", src: "/images/dining1.jpg", href: "/collections/dining" },
            { title: "Study & Office", src: "/images/table1.jpg", href: "/collections/office" },
            { title: "Storage & Shelving", src: "/images/shelf1.jpg", href: "/collections/storage" },
            { title: "Accent Chairs", src: "/images/chair1.jpg", href: "/collections/living" },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-lg dark:border-gray-800"
            >
              <div className="relative h-56">
                <Image src={c.src} alt={c.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md">{c.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white">Best Sellers</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Our most‑loved designs, ready to ship.</p>
          </div>
          <Link href="/collections" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">
            Browse all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/sofa1.jpg", name: "Aarav 3‑Seater Sofa", price: "₹28,900" },
            { src: "/images/table1.jpg", name: "Nexa Work Desk 120", price: "₹12,450" },
            { src: "/images/dining1.jpg", name: "DineMax 6‑Seater", price: "₹32,990" },
            { src: "/images/bed1.jpg", name: "Sienna King Bed", price: "₹24,500" },
            { src: "/images/chair1.jpg", name: "Luna Accent Chair", price: "₹8,750" },
            { src: "/images/shelf1.jpg", name: "Verti Shelf 5T", price: "₹7,200" },
          ].map((p, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-black"
            >
              <div className="relative h-60">
                <Image src={p.src} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-gray-900 shadow">
                  Popular
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900 dark:text-white">{p.name}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.price}</p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/5">
                    Details
                  </button>
                  <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIGURATOR CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-800 dark:bg-white/5 md:grid-cols-2 md:p-10">
          <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="/images/configurator.jpg"
              alt="Configure furniture in 3D"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white">Design your own furniture in 3D</h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Choose size, wood finish, fabric, and hardware. See it instantly in 3D before you order.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
              <li>Real‑time price updates</li>
              <li>True‑to‑life materials & lighting</li>
              <li>Save and share configurations</li>
            </ul>
            <Link
              href="/configurator"
              className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
              Open 3D Configurator
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h3 className="text-2xl font-bold text-black dark:text-white">What customers say</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Solid build quality and beautiful finish. The sofa looks even better in real life!",
              name: "Ananya S.",
              city: "Bhopal",
            },
            {
              quote:
                "Loved the custom sizing option. Perfect fit for our compact dining area.",
              name: "Rohit M.",
              city: "Indore",
            },
            {
              quote:
                "Delivery was quick and the assembly team was very professional.",
              name: "Gaurav T.",
              city: "Jabalpur",
            },
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-black">
              <blockquote className="text-gray-800 dark:text-gray-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                — {t.name}, {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* STORE INFO + MAP */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-black dark:text-white">Visit Us</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Laxmi Furniture, Rewa Road, Near Maheshwari, Satna, Madhya Pradesh, India
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold">Store Hours</p>
                <p>Mon–Sat: 10:00 – 20:00</p>
                <p>Sun: 11:00 – 18:00</p>
              </div>
              <div>
                <p className="font-semibold">Contact</p>
                <p>+91 9XXXXXXXXX</p>
                <p>support@laxmifurniture.in</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            {/* Replace with your Google Maps embed URL */}
            <iframe
              title="Laxmi Furniture Satna Map"
              src="https://www.google.com/maps/embed?pb="
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50/60 dark:border-gray-800 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Shop</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/collections/living">Living Room</Link></li>
                <li><Link href="/collections/bedroom">Bedroom</Link></li>
                <li><Link href="/collections/dining">Dining</Link></li>
                <li><Link href="/collections/office">Office</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Support</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/shipping">Shipping</Link></li>
                <li><Link href="/warranty">Warranty</Link></li>
                <li><Link href="/returns">Returns</Link></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Stay in the loop</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Get new launches and offers straight to your inbox.
              </p>
              <form className="mt-4 flex max-w-md gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-500 outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-black/50 dark:text-gray-100"
                />
                <button
                  className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Laxmi Furniture. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}