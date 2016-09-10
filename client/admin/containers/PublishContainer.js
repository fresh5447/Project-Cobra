import React from 'react';
import NavLink from '../../widgets/NavLink';

const PublishContainer = (props) =>
      <div>
      <div className="page-header">
        <h6 className="">Publisher</h6>
      </div>
      <div className="container">

        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
            <ul>
              <li><NavLink to="/admin/publish/resource">resource</NavLink></li>
              <li><NavLink to="/admin/publish/course">course</NavLink></li>
            </ul>
          </div>
        </div>
          <div className="col-xs-12">
          {
            props.children || null
          }
          </div>

      </div>
      </div>;

export default PublishContainer;
