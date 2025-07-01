const Pagination = ({ paginationPages, currentPage, setCurrentPage }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < paginationPages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mb-20 text-center space-x-2">
      <button onClick={handlePrevPage} className="pr-2 cursor-pointer">
        Prev
      </button>
      {paginationPages.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`py-2 px-4 border border-gray-500 cursor-pointer ${
            currentPage == page ? "bg-green-300" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} className="pl-2 cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default Pagination;
