import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black px-8 py-20">
      {/* NAVBAR */}
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Modern Furniture Designs
        </h1>
      </header>

      {/* HERO SECTION */}
      <section className="w-full max-w-5xl mx-auto text-center mt-10">
        <h2 className="text-4xl font-semibold text-black dark:text-white mb-4">
          Explore Premium Furniture Collections
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Modern, minimalistic, handcrafted & contemporary designs.
        </p>
      </section>

      {/* IMAGE GRID */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        
        {/* SAMPLE FURNITURE ITEMS */}
        {[
          "/images/chair1.jpg",
          "/images/sofa1.jpg",
          "/images/table1.jpg",
          "/images/bed1.jpg",
          "/images/dining1.jpg",
          "/images/shelf1.jpg"
        ].map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <Image
              src={src}
              alt="Furniture design"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-300">
                Modern furniture design #{index + 1}
              </p>
            </div>
          </div>
        ))}

      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto text-center mt-20 py-10 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          © 2026 Your Furniture Brand. All rights reserved.
        </p>
      </footer>
    </div>
  );
}