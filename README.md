## 使用情況調查（2026-11-09）

> 本節為 hanlin-edu-tech repo 清理作業的調查紀錄，待負責人確認後決定封存或刪除。

- 調查結論：仍在使用
- 建議處置：保留，理由：正式站「服務條款」「個人隱私頁」仍提供本 repo 2020-02-18 建置的內容，並被正式機運行中的 tutor-nu-ehanlin 與 tutor-ms_message 頁尾連結。
- 最後更新：pushedAt 2026-10-28；最後 commit `300f355` 2026-10-28 hotdog929 Merge pull request #13 from hanlin-edu-tech/chore/upgrade-node-26
- 用途：「服務條款」（`terms.html`）與「個人隱私頁」（`privacy.html`）靜態頁（pug／less，gulp 建置），由 Travis CI 依分支上傳到 GCS 的 `infos/user/`，正式站網址 `https://www.ehanlin.com.tw/infos/user/terms.html`、`/infos/user/privacy.html`。

### 檢查結果

| 檢查項目 | 結果 | 依據 |
|---|---|---|
| GitHub 活動 | 最後實質 commit `03ddb53` 2020-02-18 AsoTiesto（調整 typo）；2026-05-12 `2c59f30` 為 GTM ID 統一批次修改（未部署，線上仍為舊 GTM ID），2026-10-28 `f0f905f`、`b21641a` 為「升級 Node.js 至 26」批次修改（PR #13），皆不列為實質開發。分支 12 個（master、test 2019-05-06、10 個 dependabot）；open PR 10 筆皆為 dependabot；issue 0；只有 Dependabot Updates workflow；tag 1 個（v1.0.0）；release 0；非 fork | 已查核，細節記錄於內部調查報告 |
| org 內程式碼引用 | 正式機運行中的服務頁尾連結本頁 | 已查核，細節記錄於內部調查報告（關鍵字：info-user、infos/user；命中 tutor-nu-ehanlin、tutor-ms_message） |
| GCP 部署 | 正式站與測試站兩頁回 200，內容與 GCS 相同，GCS 最後上傳 2020-02-18；負載平衡器不保留 200 回應紀錄，無法取得瀏覽量；查無 Cloud Build trigger、Cloud Run、GKE workload | 已查核，細節記錄於內部調查報告 |
| AWS 部署 | 查無 | 已查核 4 個帳號的 Lambda、API Gateway（REST／HTTP）、ECR、ECS、EventBridge、SQS、S3、CloudFront 盤點，細節記錄於內部調查報告 |

### 待確認事項
- 部署流程失效：`.travis.yml` 依賴的 Travis CI 已無執行紀錄，2026-05-12 的 GTM ID 修改未上線；日後修改條款或隱私頁需負責人確認部署方式。
- 殘留 webhook 1 個，細節記錄於內部調查報告。

# 隱私保護政策 及 使用條款

## 開發時編譯
```
gulp build
```

## 開發完成打包
```
gulp package
```

## GCP 本機佈署
```sh
gsutil -m rm -r gs://tutor-test-info/infos/user/*
gsutil -m cp -r -a public-read ./dist/infos/user gs://tutor-test-info/infos/user
```
