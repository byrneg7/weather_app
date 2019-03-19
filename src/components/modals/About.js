import React from 'react';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { off_switch } from '../../actions';
import AboutCard from './cards/AboutCard';

import cardStyle from './cardStyle';

const About = ({ about }) => {
    return (
        <div>
            <Popup
                open={about}
                closeOnDocumentClick
                onClose={off_switch}
                contentStyle={cardStyle}
            >
                    <AboutCard />
            </Popup>
        </div>
    )
}


function mapStateToProps(state) {
    return state.modals
}
export default connect(mapStateToProps)(About);
