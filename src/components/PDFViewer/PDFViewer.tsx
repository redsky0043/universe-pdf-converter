import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Button } from "../Button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFViewerPropsType = {
    file: string,
}

enum Direction {
    Left = '-',
    Right = '+',
}

const PDFViewer: FC<PDFViewerPropsType> = ({ file }) => {
    const [numPages, setNumPages] = useState<number>(1);
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const [containerWidth, setContainerWidth] = useState<number>();
    const containerRef = useRef<HTMLDivElement | null>(null);

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef.current, resizeObserverOptions, onResize);

    const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy): void => {
        setNumPages(numPages);
    }

    const handleChangePage = useCallback((direction: Direction) => {
        if (direction === Direction.Left && currentPageNumber !== 1) {
            setCurrentPageNumber(currentPageNumber - 1);
        } else if (direction === Direction.Right && currentPageNumber !== numPages) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    }, [numPages, currentPageNumber]);

    const isSinglePage = numPages === 1

    useEffect(() => {
        setCurrentPageNumber(1);
    }, [file]);

    return (
        <div ref={containerRef}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options>
                <Page
                    pageNumber={currentPageNumber}
                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />
                {!isSinglePage && (
                    <div className="mt-4 flex items-center gap-x-4 justify-between">
                        <Button
                            text='Prev page'
                            variant='secondary'
                            disabled={currentPageNumber === 1}
                            onClick={() => handleChangePage(Direction.Left)}
                        />
                        <p>
                            Page {currentPageNumber} of {numPages}
                        </p>
                        <Button
                            text='Next page'
                            variant='secondary'
                            disabled={currentPageNumber === numPages}
                            onClick={() => handleChangePage(Direction.Right)}
                        />
                    </div>
                )}
            </Document>
        </div>
    );
};

export default PDFViewer;
