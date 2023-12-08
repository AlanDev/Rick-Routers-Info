const Home = () => {
  return (
    <main className="bg-[#fffdff]  h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 md:px-8">
        <div className="md:p-8">
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 sm:text-left text-center mt-8 text-[#59b345]">
            Rick and <br /> Morty
          </h1>
          
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
            <a
              href="/characters"
              className="flex md:flex-col items-center justify-between gap-6 w-full md:max-w-[120px] p-4 md:p-8 rounded-2xl bg-gradient-to-t from-[#de6dc7] to-[#de6dd8]"
            >
              <div className="text-center text-white">
                <p>Ver</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </a>
            <div className="flex items-center gap-6 md:block">
              <img
                src="https://vignette.wikia.nocookie.net/rickandmorty/images/3/34/S3e7_crowded_city.png/revision/latest?cb=20170912212154"
                className="w-24 h-24   bg-[#a9d3e9] rounded-lg mb-4"
              />
              <div>
                <h3 className="text-sm font-bold mb-1 md:mb-4 text-[#043c6e]">
                  Locations
                </h3>
                <a href="locations" className="text-gray-400 text-sm">Click para ver
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 md:block">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/005/225/632/large/angus-wyatt-rick-and-morty-print.jpg?1489455869"
                className="w-24 h-24  bg-[#a9d3e9] rounded-lg mb-4"
              />
              <div>
                <h3 className="text-sm font-bold mb-1 md:mb-4 text-[#043c6e]">
                  Episodes
                </h3>
                <a href="/episodes" className="text-gray-400 text-sm">Click para ver
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://www.wallpaperflare.com/static/404/362/467/rick-and-morty-cartoon-wubalubadubdub-rick-sanchez-wallpaper.jpg" width={800} 
            className="mt-20 rounded-full"
          />
        </div>
      </div>
    </main>
  )
}

export default Home;