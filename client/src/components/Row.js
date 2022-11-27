import React from "react";

const Row = ({info}) => {
    if (info) {
        return <tbody>
          {info.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
              <td><a href={data.website}>{data.website}</a></td>
            </tr>
          ))}
        </tbody>
      }
}

export default Row;