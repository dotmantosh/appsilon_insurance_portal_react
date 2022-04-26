import React from 'react'
import ReportImg from '../../assets/imgs/Insurance_-Agent-_Service_VectorForFree- 1.png'
import Area2 from '../svgicons/Area2'
import Area3 from '../svgicons/Area3'
function Reports() {
  return (
    <div className="reports">
      <div className="reports__top">
        <img src={ReportImg} alt="report" />
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
        <div className="report-card">
          <h4 className='report-price'>1000 <span>$</span> </h4>
          <p className='report-description'>Total Value of Disbursement</p>
          
          <div className="policy">
            <div className="report-top-heading">
              <p className='report-head'>Policy</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="policy-progress">
              <div className="policy-progress-inner"> </div>
            </div>
          </div>
          <div className="claim">
          <div className="report-top-heading">
              <p className='report-head'>Claim</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="claim-progress">
              <div className="claim-progress-inner"> </div>
            </div>
          </div>
        </div>
        <div className="report-card">
          <h4 className='report-price'>1000 <span>$</span> </h4>
          <p className='report-description'>Total Value of Disbursement</p>
          
          <div className="policy">
            <div className="report-top-heading">
              <p className='report-head'>Policy</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="policy-progress">
              <div className="policy-progress-inner"> </div>
            </div>
          </div>
          <div className="claim">
          <div className="report-top-heading">
              <p className='report-head'>Claim</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="claim-progress">
              <div className="claim-progress-inner"> </div>
            </div>
          </div>
        </div>
        <div className="report-card">
          <h4 className='report-price'>1000 <span>$</span> </h4>
          <p className='report-description'>Total Value of Disbursement</p>
          
          <div className="policy">
            <div className="report-top-heading">
              <p className='report-head'>Policy</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="policy-progress">
              <div className="policy-progress-inner"> </div>
            </div>
          </div>
          <div className="claim">
          <div className="report-top-heading">
              <p className='report-head'>Claim</p>
              <p className='report-card-price'>1000<span className='dol-icon'>$</span></p>
            </div>

            <div className="claim-progress">
              <div className="claim-progress-inner"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports