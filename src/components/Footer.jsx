import React from 'react'

const Footer = () => {
  return (


    <footer class="bg-white rounded-lg shadow m-4 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-[#de6dc7] sm:text-center ">© 2023 <a href="/" class="hover:underline"></a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-[#de6dc7] sm:mt-0">
          <li>
            <a href="/Characters" class="hover:underline me-4 md:me-6">Characters</a>
          </li>
          <li>
            <a href="/Locations" class="hover:underline me-4 md:me-6">Locations</a>
          </li>
          <li>
            <a href="/Episodes" class="hover:underline me-4 md:me-6">Episodes</a>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer