import React from 'react'
import { BiSortAlt2 } from "react-icons/bi";

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select onChange={e => setSort(e.target.value)} className='bg-white p-2 text-sm rounded' style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}>
            <option disabled value="">Seçiniz</option>
            <option value="inc">Fiyata Göre Artan</option>
            <option value="dec">Fiyata Göre Azalan</option>
        </select>
        {<BiSortAlt2 size={25} color='#7B68EE'/>}
    </div>
  )
}

export default Sorting