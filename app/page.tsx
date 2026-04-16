'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Instagram, Facebook, MapPin, Phone, Clock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const carouselImages = [
  'https://cdn.abacus.ai/images/20025deb-91df-4422-8416-f2926f9106da.png',
  'https://cdn.abacus.ai/images/13842e71-214d-4d4c-8668-7fe39b831e6f.png',
  'https://cdn.abacus.ai/images/dc22b063-d9b9-43d8-b579-9d8d4a0ff952.png',
  'https://cdn.abacus.ai/images/1a798494-f2bb-4fed-9d55-5e9d090d425e.png',
  'https://cdn.abacus.ai/images/f39b7765-0e97-43b4-b4b1-a2f40f6a99c5.png',
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({ name: '', phone: '', date: '', service: '' })
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setBookingSubmitted(true)
    setTimeout(() => {
      setShowBookingForm(false)
      setBookingSubmitted(false)
      setBookingData({ name: '', phone: '', date: '', service: '' })
    }, 2000)
  }

  return (
    <>
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">ES</span>
            </div>
            <h1 className="text-xl font-display font-bold text-foreground">Eva's Salon</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-2xl font-display font-bold text-foreground">Book an Appointment</h3>
              <button
                onClick={() => {
                  setShowBookingForm(false)
                  setBookingSubmitted(false)
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="p-6 text-center space-y-4">
                <div className="text-5xl">✓</div>
                <p className="text-lg font-semibold text-foreground">Thank you!</p>
                <p className="text-muted-foreground">We will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    value={bookingData?.name ?? ''}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+30 XXX XXX XXXX"
                    required
                    value={bookingData?.phone ?? ''}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    required
                    value={bookingData?.date ?? ''}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                  <select
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    required
                    value={bookingData?.service ?? ''}
                    onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Hair Color">Hair Color</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Styling">Styling</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Confirm Appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Hero Section with Salon Interior */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
                    Welcome to Eva's Salon
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Experience professional hairstyling with a personal touch.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">15+ Years of Experience</h3>
                      <p className="text-sm text-muted-foreground">Dedicated to creating beautiful, lasting hairstyles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Opened in 2022</h3>
                      <p className="text-sm text-muted-foreground">Bringing decades of expertise to Thessaloniki.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Salon Interior Photo */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.abacus.ai/images/d7cf64b3-27ca-42d1-b72f-90f2b48b86bf.png"
                  alt="Eva's Salon Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hairstylist Bio Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Hairstylist Portrait */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.abacus.ai/images/3973c5ce-52a1-4a66-8731-55ab656875c7.png"
                  alt="Eva - Professional Hairstylist"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Bio and Experience */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
                    Meet Eva
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Your trusted hairstylist with passion for excellence.
                  </p>
                </div>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    With over 15 years of experience in professional hairstyling, Eva brings expertise, creativity, and personal attention to every client. Specializing in cuts, colors, and treatments that enhance your natural beauty.
                  </p>
                  <p>
                    Eva's commitment to quality and attention to detail ensures that every visit leaves you feeling confident and beautiful. Whether you're looking for a fresh new look or maintaining your style, you're in expert hands.
                  </p>
                </div>
                <Button
                  onClick={() => setShowBookingForm(true)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section - Portfolio */}
        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Portfolio</h2>
              <p className="text-lg text-muted-foreground">Explore our latest hairstyle creations</p>
            </div>

            <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-2xl bg-gray-100">
              <div className="relative w-full h-full">
                {carouselImages?.map?.((img: string, idx: number) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Hairstyle ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === currentSlide}
                    />
                  </div>
                )) ?? []}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages?.map?.((_, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                )) ?? []}
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Contact & Information */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+302311829309"
                    className="flex items-start gap-4 group"
                  >
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">+30 231 182 9309</p>
                      <p className="text-sm text-muted-foreground">Call us anytime</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Makedonias 81</p>
                      <p className="text-sm text-muted-foreground">Thessaloniki 542 48, Greece</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground">Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground">Follow Us</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/evasalonskg?igsh=MWpnanE4bjU5aGNyOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">Instagram</span>
                  </a>
                  <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                    <Facebook className="w-6 h-6 text-muted-foreground" />
                    <span className="text-muted-foreground">Facebook</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.4485235458556!2d22.938266!3d40.63369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838e4b5b5b5b5%3A0x0!2sMakedonias%2081%2C%20Thessaloniki!5e0!3m2!1sen!2sgr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Eva's Salon. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
