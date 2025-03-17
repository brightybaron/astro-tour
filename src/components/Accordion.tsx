import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "./Icons";

const Accordion = ({ data, isFaq }: any) => {
  const [openDays, setOpenDays] = useState<{ [key: string]: boolean }>({});

  const toggleDay = (title: string) => {
    setOpenDays((prev: any) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleDay(item.title)}
            className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-sandy-beige transition-colors"
          >
            <div className="flex items-center">
              <span
                className={`text-lg text-deep-blue font-semibold ${
                  isFaq || ""
                }`}
              >
                Hari {index + 1}
              </span>
              <span className="ml-2  font-medium">{item.title}</span>
            </div>
            {openDays[item.title] ? <IconChevronDown /> : <IconChevronUp />}
          </button>
          <div
            className={`
                overflow-hidden transition-all duration-200
                ${
                  openDays[item.title]
                    ? "max-h-96 px-2 sm:px-4 py-3"
                    : "max-h-0"
                }
              `}
          >
            {isFaq ? (
              <ul className="space-y-2">
                {item.items.map((item: any, idx: number) => (
                  <li key={idx} className="text-slate-800 sm:text-base text-sm">
                    {/* <div className="w-2 h-2 bg-deep-blue rounded-full mr-1" /> */}
                    - {item.details}
                  </li>
                ))}
              </ul>
            ) : (
              <table>
                <tbody>
                  {item.items.map((item: any, idx: number) => (
                    <tr
                      key={idx}
                      className="text-slate-700 sm:text-base text-sm space-y-1"
                    >
                      {/* <td className="w-2 h-2 bg-deep-blue rounded-full mr-1" /> */}
                      <td className="flex items-start mr-1 justify-center">
                        {item.time && <b>{item.time}</b>}
                      </td>
                      <td>
                        {item.details
                          .split(/(exclude)/gi)
                          .map((part: string, i: number) =>
                            part.toLowerCase() === "exclude" ? (
                              <b key={i}>{part}</b>
                            ) : (
                              part
                            )
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
