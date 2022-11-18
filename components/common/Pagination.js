import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "@/styles/common/Pagination.module.css";
import { useEffect, useState } from "react";

const Pagination = ({
  paginationData,
  handleNext,
  handlePrevious,
  gape,
  selectedPage,
  handlepageclick,
}) => {
  const [cSelectedPage, setCSelectedPage] = useState(selectedPage);

  return (
    <div className={styles.PaginationWrraper}>
      <div className={styles.ActionButtonCover} onClick={handlePrevious}>
        <BiChevronLeft />
      </div>
      <div>
        {paginationData?.map((page, index) =>
          index == gape ? (
            <>
              <label className={styles.PageNumber}>...</label>
              <label className={styles.PageNumber}>
                {paginationData[paginationData.length - 1]}
              </label>
            </>
          ) : (
            <>
              {index > gape ? null : (
                <label
                  onClick={() => setCSelectedPage(index)}
                  key={index}
                  className={`${
                    selectedPage === index
                      ? styles.SelectedNumber
                      : styles.PageNumber
                  }`}
                >
                  {index + 1}
                </label>
              )}
            </>
          )
        )}
      </div>
      <div className={styles.ActionButtonCover} onClick={handleNext}>
        <BiChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
