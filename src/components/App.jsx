import React from 'react'
import Header from "../containers/HeaderContainer";
import Main from "../containers/MainContainer";
import Footer from "../containers/FooterContainer";
import Grid from '@material-ui/core/Grid';


const App = () => (
    <Grid>
        <Header/>
        <br/><br/>
        <Main/>
        <br/><br/>
        <Footer/>
    </Grid>
)

export default App
