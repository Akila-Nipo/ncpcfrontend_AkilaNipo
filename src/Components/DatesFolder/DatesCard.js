
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
function DatesCard({ think }) {
    const [css, setCss] = useState({
        strategyWidth: 'strategyWidth',
        strategyDescription: 'strategyDescription'
    });

    const changeDes = () => {
        const updatedCss = {
            strategyWidth: css.strategyWidth === 'strategyWidth' ? 'choyonSirWidth' : 'strategyWidth',
            strategyDescription: css.strategyDescription === 'strategyDescription' ? 'strategyDescriptionShow' : 'strategyDescription'
        };
        setCss(updatedCss);
    };

    return (
       <Fragment>
           <Card className={css.strategyWidth} onClick={changeDes}>
               <Card.Body>
                   <Card.Title className="titleDates">15 February 2024</Card.Title>
                   <Card.Text>
                       <h5 className="subTitleDates mt-3">Registration Deadline</h5>
                       <h6 className='titleH6 p-1'>Details</h6>
                       <p className={css.strategyDescription}>Link: </p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default DatesCard;
