import React, { useState } from "react";

// onChange = event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio></radio>
//          = triggers a function every time the value of the input changes

function MyComponentOnChange() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(5);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function HandleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function HandlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={HandleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={HandlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="PayPal">PayPal</option>
        <option value="GooglePlay">GooglePlay</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="pickup"
          checked={shipping === "pickup"}
          onChange={handleShippingChange}
        />
        Pickup
      </label>

      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <label>
        <input
          type="radio"
          value="throwaway"
          checked={shipping === "throwaway"}
          onChange={handleShippingChange}
        />
        Thow away
      </label>
      <p>Delivery type: {shipping}</p>
    </div>
  );
}

export default MyComponentOnChange;
