import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" bg-linear-to-r from-[#0b1c2c] to-[#0e2a44] text-gray-300 px-6 md:px-16 py-12 ">
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            Tile Aesthetic
          </h2>
          <p className="text-sm leading-relaxed mb-5">
            Bringing beauty, quality and creativity to your spaces with premium tile collections.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">All Tiles</li>
            <li className="hover:text-white cursor-pointer">My Profile</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FiPhone /> <span>+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMail /> <span>support@tileaesthetic.com</span>
            </div>

            <div className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>123 Design Street, New York, NY 10001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto border-t border-white/10 mt-10 pt-6 text-center text-sm">
        © 2025 Tile Aesthetic. All rights reserved.
      </div>
    </footer>
  );
}