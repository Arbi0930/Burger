import React from "react";
import Button from "../general/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Захиалга</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.orts).map((el) => (
          <li key={el}>
            {props.name[el]} : {props.orts[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн : {props.price}₮</strong>
      </p>
      <p>Цааш үргэжлүүлэх үү</p>
      <Button btnType="Danger" text="Татгалзах" clicked={props.onCancel} />
      <Button btnType="Success" text="үргэжлүүлэх" clicked={props.onContinue} />
    </div>
  );
};

export default OrderSummary;
