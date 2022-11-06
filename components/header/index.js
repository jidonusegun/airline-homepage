import React from 'react'

export default function Header() {
  return (
    <header id="Header" className="header">
      <nav className="navbar-actions">
          <div className="container">
            <button id="NavbarToggler" className="navbar-toggler " type="button" aria-label="Authenticate">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            </button>
            <a href="/" class="navbar-brand" aria-label="Homepage">    
              <img src="/images/footer-logo.svg" />
            </a>
            
            <div className="navbar-label">
                <span>Kurumsal</span>
            </div>
            <div className="navbar-nav hidden-sm-down">
                <a className="nav-link" href="https://www.enuygun.com/ucak-bileti/">Uçak Bileti</a>
                <a className="nav-link" href="https://www.enuygun.com/otobus-bileti/">Otobüs Bileti</a>
                <a className="nav-link" href="https://www.enuygun.com/otel/">Otel</a>
                <a className="nav-link" href="https://www.enuygun.com/arac-kiralama/">Araç Kiralama</a>
                <ul className="navbar-nav hidden-sm-down ml-auto">
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle no-angle no-hover" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Tümü">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot">
                      </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left dropdown-menu-flight">
                        <a className="dropdown-item" href="https://www.enuygun.com/kredi-karti-puanlari/">
                            <div className="dropdown-item-content">
                              <span>Kart Puanlarını Aktar</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygunsigorta.com/">
                            <div className="dropdown-item-content new-bage-area">
                              <span>Sigorta</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/ucak-bileti/vize/">
                            <div className="dropdown-item-content new-bage-area-visa">
                              <span>Vize</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/enuygun-hediye-kart/">
                            <div className="dropdown-item-content">
                              <span>Hediye Kart</span>
                            </div>
                        </a>
                        <a className="dropdown-item dropdown-item-divider" href="https://www.enuygun.com/ucak-bileti/gezgin/">
                            <div className="dropdown-item-content">
                              <span>Gezgin</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/kredi/">
                            <div className="dropdown-item-content">
                              <span>Kredi</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/mevduat/">
                            <div className="dropdown-item-content">
                              <span>Mevduat</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/internet-baglantilari/">
                            <div className="dropdown-item-content">
                              <span>İnternet</span>
                            </div>
                        </a>
                        <a className="dropdown-item dropdown-item-divider" href="https://www.enuygun.com/gsm/">
                            <div className="dropdown-item-content">
                              <span>GSM</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/bilgi/">
                            <div className="dropdown-item-content">
                              <span>Bilgi</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/iletisim/">
                            <div className="dropdown-item-content">
                              <span>İletişim</span>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://www.enuygun.com/yardim/">
                            <div className="dropdown-item-content">
                              <span>Yardım</span>
                            </div>
                        </a>
                      </div>
                  </li>
                </ul>
            </div>
            <div className="navbar-nav ml-auto hidden-sm-down">
            </div>
            <div id="register-header-wrapper">
                <a className="nav-link is-visible" id="register-header" href="#" data-trigger="membership-dialog" data-dialog-type="register">
                Üye ol
                </a>
            </div>
            <div id="notification-wrapper" className="mdc-menu-anchor notification-wrapper d-flex">
                <div title="Notification" className="navbar-notification no-hover d-flex align-items-center" style={{height: "100%"}}>
                  <img src="/images/notification.svg" />
                  <div className="notification-counter hidden">
                  </div>
                </div>
                <div id="notification-menu" className="mdc-simple-menu notification-menu" style={{position: "absolute"}} tabindex="-1">
                  <ul className="mdc-simple-menu__items mdc-list notification-ul p-0" role="menu" aria-hidden="true">
                      <li className="mdc-list-item" role="menuitem" tabindex="-1">
                        <div className="message-head-line">
                            <span>Bildirimler</span>
                        </div>
                      </li>
                  </ul>
                </div>
            </div>
            <div className="navbar-divider">
            </div>
            <div className="navbar-nav">
                <a className="nav-link dropdown-toggle" href="#ModalCurrencyLocale" data-toggle="modal" title="Currency Locale">
                <span><img src="/images/moon-star.png" className='rounded-full' width="20px" height="40px" />
                </span>
                </a>
            </div>
            <div className="navbar-divider"></div>
            <div className="NavbarAuth navbar-nav">
                <a className="ctx-top-page ctx-login-btn nav-link " href="#" id="ctx-LoginBtn" data-trigger="membership-dialog" data-dialog-type="login">Giriş Yap</a>
                <a className="ctx-top-page ctx-register-btn nav-link" href="#" id="ctx-RegisterBtn" data-trigger="membership-dialog" data-dialog-type="register">Üye Ol</a>
            </div>
            <div className="NavbarUser navbar-nav dropdown hidden-xs-up">
                <a className="nav-link dropdown-toggle d-flex align-items-center px-3 py-0 mt-1" href="https://www.enuygun.com/uyelik/profile/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="navbar-avatar NavbarAvatar">H</span>
                <span className="navbar-content">
                <span className="align-middle NavbarUsername">Hesabım</span>
                </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" data-fill="true">
                  <a className="dropdown-item" href="/uyelik/profil/">
                      <div className="dropdown-item-icon"><i className="ei-account-circle"></i></div>
                      <div className="dropdown-item-content">
                        <span>Profilim</span>
                      </div>
                  </a>
                  <a className="dropdown-item katalon__navbar--travels" href="/uyelik/seyahatler/">
                      <div className="dropdown-item-icon">
                        <img src="/images/moon.svg" />
                      </div>
                      <div className="dropdown-item-content">
                        <span>Seyahatlerim</span>
                      </div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/yolcular/">
                      <div className="dropdown-item-icon">
                        <i className="ei-people"></i>
                      </div>
                      <div className="dropdown-item-content">
                        <span>Yolcularım</span>
                      </div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/gecmis-aramalar/">
                      <div className="dropdown-item-icon">
                        <i className="ei-next-day"></i>
                      </div>
                      <div className="dropdown-item-content">
                        <span>Aramalarım</span>
                      </div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/islemler/">
                      <div className="dropdown-item-icon">
                        <i className="ei-list"></i>
                      </div>
                      <div className="dropdown-item-content">
                        <span>Rezervasyonlarım</span>
                      </div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/fiyat-alarmi/">
                      <div className="dropdown-item-icon">
                        <i className="ei-ic_alarm_black"></i>
                      </div>
                      <div className="dropdown-item-content">
                        <span>Fiyat Alarmlarım</span>
                      </div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/favorilerim/">
                      <div className="dropdown-item-icon">
                        <img src="/images/favorilerim.svg" />
                      </div>
                      <div className="dropdown-item-content"><span>Favorilerim</span></div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/kayitli-kartlar/">
                      <div className="dropdown-item-icon"><i className="ei-credit-card"></i></div>
                      <div className="dropdown-item-content"><span>Kayıtlı Kartlarım</span></div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/encuzdanim/">
                      <div className="dropdown-item-icon"><i className="ei-deposit"></i></div>
                      <div className="dropdown-item-content"><span>ENCüzdanım</span></div>
                  </a>
                  <a className="dropdown-item" href="/uyelik/fatura-bilgileri/">
                      <div className="dropdown-item-icon"><i className="ei-invoice"></i></div>
                      <div className="dropdown-item-content"><span>Fatura Bilgilerim</span></div>
                  </a>
                  <a className="dropdown-item" href="/ucak-bileti/grup-bilet-talebi/">
                      <div className="dropdown-item-icon">
                        <img src="/images/kayitli.svg" />
                      </div>
                      <div className="dropdown-item-content"><span>Grup Teklifi Al</span></div>
                  </a>
                  <a className="dropdown-item px-0" href="#" data-inserted="true" data-switch="corporate-state"></a><a className="dropdown-item" href="/uyelik/kurumsal/" data-inserted="true" data-switch="corporate-register"></a>
                  <div className="menu-divider"></div>
                  <a className="dropdown-item" href="/uyelik/member/logout">
                      <div className="dropdown-item-icon"><i className="ei-highlight-off"></i></div>
                      <div className="dropdown-item-content"><span>Çıkış</span></div>
                  </a>
                </div>
            </div>
          </div>
      </nav>
      <nav id="NavbarCollapse" className="navbar-collapse">
          <div className="container">
            <ul className="navbar-nav hidden-md-up">
                <li className="NavbarAuth nav-item">
                  <a className="nav-link" href="#" data-trigger="membership-dialog" data-dialog-type="login">
                      <div className="nav-link-icon"><i className="ei-account-circle"></i></div>
                      <div className="nav-link-content"><strong>Giriş Yap / Üye Ol</strong><i className="ei-chevron-right"></i></div>
                  </a>
                  <div id="MobileMenuUserLogout" className="collapse show" role="tablist" aria-expanded="true">
                      <ul className="navbar-nav" data-fill="true" role="tab">
                        <li className="nav-item">
                            <a className="nav-link" href="#MobileProfileLogout" data-toggle="collapse" aria-expanded="false" aria-controls="MobileProfileLogout">
                              <div className="nav-link-icon"><i className="ei-account-circle"></i></div>
                              <div className="nav-link-content"><span onclick="window.location.href='/uyelik/profil/'">Profilim</span><i className="ei-expand-more"></i></div>
                            </a>
                            <div id="MobileProfileLogout" className="collapse " aria-expanded="false">
                              <ul className="navbar-nav" style={{marginLeft: "30px"}}>
                                  <li className="nav-item">
                                    <a className="nav-link katalon__navbar--passenger" href="/uyelik/seyahatler/">
                                        <div className="nav-link-icon">
                                          <img src="/images/grup.svg" />
                                        </div>
                                        <div className="nav-link-content"><span>Seyahatlerim</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/yolcular/">
                                        <div className="nav-link-icon"><i className="ei-people"></i></div>
                                        <div className="nav-link-content"><span>Yolcularım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/fiyat-alarmi/">
                                        <div className="nav-link-icon"><i className="ei-ic_alarm_black"></i></div>
                                        <div className="nav-link-content"><span>Fiyat Alarmlarım</span></div>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="nav-link" href="/uyelik/favorilerim/">
                                        <div className="nav-link-icon">
                                          <img src="/images/yolcular.svg" />
                                        </div>
                                        <div className="nav-link-content"><span>Favorilerim</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/kayitli-kartlar/">
                                        <div className="nav-link-icon"><i className="ei-credit-card"></i></div>
                                        <div className="nav-link-content"><span>Kayıtlı Kartlarım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/encuzdanim/">
                                        <div className="nav-link-icon"><i className="ei-deposit"></i></div>
                                        <div className="nav-link-content"><span>ENCüzdanım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/fatura-bilgileri/">
                                        <div className="nav-link-icon"><i className="ei-invoice"></i></div>
                                        <div className="nav-link-content"><span>Fatura Bilgilerim</span></div>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/uyelik/gecmis-aramalar/">
                              <div className="nav-link-icon"><i className="ei-next-day"></i></div>
                              <div className="nav-link-content"><span>Aramalarım</span></div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/uyelik/islemler/">
                              <div className="nav-link-icon"><i className="ei-list"></i></div>
                              <div className="nav-link-content"><span>Rezervasyonlarım</span></div>
                            </a>
                        </li>
                        <li className="nav-item corporate-register-button">
                            <a className="nav-link" href="/uyelik/kurumsal/kayit/">
                              <div className="nav-link-icon"><i className="ei-business-bag" style={{color: "#021141"}}></i></div>
                              <div className="nav-link-content"><span style={{color: "#021141"}}>Kurumsal Üye Ol</span><i className="ei-chevron-right" style={{color: "#021141"}}></i></div>
                            </a>
                        </li>
                        <li className="nav-item" data-inserted="true" data-switch="corporate-state"></li>
                        <li className="nav-item" data-inserted="true" data-switch="corporate-register"></li>
                      </ul>
                  </div>
                </li>
                <li className="NavbarUser nav-item hidden-xs-up">
                  <a className="nav-link" href="#MobileMenuUser" data-toggle="collapse" aria-expanded="true" aria-controls="MobileMenuUser">
                      <div className="nav-link-icon"><span className="navbar-avatar NavbarAvatar">H</span></div>
                      <div className="nav-link-content"><strong className="NavbarUsername">Hesabım</strong><i className="ei-expand-more"></i></div>
                  </a>
                  <div id="MobileMenuUser" className="collapse show" aria-expanded="true">
                      <ul className="navbar-nav" data-fill="true">
                        <li className="nav-item">
                            <a className="nav-link" href="#MobileProfile" data-toggle="collapse" aria-expanded="false" aria-controls="MobileProfile">
                              <div className="nav-link-icon"><i className="ei-account-circle"></i></div>
                              <div className="nav-link-content"><span onclick="window.location.href='/uyelik/profil/'">Profilim</span><i className="ei-expand-more"></i></div>
                            </a>
                            <div id="MobileProfile" className="collapse " aria-expanded="false">
                              <ul className="navbar-nav" style={{marginLeft: "30px"}}>
                                  <li className="nav-item">
                                    <a className="nav-link katalon__navbar--passenges" href="/uyelik/seyahatler/">
                                        <div className="nav-link-icon">
                                          <img src="/images/hesabım.svg" />
                                        </div>
                                        <div className="nav-link-content"><span>Seyahatlerim</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/yolcular/">
                                        <div className="nav-link-icon"><i className="ei-people"></i></div>
                                        <div className="nav-link-content"><span>Yolcularım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/fiyat-alarmi/">
                                        <div className="nav-link-icon"><i className="ei-ic_alarm_black"></i></div>
                                        <div className="nav-link-content"><span>Fiyat Alarmlarım</span></div>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="nav-link" href="/uyelik/favorilerim/">
                                        <div className="nav-link-icon">
                                          <img src="/images/yolcular.svg" />
                                        </div>
                                        <div className="nav-link-content"><span>Favorilerim</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/kayitli-kartlar/">
                                        <div className="nav-link-icon"><i className="ei-credit-card"></i></div>
                                        <div className="nav-link-content"><span>Kayıtlı Kartlarım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/encuzdanim/">
                                        <div className="nav-link-icon"><i className="ei-deposit"></i></div>
                                        <div className="nav-link-content"><span>ENCüzdanım</span></div>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/uyelik/fatura-bilgileri/">
                                        <div className="nav-link-icon"><i className="ei-invoice"></i></div>
                                        <div className="nav-link-content"><span>Fatura Bilgilerim</span></div>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/uyelik/gecmis-aramalar/">
                              <div className="nav-link-icon"><i className="ei-next-day"></i></div>
                              <div className="nav-link-content"><span>Aramalarım</span></div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/uyelik/islemler/">
                              <div className="nav-link-icon"><i className="ei-list"></i></div>
                              <div className="nav-link-content"><span>Rezervasyonlarım</span></div>
                            </a>
                        </li>
                        <li className="nav-item" data-inserted="true" data-switch="corporate-state"></li>
                        <li className="nav-item" data-inserted="true" data-switch="corporate-register"></li>
                      </ul>
                  </div>
                </li>
            </ul>
          </div>
      </nav>
      {/* <aside id="ModalNotificationMDC" className="mdc-dialog notification-dialog" role="alertdialog" aria-labelledby="ModalNotificationMDC-label" aria-describedby="ModalNotificationMDC-description">
          <div className="mdc-dialog__surface dialog-sm">
            <section className="mdc-dialog__body p-0 m-0" style={{overflowX: "auto", overflowY: "scroll"}}>
                <ul className="notification-ul p-0" role="menu" aria-hidden="true">
                  <li className="mdc-list-item notification-item p-2" role="menuitem" tabindex="-1">
                      <div className="message-envelope">
                        <div className="message-header"><i className="notification-back ei-graphic_right mr-2"></i><span>Bildirimler</span></div>
                      </div>
                  </li>
                </ul>
            </section>
          </div>
          <div className="mdc-dialog__backdrop"></div>
      </aside> */}
    </header>
  )
}
