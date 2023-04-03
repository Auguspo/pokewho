import React from "react";

function Footer() {
  return (
   
<footer class=" left-0 min-w-full fixed bottom-0 w-full sm:w-auto bottom-0 overflow-visible   z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
     <a href="https://flowbite.com/" class="hover:underline">© 2023 Augusto Poletti</a>
   
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>

        <li>
            <a href="#" class="hover:underline">Github</a>
        </li>
    </ul>
</footer>

  );
}

export default Footer;
