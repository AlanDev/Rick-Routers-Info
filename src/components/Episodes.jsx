const Episodes = ({ characters = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-around gap-12">
      {characters.map((item, index) => (
        <div key={index}>
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
              <img src={item.image} className="w-96 h-auto" alt={item.name} />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2  text-2xl text-[#043c6e]">
                {item.name}
              </h4>
              
              <p className="block  text-font text-[#de6dc7] font-bold">
                {item.origin.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Episodes;
