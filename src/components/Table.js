// React
import React from "react";

// local
import "../styles/table.scss";

export default function Table(props) {
  return (
    <div className="container-main-modal">
      <table>
        <thead>
          <th>Origem</th>
          <th>Destino</th>
          <th>$/minutos</th>
        </thead>
        {props.values &&
          props.values.map((item, index) => (
            <tbody key={index}>
              <th>{item.source}</th>
              <th>{item.destiny}</th>
              <th>{item.price}</th>
            </tbody>
          ))}
      </table>
    </div>
  );
}
