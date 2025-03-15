import { Container } from "@mui/material"
import { Divider } from "@mui/material"
// import HomePage from "./HomePgae";
import AppBar from "~/components/AppBar"
import JobSearchBar from "~/components/JobSearch"
import Employers from "~/components/Employers"
import JobHighlight from "~/components/ItJobs/index"
import UserReviews from "~/components/userReviewer/index"
import Banner from "~/components/Banner/index"
import Footer from "~/components/Footer/index"

function Home() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100%' ,backgroundColor: 'primary.second', gap: 3}}>
                <AppBar />
                <Divider sx={{borderColor: 'white'}}/>
                <JobSearchBar/>
                <Employers/>
                <JobHighlight />
                <UserReviews/>
                <Banner/>
                <Divider sx={{borderColor: 'white'}}/>
                <Footer/>
                {/* <HomePage/> */}
        </Container>
    )
}

export default Home
