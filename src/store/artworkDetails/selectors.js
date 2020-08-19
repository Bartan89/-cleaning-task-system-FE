export const selectArtworkDetails = state => state.artworkDetails

// export const minimumBid = () => 0

export const minimumBid = state => {
  if (state.artworkDetails.bids === undefined) {
    return 0
  }

  if (state.artworkDetails.bids === []) {
    return 0
  }

  if (state.artworkDetails.bids.length < 1) {
    return 0
  }

  console.log(state.artworkDetails.bids)

  const result = state.artworkDetails.bids.sort((a, b) => {
    return b.amount - a.amount
  })

  return result[0].amount + 1
}
