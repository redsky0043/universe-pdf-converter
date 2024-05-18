import { useState } from "react";

import { Header } from "./components/Header";
import { PDFViewer } from "./components/PDFViewer";
import { HistoryList } from "./components/History";
import { ConvertForm } from "./components/ConvertForm";
import { Notifications } from "./components/Notification";

function App() {
    const [pdfData, setPdfData] = useState<string>('');

    return (
        <main className="container mx-auto px-16 py-8 max-w-screen-xl">
            <Header />
            <section className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="flex flex-col gap-y-10">
                    <ConvertForm setPdfData={setPdfData} />
                    <HistoryList setPdfData={setPdfData} pdfData={pdfData} />
                </div>
                <PDFViewer file={pdfData}/>
            </section>
            <Notifications />
        </main>
    )
}

export default App
