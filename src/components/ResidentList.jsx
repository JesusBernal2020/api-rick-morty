import React, { useEffect, useState } from 'react'
import Resident from './Resident';
import { paginationLogic } from '../utils/pagination';

const FIRST_PAGE = 1;

const ResidentList = ({ residents, locattion }) => {
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

    const { pages, residentsInPage } = paginationLogic(currentPage, residents)

    useEffect(() => {
        setCurrentPage(FIRST_PAGE)
    }, [locattion])
    return (
      <section>
        <section className="flex flex-wrap justify-center py-10 gap-12 min-[700px]:mx-20 min-[900px]:mx-40 min-[1000px]:mx-40">
          {residentsInPage?.map((resident) => (
            <Resident key={resident} residentURL={resident} />
          ))}
        </section>
        <section className="flex justify-center gap-3 py-6">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`bg-green-600 p-2 px-3 rounded-md ${
                currentPage === page && "bg-red-600"
              }`}
            >
              {page}
            </button>
          ))}
        </section>
      </section>
    );
}

export default ResidentList