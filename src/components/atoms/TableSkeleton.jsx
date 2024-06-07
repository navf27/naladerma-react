import React from "react";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-dark lg:py-4 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-4 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-[#FFFEFB] py-4 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  ThNoStyle: `w-1/6 min-w-20 border-l border-transparent py-3 px-3 text-lg font-medium text-dark lg:py-4 lg:px-4`,
  NoStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-4 px-2 text-center text-base font-medium`,
};

const TableSkeleton = ({ th }) => {
  const thLength = th.length;

  return (
    <section className="relative lg:ms-60">
      <div className="px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full ">
            <div className="max-w-full overflow-hidden rounded-md">
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

                <tbody>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={TdStyle.NoStyle}>
                      <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                        <span className="invisible">abcdef</span>
                      </div>
                    </td>
                    {th?.map((data, index) => (
                      <td
                        key={index}
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle
                        }
                      >
                        <div className="bg-gray-300 animate-pulse rounded-full w-fit mx-auto">
                          <span className="invisible">abcdefghi</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 w-full bg-gradient-to-t from-[#FFFCF2] to-transparent absolute bottom-0"></div>
    </section>
  );
};

export default TableSkeleton;
