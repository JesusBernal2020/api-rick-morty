import axios from 'axios'
import React from 'react'

const LocationInput = ({ locattion, setLocattion }) => {
  
  const handleSubmint = (e) => { 
    e.preventDefault()
    const newLocation = (e.target.newLocation.value)

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios.get(URL)
      .then(({ data }) => setLocattion(data))
      .catch((err) => console.log(err))

  }

    return (
      /* input de busqueda */
      <div className="flex flex-col gap-y-10">
        <form
          onSubmit={handleSubmint}
          className="flex justify-center px-2 min-[700px]:px-32 min-[1000px]:px-60 min-[1400px]:px-[25rem]"
        >
          <input
            id="newLocation"
            className=" bg-[#0000004c] text-white w-[100%] h-12 border-2 border-[#8EFF8B] pl-4  min-[700px]:text-center"
            placeholder="Type a location id..."
            type="text"
          />
          <button className="bg-[#8fff8b9d] hover:bg-[#528f50b0] border-2 border-[#8EFF8B] px-7">
            <img src="/images/loop.png" alt="" />
          </button>
        </form>
        <div className="flex justify-center">
          <h2 className="min-[900px]:text-xl min-[1000px]:text-2xl">
            ¡Wellcome to the crazy universe!
          </h2>
        </div>
        <section className="min-[700px]:px-10">
          <article className="bg-[#4d4c4c29] p-4 mx-4 border-2 border-[#8EFF8B]">
            <h4 className="text-center pb-5 text-lg min-[900px]:text-2xl">
              {locattion?.name}
            </h4>
            <span>
              <ul className="flex flex-wrap px-7 gap-3 min-[370px]:px-14 min-[400px]:px-20 min-[700px]:justify-evenly min-[700px]:px-2">
                <li className="text-white min-[900px]:text-xl">
                  <span className="text-gray-500">
                    <b>Type: </b>
                  </span>
                  {locattion?.type}
                </li>
                <li className="text-white min-[900px]:text-xl">
                  <span className="text-gray-500">
                    <b>Population:</b>
                  </span>
                  {locattion?.residents.length}
                </li>
                <li className="text-white min-[900px]:text-xl">
                  <span className="text-gray-500">
                    <b>Dimencion:</b>
                  </span>
                  {locattion?.dimension}
                </li>
              </ul>
            </span>
          </article>
        </section>
      </div>

      /* localitation */
    );
}

export default LocationInput