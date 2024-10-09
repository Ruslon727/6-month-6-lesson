import React from 'react'

function Button({title, type}) {
    return (
        <button type={type} className={`w-[134px] mx-auto block py-[13px] button-style text-white font-normal leading-[15px] text-[10px] rounded-[100px] `}>{title}</button>
    )
}
export default Button