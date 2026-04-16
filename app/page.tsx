'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Facebook, MapPin, Clock, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg',
    '/slide5.jpg',
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* SECTION 1: HERO & LOGO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-50 border-b">
        <div className="relative z-10 text-center p-4">
          <div className="mb-6 flex justify-center">
            <Image 
              src="/logo.png" 
              alt="Eva's Salon Logo" 
              width={400} 
              height={250} 
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-widest text-gray-700 uppercase">
            Καλωσορίσατε στο Eva's Salon
          </h1>
        </div>
      </section>

      {/* SECTION 2: ABOUT SALON (Interior) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/interior.jpg" alt="Eva's Salon Interior" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-gray-800">Η Ιστορία του Salon</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Το Eva's Salon άνοιξε τις πόρτες του το 2022, πραγματοποιώντας ένα όνειρο ετών. 
              Είναι ένας χώρος που δημιουργήθηκε με αγάπη και προσοχή στη λεπτομέρεια, 
              σχεδιασμένος για να προσφέρει στιγμές χαλάρωσης και ομορφιάς σε κάθε επισκέπτη.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              Συνδυάζουμε την υψηλή αισθητική με τις πιο σύγχρονες τεχνικές κομμωτικής.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT EVA */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-serif text-gray-800">Γνωρίστε την Εύα</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Με περισσότερα από 15 χρόνια εμπειρίας στον χώρο της κομμωτικής, η Εύα 
              είναι η ψυχή του κομμωτηρίου. Η πολυετής πορεία της και το πάθος της για 
              τη δημιουργία μοναδικών στυλ εγγυώνται ένα αποτέλεσμα που αναδεικνύει 
              την προσωπικότητα κάθε γυναίκας.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              "Για μένα, τα μαλλιά δεν είναι μόνο τέχνη, είναι ο τρόπος μας να εκφραζόμαστε."
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/eva.jpg" alt="Eva Stylist" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: CAROUSEL */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-center text-3xl font-serif mb-12 uppercase tracking-widest text-gray-800">
          Δημιουργίες μας
        </h2>
        <div className="relative max-w-4xl mx-auto h-[600px] group">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={slides[currentSlide]} 
              alt="Hair Creation" 
              fill 
              className="object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </section>

      {/* SECTION 5: CONTACT & FOOTER */}
      <footer className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-xl font-medium tracking-wide uppercase border-b border-gray-700 pb-2">
              Επικοινωνία
            </h3>
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin className="text-teal-400" />
              <p>Πέτρου Συνδίκα Μακεδονίας 81<br />Θεσσαλονίκη, 54248</p>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <Phone className="text-teal-400" />
              <p>2310 XXX XXX (Προσθήκη τηλεφώνου)</p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/evasalonskg?igsh=MWpnanE4bjU5aGNyOQ==" target="_blank" className="hover:text-teal-400 transition">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/1XfbxaWP6k/?mibextid=wwXIfr" target="_blank" className="hover:text-teal-400 transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium tracking-wide uppercase border-b border-gray-700 pb-2">
              Ωράριο
            </h3>
            <div className="flex items-start space-x-3 text-gray-400">
              <Clock className="text-teal-400" />
              <div className="space-y-2">
                <p>Δευτέρα - Παρασκευή: 10:00 - 19:00</p>
                <p>Σάββατο: 10:00 - 18:00</p>
                <p>Κυριακή: Κλειστά</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 h-[300px] w-full bg-gray-800 rounded-xl overflow-hidden shadow-inner">
            {/* GOOGLE MAPS IFRAME */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.1!2d22.95!3d40.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8397a6e1a4739%3A0x7d2871ef3b4e6d49!2zzqDOrc-Ez4HOv8-FIM6jz4XOvc60zq_Ous6xIDgxLCDOmM61z4PPg86xzrvOv869zq_Ous63IDU0MjQ4!5e0!3m2!1sel!2sgr!4v1700000000000"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>

        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Eva's Salon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
