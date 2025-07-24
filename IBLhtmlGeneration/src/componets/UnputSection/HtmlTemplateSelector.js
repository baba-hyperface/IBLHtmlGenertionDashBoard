import React, { useState } from 'react';
import Select from 'react-select';
import { htmlTemplates } from '../utils/htmlTemplates';
import style from "./HtmlTemplateSelector.module.css";

const HtmlTemplateSelector = ({selectedTemplate,setSelectedTemplate}) => {
//   const [selectedTemplate, setSelected] = useState(null);

  return (
    <div style={{ width: '100%', }} className={style.main}>
      <label style={{ marginBottom: '8px', display: 'block',textAlign:"start" }}>
        <strong>Choose an HTML Template</strong>
      </label>
      <Select
        options={htmlTemplates}
        onChange={setSelectedTemplate}
        placeholder="Select an option"
      />
    </div>
  );
};

export default HtmlTemplateSelector;
