import React from "react";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

const EnquireShadow: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 sm:p-10 animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-black transition"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Enquiry Form
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and we'll get back to you
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 
            focus:border-pleo-blue focus:ring-2 focus:ring-pleo-blue/40 focus:outline-none transition"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 
            focus:border-pleo-blue focus:ring-2 focus:ring-pleo-blue/40 focus:outline-none transition"
            required
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full rounded-xl border border-blue-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 
            focus:border-pleo-blue focus:ring-2 focus:ring-pleo-blue/40 focus:outline-none transition"
            required
          />

          <input
            type="text"
            placeholder="City"
            className="w-full rounded-xl border border-blue-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 
            focus:border-pleo-blue focus:ring-2 focus:ring-pleo-blue/40 focus:outline-none transition"
            required
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-800 py-3 text-sm font-semibold text-white 
            shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireShadow;