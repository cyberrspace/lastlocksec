 "use client";

export default function SubscriptionOverlay() {
  return (
    <div className="max-h-[623px] w-[843px] bg-[#C0C0C0] flex items-center justify-center p-[16px] ">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-[32px]">
        <button
          className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold"
          onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-[40px]">
          <h1 className="text-3xl font-bold text-gray-900 mb-[8px]">
            Choose your plan
          </h1>
          <h2 className="text-[21px] font-bold text-[#30404D]">BASIC</h2>
        </div>

        {/* Plans Container */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">BASIC</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Perfect for small communities starting with access control.
            </p>

            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-900">N150,00</span>
              <span className="text-gray-500 ml-1">/monthly</span>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Up to 150 residential Units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Visitor code generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">2 admin accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Email Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Basic Payment tracking (4% transaction fee)</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
              Get Started for Free
            </button>
          </div>

          {/* Professional Plan */}
          <div className="border border-gray-200 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">PROFESSIONAL</h3>
            <p className="text-gray-600 mb-4 text-sm">
              For growing estates needing advanced management...
            </p>

            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-900">N200,000</span>
              <span className="text-gray-500 ml-1">/monthly</span>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Features:</h4>
              <p className="font-semibold text-gray-900 mb-3">Everything in Basic, plus:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Up to 500 residential units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom access rules (time/date restrictions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Automated payment reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Priority support (24hr response)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Financial reporting dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Reduced 2% transaction fee</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
              Start 14-Day Free Trial
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Footer */}
        <div className="text-center">
          <button className="text-gray-600 hover:text-blue-500 font-medium transition duration-200">
            I want to look around first
          </button>
        </div>
      </div>
    </div>
  );
}