import { Container } from "react-bootstrap"
import { Header, LeftContainer, MainGrid } from "./components"
import './componentapp.scss';
import { getJoke } from "./services";
type props={
    getFacts:()=>any;
}
 const ComponentApp = ({getFacts}:props)=>{
return (<div>
    <Header/>
    <Container className="main-container">
        <LeftContainer/>
        <MainGrid getFacts={getFacts}/>
    </Container>
</div>)
}
export default ComponentApp;