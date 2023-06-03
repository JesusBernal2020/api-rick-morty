import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Resident = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null)

  const statusStyle = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  };

  useEffect(() => {
    axios.get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err))

  }, [])


    return (
        <article className="bg-[#3a3a3a39] w-[250px] min-h-[100px] border-2 border-[#8EFF8B] min-[400px]:w-[350px] min-[700px]:w-[250px] min-[900px]:w-[300px]">
          <div className="relative">
            <img src={residentInfo?.image} alt="" />
            <div className="text-white bg-[#010101b9] px-7 py-1 flex place-items-center gap-2 absolute bottom-6 left-[50%] -translate-x-[50%] border-2 border-[#8EFF8B]">
            <div className={`h-4 aspect-square ${statusStyle[residentInfo?.status]} rounded-full`}></div>{residentInfo?.status }</div>
          </div>
          <section>
            <section>
              <h2 className="text-center text-xl p-4 border-b-2 text-white">
                {residentInfo?.name}
              </h2>
            </section>
            <section className="p-2">
              <ul className="py-2">
                <li className="pb-3 text-white">
                  <span className="text-gray-500">species:</span>
                  {residentInfo?.species}
                </li>
                <li className="pb-3 text-white">
                  <span className="text-gray-500">origin:</span>
                  {residentInfo?.origin.name}
                </li>
                <li className="pb-3 text-white">
                  <span className="text-gray-500">times apppear:</span>
                  {residentInfo?.episode.length}
                </li>
              </ul>
            </section>
          </section>
        </article>
    );
}

export default Resident