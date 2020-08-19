export const selectArtworkDetails = state => state.artworkDetails

// export const minimumBid = () => 0

export const minimumBid = state => {
  console.log("what is this?", state.artworkDetails.minimumBid)
  if (state.artworkDetails.bids === undefined) {
    return state.artworkDetails.minimumBid
  }

  if (state.artworkDetails.bids === []) {
    return state.artworkDetails.minimumBid
  }

  if (state.artworkDetails.bids.length < 1) {
    return state.artworkDetails.minimumBid
  }

  console.log(state.artworkDetails.bids)

  const result = state.artworkDetails.bids.sort((a, b) => {
    return b.amount - a.amount
  })

  return result[0].amount + 1
}
