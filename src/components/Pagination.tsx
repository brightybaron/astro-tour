import { useState } from "react";
import {
  IconBus,
  IconChevronLeft,
  IconChevronRight,
  IconMapPinned,
} from "@components/Icons";

const Pagination = ({ content, contentTypes }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <ul className="min-h-56 space-y-4">
        {content
          .slice(currentPage * 6, currentPage * 6 + 6)
          .map((item: any) => (
            <li className="flex items-center text-sm sm:text-base" key={item}>
              {contentTypes === "destinasi" ? <IconMapPinned /> : <IconBus />}
              <span>{item}</span>
            </li>
          ))}
      </ul>
      {content.length > 6 && (
        <div className="flex items-center justify-center mt-4 space-x-4">
          <button
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            }}
            disabled={currentPage === 0}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconChevronLeft />
          </button>

          <span className="text-sm font-semibold">
            {currentPage + 1} / {Math.ceil(content.length / 6)}
          </span>

          <button
            onClick={() => {
              if (currentPage < Math.ceil(content.length / 6) - 1) {
                setCurrentPage(currentPage + 1);
              }
            }}
            disabled={currentPage >= Math.ceil(content.length / 6) - 1}
            className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
