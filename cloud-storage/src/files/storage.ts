import { diskStorage } from "multer";


const genearteId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join("");


const normilizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split(".").pop();

  callback(null, `${genearteId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: "./uploads",
  filename: normilizeFileName
});