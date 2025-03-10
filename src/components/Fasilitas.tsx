import { useState } from "react";

const Fasilitas = ({ content }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <section className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 mt-8 sm:hidden block">
      <div className="border border-gray-300 rounded-lg sm:p-6 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Fasilitas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.fasilitas
            .slice(currentPage * 6, currentPage * 6 + 6)
            .map((inclusion: any) => (
              <div className="flex items-center text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-1 text-deep-blue"
                >
                  <>
                    <path d="M8 6v6" />
                    <path d="M15 6v6" />
                    <path d="M2 12h19.6" />
                    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M9 18h5" />
                    <circle cx="16" cy="18" r="2" />
                  </>
                </svg>
                <span>{inclusion}</span>
              </div>
            ))}
        </div>
        {content.fasilitas.length > 6 && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-deep-blue"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="text-sm font-semibold">
              {currentPage + 1} / {Math.ceil(content.fasilitas.length / 6)}
            </span>

            <button
              onClick={() => {
                if (currentPage < Math.ceil(content.fasilitas.length / 6) - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              disabled={
                currentPage >= Math.ceil(content.fasilitas.length / 6) - 1
              }
              className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-deep-blue"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fasilitas;
