const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function fixPDF() {
    const fileBytes = fs.readFileSync('./public/CV_LeHoa_2026.pdf');
    const pdfDoc = await PDFDocument.load(fileBytes);

    if (pdfDoc.getPageCount() > 1) {
        // Remove the first page (index 0)
        pdfDoc.removePage(0);

        // Save the modified PDF
        const modifiedBytes = await pdfDoc.save();
        fs.writeFileSync('./public/CV_LeHoa_2026.pdf', modifiedBytes);
        console.log('Successfully removed the first page!');
    } else {
        console.log('PDF has only 1 page or is empty, nothing to remove.');
    }
}

fixPDF().catch(err => console.error(err));
