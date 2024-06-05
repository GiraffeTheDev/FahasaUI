const convertTime = (originalDateString) => {
  const date = new Date(originalDateString);

  // Lấy năm, tháng và ngày từ Date object
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const day = date.getDate();

  // Định dạng lại chuỗi theo định dạng mong muốn
  const newDateString = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return newDateString;
};
const formatNumber = (num) => {
  return num.toLocaleString("vi-VN");
};
export { convertTime, formatNumber };
