import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center fs-2">
          To create a ticket, select a relevent topic
        </h1>
        <div className='col mt-5 mb-5 p-5'>
            <h4><i class="fa fa-plus-circle" aria-hidden="true"></i> Account opening</h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Resident individual</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Minor</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Glossary</a><br/>

        </div>
        <div className='col mt-5 mb-5 p-5'>
            <h4><i class="fa fa-user" aria-hidden="true"></i> Your TradeNest account</h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your profile</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Nomination</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of securities</a><br/>

        </div>
        <div className='col mt-5 mb-5 p-5'>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> Funds</h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add money</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Withdraw money</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add bank account</a><br/>
            <a href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates</a><br/>

        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
