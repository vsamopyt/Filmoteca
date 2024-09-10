// import React, {useEffect, useState, useMemo} from "react";
// import ReactPaginate from "react-paginate";
// import ReactDom from "react-dom";
// import css from "./MoviePagePagination.module.css"


//   export default function PaginatedItems({ itemsPerPage, totalItems, onChange, currentPage }) {

  
//     const items = useMemo(() => [...Array(totalItems).keys()],[totalItems]);

//  console.log("currentPage", currentPage);
 
  


//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);



//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     // setCurrentItems(items.slice(itemOffset, endOffset));

//     setPageCount(Math.ceil(items.length / itemsPerPage));
//     //  setPageCount(totalItems/itemsPerPage);

//   }, [itemOffset, itemsPerPage, items]);
 
//   // console.log(itemOffset,);

  
  

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//    console.log(event);
   
//   //   console.log(event.selected+1);
   
//     const newOffset = event.selected+1
//     const selectedPage = event.selected+1
   
    
//     // const newOffset = event.selected
//     // const selectedPage = event.selected
//     //  console.log(`User requested page number ${newOffset}`);
//     setItemOffset(newOffset);
//     onChange(selectedPage);
//     // onChange(newOffset);
//     // console.log(newOffset);
    

//   };


//   // console.log(currentPage);
  
//   return (
//     <>
      
//       <ReactPaginate
//         nextLabel=">>"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={3}
//         pageCount={pageCount}
//         previousLabel="<<"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         // forcePage={currentPage-1} // Use this to set the initial page
//         forcePage={currentPage-1} // Use this to set the initial page
//         renderOnZeroPageCount={null}
        
//       />
//     </>
//   );
// }





import React, {useEffect, useState, useMemo} from "react";
import ReactPaginate from "react-paginate";
import ReactDom from "react-dom";
import css from "./MoviePagePagination.module.css"


  export default function PaginatedItems({ itemsPerPage, totalItems, onChange, currentPage, totalPages }) {

  
    const items = useMemo(() => [...Array(totalItems).keys()],[totalItems]);

 console.log("currentPage", currentPage);
 
  


  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);



  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(items.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(items.length / itemsPerPage));
    //  setPageCount(totalItems/itemsPerPage);

  }, [itemsPerPage, items]);
 
  // console.log(itemOffset,);

  
  

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
   console.log(event);
   
  //   console.log(event.selected+1);
   

    const selectedPage = event.selected+1
   
    
    // const newOffset = event.selected
    // const selectedPage = event.selected
    //  console.log(`User requested page number ${newOffset}`);
    // setItemOffset(newOffset);
    onChange(selectedPage);
    // onChange(newOffset);
    // console.log(newOffset);
    

  };


  // console.log(currentPage);
  console.log(totalPages);
  
  
  return (
    <>
      
      <ReactPaginate
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        previousLabel="<<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        // forcePage={currentPage-1} // Use this to set the initial page
        forcePage={currentPage-1} // Use this to set the initial page
        renderOnZeroPageCount={null}
        
      />
    </>
  );
}
