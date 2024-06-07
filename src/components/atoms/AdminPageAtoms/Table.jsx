import React from "react";

const Table = ({ th, children }) => {
  const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-dark lg:py-4 lg:px-4`,
    ThNoStyle: `w-1/6 min-w-20 border-l border-transparent py-4 px-3 text-lg font-medium text-dark lg:py-4 lg:px-4`,
  };

  return (
    <section className="relative lg:ms-60">
      <div className="shadow-sm px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto rounded-md">
              <table className="w-full table-auto">
                <thead className="text-center bg-[#FFD970]">
                  <tr>
                    <th className={TdStyle.ThNoStyle}>No</th>
                    {th.map((item, index) => (
                      <th key={index} className={TdStyle.ThStyle}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>{children}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
