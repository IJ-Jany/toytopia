import React from "react";

const Support = () => {
  return (
    <div className="bg-teal-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-md">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
          Support Center
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-purple-600">ToyTopia Support</span>.  
          We’re here to help you with any questions or issues regarding your orders,
          products, or account.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              📧 Email Us
            </h3>
            <p className="text-gray-700">support@toytopia.com</p>
          </div>

          <div className="bg-teal-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              📞 Call Us
            </h3>
            <p className="text-gray-700">+880 1234 567 890</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">
              🕒 Support Hours
            </h3>
            <p className="text-gray-700">Sun - Fri: 9 AM - 8 PM</p>
          </div>
        </div>

        {/* Support Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-5">
            Send Us a Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Describe your issue..."
              className="textarea textarea-bordered md:col-span-2 w-full h-32"
            ></textarea>

            <button
              type="submit"
              className="btn bg-teal-500 hover:bg-teal-600 text-white md:col-span-2"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="collapse collapse-arrow bg-purple-50 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                How long does delivery take?
              </div>
              <div className="collapse-content text-gray-700">
                Delivery usually takes 2–5 business days depending on your location.
              </div>
            </div>

            <div className="collapse collapse-arrow bg-purple-50 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                Are the toys safe for kids?
              </div>
              <div className="collapse-content text-gray-700">
                Yes! All our toys are child-safe, non-toxic, and quality tested.
              </div>
            </div>

            <div className="collapse collapse-arrow bg-purple-50 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                What is your return policy?
              </div>
              <div className="collapse-content text-gray-700">
                You can return products within 7 days if they are damaged or incorrect.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
