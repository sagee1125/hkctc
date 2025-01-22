import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PDFThumbnailProps = {
  pdfUrl: string;
};

export const PDFThumbnail: React.FC<PDFThumbnailProps> = (
  props: PDFThumbnailProps
) => {
  const { pdfUrl } = props;
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadThumbnail = async () => {
      const loadingTask = pdfjs.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      setThumbnailUrl(canvas.toDataURL());
    };

    loadThumbnail();
  }, [pdfUrl]);

  return thumbnailUrl ? (
    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
      <img src={thumbnailUrl} alt="PDF Thumbnail" />
    </a>
  ) : (
    <p>Loading thumbnail...</p>
  );
};
