import React from 'react'
import ReactMarkdown from 'react-markdown'

const ViewSubmissions = (props) => {
    if(props.subs && props.subs.length > 0){
      const subs = props.subs.map((item) => {
        console.log(item)
        const ap = item.approved
        return (
              <div key={item._id} className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h6 className="card-title pull-right"><span className="a-status pull-right"> {item.approved ? "approved" : "pending approval"} </span></h6>
                  <ReactMarkdown source={item.content} className="pull-left"/>
                </div>
              </div>
          )
      }).reverse();
      return (
        <div>
            { subs }
        </div>
        )
    } else {
      return (
          <div className="card card-block inner-checkpoint-cardblock">
            <h4 className="card-title">My Submissions</h4>

              <div className="">
                <div className="cardinner-checkpoint-cardblock">
                  <h5 className="card-title">nothing submitted yet for this checkpoint</h5>
                </div>
              </div>

          </div>
      );
    }
};

export default ViewSubmissions;
