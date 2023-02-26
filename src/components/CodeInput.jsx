import React, {useState, useEffect} from 'react'
import './CodeInput.css'

const CodeInput = () => {
    const [width, setWidth] = useState(90)

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
        // Separate each line in a div
        // Keep length of all divs saved
        // Keep maximum length of a div saved
        // Don't grow textarea width if the div is not the one with the longest value
        // If the div with the longest value shortens, reduce textarea width till another div is bigger

        let currentEntersNum = e.nativeEvent.data === null ? 0 : e.nativeEvent.data.split('\n').length - 1;
        if(true) {
            // Grow textarea from pasting content
            if(e.nativeEvent.inputType === 'insertFromPaste' && !(e.nativeEvent.data === null) && e.nativeEvent.data.includes('\n')){
                for(let i=0; i < currentEntersNum; i++){
                    console.log(e)
                }
                console.log('-----------------------------')
            }
            
            // Deleted characters
            if(e.nativeEvent.inputType === 'deleteContentBackward') {
                console.log('deleted an enter')
            }
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








// console.log("Text value:", e.target.value)
//         const lineBreak = e.target.value.split("\n")
//         console.log("Line Break Quantity:", lineBreak.length)
//         const charLength = e.target.value.length - (lineBreak.length - 1) 
//         console.log("Characters Length minus Enters", charLength)
//         console.log("Last Value:", lastVal)
//         if(charLength > lastVal) {
//             e.target.style.width = `${width + ((charLength - lastVal)*10)}px`
//             setWidth(width + ((charLength - lastVal)*10))
//             console.log("Width Increased",  (width + ((charLength - lastVal)*10)))
//                 setLastVal(charLength)
//             } else if (charLength < lastVal){
//                 if(width > 100){
//                     e.target.style.width = `${width - ((lastVal - charLength)*10)}px`
//                     setWidth(width - ((lastVal - charLength)*10))
//                 }
//             console.log("Width Decreased",  (width - ((lastVal - charLength)*10)))
//             setLastVal(e.target.value.length)
//         }
//         console.log("-----------------------------------------------")
//         if (charLength > 6) {
//             e.target.style.textAlign = "center"

//         } else {
//             e.target.style.textAlign = "left"
//         }