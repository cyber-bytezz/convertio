import { FaChevronDown } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="border-b border-gray-700 pb-6">
          <p className="text-sm md:text-base text-gray-400">Effective Date: Wed 6 Sep 2023</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Privacy Policy</h1>
        </div>

        <section className="space-y-8">
          <div className="border-b border-gray-700 pb-4">
            <h2 className="text-2xl md:text-3xl font-semibold">1. Information We Collect</h2>
            <p className="text-gray-400">
              We collect and use limited information to improve the user experience. The only data we collect is through Google Analytics, which includes:
            </p>
            <ul className="list-disc pl-8 text-gray-400">
              <li>Usage Information: We may collect information about your interaction with our website, such as the pages you visit, your IP address, browser type, device type, and referral URLs. This information helps us understand how users interact with our website to enhance its functionality and content.</li>
            </ul>
          </div>

          {/* Add more sections similar to the above structure */}
          
          <div className="border-b border-gray-700 pb-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions or concerns about this Privacy Policy or the data we collect, please contact us at <a href="mailto:chandru2021007@gmail.com" className="text-blue-300 hover:underline">chandru2021007@gmail.com</a>.
            </p>
          </div>
        </section>

        <div className="flex justify-center items-center mt-8">
          <FaChevronDown className="text-2xl text-gray-400 animate-bounce" />
        </div>

        <p className="text-gray-400 text-center mt-8">
          By using InnovNex Crafters, you agree to the practices outlined in this Privacy Policy. Please discontinue use of our services if you do not agree with this policy. Thank you for trusting us with your privacy.
        </p>
      </div>
    </div>
  );
}
