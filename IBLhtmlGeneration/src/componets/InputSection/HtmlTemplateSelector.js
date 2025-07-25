import React from 'react';
import Select from 'react-select';
import { htmlTemplates } from '../utils/htmlTemplates';
import style from "./HtmlTemplateSelector.module.css";

const HtmlTemplateSelector = ({ selectedTemplate, setSelectedTemplate, handleTemplateChange }) => {
  return (
    <div style={{ width: '100%' }} className={style.main}>
      <label style={{ marginBottom: '8px', display: 'block', textAlign: "start" }}>
        <strong>Choose an HTML Template</strong>
      </label>
      <Select
        options={htmlTemplates}
        value={selectedTemplate}
        onChange={(selectedOption) => {
          setSelectedTemplate(selectedOption);
          handleTemplateChange(selectedOption);
        }}
        placeholder="Select an option"
      />
    </div>
  );
};

export default HtmlTemplateSelector;
