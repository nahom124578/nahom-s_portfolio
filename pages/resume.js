import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      {/* Provide download link for the PDF */}
      <a
        href="/resume.pdf"
        download="Resume.pdf"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mb-4"
      >
        Download Resume
      </a>

      {/* Embed the PDF directly into the page */}
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
        className="rounded-lg"
      />
    </div>
  );
}
