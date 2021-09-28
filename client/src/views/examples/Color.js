import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function Color() {
    const [color, setColor]= useState('#fff')
    const [showColorPicker, setShowColorPicker ] = useState(false)
    return (
        <div>
            <Button 
            className="btn-white"
            color="default"
            id="tooltip348236073"
            type="button"
            onClick={()=>setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'close' : 'pick'} 
            </Button>
            
            {showColorPicker && (
            <ChromePicker color={color}
            onChange={updateColor =>setColor(updateColor.hex)} />
           )}
          

            {/* <h1>{color}</h1> */}
        </div>
    )
}

export default Color
