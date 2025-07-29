import React, { useContext, useEffect, useState } from 'react';
import HtmlTemplateSelector from './HtmlTemplateSelector';
import styles from "./HtmlGenerator.module.css";
import { htmlTemplate, htmlTemplatepreview } from '../utils/functions';
import { htmlTemplates } from '../utils/htmlTemplates';
import JSZip from "jszip";
import { Allvariables } from '../utils/constants';
import { SharedContext } from '../contextapi/SharedContext';
import { Htmlshowcasing } from '../OutPutSection/Htmlshowcasing';


export const HtmlGenerator = () => {
  
  //   const [selectedTemplateName,setSelectedTemplateName] = useState("");
  const [csvFileInput, setCsvFile] = useState(null);
  const [images, setImages] = useState([]);
  // const [HTMLData, setHtmlData] = useState("");
  const [generatedFiles, setGeneratedFiles] = useState(null);
  // const [DownloadAccess, setDownloadAccess] = useState(false);
  const { templateVariables, setTemplateVariables,
    DownloadAccess, setDownloadAccess,
    CSVFileAccess, setCSVFileAccess,
    HTMLData, setHtmlData,
    selectedTemplate, setSelectedTemplate
  } = useContext(SharedContext);
  const [submitAccess,setSubmitAccess]=useState(false);
  
  useEffect(() => {
  if (csvFileInput && selectedTemplate && images.length > 0) {
    setSubmitAccess(true);
  } else {
    setSubmitAccess(false);
  }
}, [csvFileInput, selectedTemplate, images]);


  const handleCsvChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    const processed = await Promise.all(
      files.map(async (file) => ({
        name: file.name,
        type: file.type,
        base64Data: await fileToBase64(file),
        rawFile: file,
      }))
    );
    setImages(processed);
  };

  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const base64ToBlob = (base64, type) => {
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new Blob([bytes], { type });
  };

  const handleSubmit = async () => {
    setHtmlData("Please fill out the form and click Submit to see the result.");
    if (!csvFileInput || !images.length || !selectedTemplate) {
      console.log("Please upload a CSV file, images, and select a template.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(csvFileInput);

    fileReader.onload = async (event) => {
      try {
        const csvData = event.target.result.trim();
        const lines = csvData.split(/\r?\n/).filter(line => line.trim() !== "");
        const rows = lines.map(parseCsvLine);

        if (!rows.length) return console.error("CSV file is empty or invalid.");

        const [headers, ...data] = rows;
        const validationErrors = validateCsvData(data, headers);

        if (validationErrors.length) {
          setHtmlData(validationErrors.join("\n"));
          alert({
            title: "Missing Data Detected",
            description: validationErrors.join("\n"),
            notificationType: "warning",
            duration: 15000,
          });
          return;
        }

        const previewData = headers.reduce((acc, h, i) => {
          acc[h] = data[0][i] || "N/A";
          return acc;
        }, {});

        let previewHtml = await htmlTemplatepreview({
          data: previewData,
          templateName: selectedTemplate?.value,
        });

        images.forEach(({ name, type, base64Data }) => {
          const base64Url = `data:${type};base64,${base64Data}`;
          previewHtml = previewHtml.replace(
            new RegExp(`src=["']([^"']*${name}[^"']*)["']`, "g"),
            `src="${base64Url}"`
          );
        });

        setHtmlData(previewHtml);
        setDownloadAccess(true);

        const finalHtmlFiles = await Promise.all(
          data.map(async (row, i) => {
            const templateData = headers.reduce((acc, h, j) => {
              acc[h] = row[j] || "N/A";
              return acc;
            }, {});
            const content = await htmlTemplate({
              data: templateData,
              templateName: selectedTemplate?.value,
            });
            return {
              fileName: templateData["FileName"] || `output_${i + 1}`,
              content,
            };
          })
        );

        setGeneratedFiles(finalHtmlFiles);

      } catch (err) {
        console.error("Error processing CSV file:", err);
        alert("Failed to process the CSV file. Please try again.");
      }
    };

    // fileReader.readAsText(csvBlob);
  };

  const parseCsvLine = (line) => {
    const result = [];
    let current = "", inQuotes = false;
    for (let char of line) {
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const validateCsvData = (data, headers) => {
    const errors = [];
    data.forEach((row, i) => {
      const rowNum = i + 2;
      if (row.every(cell => cell.trim() === "")) {
        errors.push(`Row ${rowNum}: Empty row detected`);
        return;
      }
      headers.forEach((header, j) => {
        if ((row[j] || "").trim() === "") {
          errors.push(`Row ${rowNum}: Missing value for "${header}"`);
        }
      });
      if (row.length > headers.length) {
        for (let j = headers.length; j < row.length; j++) {
          errors.push(`Row ${rowNum}: Extra value detected in column ${j + 1}`);
        }
      }
    });
    return errors;
  };

  const handleGenerateHtml = async () => {
    if (!generatedFiles || !generatedFiles.length) {
      alert("Generate HTML first before downloading.");
      return;
    }

    const mainZip = new JSZip();

    const createIndividualZipFiles = async () => {
      for (const file of generatedFiles) {
        const zip = new JSZip();
        zip.file(`${file.fileName}.html`, file.content);

        const imgFolder = zip.folder("images");

        for (const image of images) {
          try {
            const base64Data = image.base64Data.split(",")[1] || image.base64Data;
            const byteCharacters = atob(base64Data);
            const byteNumbers = Array.from(byteCharacters, c => c.charCodeAt(0));
            const byteArray = new Uint8Array(byteNumbers);
            const imageBlob = new Blob([byteArray], { type: image.type });

            imgFolder.file(image.name, imageBlob, { binary: true });
          } catch (error) {
            console.error(`❌ Error processing image ${image.name}: ${error.message}`);
          }
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        mainZip.file(`${file.fileName}.zip`, zipBlob);
      }
    };

    await createIndividualZipFiles();

    const mainZipBlob = await mainZip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(mainZipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "all_files.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleTemplateChange = async (selected) => {
    setSelectedTemplate(selected); 
    setCSVFileAccess(true); 
    if (Allvariables[selected?.value]) {
      const joinedVars = Allvariables[selected?.value].join(", ");
      setTemplateVariables(joinedVars);
    } else {
      console.warn("Template not found in Allvariables");
    }

    console.log("template variables", templateVariables);
    const realValues = {
      color: "#FFFFFF"
    };

    const result = await htmlTemplatepreview({
      data: new Proxy({}, {
        get(target, prop) {
          if (realValues.hasOwnProperty(prop)) {
            return realValues[prop];
          }
          return `\${data.${prop}}`;
        }
      }),
      templateName: selected?.value
    });

    setHtmlData(result);
  };




  return (
    <div className={styles.dividerbox}>
      <div className={styles.main}>
        <div className={styles.main1}>
          <div className={styles.iblOffers}>HTML Generator</div>
          <div className={styles.HtmlTemplateSelector}>
            <HtmlTemplateSelector
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              handleTemplateChange={handleTemplateChange}
            />


            <div className={styles.csvInput} style={{ marginBottom: '20px' }}>
              <label style={{ marginBottom: '8px', display: 'block', textAlign: "start" }}>
                <strong>Upload CSV File</strong>
              </label>
              <input type="file" accept=".csv" onChange={handleCsvChange} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ marginBottom: '8px', display: 'block', textAlign: "start" }}>
                <strong>Upload Images</strong>
              </label>
              <input type="file" accept="image/*" webkitdirectory="true" onChange={handleImageUpload} />
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={!submitAccess}
            >
              Submit
            </button>

            {/* <div
              className={`${styles.submitBtn} ${!DownloadAccess ? styles.disabled : ''}`}
              onClick={DownloadAccess ? handleSubmit : undefined}
            >
              Submit
            </div> */}
            <button
              className={styles.downloadBtn}
              onClick={handleGenerateHtml}
              disabled={!DownloadAccess}
            >
              Generate
            </button>
            {/* <div className={styles.downloadBtn} onClick={handleGenerateHtml}>Generate</div> */}
          </div>
        </div>
      </div>

      <div className={styles.previewContainer}>
        <Htmlshowcasing />
      </div>
    </div>
  );
};
