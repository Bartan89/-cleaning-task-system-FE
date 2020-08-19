import React from "react"
import Table from "react-bootstrap/Table"
//import Loading from "../Loading/index"

export default function Bids(props) {
  console.log(props.bids)

  return (
    <>
      <h1>Bids:</h1>
      <Table>
        <thead>
          <th>email</th>
          <th>Bid (€)</th>
        </thead>
        {props.bids &&
          props.bids.map(bid => {
            return (
              <tbody>
                <td>{bid.email}</td>
                <td>{bid.amount}</td>
              </tbody>
            )
          })}
      </Table>
    </>
  )
}
