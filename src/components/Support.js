import React from "react";

function Support() {
  return (
    <div>
      <head>
        <title>Support - Companion Bible App</title>
      </head>
      <body class="bg-gray-100 font-sans">
        <div class="max-w-3xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4">
            Support for Companion Bible App
          </h1>
          <p class="mb-6">
            Welcome to the support page for the Companion Bible app. If you have
            any questions, concerns, or feedback, please don't hesitate to
            contact us. We're here to help!
          </p>

          <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
          <p class="mb-6">
            For assistance or inquiries, you can reach out to us via email or
            through our social media channels:
          </p>

          <ul class="list-disc ml-6 mb-6">
            <li class="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@companionbibleapp.com"
                class="text-blue-500"
              >
                support@biblehorizon.com
              </a>
            </li>
            <li class="mb-2">
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/CompanionBibleApp"
                target="_blank"
                class="text-blue-500"
              >
                TBD
              </a>
            </li>
            <li class="mb-2">
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/CompanionBibleApp"
                target="_blank"
                class="text-blue-500"
              >
                TBD
              </a>
            </li>
          </ul>

          <p>
            If you have a technical issue, please provide as much detail as
            possible so we can assist you effectively. Your feedback is valuable
            and helps us improve the app for everyone.
          </p>
        </div>
      </body>
    </div>
  );
}

export default Support;
