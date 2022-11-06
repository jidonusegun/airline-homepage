import React from 'react'

export default function tickets() {
  return (
    <div class="quick-access-area px-20">
        <div class="item gift-card">
            <a href="https://www.enuygun.com/enuygun-hediye-kart/" class="item-area">
                <img src="/images/gonder.svg" />
                <span class="item-text">Hediye Kart <br />Gönder </span>
            </a>
        </div>
        <div class="item encoin">
            <a href="https://www.enuygun.com/kredi-karti-puanlari/" class="item-area">
                <img src="/images/encoin.svg" />
                <span class="item-text">Kart Puanlarımı <br />ENCoin'e Çevir </span>
            </a>
        </div>
        <div class="item cancel-ticket">
            <a href="https://www.enuygun.com/bilet-iptal-iade/" class="item-area">
                <img src="/images/pnr.svg" />
                <span class="item-text">Biletimi <br />İptal Et </span>
            </a>
        </div>
        <div class="item checkin">
            <a href="https://www.enuygun.com/ucak-bileti/check-in/" class="item-area">
                <img src="/images/check-in.svg" />
                <span class="item-text">Online <br />Check-in </span>
            </a>
        </div>
        <div class="item pnr">
            <a href="https://www.enuygun.com/ucak-bileti/pnr-sorgulama/" class="item-area">
                <img src="/images/sorgulama.svg" />
                <span class="item-text">PNR <br />Sorgulama </span>
            </a>
        </div>
        <div class="item corporate-signup">
            <a href="https://www.enuygun.com/uyelik/kurumsal/" class="item-area">
            <   img src="/images/uye.svg" />
                <span class="item-text">Kurumsal <br />Üye Ol </span>
            </a>
        </div>
        </div>
  )
}
