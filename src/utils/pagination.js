export const paginationLogic = (currentPage, residents) => {
  if (!residents) {
    return {
      pages: [1],
      residentsInPage: [],
    };
  }

  //cantida de residentes por pagina

  const RESIDENTS_PER_PAGE = 20;

  //cantidad de pagina totales

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //residenctes que van a mostar de la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //generacion del arrglo de las paginas a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return {
    residentsInPage,
    pages,
  };
};
