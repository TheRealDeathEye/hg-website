import Card from 'react-bootstrap/Card';
import paul from '../imgs/paul.jpg';
import ty from '../imgs/ty.JPG';
import trevor from '../imgs/trevor.JPG';
import eric from '../imgs/eric.jpg';

export default function About(){
    return(
        <div align='center'>
        <div style={{maxWidth:700, margin:25}}>
            <h2>The Board of Executives for Howard and Goldstein are comprised of the true masterminds of the Midwest. The board of executives has an extremely in-depth and far-reaching skillset with everything from programming expertise to mobile home renovation, nothing is off the table.</h2>
            <br/><br/><br/>
            <div className='row' id='aboutCards'>
            <div className='col'>
            <Card>
                <Card.Img variant='top' src={paul} />
                <Card.Body>
                <Card.Title>Paul Fears</Card.Title>
                <Card.Text>
                Paul Fears is the lead software engineer and financial expert he has more than 8 years of programming experience, and once held the top project on hackernews, Alongside a healthy cryptocurrency portfolio his website is paulrfears.com.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='col'>
            <Card>
                <Card.Img variant='top' src={ty} />
                <Card.Body>
                <Card.Title>Ty Harden</Card.Title>
                <Card.Text>
                Ty Harden attends Missouri University of Science Technology earning dual majors in civil engineering and in architectural engineering. He is a cryptocurrency expert and enjoys making money in his free time. He handles all company correspondence.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='col'>
            <Card>
                <Card.Img variant='top' src={trevor} />
                <Card.Body>
                <Card.Title>Trevor Orr</Card.Title>
                <Card.Text>
                Trevor Orr attends Mizzou University and studies computer engineering while making and producing music on the side. He serves as the lead scientific advisor and assistant programmer, and is a cryptocurrency expert.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='col'>
            <Card>
                <Card.Img variant='top' src={eric} />
                <Card.Body>
                <Card.Title>Eric Taylor</Card.Title>
                <Card.Text>
                Eric Taylor is an expert mechanic, property manager, and mobile home remodeler. He can be described as a Jack-of-a-Trades.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/>
        </div>
    );
}