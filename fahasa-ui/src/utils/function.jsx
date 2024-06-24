const convertTime = (originalDateString) => {
  const date = new Date(originalDateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newDateString = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return newDateString;
};
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const formartTime = (timeStr) => {
  // Chuỗi thời gian ban đầu

  // Chuyển đổi chuỗi thời gian thành đối tượng Date
  const timeObj = new Date(timeStr);

  // Xác định múi giờ chênh lệch (ở đây là +9 giờ)
  const timezoneOffset = 9 * 60 * 60 * 1000; // 9 giờ tính bằng milliseconds

  // Chuyển đổi thời gian sang múi giờ mới
  const localTimeObj = new Date(timeObj.getTime() + timezoneOffset);

  // Lấy các thành phần ngày và giờ từ đối tượng Date đã chuyển đổi
  const hours = String(localTimeObj.getUTCHours()).padStart(2, "0");
  const minutes = String(localTimeObj.getUTCMinutes()).padStart(2, "0");
  const seconds = String(localTimeObj.getUTCSeconds()).padStart(2, "0");
  const day = String(localTimeObj.getUTCDate()).padStart(2, "0");
  const month = String(localTimeObj.getUTCMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const year = localTimeObj.getUTCFullYear();

  // Định dạng lại chuỗi thời gian theo yêu cầu
  const formattedTimeStr = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;

  return formattedTimeStr;
};
export { convertTime, formartTime, formatNumber };
