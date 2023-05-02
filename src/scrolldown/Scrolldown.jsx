import React, { useState } from 'react'
import Select from 'react-select';
import './Scrolldown.css'

const options = [
    { value: "India", label: "India" },
    { value: "China", label: "China" },
    { value: "USA", label: "USA" },
    { value: "Spain", label: "Spain" },
    { value: "Australia", label: "Australia" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "South Africa", label: "South Africa" },
    { value: "Singapore", label: "Singapore" },
    { value: "Germany", label: "Germany" },
    { value: "Poland", label: "Poland" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "England", label: "England" },
    { value: "Scotland", label: "Scotland" },
    { value: "Wales", label: "Wales" },
    { value: "Canada", label: "Canada" },
    { value: "Austria", label: "Austria" },
    { value: "Netherlands", label: "Netherlands" },

]

function Scrolldown() {

    const [selectedCountry, setSelectedCountry] = useState(null)

    const handleChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry)
    }

    return (
        <div className='selectOptions'>
            <Select 
            options={options} 
            value={selectedCountry} 
            onChange={handleChange} 
            isSearchable={true} 
            isClearable = {true}
            placeholder="Please select your country" />
        </div>
    )
}

export default Scrolldown