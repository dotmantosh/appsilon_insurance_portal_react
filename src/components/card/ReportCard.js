import React from 'react'

function ReportCard({report}) {
  return (
    <div className="report-card">
      <h4 className='report-price'>{report.price} <span>$</span> </h4>
      <p className='report-description'>Total Value of Disbursement</p>
      
      <div className="policy">
        <div className="report-top-heading">
          <p className='report-head'>Policy</p>
          <p className='report-card-price'>{report.policy}<span className='dol-icon'>$</span></p>
        </div>

        <div className="policy-progress">
          <div className="policy-progress-inner" style={{width: report.policyPercent}}> </div>
        </div>
      </div>
      <div className="claim">
      <div className="report-top-heading">
          <p className='report-head'>Claim</p>
          <p className='report-card-price'>{report.claim}<span className='dol-icon'>$</span></p>
        </div>

        <div className="claim-progress">
          <div className="claim-progress-inner" style={{width: report.claimPercent}}> </div>
        </div>
      </div>
    </div>
  )
}

export default ReportCard