import React from 'react';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { off_switch } from '../../actions';
import ContactCard from './cards//ContactCard';

import cardStyle from './cardStyle';

const Contact = ({ contact }) => {
  return (
    <div>
      <Popup
        open={contact}
        closeOnDocumentClick
        onClose={off_switch}
        contentStyle={cardStyle }
      >
          <ContactCard/>
      </Popup>
    </div>
  )
}


function mapStateToProps(state) {
  return state.modals
}
export default connect(mapStateToProps)(Contact);
