import React, {useState, useEffect} from 'react'
import './CodeInput.css'

const CodeInput = () => {
    const [width, setWidth] = useState(90)
    const [lastVal, setLastVal] = useState(0)

    // Height autosizing 
    const inputHeight = (element, defaultHeight) => {
        if (element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight - 20}px`;
        }
    }

    // Width autosizing
    // Algorithm to be modified (Current has few bugs)
    const inputWidth = (e) => {
        
        console.log("Text value:", e.target.value)
        const lineBreak = e.target.value.split("\n")
        console.log("Line Break Quantity:", lineBreak.length)
        const charLength = e.target.value.length - (lineBreak.length - 1) 
        console.log("Characters Length minus Enters", charLength)
        console.log("Last Value:", lastVal)
        if(charLength > lastVal) {
            e.target.style.width = `${width + ((charLength - lastVal)*10)}px`
            setWidth(width + ((charLength - lastVal)*10))
            console.log("Width Increased",  (width + ((charLength - lastVal)*10)))
                setLastVal(charLength)
            } else if (charLength < lastVal){
                if(width > 100){
                    e.target.style.width = `${width - ((lastVal - charLength)*10)}px`
                    setWidth(width - ((lastVal - charLength)*10))
                }
            console.log("Width Decreased",  (width - ((lastVal - charLength)*10)))
            setLastVal(e.target.value.length)
        }
        console.log("-----------------------------------------------")
        if (charLength > 6) {
            e.target.style.textAlign = "center"

        } else {
            e.target.style.textAlign = "left"
        }
    }
    
    
  return (
    <div className='wrapper'>
        <div className='code-input'>
            <textarea onChange={e => {
                inputHeight(e, "64px")
                inputWidth(e)
                }} />
        </div>
    </div>
  )
}

export default CodeInput