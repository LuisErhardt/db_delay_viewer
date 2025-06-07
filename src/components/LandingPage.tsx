import React, { useEffect, useState } from "react";
import dateInNameUmwandeln from "../util";

const LandingPage: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/fileList.json`);
        const data = await response.json();
        console.log(data);
        setFiles(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error");
      }
    };

    fetchFiles();
  }, []);

  if (error) return <p className="text-red-600 p-4">{error}</p>;
  if (!files.length) return <p className="p-4">Lade Dateien...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold py-4">Verspätungen im Regionalverkehr in Köln Hbf</h1>
      <p className="mb-6">
        Inspiriert durch diesen{" "}
        <a
          className="text-blue-700"
          href="https://www.reddit.com/r/deutschebahn/comments/1evid66/deutschlandticket_entsch%C3%A4digungen_beantragen/"
        >
          Reddit-Thread
        </a>
        .
      </p>
      <ul className="max-w-md border rounded-xl bg-white shadow space-y-2">
        {files.map((file) => (
          <a
            href={`${process.env.PUBLIC_URL}/#/${encodeURIComponent(file)}`}
            className="block px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700"
            key={file}
          >
            {dateInNameUmwandeln(file)}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
