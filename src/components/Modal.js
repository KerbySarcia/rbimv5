import React, { useState } from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import Photo from '../images/person.svg'
import Signature from '../images/language.svg'
import ThumbR from '../images/finger-print.svg'
import ThumbL from '../images/finger-print.svg'

export default function Modal({ open, onClose }) {

  const [photo, setPhoto] = useState(null);
  const [sig, setSig] = useState(null);
  const [thumbL, setThumbL] = useState(null);
  const [thumbR, setThumbR] = useState(null);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {/* TODO: photo uploaded will reflect at html */}
      {/* TODO: fix the label being a button at photo upload */}
      <div className='overlay' />
      <div className='modal'>
        <button
          onClick={onClose}
          className='modal__close__btn'>
            &#10006;
        </button>
        <form>
          <div className='modal__upload__container'>
            <div className='modal__upload__input'>
              <div className="modal__img">{photo ? <img width={200} src={URL.createObjectURL(photo)} alt=""/> : <img src={Photo} alt='Interviewee'/>}</div>
              <label 
                className='modal__upload__label' 
                for='photo-upload'> Upload Photo</label>
              <input
                onChange = {(e) => setPhoto(e.target.files[0])}
                id ='photo-upload'
                type ='file'
                accept ='image'
                hidden />
            </div>
            <div className='modal__upload__input'>
              <div className="modal__img">{sig ? <img width={200} src={URL.createObjectURL(sig)} alt=""/> : <img src={Signature} alt='Interviewee'/>}</div>
              <label 
                className='modal__upload__label' 
                for='signature-upload'> Upload Signature</label>
              <input
                onChange = {(e) => setSig(e.target.files[0])}
                id='signature-upload'
                type='file'
                accept='image'
                hidden />
            </div>
            <div className='modal__upload__input'>
              <div className="modal__img">{thumbL ? <img width={200} src={URL.createObjectURL(thumbL)} alt=""/> : <img src={ThumbL} alt='Interviewee'/>}</div>
              <label 
                className='modal__upload__label' 
                for='left-thumb-upload'> Upload L-Thumb Mark</label>
              <input
                onChange = {(e) => setThumbL(e.target.files[0])}
                id='left-thumb-upload'
                type='file'
                accept='image'
                hidden />
            </div>
            <div className='modal__upload__input'>
              <div className="modal__img">{thumbR ? <img width={200} src={URL.createObjectURL(thumbR)} alt=""/> : <img src={ThumbR} alt='Interviewee'/>}</div>
              <label 
                className='modal__upload__label' 
                for='right-thumb-upload'> Upload R-Thumb Mark</label>
              <input
                onChange = {(e) => setThumbR(e.target.files[0])}
                id='right-thumb-upload'
                type='file'
                accept='image'
                hidden />
            </div>
          </div>
          <div className="modal__submit__btn">
            <button 
              className='modal__upload__label'
              name='upload-submit-btn'
              id='upload-submit-btn'>
              Upload
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}