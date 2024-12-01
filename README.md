Forked from [yihong0618](https://github.com/yihong0618)/[running_page](https://github.com/yihong0618/running_page) and [ben-29](https://github.com/ben-29)/[workouts_page](https://github.com/ben-29/workouts_page).

# 同步数据

## 1 Ubuntu

```
cd /mnt/d/para/a/website/workout
```

## 2 安装

```
pip3 install -r requirements.txt
```
```
npm install -g corepack && corepack enable && pnpm install
```


## 3 拉取数据

### 3.1 Keep

```
python3 run_page/keep_sync.py ${your mobile} ${your password}
```

### 3.2 Strava

#### 3.2.1 登录 Strava，获取API，得到 client_id 和 client_secret

https://www.strava.com/settings/api

#### 3.2.2 在浏览器中输入以下链接，得到 code
```
https://www.strava.com/oauth/authorize?client_id=client_id&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all,profile:write,activity:write
```

#### 3.2.3 Ubuntu 运行以下内容，得到 refresh_token
```
curl -X POST https://www.strava.com/oauth/token \
-F client_id=client_id \
-F client_secret=client_secret \
-F code=code \
-F grant_type=authorization_code
```

####  3.2.4最终运行

```
python3(python) run_page/strava_sync.py ${client_id} ${client_secret} ${refresh_token}
```

## 4 生成 SVG

```
python3 run_page/gen_svg.py --from-db --title "Calendar" --type github --athlete "Haiyan Kong" --output assets/github.svg --use-localtime --min-distance 0.5
```

```
python3 run_page/gen_svg.py --from-db --title "Data Over 5km" --type grid --athlete "Haiyan Kong"  --output assets/grid.svg --min-distance 5 --use-localtime
```

```
python3 run_page/gen_svg.py --from-db --type circular --use-localtime
```

## 5 部署

```
pnpm develop
```

# 仓库准备

## Secrets and variables---Action

KEEP_MOBILE

KEEP_PASSWORD

STRAVA_CLIENT_ID

STRAVA_CLIENT_SECRET

STRAVA_CLIENT_REFRESH_TOKEN

## Actions---General

in Workflow permissions to select Read and write permissions

## Pages

select GitHub Actions

## Action

Run Data Sync --- Run workflow