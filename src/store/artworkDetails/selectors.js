export const selectArtworkDetails = state => state.artworkDetails

export const selectDidSomeoneBid = state => state.artworkDetails.bids?.length < 1

// export const minimumBid = () => 0

export const minimumBid = state => {
  return state.artworkDetails.minimumBid
}
