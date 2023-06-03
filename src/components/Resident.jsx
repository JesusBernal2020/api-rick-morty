import React from 'react'

const Resident = () => {
    return (
      <div className="flex flex-wrap justify-center py-10 gap-12 min-[700px]:mx-20 min-[900px]:mx-38">
        <article className="bg-[#3a3a3a39] w-[250px] min-h-[100px] border-2 border-[#8EFF8B] min-[400px]:w-[350px] min-[700px]:w-[250px] min-[900px]:w-[300px]">
          <div>
            <img src="/images/mortyPueba.png" alt="" />
          </div>
          <div>
            <h2 className="text-center text-xl p-4 border-b-2 text-white">
              Abjudicador rick
            </h2>
          </div>
          <div className="p-2">
            <ul className="py-2">
              <li className="pb-3 text-white">
                <span className="text-gray-500">species:</span> human
              </li>
              <li className="pb-3 text-white">
                <span className="text-gray-500">origis:</span> unknown
              </li>
              <li className="pb-3 text-white">
                <span className="text-gray-500">times apppear:</span> 1 time
              </li>
            </ul>
          </div>
        </article>

        <article className="bg-[#3a3a3a37] w-[250px] min-h-[100px] border-2 border-[#8EFF8B] min-[400px]:w-[350px] min-[700px]:w-[250px] min-[900px]:w-[300px] ">
          <div>
            <img src="/images/mortyPueba.png" alt="" />
          </div>
          <div>
            <h2 className="text-center text-xl p-4 border-b-2 text-white">
              Abjudicador rick
            </h2>
          </div>
          <div className="p-2">
            <ul className="py-2">
              <li className="pb-3 text-white">
                <span className="text-gray-500">species:</span> human
              </li>
              <li className="pb-3 text-white">
                <span className="text-gray-500">origis:</span> unknown
              </li>
              <li className="pb-3 text-white">
                <span className="text-gray-500">times apppear:</span> 1 time
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
}

export default Resident