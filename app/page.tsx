"use client";

import { UploadButton } from "@/utils/uploadthing";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-red-300">
        <div>
          <h1 className="text-4xl text-center">Image Upload</h1>
        </div>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </main>
  );
}
