export const Table = ({ headers, items, isIncludedNo = false }) => {
  return (
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
            {isIncludedNo && <td>{itemIndex + 1}</td>}
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
  );
};

export default Table;
