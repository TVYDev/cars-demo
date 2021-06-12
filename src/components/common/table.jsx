import _ from 'lodash';

export const Table = ({
  headers,
  items,
  isIncludedNo = false,
  onPageChange,
  pagination,
}) => {
  const { currentPage, totalPages, perPage } = pagination;

  const startingNoColumnValue = (currentPage - 1) * perPage + 1;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {isIncludedNo && <th>No</th>}
            {headers.map((header, headerIndex) => (
              <th key={headerIndex}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, itemIndex) => (
            <tr key={itemIndex}>
              {isIncludedNo && (
                <td>{startingNoColumnValue + itemIndex + ''}</td>
              )}
              {headers.map((header, headerIndex) => {
                const { key, formatter } = header;
                return (
                  <td key={itemIndex + headerIndex}>
                    {formatter ? formatter(item[key]) : item[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 ? (
        <nav>
          <ul className="pagination">
            {_.range(1, totalPages + 1).map((value) => (
              <li
                key={value}
                className={`page-item ${
                  value === currentPage ? 'active' : null
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Table;
