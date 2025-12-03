import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
<footer className="bg-gradient-to-r from-purple-100 to-indigo-100 text-gray-700 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">

    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">

      {/* Logo + Tagline */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl font-bold text-teal-600">ToyTopia</h1>
        <p className="max-w-xs text-sm opacity-80">
          Discover, explore, and enjoy the world of toys for all ages.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex gap-10 text-center">
        <div className="space-y-2">
          <h3 className="font-semibold uppercase text-sm">Explore</h3>
          <Link to="/" className="block hover:text-teal-600 transition">Home</Link>
          <Link to="/alltoys" className="block hover:text-teal-600 transition">Toys</Link>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase text-sm">Company</h3>
          <Link to="/about" className="block hover:text-teal-600 transition">About</Link>
          <Link to="/support" className="block hover:text-teal-600 transition">Support</Link>
        </div>
      </div>

      {/* Social Icons */}
     <div className="flex gap-4">
  {/* Twitter */}
  <a
    href="#"
    className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="fill-current text-purple-500"
    >
      <path d="M24 4.557a9.7 9.7 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.86 9.86 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.96 13.96 0 0 1 1.671 3.149a4.905 4.905 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616v.062a4.917 4.917 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="#"
    className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="fill-current text-purple-500"
    >
      <path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.404.58A2.974 2.974 0 0 0 .502 6.186 31.97 31.97 0 0 0 0 12a31.97 31.97 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.094 2.106c1.846.58 9.404.58 9.404.58s7.558 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106A31.97 31.97 0 0 0 24 12a31.97 31.97 0 0 0-.502-5.814zM9.75 15.02v-6.04l5.25 3.02-5.25 3.02z" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="#"
    className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="fill-current text-purple-500"
    >
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .597 23.403 0 22.675 0z" />
    </svg>
  </a>
</div>


    </div>

    {/* Divider */}
    <div className="border-t border-gray-300 my-8"></div>

    {/* Bottom Section */}
    <div className="text-center text-sm opacity-80">
      <p>© {new Date().getFullYear()} ToyTopia — All Rights Reserved.</p>
    </div>

  </div>
</footer>

    );
};

export default Footer;