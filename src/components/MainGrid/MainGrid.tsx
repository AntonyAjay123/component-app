import { useEffect, useState } from "react";
import { Container ,Row,Col} from "react-bootstrap";
import FactCard from "../Cards/Card";
import './maingrid.scss';
type props={
    getFacts:()=>any;
}
const MainGrid =  ({getFacts}:props)=>{
   // console.log("the fact is",getJoke().then((data:any)=>console.log(data)));
    const [facts,setFacts] = useState<string[]>([]);
    useEffect(()=>{
       ( async function () {
        setFacts(await getFacts())
        })()
    },[])
    
     console.log("facts are",facts.length)
    return (<Container className="main-grid" fluid>
        <Row>
            <Col xs={6}
            sm={6}
            md={2}
            lg={2}
            xl={2}>
        {facts.map((fact)=>{
            return <FactCard fact={fact}/>
        })}
        </Col>
        </Row>
    </Container>)
}

export default MainGrid;