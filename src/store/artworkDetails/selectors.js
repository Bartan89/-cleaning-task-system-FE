export const selectArtworkDetails = state => state.artworkDetails

export const minimumBid = state => {
  if (!state.artworkDetails.bids) {
    return []
  }

  const result = state.artworkDetails.bids.sort((a, b) => {
    return b.amount - a.amount
  })

  return result[0].amount + 1
}
