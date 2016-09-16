import React from 'react';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../widgets/NavLink';
import SubmissionData from '../submissions/SubmissionData';

const CheckpointView = (props) =>
<div>
  <div className="container">
    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">{props.checkpoint.title}</h4>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <ReactMarkdown source={ props.checkpoint.content } />
        </div>
      </div>
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">assignments</h4>
      </div>
      <div className="card-block">

        <div id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Submit Cool Stuff
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Submit GitHub
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">

            <span> please submit some stuff that you learned in this checkpoint. </span>
            <form className="form-inline">
              <div className="form-group">
                <label for="exampleInputName2">Name</label>
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail2">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
              </div>
              <button type="submit" className="btn btn-primary">Send invitation</button>
            </form>



            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  What did you learn?
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

              <SubmissionData user={props.user} cpId={props.checkpoint._id}/>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</div>;

CheckpointView.displayName = CheckpointView;
export default CheckpointView;
