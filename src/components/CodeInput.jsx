import React, {useState} from 'react'
import './CodeInput.css'

const CodeInput = () => {
    // const [codeValue, setCodeValue] = useState("")
    // const [inputHeight, setinputHeight] = useState("156px")
    const [width, setWidth] = useState(100)
    const [length, setLength] = useState(15)

    const inputHeight = (element, defaultHeight) => {
        if (element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight}px`;
        }
    }

    // const inputWidth = (element, defaultWidth) => {
    //     if (element) {
    //         const target = element.target ? element.target : element;
    //         console.log("Client Width", width)
    //         // setWidth(width + 10)
    //         // target.style.width = `${width}px`;
            
    //         console.log("Length", length)
            
                // target.style.width = defaultWidth;
            
            
    //     }
    // }


    
    
  return (
    <div className='code-input'>
        <textarea onChange={e => {
            inputHeight(e, "100px")
            if (width < 680) {
                if(e.target.value.length > length) {
                    setLength(length + 5)
                    setWidth(width + 20)
                    e.target.style.width = `${width}px`
                }
            } 
            if (e.target.value.length < (length - 5)) {
                setLength(length - 5)
                setWidth(width - 20)
                e.target.style.width = `${width}px`
            }
                // setLength(e.target.value.length)
            // inputWidth(e, "90px")
            }} />
    </div>
  )
}

export default CodeInput