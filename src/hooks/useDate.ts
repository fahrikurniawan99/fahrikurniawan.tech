import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// import "dayjs/locale/id";
// dayjs.locale("id");

type DateFormatType = "default" | "relativeTime";

function formatDate(date: string, formatType: DateFormatType = "default") {
  let result = "";

  if (formatType === "default") {
    result = dayjs(date).format("dddd, DD MMMM YYYY");
  } else if (formatType === "relativeTime") {
    result = dayjs(date).fromNow();
  }

  return result;
}

const useDate = () => ({
  format: formatDate,
});

export default useDate;
