import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-600">
            YourBrand
          </a>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <a
            href="#signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Boost Your Marketing Efforts</h1>
          <p className="text-lg mb-6">
            Get your product in front of the right audience with ease.
          </p>
          <a
            href="#signup"
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p>Describe your amazing feature here.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p>Highlight another great aspect of your service.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p>Explain how this will benefit the user.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">Join thousands of happy customers.</p>
          <a
            href="#signup"
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 YourBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
