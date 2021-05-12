import React, { useEffect } from "react"
import "./App.css"

import { Switch, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Loading from "./components/Loading"
import MessageBox from "./components/MessageBox"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

import Artworks from "./pages/Artworks"
import ArtworkDetails from "./pages/ArtworkDetails"
import Auction from "./pages/Auction"

import { useDispatch, useSelector } from "react-redux"
import { selectAppLoading } from "./store/appState/selectors"
import { getUserWithStoredToken } from "./store/user/actions"
import { Jumbotron } from "react-bootstrap"
import { selectIsArtist } from "./store/user/selectors"

import Groceries from "./pages/Groceries/index"



function App() {
  const artist = useSelector(selectIsArtist)
  const dispatch = useDispatch()
  const isLoading = useSelector(selectAppLoading)

  useEffect(() => {
    dispatch(getUserWithStoredToken())
  }, [dispatch])

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
                       <Route exact path="/" component={Artworks} />
        <Route path="/groceries" component={Groceries} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />

        {artist ? <Route path="/auction" component={Auction} /> : ""}
        <Route path="/artworks/:id" component={ArtworkDetails} />
      </Switch>
    </div>
  )
}

export default App
