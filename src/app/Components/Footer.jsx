import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            C7Physio is one of the best physiotherapy Clinic in Jaipur known for
            friendly environment and proper treatment. Best Clinic for
            Musculoskeletal pain, Sports Injury and rehabilitation.
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
          <ul className="space-y-3 text-gray-300">
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
              <Link href="#">Our Speciality</Link>
            </li>
            <li>
              <Link href="#">C7Physio Wallet</Link>
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

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Physiotherapy</li>
            <li>Patient Education</li>
            <li>Manual Therapy</li>
            <li>Cupping Therapy</li>
            <li>Neurological Rehabilitation</li>
            <li>Posture Correction</li>
            <li>Corporate Physiotherapy</li>
            <li>Post Op Rehabilitation</li>
            <li>Kinesio Taping</li>
            <li>Needling Therapy</li>
            <li>Surgery Prevention</li>
            <li>Body & Spine Alignment</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
          <p className="text-gray-300 mb-2">+91-8756700567</p>
          <p className="text-gray-300 mb-2">hello@c7physio.in</p>
          <p className="text-gray-300">O-5 Hospital Road C-Scheme Jaipur.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2025 C7Physio Healthcare. All Rights Reserved
      </div>
    </footer>
  );
}
