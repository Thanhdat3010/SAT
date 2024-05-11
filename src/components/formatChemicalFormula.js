import React from 'react';
import '../Chapter2/Chapter2cauhoi.css';

function formatChemicalFormula(formula) {
  const parts = formula.split(/(\d+)/g);
  return parts.map((part, index) => {
    if (!isNaN(part)) { // Kiểm tra xem phần tử có phải là số không
      return <span key={index} className="subscript">{part}</span>;
    }
    return part;
  });
}

export default formatChemicalFormula;