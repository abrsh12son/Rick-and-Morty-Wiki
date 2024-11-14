const Card = ({ results }) => {
  if (!results) {
    return <p className="text-xl font-bold py-3 mx-auto">No character found:\</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 shadow-lg w-3/4">
    {results.map((character) => {
        const { id, name, image, location, status } = character;
        let badge;
        if (status === "Alive") {
          badge= <p className="text-white bg-green-700 px-5 text-lg font-semibold w-fit absolute top-1 right-1 rounded-lg shadow-md">{status}</p>
        }
        else if(status === "Dead") {
            badge= <p className="text-white bg-red-700 px-5 text-lg font-semibold w-fit absolute top-1 right-1 rounded-lg shadow-md">{status}</p>
        }
        else  {
            badge= <p className="text-white bg-gray-600 px-5 text-lg font-semibold w-fit absolute top-1 right-1 rounded-lg shadow-md">{status}</p>
          }
      return (
          <div key={id}
              className="bg-white border-2 w-52  border-blue-400 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
          <img
            src={image}
            alt={name}
            className="w-52 h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">Location:</p>
            <p className="text-sm text-gray-500">{location.name}</p>
              </div>
              <div>
                  {badge}
              </div>
        </div>
      );
    })}
  </div>
  );
};

export default Card;
