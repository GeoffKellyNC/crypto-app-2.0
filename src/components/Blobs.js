import React from 'react'
import blobRO from '../assets/bg-blobRO.svg'
import blobBL from '../assets/bg-blobBL.svg'
import blobGR from '../assets/bg-blobGR.svg'
import styled from 'styled-components'

function Blobs() {
  return (
    <StyledBlobs>
        <img 
            src={blobRO} 
            alt="blob" 
            className="blob-1"
            />
        <img
            src={blobBL}
            alt="blob"
            className="blob-2"
            />
        <img
            src={blobGR}
            alt="blob"
            className="blob-3"
            />

    </StyledBlobs>
  )
}

export default Blobs


const StyledBlobs = styled.div`
  
    .blob-1 {
        position: fixed;
        top: 0;
        left: 0;
        width: 70em;
        height: auto;
        z-index: -1;
    }

    .blob-2 {
        position: fixed;
        top: 20%;
        right: 30%;
        width: 70em;
        height: auto;
        z-index: -1;
    }

    .blob-3 {
        position: fixed;
        top: 54%;
        right: -10%;
        width: 70em;
        height: auto;
        z-index: -1;
    }





`


