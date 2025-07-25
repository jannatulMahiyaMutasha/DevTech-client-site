import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="mt-10">
            <div class="flex items-center justify-center space-x-2.5">
              <span class="text-base font-medium text-gray-900"> Monthly </span>

              <button
                type="button"
                class="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-blue-600 rounded-full cursor-pointer w-12 focus:outline-none"
                role="switch"
              >
                <span
                  aria-hidden="true"
                  class="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-6 bg-blue-600 rounded-full shadow pointer-events-none"
                ></span>
              </button>

              <span class="text-base font-medium text-gray-900"> Yearly </span>
            </div>
          </div>

          <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
            <div class="overflow-hidden bg-transparent border-2 border-gray-200 rounded-md">
              <div class="p-6 md:py-8 md:px-9">
                <h3 class="text-xl font-semibold text-black">Personal</h3>
                <p class="mt-2.5 text-sm text-gray-600">
                  All the basic features to boost your freelance career
                </p>

                <div class="flex items-end mt-5">
                  <div class="flex items-start">
                    <span class="text-xl font-medium text-black"> $ </span>
                    <p class="text-6xl font-medium tracking-tight">39</p>
                  </div>
                  <span class="ml-0.5 text-lg text-gray-600"> / month </span>
                </div>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-gray-900 transition-all duration-200 bg-transparent border-2 rounded-full border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white focus:text-white focus:bg-fuchsia-600"
                  role=""
                >
                  Start 14 Days Free Trial
                </a>

                <ul class="flex flex-col mt-8 space-y-4">
                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      1 Domain License{" "}
                    </span>
                    <svg
                      class="w-4 h-4 ml-0.5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <strike class="text-base font-medium text-gray-400">
                      {" "}
                      Design Files Included{" "}
                    </strike>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <strike class="text-base font-medium text-gray-400">
                      {" "}
                      Premium Support{" "}
                    </strike>
                  </li>
                </ul>
              </div>
            </div>

            <div class="overflow-hidden bg-white border-2 border-transparent rounded-md">
              <div class="p-6 md:py-8 md:px-9">
                <h3 class="text-xl font-semibold text-black">Agency</h3>
                <p class="mt-2.5 text-sm text-gray-600">
                  All the extended features to boost your agency career
                </p>

                <div class="flex items-end mt-5">
                  <div class="flex items-start">
                    <span class="text-xl font-medium text-black"> $ </span>
                    <p class="text-6xl font-medium tracking-tight">99</p>
                  </div>
                  <span class="ml-0.5 text-lg text-gray-600"> / month </span>
                </div>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  role=""
                >
                  Start 14 Days Free Trial
                </a>

                <ul class="flex flex-col mt-8 space-y-4">
                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      100 Domain License{" "}
                    </span>
                    <svg
                      class="w-4 h-4 ml-0.5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      Full Celebration Library{" "}
                    </span>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>

                  <li class="inline-flex items-center space-x-2">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-base font-medium text-gray-900">
                      {" "}
                      Premium Support{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
