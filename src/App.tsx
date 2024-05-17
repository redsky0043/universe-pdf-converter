import { useState } from "react";

import { PDFViewer } from "./components/PDFViewer";
import { HistoryList } from "./components/History";
import { ConvertForm } from "./components/ConvertForm";
import { Notifications } from "./components/Notification";

function App() {
    const [pdfData, setPdfData] = useState<string>('');

    return (
        <div className="container mx-auto px-16 py-8 max-w-screen-xl">
            <h1 className="text-2xl font-bold mb-10 text-center">
                Text to PDF Converter
            </h1>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="flex flex-col gap-y-10">
                    <ConvertForm setPdfData={setPdfData} />
                    <HistoryList setPdfData={setPdfData} pdfData={pdfData} />
                </div>
                <PDFViewer file={pdfData}/>
            </div>
            <Notifications />
        </div>
    )
}

export default App
