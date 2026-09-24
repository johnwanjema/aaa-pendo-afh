import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { siteConfig } from "../lib/config";


export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Pendo AFH
            </h2>

            <p className="mt-5 text-gray-300 leading-7">
              Providing compassionate, personalized adult family home care in a
              safe, comfortable, home-like environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="/" className="relative inline-block py-1.5 transition duration-300 hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/#about" className="relative inline-block py-1.5 transition duration-300 hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full">
                  About
                </Link>
              </li>

              <li>
                <Link href="/#services" className="relative inline-block py-1.5 transition duration-300 hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/#gallery" className="relative inline-block py-1.5 transition duration-300 hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="relative inline-block py-1.5 transition duration-300 hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

             <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#C89B3C]" />
                    <a
                      href={`tel:${siteConfig.provider.phone}`}
                      className="hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {siteConfig.provider.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={18} className="shrink-0 text-[#C89B3C]" />
                    <a
                      href={`mailto:${siteConfig.provider.email}`}
                      className="hover:text-[#C89B3C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C89B3C] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {siteConfig.provider.email}
                    </a>
                </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#C89B3C]" />
                 <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        siteConfig.afh.address1
                      )}`}
                      className="hover:text-[#C89B3C]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     <span className="block font-medium text-white">Pendo AFH 1</span>
                     <span className="block text-sm">{siteConfig.afh.address1}</span>
                    </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#C89B3C]" />
                 <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        siteConfig.afh.address2
                      )}`}
                      className="hover:text-[#C89B3C]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     <span className="block font-medium text-white">Pendo AFH 2</span>
                     <span className="block text-sm">{siteConfig.afh.address2}</span>
                    </a>
              </div>

            </div>
          </div>

          {/* Homes */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Homes
            </h3>

            <div className="space-y-4">
                <Link
                href="/homes"
                className="block rounded-xl bg-white/10 px-5 py-4 transition duration-300 hover:bg-[#C89B3C] hover:text-[#4F6F52]"
                >
                Pendo AFH 1
                </Link>

                <Link
                href="/homes"
                className="block rounded-xl bg-white/10 px-5 py-4 transition duration-300 hover:bg-[#C89B3C] hover:text-[#4F6F52]"
                >
                Pendo AFH 2
                </Link>
            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pendo AFH. All rights reserved.
            </p>

            
          <p className="mt-2 md:mt-0">
            Website by{' '}
            <span className="text-[#C89B3C] font-semibold hover:text-[#4F6F52] transition">
              <a target="_blank" rel="noopener noreferrer" href="https://caredaraja.com" className="inline-block py-2">
                CareDaraja
              </a>
            </span>
          </p>

          </div>

        </div>

      </div>
    </footer>
  );
}