import React from "react"
import Table from "react-bootstrap/Table"
//import Loading from "../Loading/index"
import { useSelector } from "react-redux"
import { selectToken } from "../../store/user/selectors"
import Badge from "react-bootstrap/Badge"
import './style.css'

import MakingABid from "./MakingABid"

export default function Bids(props) {
  console.log(props.bids)

  const token = useSelector(selectToken)

  return (
    <div className="sized">
        {props.bids &&
          props.bids.map(bid => {
            return (
              <>
                <h2>{bid.email} is taking up this task </h2>
                <h3><i>For {bid.amount} credits</i></h3>
              </>
            )
          })}

      {token ? (
        <MakingABid />
      ) : (
        <div>
          <p>
            <Badge variant="secondary"> ... Please log in</Badge>
          </p>
        </div>
      )}
    </div>
  )
}
