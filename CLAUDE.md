# 阪神北部歯科総研 プロジェクト指示

大阪歯科総研の横展開。関西展開ロードマップ（`~/Desktop/クロード/関西展開ロードマップ.md`）の
兵庫県ブロック1番目。**立ち上げ手順の正本は `~/Desktop/クロード/横展開マニュアル.md`**。
デザイン・記事・スコアリングの共通ルールは大阪版 `CLAUDE.md`／`articles/ARTICLE_MANUAL.md` に準拠する。

## サイト概要（複数市町の広域ブロック型 — 単一都市型との違いに注意）
- 対象：伊丹市・宝塚市・川西市・三田市・猪名川町（阪神北部エリア。区なし・複数市町の合成ブロック）
- エリアタブは**市町そのもの**が単位（駅・地区ではない）。`shindan.js`のAREA_KEYWORDSに5市町を列挙
- `db_quality.py`の在圏判定は「対象市町名のいずれかを含むか」で判定（合成地名「阪神北部エリア」は住所に出現しないため単純一致では全滅する。阪神北部版で発見・修正済み）
- 設定の正本：`site_config.json`＋`assets/site-config.js`。`site_config.json`にはareas配列で含む市町を明記
- 記事生成側の設定：`AI評判設計システム/client_config_hanshinnorth.json`（daily_post.sh の CLIENT_CONFIG 環境変数で直接指定する。旧コピー差し替え運用は廃止・2026-07-10）
- ドメイン・GA4測定IDは未定（公開前にユーザーが決定）

## 費用ルール（無料優先の原則）
- 医院リスト収集：Google Maps API（月次無料枠内で運用）／AI分析：gpt-4o-mini／ジオコーディング：Nominatim（無料）
- 費用が発生しそうな操作は、まず無料の方法を調べ、無料で不可なら見積り提示→承認後に実行

## 立ち上げ進捗（2026-07-08 開始）
- [x] 芦屋版（3つの恒久バグ修正済み最新コード）から複製・git init
- [x] hanshinnorth_stations.py（Overpass APIで機械取得・84駅。手作業リストは廃止）
- [x] clinic_collector.py：AREAS 5市町・グリッド範囲設定
- [x] db_quality.py：複数市町対応の在圏判定に修正
- [x] shindan.js：AREA_KEYWORDS を5市町タブに差し替え
- [x] 全ビルドスクリプト・HTMLのブランド置換（HANSHIN-NORTH DENTAL RESEARCH）
- [x] データ収集（完了：649院収集・掲載310院）＋公式サイト深掘り完了
- [ ] 収集後の監査（7点チェック）→ slug生成 → ジオコーディング → 最寄駅計算
- [ ] サイト生成（build_clinics → build_features → build_index → build_sitemap）
- [ ] index.html の統計数字を実数に差し替え
- [ ] サムネイル画像（ChatGPT無課金ルート）
- [ ] GitHub Privateリポジトリ・Cloudflare Pages・ドメイン・GA4・Search Console（ユーザー操作）
- [ ] 毎日投稿 launchd（時刻は他都市とずらす）

## 注意（大阪版・芦屋版で踏んだ地雷 — 横展開マニュアル §3 参照）
- slug衝突／ジオコーディング座標集約／統計数字の不一致／計測タグ入れ忘れ／医療広告ガイドライン
- Place Details APIの無効フィールド名／equipment_stars等の新スキーマ欠落／院数・ドメインのハードコード（いずれも修正済みコードを継承しているため対応不要のはず。念のため生成後に確認）
