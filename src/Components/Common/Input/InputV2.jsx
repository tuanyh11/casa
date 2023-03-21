import React from 'react'
import './input.css'

const InputV2 = ({label = "lable", type = "text", Symbol, Tag = "input", className, ...rest}) => {
    return (
        <div className='container-inputv2'>
          <Tag  type={type} className={` inputv2 h-[50px]  ${className || ''} px-4 border border-solid outline-none `} {...rest} />
          {Symbol  ? Symbol  : null}
        </div>
      )
}

export default InputV2