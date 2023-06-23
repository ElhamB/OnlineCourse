import React, { useState } from "react";
import { Accordion,AccordionTab } from 'primereact/accordion';
import { Checkbox } from 'primereact/checkbox';

const SideBar = ({title,categories}) =>{

    

    const [selectedCategories, setSelectedCategories] = useState([categories[0]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };


    



    return(
        <Accordion activeIndex={0}>
            <AccordionTab header={title}>
                <div className="card flex justify-content-center">
                    <div className="flex flex-column gap-3">
                        {categories.map((category) => {
                            return (
                                <div key={category.key} className="flex align-items-center">
                                    <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                                    <label htmlFor={category.key} className="ml-2">
                                        {"   " + category.name + " ( " + category.number + " )"}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AccordionTab>
        </Accordion>
    )
}
export default SideBar;