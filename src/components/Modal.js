import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import Photo from "../images/person.svg";
import Signature from "../images/language.svg";
import ThumbR from "../images/finger-print.svg";
import ThumbL from "../images/finger-print.svg";
import { onChangeImage } from "../features/IndividualRecordInputs";
import { useDispatch, useSelector } from "react-redux";

export default function Modal({ open, onClose }) {
  const imageInfo = useSelector(
    (state) => state.individualRecord.imageInformation
  );

  const dispatch = useDispatch();

  const [images, setImages] = useState({
    photo: null,
    signature: null,
    leftThumbMark: null,
    rightThumbMark: null,
  });
  const [notImage, setNotImage] = useState({
    photo: false,
    signature: false,
    leftThumbMark: false,
    rightThumbMark: false,
  });

  useEffect(() => {
    setImages(imageInfo);
  }, [imageInfo]);

  const handleClick = (e) => {
    if (
      e.target.files[0].name.includes("jpeg") ||
      e.target.files[0].name.includes("png") ||
      e.target.files[0].name.includes("jpg")
    ) {
      dispatch(
        onChangeImage({
          name: e.target.name,
          value: e.target.files[0],
        })
      );
      setNotImage((prevValue) => ({
        ...prevValue,
        [e.target.name]: false,
      }));
    } else {
      setNotImage((prevValue) => ({
        ...prevValue,
        [e.target.name]: true,
      }));
      setImages((prevValue) => ({ ...prevValue, [e.target.name]: null }));
    }
  };

  // TODO: fix background scrolling bug
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="IndividualRecord__modal">
        <button
          onClick={onClose}
          className="IndividualRecord__modal__close__btn"
        >
          &#10006;
        </button>
        <form>
          <div className="IndividualRecord__modal__upload__container">
            <div className="IndividualRecord__modal__row">
              <div className="IndividualRecord__modal__upload__input">
                <div className="IndividualRecord__modal__img">
                  <h6
                    style={{
                      color: "red",
                      textAlign: "center",
                      visibility: notImage.photo ? "unset" : "hidden",
                    }}
                  >
                    This is not a photo
                  </h6>
                  {images.photo ? (
                    <img
                      width={200}
                      src={URL.createObjectURL(images.photo)}
                      alt=""
                    />
                  ) : (
                    <img src={Photo} alt="Interviewee" />
                  )}
                </div>
                <label
                  className="IndividualRecord__modal__upload__label"
                  for="photo-upload"
                >
                  Upload Photo
                </label>
                <input
                  onChange={(e) => handleClick(e)}
                  id="photo-upload"
                  type="file"
                  accept="image"
                  name="photo"
                  hidden
                />
              </div>
              <div className="IndividualRecord__modal__upload__input">
                <div className="IndividualRecord__modal__img">
                  <h6
                    style={{
                      color: "red",
                      textAlign: "center",
                      visibility: notImage.signature ? "unset" : "hidden",
                    }}
                  >
                    This is not a photo
                  </h6>
                  {images.signature ? (
                    <img
                      width={200}
                      src={URL.createObjectURL(images.signature)}
                      alt=""
                    />
                  ) : (
                    <img src={Signature} alt="Interviewee" />
                  )}
                </div>
                <label
                  className="IndividualRecord__modal__upload__label"
                  for="signature-upload"
                >
                  {" "}
                  Upload Signature
                </label>
                <input
                  onChange={(e) => handleClick(e)}
                  id="signature-upload"
                  type="file"
                  accept="image"
                  name="signature"
                  hidden
                />
              </div>
            </div>
            <div className="IndividualRecord__modal__row">
              <div className="IndividualRecord__modal__upload__input">
                <div className="IndividualRecord__modal__img">
                  <h6
                    style={{
                      color: "red",
                      textAlign: "center",
                      visibility: notImage.leftThumbMark ? "unset" : "hidden",
                    }}
                  >
                    This is not a photo
                  </h6>
                  {images.leftThumbMark ? (
                    <img
                      width={200}
                      src={URL.createObjectURL(images.leftThumbMark)}
                      alt=""
                    />
                  ) : (
                    <img src={ThumbL} alt="Interviewee" />
                  )}
                </div>
                <label
                  className="IndividualRecord__modal__upload__label"
                  for="left-thumb-upload"
                >
                  {" "}
                  Upload L-Thumb Mark
                </label>
                <input
                  onChange={(e) => handleClick(e)}
                  id="left-thumb-upload"
                  type="file"
                  accept="image"
                  name="leftThumbMark"
                  hidden
                />
              </div>
              <div className="IndividualRecord__modal__upload__input">
                <div className="IndividualRecord__modal__img">
                  <h6
                    style={{
                      color: "red",
                      textAlign: "center",
                      visibility: notImage.rightThumbMark ? "unset" : "hidden",
                    }}
                  >
                    This is not a photo
                  </h6>
                  {images.rightThumbMark ? (
                    <img
                      width={200}
                      src={URL.createObjectURL(images.rightThumbMark)}
                      alt=""
                    />
                  ) : (
                    <img src={ThumbR} alt="Interviewee" />
                  )}
                </div>
                <label
                  className="IndividualRecord__modal__upload__label"
                  for="right-thumb-upload"
                >
                  {" "}
                  Upload R-Thumb Mark
                </label>
                <input
                  onChange={(e) => handleClick(e)}
                  id="right-thumb-upload"
                  type="file"
                  accept="image"
                  name="rightThumbMark"
                  hidden
                />
              </div>
            </div>
          </div>
          <div className="IndividualRecord__modal__submit__btn">
            <button
              className="IndividualRecord__modal__upload__label"
              name="upload-submit-btn"
              id="upload-submit-btn"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
