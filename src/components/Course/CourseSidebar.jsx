import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";

const CourseSidebar = ({ title, categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([categories[0]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  return (
    <Accordion className="mb-3" activeIndex={0}>
      <AccordionTab header={title}>
        <div className="card flex">
          <div className="flex flex-column ">
            {categories.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center mb-2">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                  />
                  <label htmlFor={category.key} className="mr-2">
                    {"   " + category.name + " ( " + category.number + " )"}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  );
};
export default CourseSidebar;
