export const selectArtworks = state => state.artworks.filter(e => e.bids.length === 0)

export const selectArtworksThatAreDone = state => state.artworks.filter(e => e.bids.length !== 0)
