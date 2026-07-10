"use strict";
/* サイト設定（ブラウザ側）。site_config.json（Python側）と内容を揃えること。
   ga4MeasurementIds は [shika-sokenアカウントのID, kokedamaアカウントのID] の2枠固定。
   どちらも空文字の間、計測は無効。片方だけ設定された状態でも動く（横展開マニュアル§2-5）。 */
window.ODR_CONFIG = {
  city: "阪神北部エリア",
  cityShort: "阪神北部",
  siteName: "阪神北部歯科総研",
  ga4MeasurementIds: [
    "",  // shika-soken
    "",  // kokedama
  ],
};
