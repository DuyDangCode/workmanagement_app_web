"use client";
import useDownloader from "react-use-downloader";
import axios from "axios";

const ListItem = () => (
  <li onClick={download(fileUrl, fileName)}>{fileName}</li>
);

const Download = () => {
  const { download } = useDownloader();
  const items = [
    { fileUrl: "files/apks/v1/app-debug.apk", fileName: "app-v1.apk" },
    { fileUrl: "files/apks/v2/app-debug.apk", fileName: "app-v2.apk" },
    { fileUrl: "files/apks/v3/app-debug.apk", fileName: "app-v3.apk" },
  ];

  return (
    <div>
      <h3>Choose the version:</h3>
      <ul>
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
      </ul>
    </div>
  );
};

export default Download;
