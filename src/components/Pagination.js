import { useState } from "react";

// if error occurs
// function usePagination(data = [], itemsPerPage) { ... }

// Configure Number of Items & Current Page
function Pagination(props, itemsPerPage) {
  const {listOfStories} = props;
  setTimeout(()=>{console.log("listofStories", listOfStories)}, 500)
  
  if(!itemsPerPage){
    itemsPerPage = 20;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(listOfStories.length / itemsPerPage);

  // Returning Data of the Current Page
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return listOfStories.slice(begin, end);
  }
  //  Increase, Decrease and Go to any Page
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  // function jump(page) {
  //   const pageNumber = Math.max(1, page);
  //   setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  // }

  // next, prev, jump, currentData, currentPage, maxPage
return (
  
    <nav>
      <ul className="pagination justify-content-center" style={styles}>
        <li className="page-item">
          <button onClick={next}> Next </button>
        </li>
        <li className="page-item">
          <button onClick={prev}> Previous </button>
        </li>
      </ul>
    </nav>
)
}

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none"
}

export default Pagination;