import React, { useContext } from 'react'
import styles from "./HtmlShowcasing.module.css"
import { SharedContext } from '../contextapi/SharedContext';
export const Htmlshowcasing = () => {
    const { templateVariables, setTemplateVariables,HTMLData } = useContext(SharedContext);

    return (
        <div>
            <h4 style={{textAlign:"left",padding:"10px 0px 0px 25px",boxSizing:"border-box",margin:"0px"}}>Result</h4>
            <div>
                <h3 style={{margin:"0px"}}>Variables</h3>
                <p style={{padding:"10px 25px",margin:"0px"}}>{JSON.stringify(templateVariables)}</p>
            </div>

            <div className={styles.previewContainer}>
                <h3>HTML Preview:</h3>
                <div className={styles.previewBox} dangerouslySetInnerHTML={{ __html: HTMLData }} />
            </div>

        </div>
    )
}
