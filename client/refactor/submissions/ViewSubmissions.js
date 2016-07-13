import React from 'react'
import ReactMarkdown from 'react-markdown'

const ViewSubmissions = (props) => {
    if(props.subs && props.subs.length > 0){
      const subs = props.subs.map((item) => {
        const ap = item.approved
        return (
              <div key={item._id} className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h6 className="card-title pull-right"><span className="a-status"> status </span></h6>
                  <ReactMarkdown source={item.content} />
                </div>
              </div>
          )
      }).reverse();
      return (
        <div className="card-block">
          <div className="card card-block inner-checkpoint-cardblock">
            <h4 className="card-title">My Submissions</h4>
            { subs }
          </div>
        </div>
        )
    } else {
      return (
        <div className="card-block">
          <div className="card card-block inner-checkpoint-cardblock">
            <h4 className="card-title">My Submissions</h4>

              <div className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h5 className="card-title">nothing submitted yet for this checkpoint</h5>
                </div>
              </div>

          </div>
        </div>
      );
    }
};

export default ViewSubmissions;
