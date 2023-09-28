import React, { useState } from 'react'
import RightTick from '../assets/RightTick'
import WrongTick from '../assets/WrongTick'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`
const Popup = ({ isOpen, onClose, onYesClick, onNoClick }) => {
  if (!isOpen) return null

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        <div style={{ display: 'flex' }}>
          <h6>Missing Prodcut</h6>
          <span onClick={onClose}>
            <WrongTick />
          </span>
        </div>
        <p>Is this urgent?</p>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={onNoClick}>No</button>
      </div>
    </div>
  )
}

const TickCrossToggle = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const handleYesClick = () => {
    closePopup()
    wrongUrgentClickHandler()
    console.log('Yes clicked')
  }

  const handleNoClick = () => {
    closePopup()
    wrongClickHandler()
    console.log('No clicked')
  }
  const [isApproved, setIsApproved] = useState(false)
  const [isMissing, setIsMissing] = useState(false)
  const [isUrgentMissing, setIsUrgentMissing] = useState(false)

  const rightClickHandler = () => {
    setIsMissing(false)
    setIsUrgentMissing(false)
    setIsApproved(!isApproved)
  }

  const wrongClickHandler = () => {
    setIsApproved(false)
    setIsUrgentMissing(false)
    setIsMissing(!isMissing)
  }

  const wrongUrgentClickHandler = () => {
    setIsApproved(false)
    setIsMissing(false)
    setIsUrgentMissing(!isUrgentMissing)
  }

  return (
    <Wrapper>
      {isApproved && (
        <div>
          <div>Approved</div>
        </div>
      )}
      {isMissing && (
        <div>
          <div>Missing</div>
        </div>
      )}
      {isUrgentMissing && (
        <div>
          <div>Urgent-Missing</div>
        </div>
      )}
      <div>
        <span onClick={rightClickHandler}>
          <RightTick />
        </span>
        <span onClick={openPopup}>
          <WrongTick />
        </span>
        {/* <button onClick={openPopup}>Open Popup</button> */}
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
        />
      </div>
    </Wrapper>
  )
}

export default TickCrossToggle
