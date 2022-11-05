import React from 'react'

function sponsor() {
  return (
    <div className="row info-container w-full">
        <div className="col-12 col-md-4 col-lg-3 hidden-xs-down">
            <h1 className="info-heading">Türkiye’nin Seyahat Sitesi</h1>
            <div className="info-visitor-count">17.000.000+</div>
            <div className="info-visitors" aria-disabled="true">Aylık Ziyaretçi</div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 info-items">
            <div className="info-items-new">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="info-item">
                            <img src="/images/call-center-new.png" width="100px" height="101px" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="info-item">
                            <img src="/images/ticket-cancel-new.png" width="100px" height="99px" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="info-item">
                            <img src="/images/price-alert-new.png" width="100px" height="101px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 hidden-xs-down">
            <div className="promote-box circle-gradient-bg big">
                <div className="promote-text">
                    <p className="promote-text1">KLİŞE HEDİYELERDEN SIKILANLARA</p>
                    <p className="promote-text2">ENUYGUN HEDİYE KART</p>
                </div>
                <div className="promote-link">
                    <a href="https://www.enuygun.com/enuygun-hediye-kart/">HEMEN GÖNDER  <i className="ei-arrow-forward"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sponsor