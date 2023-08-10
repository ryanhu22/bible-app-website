import React from "react";

function Home() {
  return (
    <div>
      <head>
        <title>Companion Bible App</title>
      </head>
      <body class="bg-gray-100 font-sans">
        <div class="bg-white p-6 shadow-md">
          <div class="max-w-3xl mx-auto">
            <main class="text-center">
              <h2 class="text-2xl font-semibold mb-4">
                Welcome to the Companion Bible App
              </h2>
              <p class="text-gray-600 mb-6">
                Explore the digital Bible, ask questions, and receive
                AI-generated responses. Enhance your understanding and
                experience of the Scriptures.
              </p>
              <a class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Coming soon to IOS
              </a>
            </main>
          </div>
        </div>

        <section
          class="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md"
          id="download"
        >
          <h2 class="text-2xl font-semibold mb-4">Get the App</h2>
          <p class="text-gray-600 mb-6">
            Experience the Companion Bible App on your device. Download it now
            and embark on a journey of discovery and exploration of the
            Scriptures.
          </p>
          <a class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Coming Soon!
          </a>
        </section>
      </body>
    </div>
  );
}

export default Home;
