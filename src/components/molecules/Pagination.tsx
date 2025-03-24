"use client";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  postCount: number;
  perPage: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({
  postCount,
  perPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pageCount = Math.ceil(postCount / perPage);
  const style =
    "w-[40px] py-2 border rounded-lg cursor-pointer flex justify-center";
  return (
    <div className="py-[30px]">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        forcePage={currentPage - 1}
        onPageChange={onPageChange}
        containerClassName="flex gap-2 justify-center mt-5"
        pageClassName={style}
        activeClassName="bg-black text-white"
        previousClassName={style}
        nextClassName={style}
      />
    </div>
  );
};

export default Pagination;
