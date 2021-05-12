export const selectArtworks = state => state.artworks.filter(e => e.bids.length === 0)

export const selectArtworksThatAreDone = (name) => {
     if(!name || name === 'Show all') {
        return state => state.artworks.filter(e => e.bids.length !== 0)
    }


        return state => state.artworks.filter(e => e.bids.length !== 0  && e.bids[0].email === name)

}
