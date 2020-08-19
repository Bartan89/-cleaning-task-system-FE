import React from "react"
import Table from "react-bootstrap/Table"
//import Loading from "../Loading/index"
import { useSelector } from "react-redux"
import { selectToken } from "../../store/user/selectors"
import Badge from "react-bootstrap/Badge"

import MakingABid from "./MakingABid"

export default function Bids(props) {
  console.log(props.bids)

  const token = useSelector(selectToken)

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
      {token ? (
        <MakingABid />
      ) : (
        <div>
          <p>
            <Badge variant="secondary">Want to bid? ... Please log in</Badge>
          </p>
        </div>
      )}
    </>
  )
}