import React, { useState } from 'react';
import HtmlTemplateSelector from './HtmlTemplateSelector'
import styles from "./HtmlGenerator.module.css";
import { htmlTemplate, htmlTemplatepreview } from '../utils/functions';

export const HtmlGenerator = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [csvFileInput, setCsvFile] = useState(null);
    const [images, setImages] = useState([]);
    const [HTMLData, setHtmlData] = useState("");
    const [variable1, setVariable1] = useState(null);

    const handleCsvChange = (e) => {
        const file = e.target.files[0];
        setCsvFile(file);
    };
    const [DownloadAccess, setDownloadAccess] = useState(false)

    const handleImageUpload = (e) => {
        setImages([...e.target.files]);
    };
    function base64ToBlob(base64, type) {
        const binary = atob(base64);
        const array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: type });
    }
    const handleSubmit = async () => {
        setHtmlData(
            "Please fill out the form and click Submit to see the result."
        );
        const csvFile = csvFileInput;
        const selectedTemplatevalue = selectedTemplate;
        const imagesfolder = images;

        if (!csvFile || !imagesfolder || !selectedTemplatevalue) {
            console.log("Please upload a CSV file, images, and select a template.");
            return;
        }

        const imagesWithBase64 = imagesfolder
            .map((image) => {
                if (image.base64Data) {
                    return { ...image, base64Content: image.base64Data };
                }
                return null;
            })
            .filter((image) => image !== null);

        if (csvFile) {


            const fileReader = new FileReader();
            const csvBlob = base64ToBlob(csvFile.base64Data, csvFile.type);

            fileReader.onload = async function (event) {
                try {
                    const csvData = event.target.result.trim();
                    const lines = csvData
                        .split(/\r?\n/)
                        .filter((line) => line.trim() !== "");
                    const rows = lines.map((line) => {
                        const result = [];
                        let inQuotes = false;
                        let currentField = "";

                        for (let char of line) {
                            if (char === '"') {
                                inQuotes = !inQuotes;
                            } else if (char === "," && !inQuotes) {
                                result.push(currentField.trim());
                                currentField = "";
                            } else {
                                currentField += char;
                            }
                        }
                        result.push(currentField.trim());
                        return result;
                    });

                    if (rows.length > 0) {
                        const [csvHeaders, ...data] = rows;
                        let hasMissingValues = false;
                        const missingValueErrors = [];

                        data.forEach((row, rowIndex) => {
                            const rowNumber = rowIndex + 2;
                            const rowLength = row.length;
                            const headerLength = csvHeaders.length;

                            if (row.every((cell) => cell.trim() === "")) {
                                missingValueErrors.push(`Row ${rowNumber}: Empty row detected`);
                                hasMissingValues = true;
                                return;
                            }

                            for (let i = 0; i < headerLength; i++) {
                                const cell = row[i] || "";
                                if (cell.trim() === "") {
                                    missingValueErrors.push(
                                        `Row ${rowNumber}: Missing value for "${csvHeaders[i]}"`
                                    );
                                    hasMissingValues = true;
                                }
                            }

                            if (rowLength > headerLength) {
                                for (let i = headerLength; i < rowLength; i++) {
                                    missingValueErrors.push(
                                        `Row ${rowNumber}: Extra value detected in column ${i + 1}`
                                    );
                                    hasMissingValues = true;
                                }
                            }
                        });

                        if (hasMissingValues) {
                            setHtmlData(missingValueErrors.join("\n"));
                            alert({
                                title: "Missing Data Detected",
                                description: missingValueErrors.join("\n"),
                                notificationType: "warning",
                                duration: 15000,
                            });
                            return;
                        }

                        const normalizedData = data.map((row) => [...row]);
                        const previewData = csvHeaders.reduce((acc, header, index) => {
                            acc[header] = data[0][index] || "N/A";
                            return acc;
                        }, {});

                        let previewHtml;
                        try {
                            const result = await htmlTemplatepreview({
                                // additionalScope: {
                                data: previewData,
                                templateName: selectedTemplatevalue,
                                // },
                            });

                            if (typeof result !== "string") {
                                console.error(
                                    "htmlTemplate1 returned a non-string value:",
                                    result
                                );
                                throw new Error("Invalid HTML template. Please check the query.");
                            }

                            previewHtml = result;
                        } catch (error) {
                            console.error("Error triggering htmlTemplate1:", error);
                            //  previewHtml = htmlTemplate1(previewData, "template1");
                        }

                        imagesWithBase64.forEach((image) => {
                            const imageName = image.name;
                            const base64Url = `data:${image.type};base64,${image.base64Content}`;
                            previewHtml = previewHtml.replace(
                                new RegExp(`src=["']([^"']*${imageName}[^"']*)["']`, "g"),
                                `src="${base64Url}"`
                            );
                        });

                        const styling = `
    .navbar {
      display: flex;
      justify-content: flex-end;
    }
    
    .socialiconstable1{
    margin:0;
    }
    .socialiconstable2{
    margin:0;
    }
.socialiconstable3 {
  padding-left: 377px;
  border:1px solid red;
  box-sizing: border-box;
  margin-bottom: 0;
}
    .previewfooter{
    padding-right:195px;
    }
    :host table {
      margin-bottom: 0px !important;
    
      margin-top: 0px !important;
      padding-bottom:0px !important;
    }
    :host(.linetable1) table {
      all: unset !important;
      margin: 0px !important;
      padding: 0px !important;
      border: 10px solid red !important;
      width: 100% !important;
    }
    :host(.linetable1) table {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
    }
.paddingright {
        padding-right: 420px;
    }
        .nopadding{
          padding-right:0px !important;
          padding-left:0px !important;
        }

    table, table,td,tr  {
            border-width: 0 !important;
            border:none !important;
            outline: none;
             border-collapse: collapse !important;
          }
  .socialspacer{
    padding:120px 180px;  
    border:1px soid red;
  }
    body{
      margin : auto !important;
    }
.footer-spacer-td {
  padding: 0px 50px 0px 10px !important;
}
    `;
                        // CssStyle.setValue(styling);
                        setHtmlData(previewHtml);
                        setDownloadAccess(true);

                        const updatedHtmlFiles = await Promise.all(
                            normalizedData.map(async (row, rowIndex) => {
                                const templateData = csvHeaders.reduce((acc, header, index) => {
                                    acc[header] = row[index] || "N/A";
                                    return acc;
                                }, {});

                                const content = await htmlTemplate({
                                    // additionalScope: {
                                    data: templateData,
                                    templateName: selectedTemplatevalue,
                                    // },
                                });


                                //  return {
                                //    fileName: `output_${rowIndex + 1}`,
                                //    content,
                                //  };
                                const fileNameFromCsv = templateData[`FileName`] || `output_${rowIndex + 1}`;
                                return {
                                    fileName: fileNameFromCsv,
                                    content,
                                };

                            })
                        );

                        setVariable1(updatedHtmlFiles);
                    } else {
                        console.error("CSV file is empty or invalid.");
                    }
                } catch (error) {
                    console.error("Error processing CSV file:", error);
                    alert("Failed to process the CSV file. Please try again.");
                }
            };

            fileReader.readAsText(csvBlob);
        } else {
            console.error("No valid CSV file found.");
        }
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.iblOffers}>
                    HTML Generator
                </div>
                <div className={styles.HtmlTemplateSelector}>
                    <HtmlTemplateSelector
                        selectedTemplate={selectedTemplate}
                        setSelectedTemplate={setSelectedTemplate}
                    />
                    <div style={{ marginBottom: '20px' }} className={styles.csvInput}>
                        <label style={{ marginBottom: '8px', display: 'block', textAlign: "start" }}><strong>Upload CSV File</strong></label>
                        <input
                            type="file"
                            accept=".csv"
                            onChange={handleCsvChange}
                        />
                        {/* {csvFile && <p>Uploaded CSV: {csvFile.name}</p>} */}
                    </div>

                    {/* Image Upload */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ marginBottom: '8px', display: 'block', textAlign: "start" }}><strong>Upload Images</strong></label>
                        <input
                            type="file"
                            accept="image/*"
                            webkitdirectory="true"
                            onChange={handleImageUpload}
                        />

                        {/* {images.length > 0 && (
                        <ul>
                        {images.map((file, index) => (
                            <li key={index}>{file.name}</li>
                            ))}
                            </ul>
                            )} */}
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.submit} onClick={() => handleSubmit()}>
                        Submit
                    </div>

                    <div className={styles.submit}>
                        Generate
                    </div>
                </div>
            </div>
            <div className={styles.previewContainer}>
  <h3>HTML Preview:</h3>
  <div
    className={styles.previewBox}
    dangerouslySetInnerHTML={{ __html: HTMLData }}
  />
</div>

        </>
    )
}
