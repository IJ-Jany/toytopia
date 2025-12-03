import React from "react";

const About = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-md">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">
          About ToyTopia
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-purple-500">ToyTopia</span> –  
          your one-stop destination for fun, safe and educational toys for children of all ages!
        </p>

        {/* Our Story */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Our Story
          </h2>
          <p className="text-gray-700 leading-7">
            ToyTopia was created with one simple goal – to bring joy, creativity, and learning
            into every child’s life. We believe that toys are not just for fun; they help
            children explore their imagination, build skills, and grow with confidence.
            That’s why we carefully select high-quality, child-safe toys that inspire curiosity
            and happiness.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-7">
            <li>Educational and STEM toys</li>
            <li>Creative and art-based toys</li>
            <li>Action figures and dolls</li>
            <li>Puzzles, games, and building blocks</li>
            <li>Safe and eco-friendly products</li>
          </ul>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          <div className="bg-purple-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide affordable, safe, and innovative toys that support learning,
              creativity, and fun for every child.
            </p>
          </div>

          <div className="bg-teal-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-teal-600 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become the most loved kids toy platform, inspiring millions of children
              worldwide through play and imagination.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">
            Why Choose ToyTopia?
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-7">
            <li>100% child-safe and quality-checked toys</li>
            <li>Affordable prices with exciting offers</li>
            <li>Fast and secure delivery</li>
            <li>User-friendly website for easy shopping</li>
            <li>Friendly customer support</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
