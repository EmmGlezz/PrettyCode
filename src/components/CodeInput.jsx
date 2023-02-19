import React, {useState, useEffect} from 'react'
import './CodeInput.css'

const CodeInput = () => {
    // const [codeValue, setCodeValue] = useState("")
    // const [inputHeight, setinputHeight] = useState("156px")
    const [width, setWidth] = useState(90)
    // const [length, setLength] = useState(0)
    const [lastVal, setLastVal] = useState(0)

    const inputHeight = (element, defaultHeight) => {
        if (element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            // console.log(target.scrollHeight)
            target.style.height = `${target.scrollHeight - 20}px`;
        }
    }
    
    // const inputWidth = (currentLength) => {
        // if (width <= 680) {
        //     console.log("Target Value", target.value.length)
        //     if(target.value.length >= 6) {
        //         target.style.textAlign = 'center'
        //         setWidth(width + 10)
        //         target.style.width = `${width}px`
        //         // setLength(length + 1)
        //     } else if (target.value.length > 0) {
        //         target.style.textAlign = 'left'
        //         setWidth(width - 10)
        //         target.style.width = `${width}px`
        //     }
        // } 
        
        
        
    // }
    
    // useEffect(() => {
    //     const increase = () => {
    //         console.log('INCREASING')
    //         // target.style.textAlign = 'center'
    //         setWidth(width + 10)
    //     }
        
    //     const decrease = () => {
    //         console.log('DECREASING')
    //         // target.style.textAlign = 'left'
    //         setWidth(width - 10)
    //     }
        
    //     setVal(length)
    //     length < val ? decrease() : increase()
    //     console.log("val", length)
        
    // }, [length])
    
    // useEffect(() => {
    //     console.log("EFFECT", width)
    //     length < val ? width - 10 : width + 10
    // }, [width])

    // const testF = (e) => {
    //     console.log(e)
    // }

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
            // if(!()){
                
                // }
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
                // testF(e)
                
                // console.log(length)
                // console.log("E target Value", e.target.value.length)
                
                // if (e.target.value.length < length && e.target.value.length > 6) {
                //     setLength(length - 1)
                //     setWidth(width - 10)
                    
                //     e.target.style.width = `${width}px`
                    
                //     if (e.target.value.length < 6) {
                //         e.target.style.textAlign = 'left'
                //     }
                // }
                    // setLength(e.target.value.length)
                // inputWidth(e, "90px")
                }} />
        </div>
    </div>
  )
}

export default CodeInput