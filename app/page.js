"use client";
import useDownloader from "react-use-downloader";

const Home = () => {
  const { size, elapsed, persentage, download, cancel, error, isInprocessing } =
    useDownloader();
  const fileUrl = "files/apks/v1/app-debug.apk";
  const fileName = "app-debug.apk";

  return (
    <div>
      <h3>Workmanagement App</h3>
      <button onClick={() => download(fileUrl, fileName)}>
        workmanagement_app_v_6_2_2023
      </button>
      <button onClick={() => cancel()}></button>
    </div>
  );
};

export default Home;
