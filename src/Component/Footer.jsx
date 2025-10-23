"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 sm:py-6 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="Mycontainer max-w-7xl mx-auto text-start">
        <p className="text-xs sm:text-sm text-gray-400">
          &copy; 2025{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Numaan Ali
          </a>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
