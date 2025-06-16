"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="Mycontainer max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; 2025{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Numaan Ali
          </a>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
