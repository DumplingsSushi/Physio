import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4F6A68] text-white pt-16 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-[#EDF3F2] mb-4">
            Mobility Mentor Physiotherapy is a leading clinic in Bengaluru known
            for its friendly environment and evidence-based care. We specialise
            in musculoskeletal pain, sports injury management, neurological
            rehab, and more.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#">
              <Image src="/fb.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-[#EDF3F2]">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Gallery</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Our Specialties</Link>
            </li>
            <li>
              <Link href="#">Mobility Mentor Wallet</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Packages</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Service Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Service Links</h3>
          <ul className="space-y-3 text-[#EDF3F2]">
            <li>Sports Physiotherapy</li>
            <li>Orthopaedic Physiotherapy</li>
            <li>Geriatric Physiotherapy</li>
            <li>Neurological Physiotherapy</li>
            <li>Cardiorespiratory Physiotherapy</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
          <p className="text-[#EDF3F2] mb-2">+91 70224 74015</p>
          <p className="text-[#EDF3F2] mb-2">hello@mobilitymentor.in</p>
          <p className="text-[#EDF3F2]">123 MG Road, Bengaluru, KA 560001</p>
        </div>
      </div>

      <div className="border-t border-[#EDF3F2]/20 mt-12 pt-6 text-center text-[#DDE6E4] text-sm">
        © 2025 Mobility Mentor Physiotherapy. All Rights Reserved
      </div>
    </footer>
  );
}
