import Card from 'react-bootstrap/Card';
import './card.scss';
type props={
    fact:string
}
const FactCard = ({fact}:props)=>{
    return (<Card className="fact-card">
        <Card.Body>
            {fact}
        </Card.Body>
    </Card>)
}

export default FactCard;