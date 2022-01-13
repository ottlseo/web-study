import React from "react";

function DoneList(props){
  var lists = [];
  var data = this.props.data; //id와 content로 구성
  var i=0;
  while(i<data.length){
    lists.push(<li key={data[i].id}>{data[i].content}</li>)
    i+=1;
  }
  return (
    <div>
          <h3>What I Done...</h3>
          <ol>
              {lists}
          </ol>
        </div>
   );
  }
  export default DoneList;