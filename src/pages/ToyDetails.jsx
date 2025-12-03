import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStarHalfAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const ToyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [toy, setToy] = useState({});

  useEffect(() => {
    const toyDetails = data.find(details => details.toyId == id);
    setToy(toyDetails);
  }, [data, id]);

  const handleTryNow = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;

    if (!email) return Swal.fire('Enter your email');
    if (!name) return Swal.fire('Enter your name');

    Swal.fire('Try now successful!');
  };

  return (
    <div className="w-11/12 mx-auto mt-12 flex flex-col md:flex-row gap-12 items-start">

      <title>Tytopia - {toy.toyName}</title>

      {/* Left Section */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-purple-100 w-full md:w-1/2">

        <div className="w-full rounded-2xl overflow-hidden shadow-md">
          <img
            className="w-full h-[250px] md:h-[450px] object-cover"
            src={toy.pictureURL}
            alt=""
          />
        </div>

        <h1 className="font-bold text-2xl md:text-3xl text-purple-600 mt-5 text-center">
          {toy.toyName}
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed text-center md:text-left">
          {toy.description}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Category: {toy.subCategory}
          </span>
        </div>

        <div className="flex flex-wrap gap-5 mt-6 justify-center md:justify-start">
          <p className="font-bold text-gray-700 text-lg">
            Price: <span className="text-purple-600">${toy.price}</span>
          </p>

          <p className="font-bold text-gray-700 text-lg">
            Available: <span className="text-purple-600">{toy.availableQuantity}</span>
          </p>
        </div>

        {/* Seller Info */}
        <div className="flex flex-col gap-3 mt-6 text-sm">
          <p className="bg-orange-100 text-orange-700 px-3 py-2 rounded-xl font-medium">
            Seller: {toy.sellerName}
          </p>
          <p className="bg-green-100 text-green-700 px-3 py-2 rounded-xl font-medium break-all">
            Email: {toy.sellerEmail}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 bg-purple-200 w-max px-3 py-1 rounded-full mt-5 text-purple-800 font-semibold">
          <FaStarHalfAlt />
          <span>{toy.rating}</span>
        </div>

      </div>

      {/* Right Section: Form */}
      <form
        onSubmit={handleTryNow}
        className="bg-white p-6 rounded-3xl shadow-lg border border-purple-100 w-full md:w-1/2"
      >
        <h2 className="font-bold text-2xl text-center text-purple-600 mb-6">
          Try Now
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="font-semibold text-gray-700">Your Name</label>
          <input
            name="name"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 transition text-gray-700"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="font-semibold text-gray-700">Your Email</label>
          <input
            name="email"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 transition text-gray-700"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <button className="w-full bg-purple-500 text-white font-bold py-2 rounded-xl hover:bg-purple-600 transition shadow-md">
          Try Now
        </button>
      </form>

    </div>
  );
};

export default ToyDetails;
