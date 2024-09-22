// import { useEffect, useState, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
// import ReactDom from "react-dom";
import css from './MoviePagePagination.module.css';

export default function PaginatedItems({
  // itemsPerPage,
  // totalItems,
  onChange,
  currentPage,
  totalPages,
}) {
  // const items = useMemo(() => [...Array(totalItems).keys()], [totalItems]);

  // const [pageCount, setPageCount] = useState(0);

  // useEffect(() => {
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemsPerPage, items]);

  const handlePageClick = event => {
    const selectedPage = event.selected + 1;

    onChange(selectedPage);
  };

  return (
    <>
      <ReactPaginate
        nextLabel=">>>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        previousLabel="<<<"
        pageClassName={css['page-item']}
        pageLinkClassName={css['page-link']}
        previousClassName={css['page-item']}
        previousLinkClassName={css['page-link']}
        nextClassName={css['page-item']}
        nextLinkClassName={css['page-link']}
        breakLabel="..."
        breakClassName={css['page-item']}
        breakLinkClassName={css['page-link']}
        containerClassName={css['pagination']}
        activeClassName={css['active']}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
