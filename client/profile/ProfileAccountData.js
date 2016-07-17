import React from 'react';
import NavLink from '../widgets/NavLink'

class ProfileAccountData extends React.Component {
  render() {
    return (
        <div>
            <div className="row">
              <div className="col-md-3">
                <img src="http://www.tvchoicemagazine.co.uk/sites/default/files/imagecache/interview_image/intex/michael_emerson.png"/>
              </div>
              <div className="col-md-3">
                <ul className="profile-links"> <h5>User Info </h5>
                  <li>Douglas Walter</li>
                  <li>doug@kosmojo.com</li>
                  <li>Github: fresh5447</li>
                  <li>Linkedin: www.linkedIn.com </li>
                  <li>Twitter: www.twitter.com</li>
                </ul>
              </div>
            </div>
        </div>
    );
  }
}

ProfileAccountData.displayName = ProfileAccountData;
export default ProfileAccountData;
