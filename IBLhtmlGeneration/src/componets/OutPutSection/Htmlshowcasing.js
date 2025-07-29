import React, { useContext } from 'react'
import styles from "./HtmlShowcasing.module.css"
import { SharedContext } from '../contextapi/SharedContext';
import { Allvariables } from '../utils/constants';

export const Htmlshowcasing = () => {
    const { templateVariables, setTemplateVariables, HTMLData, CSVFileAccess,selectedTemplate } = useContext(SharedContext);

    const handleDownloadSubmit = () => {
        const selectedKey = selectedTemplate?.value;
        const templatekeys = Allvariables;
        const selectedTemplate1 = templatekeys[selectedKey];

        if (selectedTemplate1 && Array.isArray(selectedTemplate1)) {
            const csvContent = selectedTemplate1.join(",") + "\n";
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", `${selectedKey}_variables.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            console.error("Invalid template selection");
        }

    }
    return (
        <div>
            <h4 style={{ textAlign: "left", padding: "10px 0px 0px 25px", boxSizing: "border-box", margin: "0px" }}>Result</h4>
            <p>Note:- please if you want downloead file names you can add file name at last FileName</p>
            <div>
                <div>-----------------------------------------------------------------------------------</div>
                <div className={styles.csvbuttoncontainer}>
                    <h3 style={{ margin: "0px" }}>Variables</h3>
                    <button
                        className={styles.submitBtn}
                        onClick={()=>handleDownloadSubmit()}
                        disabled={!CSVFileAccess}
                    >
                        Download Sample CSV File
                    </button>
                </div>
                <p style={{ padding: "10px 25px", margin: "0px" }}>{JSON.stringify(templateVariables)}</p>
            </div>

            <div className={styles.previewContainer}>
                <h3>HTML Preview:</h3>
                <div className={styles.previewBox} dangerouslySetInnerHTML={{ __html: HTMLData }} />
            </div>

        </div>
    )
}
