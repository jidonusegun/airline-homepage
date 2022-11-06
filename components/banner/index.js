import React from 'react'

export default function index() {
  return (
    <div className="container">
        <div className="row">
            <div className="overlay"></div>
            <div className="col-12 col-lg-12">
                <h1 className="flight-landing-h1">&nbsp;</h1>
                <div className="row">
                    <div className="col-12 col-lg-6 form-area">
                        <div className="tab-container">
                            <ul className="nav nav-tabs" id="jumbotron-tab" role="tablist">
                                <li className="nav-item" role="tab" aria-controls="flight-form" aria-disabled="false" aria-selected="true">
                                    <a className="nav-link active" id="flight-from-tab" data-toggle="tab" href="#flight-form" style={{ width: "98px" }}>
                                        <span>Uçak Bileti</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-form="hotel" role="tab" aria-controls="hotel-form" aria-disabled="false" aria-selected="false">
                                    <a className="nav-link" id="hotel-from-tab" data-toggle="tab" href="#hotel-form" style={{ width: "53.9062px" }}>
                                        <span>Otel</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-form="bus" role="tab" aria-controls="bus-form" aria-disabled="false" aria-selected="false">
                                    <a className="nav-link" id="bus-from-tab" data-toggle="tab" href="#bus-form" style={{ width: "107.594px" }}>
                                        <span>Otobüs Bileti</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="tab" aria-controls="pnr-form" aria-disabled="true" aria-selected="false">
                                    <a className="nav-link" id="pnr-tab" data-toggle="tab" href="#pnr-form" style={{ width: "124.719px" }}>
                                        <span>PNR Sorgulama</span>
                                    </a>
                                </li>
                                <li className="nav-item" role="tab" aria-controls="cancel-refund-form" aria-disabled="true" aria-selected="false">
                                    <a className="nav-link" id="cancel-refund-tab" data-toggle="tab" href="#cancel-refund-form" style={{ width: "85.9219px" }}>
                                        <span>Bilet İptal</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="jumbotron-content">
                                <div className="tab-pane fade show active" id="flight-form" role="tabpanel" aria-labelledby="flight-from-tab">
                                    <div className="tab-form search-form p-0">
                                        <div id="FlightSearchFormWrapper" style={{ minHeight: "244px" }}>
                                            <form id="FlightSearchForm" className="D_FSF tr" autocomplete="off">
                                                <div className="D_FSF_container">
                                                    <div className="D_FSF__row">
                                                        <div className="D_FSF__col ">
                                                            <div>
                                                                <label for="OriginInput">Nereden</label>
                                                                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-OriginInput" aria-expanded="false" className="react-autosuggest__container">
                                                                    <input
                                                                        type="text"
                                                                        autocomplete="off"
                                                                        aria-autocomplete="list"
                                                                        aria-controls="react-autowhatever-OriginInput"
                                                                        className="react-autosuggest__input"
                                                                        id="OriginInput"
                                                                        placeholder="Şehir veya Havalimanı Yazın"
                                                                        flightlegindex="0"
                                                                        inputname="origin"
                                                                        selectedsuggestion="[object Object]"
                                                                        value=""
                                                                        spellcheck="false"
                                                                        data-ms-editor="true"
                                                                    />
                                                                    <div aria-label="Suggestions" id="react-autowhatever-OriginInput" role="listbox" className="react-autosuggest__suggestions-container"></div>
                                                                </div>
                                                            </div>
                                                            <div className="inputIcon">
                                                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="OriginDestinationSwitch">
                                                            <button tabindex="-1" type="button" name="OriginDestinationSwitchName" aria-label="Origin Destination Switch">
                                                                <span className="svg-icon">
                                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="D_FSF__col ">
                                                            <div>
                                                                <label for="DestinationInput">Nereye</label>
                                                                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-DestinationInput" aria-expanded="false" className="react-autosuggest__container">
                                                                    <input
                                                                        type="text"
                                                                        autocomplete="off"
                                                                        aria-autocomplete="list"
                                                                        aria-controls="react-autowhatever-DestinationInput"
                                                                        className="react-autosuggest__input"
                                                                        id="DestinationInput"
                                                                        placeholder="Şehir veya Havalimanı Yazın"
                                                                        flightlegindex="0"
                                                                        inputname="destination"
                                                                        selectedsuggestion="[object Object]"
                                                                        value=""
                                                                        spellcheck="false"
                                                                        data-ms-editor="true"
                                                                    />
                                                                    <div aria-label="Suggestions" id="react-autowhatever-DestinationInput" role="listbox" className="react-autosuggest__suggestions-container"></div>
                                                                </div>
                                                            </div>
                                                            <div className="inputIcon">
                                                                <svg fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em">
                                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="D_FSF__row center_row">
                                                        <div className="D_FSF__col departureDate__col ">
                                                            <label for="DepartureDate">Gidiş Tarihi</label>
                                                            <div className="SingleDatePicker SingleDatePicker_1">
                                                                <div>
                                                                    <div className="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2">
                                                                        <div className="DateInput DateInput_1">
                                                                            <input
                                                                                className="DateInput_input DateInput_input_1 DateInput_input__readOnly DateInput_input__readOnly_2"
                                                                                aria-label="Date"
                                                                                type="text"
                                                                                id="DepartureDate"
                                                                                name="DepartureDate"
                                                                                placeholder="Date"
                                                                                autocomplete="off"
                                                                                readonly=""
                                                                                aria-describedby="DateInput__screen-reader-message-DepartureDate"
                                                                                value="06 Kas 2022, Paz"
                                                                            />
                                                                            <p className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-DepartureDate">
                                                                                Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="inputIcon">
                                                                <svg fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em">
                                                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="D_FSF__col returnDate__col ">
                                                            <label for="ReturnDate">Dönüş Tarihi</label>
                                                            <button id="ReturnDate" type="button" className="default-btn block passive">
                                                                Tek Yön
                                                            </button>
                                                            <div className="inputIcon">
                                                                <svg fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em">
                                                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                                                                </svg>
                                                            </div>
                                                            <label className="oneWayCheckbox" for="oneWayCheckbox">
                                                                <input tabindex="0" id="oneWayCheckbox" type="checkbox" checked={true} /> Tek Yön
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="D_FSF__row">
                                                        <div className="D_FSF__col ">
                                                            <label for="transitFilter" data-testid="transitFilterCheckbox">
                                                                <input type="checkbox" id="transitFilter" value="false" /> Aktarmasız
                                                            </label>
                                                            <button type="button" className="default-btn block passenger-select-button" data-testid="passengerSelectButtonMulti">
                                                                1 Yolcu<span>&nbsp;/&nbsp;Ekonomi</span>
                                                            </button>
                                                            <div className="inputIcon">
                                                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="D_FSF__col">
                                                            <button className="primary-btn block" type="button" data-testid="formSubmitButton">
                                                                <span>Ucuz bilet bul</span>
                                                                <span className="svg-icon direction-icon">
                                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="hotel-form" role="tabpanel" aria-labelledby="hotel-form-tab">
                                    <div className="tab-form search-form">
                                        <div id="HotelSearchFormWrapper"></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="bus-form" role="tabpanel" aria-labelledby="bus-form-tab">
                                    <div className="tab-form search-form">
                                        <div id="BusSearchFormWrapper"></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pnr-form" role="tabpanel" aria-labelledby="pnr-tab">
                                    <div className="tab-form search-form">
                                        <form onsubmit="return checkReservationUrl(event)" className="form-check-reservation" method="get" target="_blank" data-toggle="validation">
                                            <div className="row">
                                                <div className="col form-group">
                                                    <label for="ModalOnlineCheckInPnr1" className="form-control-label">
                                                        PNR Kodu
                                                    </label>
                                                    <input
                                                        id="ModalOnlineCheckInPnr1"
                                                        className="form-control"
                                                        type="text"
                                                        name="pnr"
                                                        required=""
                                                        minlength="5"
                                                        data-msg-minlength="Lütfen PNR numaranızı girin"
                                                        data-msg-required="Lütfen PNR numaranızı girin"
                                                        spellcheck="false"
                                                        data-ms-editor="true"
                                                    />
                                                </div>
                                                <div className="col form-group">
                                                    <label for="ModalOnlineCheckInLastname1" className="form-control-label">
                                                        Yolcunun Soyadı
                                                    </label>
                                                    <input id="ModalOnlineCheckInLastname1" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen soyadınızı girin" spellcheck="false" data-ms-editor="true" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group text-right">
                                                        <button className="btn btn-success check-url" type="submit" style={{ height: "40px" }}>
                                                            Sorgula <i className="ei-arrow-forward"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cancel-refund-form" role="tabpanel" aria-labelledby="cancel-refund-tab">
                                    <div className="tab-form search-form">
                                        <form onsubmit="return checkReservationUrl(event)" className="form-check-reservation" method="get" target="_blank" data-toggle="validation">
                                            <div className="row">
                                                <div className="col form-group">
                                                    <label for="ModalOnlineCheckInPnr2" className="form-control-label">
                                                        PNR Kodu
                                                    </label>
                                                    <input
                                                        id="ModalOnlineCheckInPnr2"
                                                        className="form-control"
                                                        type="text"
                                                        name="pnr"
                                                        required=""
                                                        minlength="5"
                                                        data-msg-minlength="Lütfen PNR numaranızı girin"
                                                        data-msg-required="Lütfen PNR numaranızı girin"
                                                        spellcheck="false"
                                                        data-ms-editor="true"
                                                    />
                                                </div>
                                                <div className="col form-group">
                                                    <label for="ModalOnlineCheckInLastname2" className="form-control-label">
                                                        Yolcunun Soyadı
                                                    </label>
                                                    <input id="ModalOnlineCheckInLastname2" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen soyadınızı girin" spellcheck="false" data-ms-editor="true" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group text-right">
                                                        <button className="btn btn-success check-url" type="submit" style={{ height: "40px" }}>
                                                            Sorgula <i className="ei-arrow-forward"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 document">Enuygun Seyahat, Belge No: 7153</div>
                    </div>
                    <div className="col-lg-6 hidden-md-down jumbotron-motto-container">
                        <div className="jumbotron-motto">
                            <div className="motto-slider owl-carousel owl-theme owl-loaded owl-drag" style={{ display: "block" }}>
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{ left: "-1224px", width: "4491px" }}>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Tüm seyahatin Enuygun mobil uygulamasında!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Uçak bileti, otobüs bileti ve otel rezervasyonu aynı anda sadece Enuygun mobil uygulamasında!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Enuygun'la araç kiralamak çok kolay!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Aracını almak istediğin yer ve zamanı seç, sana en uygun olan aracı güvenle kirala!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Sevdiklerini Mutlu Etmenin Yolu: Enuygun Hediye Kart</div>
                                                <div className="divider"></div>
                                                <div className="motto">O'na Enuygun'dan seyahat hediye et, dilediği hava yoluyla, dilediği zaman dilediği yere uçsun.</div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Uçak Biletin Cebinde!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Enuygun mobil uygulaması ile uçak bileti almak çok hızlı! Mobil uygulamayı indir, binlerce uçuşu saniyeler içinde karşılaştır, sana en uygun uçuşu kolayca al!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">BİG ile plan değişikliklerinden korkma!</div>
                                                <div className="divider"></div>
                                                <div className="motto">
                                                    Bilet İptal Güvencesi'yle aldığın tüm uçak biletlerini planların değişse bile uçuşa 3 saat kalana kadar koşulsuz şartsız iptal edip, bilet tutarının %90'ını geri alırsın!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Tüm seyahatin Enuygun mobil uygulamasında!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Uçak bileti, otobüs bileti ve otel rezervasyonu aynı anda sadece Enuygun mobil uygulamasında!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Enuygun'la araç kiralamak çok kolay!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Aracını almak istediğin yer ve zamanı seç, sana en uygun olan aracı güvenle kirala!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Sevdiklerini Mutlu Etmenin Yolu: Enuygun Hediye Kart</div>
                                                <div className="divider"></div>
                                                <div className="motto">O'na Enuygun'dan seyahat hediye et, dilediği hava yoluyla, dilediği zaman dilediği yere uçsun.</div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Uçak Biletin Cebinde!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Enuygun mobil uygulaması ile uçak bileti almak çok hızlı! Mobil uygulamayı indir, binlerce uçuşu saniyeler içinde karşılaştır, sana en uygun uçuşu kolayca al!</div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">BİG ile plan değişikliklerinden korkma!</div>
                                                <div className="divider"></div>
                                                <div className="motto">
                                                    Bilet İptal Güvencesi'yle aldığın tüm uçak biletlerini planların değişse bile uçuşa 3 saat kalana kadar koşulsuz şartsız iptal edip, bilet tutarının %90'ını geri alırsın!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "403.188px", marginRight: "5px" }}>
                                            <div className="motto-slider-item">
                                                <div className="heading">Tüm seyahatin Enuygun mobil uygulamasında!</div>
                                                <div className="divider"></div>
                                                <div className="motto">Uçak bileti, otobüs bileti ve otel rezervasyonu aynı anda sadece Enuygun mobil uygulamasında!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <button type="button" role="presentation" className="owl-prev" aria-label="Enuygun Owl Button">
                                        <i className="ei-chevron-left"></i>
                                    </button>
                                    <button type="button" role="presentation" className="owl-next" aria-label="Enuygun Owl Button" style={{ left: "110px" }}>
                                        <i className="ei-chevron-right"></i>
                                    </button>
                                </div>
                                <div className="owl-dots">
                                    <button role="button" className="owl-dot active" aria-label="Enuygun Owl Button">
                                        <span></span>
                                    </button>
                                    <button role="button" className="owl-dot" aria-label="Enuygun Owl Button">
                                        <span></span>
                                    </button>
                                    <button role="button" className="owl-dot" aria-label="Enuygun Owl Button">
                                        <span></span>
                                    </button>
                                    <button role="button" className="owl-dot" aria-label="Enuygun Owl Button">
                                        <span></span>
                                    </button>
                                    <button role="button" className="owl-dot" aria-label="Enuygun Owl Button">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
