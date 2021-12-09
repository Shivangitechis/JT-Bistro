import React, { useState } from "react";
import Cross from "../../assets/img/cross1.svg";
import Reaction0 from "../../assets/img/reaction0.svg";
import Reaction1 from "../../assets/img/reaction1.svg";
import Reaction2 from "../../assets/img/reaction2.svg";
import Reaction3 from "../../assets/img/reaction3.svg";
import API from "../../API";

const api = new API();

const WriteReview = ({
  selectedItemId,
  setSelectedItemId,
  setShowWriteReview,
}) => {
  const [likeCount, setLikeCount] = useState(1),
    [name, setName] = useState(""),
    [body, setBody] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBody = (event) => {
    setBody(event.target.value);
  };

  const sendReviewButton = () => {
    api.writeReview(selectedItemId, name, body, likeCount).then((review) => {
      alert("Your review has been sent. Thank you for your review!");
      setName("");
      setBody("");
      setLikeCount(1);
      setSelectedItemId(null);
      setShowWriteReview(false);
    });
  };

  return (
    <section class="popup1">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img
              src={Cross}
              onClick={() => setShowWriteReview(false)}
              class="cross"
              alt=""
            />
            <h2>Write Review</h2>
            <p>Choose your thought</p>
            <ul class="reactions">
              <li>
                {likeCount === 1 ? (
                  <img
                    src={Reaction1}
                    class="selected"
                    onClick={() => setLikeCount(1)}
                    alt=""
                  />
                ) : (
                  <img src={Reaction1} onClick={() => setLikeCount(1)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 2 ? (
                  <img
                    src={Reaction2}
                    class="selected"
                    onClick={() => setLikeCount(2)}
                    alt=""
                  />
                ) : (
                  <img src={Reaction2} onClick={() => setLikeCount(2)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 3 ? (
                  <img
                    src={Reaction3}
                    class="selected"
                    onClick={() => setLikeCount(3)}
                    alt=""
                  />
                ) : (
                  <img src={Reaction3} onClick={() => setLikeCount(3)} alt="" />
                )}
              </li>
              <li>
                {likeCount === 0 ? (
                  <img
                    src={Reaction0}
                    class="selected"
                    onClick={() => setLikeCount(0)}
                    alt=""
                  />
                ) : (
                  <img src={Reaction0} onClick={() => setLikeCount(0)} alt="" />
                )}
              </li>
            </ul>
            <input
              onChange={inputName}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <textarea
              onChange={inputBody}
              name="body"
              placeholder="Enter your review"
              required
            ></textarea>
            <button onClick={sendReviewButton}>Send Review</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteReview;
