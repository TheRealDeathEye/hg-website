import Card from 'react-bootstrap/Card';

export default function Home(){
    return(
        <div align='center'>
        <div style={{maxWidth:700, margin:25}}>
            <br/><br/><br/>
            <h1>Howard & Goldstein LLC</h1>
            <br/><br/><br/>
            <Card>
                <Card.Text style={{margin:25}}>
                Howard and Goldstein LLC is a Missouri-based brick and mortar software startup operating around the clock to bring emerging technologies to the digital world. We have over 15 years of experience between all of our programmers.  Howard and Goldstein LLC is multifacility company with a focus on business to business application, big data, and engineering solutions. We are a goal oriented team  and when we start a project we finish it, no programming job is too big or too small here at Howard and Goldstein LLC.
                </Card.Text>
            </Card>
        </div>
        </div>
    );
}