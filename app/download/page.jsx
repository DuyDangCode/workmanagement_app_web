"use client";
import useDownloader from "react-use-downloader";
import axios from "axios";

const BASE_URL = "http://13.250.6.126/api/greeting";

function callApi() {
  axios
    .get(BASE_URL)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Download = () => {
  const { download } = useDownloader();
  const fileUrl = "files/apks/v1/app-debug.apk";
  const fileName = "app-debug.apk";

  return (
    <div>
      <h3>Workmanagement App</h3>
      {/* <button onClick={() => download(fileUrl, fileName)}>
        Click to download app
      </button> */}
      <button onClick={callApi}>Click</button>
    </div>
  );
};

export default Download;
