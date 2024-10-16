import React from 'react'

function Button({children, onClick, type, extraStyle}) {
    return (
        <button onClick={onClick} type={type} className={`w-[134px] duration-300 mx-auto block py-[13px] button-style text-white font-normal leading-[15px] text-[10px] rounded-[100px] ${extraStyle} `}>{children}</button>
    )
}
export default Button