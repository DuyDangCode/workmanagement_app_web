"use client";
import useDownloader from "react-use-downloader";

const ListItem = () => (
  <li onClick={download(fileUrl, fileName)}>{fileName}</li>
);

const Download = () => {
  const { download } = useDownloader();
  const items = [
    { fileUrl: "files/apks/v3/app-debug.apk", fileName: "app-v3.apk" },
    { fileUrl: "files/apks/v3/app-debug.apk", fileName: "app-v3.apk" },
    { fileUrl: "files/apks/v3/app-debug.apk", fileName: "app-v3.apk" },
  ];

  return (
    <div className="flex flex-col justify-items-center text-center items-center">
      <p className=" text-red-600 mt-2">
        Note: you can only download the app when you open the website in your
        browser
      </p>
      {/* <ul>
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              download(item.fileUrl, item.fileName);
            }}
            className=" text-green-500"
          >
            {item.fileName}
          </li>
        ))}
      </ul> */}
      <button
        className="black_btn mt-5"
        onClick={() => {
          download(items[2].fileUrl, items[2].fileName);
        }}
      >
        Download lastest version
      </button>
    </div>
  );
};

export default Download;
