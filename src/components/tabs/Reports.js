import React, {useState} from 'react'
import ReportImg from '../../assets/imgs/Insurance_-Agent-_Service_VectorForFree- 1.png'
import ReportCard from '../card/ReportCard'
import Area2 from '../svgicons/Area2'
import Area3 from '../svgicons/Area3'

function Reports() {
  const [reports, setReports] = useState([
    {
      price: 1000,
      policy: 400,
      policyPercent: "40%",
      claim: 800,
      claimPercent: "90%",
    },
    {
      price: 2500,
      policy: 1100,
      policyPercent: "65%",
      claim: 1400,
      claimPercent: "80%",
    },
    {
      price: 2500,
      policy: 1100,
      policyPercent: "70%",
      claim: 1400,
      claimPercent: "85%",
    },
  ])
  return (
    <div className="reports">
      <div className="reports__top">
        <div className="reports__top--img">
          <img src={ReportImg} alt="report" />
        </div>
        <div className="area2">
        <Area2 width={"100%"}/>
        </div>
        <div className="area3">
          <Area3 width={"100%"}/>
        </div>

        <div className="reports-info">
        <div className="reports-info-top">
          <h2>20% safe On Your Account</h2>
        </div>
        <div className="reports-info-bottom">
          <div>NEWBIE20</div>
          <p>Copy Code</p>
        </div>
        </div>
      </div>

      <div className="reports_bottom">
        {reports.map((report, key)=>{
          return <ReportCard report={report}/>
        })}
        
      </div>
    </div>
  )
}

export default Reports