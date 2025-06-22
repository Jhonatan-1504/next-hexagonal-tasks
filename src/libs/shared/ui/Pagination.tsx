"use client";

import { memo, useMemo } from "react";
import clsx from "clsx";

type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  onChange: (currentPage: number) => void;
};

const classNames = {
  base:
    "flex items-center justify-center px-4 h-10 text-sm border transition-colors",
  inactive:
    "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  active:
    "text-blue-600 bg-blue-50 border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white dark:border-gray-700",
};

const Pagination = ({
  total,
  currentPage,
  perPage,
  onChange,
}: PaginationProps) => {
  const pages = useMemo(() => Math.ceil(total / perPage), [total]);

  return (
    <nav aria-label="Pagination">
      <ul className="inline-flex text-base h-10 rounded overflow-hidden border border-gray-300 dark:border-gray-700">
        {/* Previous */}
        <li>
          <button
            onClick={() => onChange(Math.max(currentPage - 1, 1))}
            className={clsx(classNames.base, classNames.inactive)}
          >
            Previous
          </button>
        </li>

        {/* Pages */}
        {Array.from({ length: pages }).map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <li key={page}>
              <button
                aria-current={isActive ? "page" : undefined}
                onClick={() => onChange(page)}
                className={clsx(
                  classNames.base,
                  isActive ? classNames.active : classNames.inactive
                )}
              >
                {page}
              </button>
            </li>
          );
        })}

        {/* Next */}
        <li>
          <button
            onClick={() => onChange(Math.min(currentPage + 1, pages))}
            className={clsx(classNames.base, classNames.inactive)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Pagination);
