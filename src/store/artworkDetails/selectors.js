export const selectArtworkDetails = state => state.artworkDetails

// export const minimumBid = () => 0

export const minimumBid = state => {
  return state.artworkDetails.minimumBid
}
