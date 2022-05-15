import { useState, useCallback, useRef } from "react";
import './imgbox.css'

function ImgBox({imgt1, imgt2, imgt3, imgt4, title}) {

    const [hoverRef, isHovered] = useHover();


  return (
    <div className='productCardContainer'>

        <div className='img__container' >

          <div className='img__store'>
            <ul>

              <li  ref={hoverRef} >
              <span>
              <img src={imgt1} alt="" />
              </span>
              </li>

              <li>
              <span>
              <img src={imgt2} alt=""  />
              </span>
              </li>

              <li>
              <span>
              <img src={imgt3} alt=""  />
              </span>
              </li>

              <li>
              <span>
              <img src={imgt4} alt=""  />
              </span>
              </li>


            </ul>
          </div>
        </div>
      




          <div className='img__Maindisplay'> 
          
          <div >
            {isHovered ? '😁' : '☹️'}

            {isHovered ? (<img src='' alt="" />)  : ''}
          </div>
          
          
          
          
          </div>

    </div>
  )
}

export default ImgBox



function useHover() {
    const [value, setValue] = useState(false);
      
    // Wrap in useCallback so we can use in dependencies below
    const handleMouseOver = useCallback(() => setValue(true), []);
    const handleMouseOut = useCallback(() => setValue(false), []);
  
    // Keep track of the last node passed to callbackRef
    // so we can remove its event listeners.
    const ref = useRef();
    
    // Use a callback ref instead of useEffect so that event listeners
    // get changed in the case that the returned ref gets added to
    // a different element later. With useEffect, changes to ref.current
    // wouldn't cause a rerender and thus the effect would run again.
    const callbackRef = useCallback(
      node => {
        if (ref.current) {
          ref.current.removeEventListener("mouseover", handleMouseOver);
          ref.current.removeEventListener("mouseout", handleMouseOut);
        }
  
        ref.current = node;
  
        if (ref.current) {
          ref.current.addEventListener("mouseover", handleMouseOver);
          ref.current.addEventListener("mouseout", handleMouseOut);
        }
      },
      [handleMouseOver, handleMouseOut]
    );
  
    return [callbackRef, value];
  }