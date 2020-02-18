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
