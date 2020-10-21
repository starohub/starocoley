![StaroColey](https://github.com/starohub/starocoley/raw/master/resources/images/starocoley-64.png)

# Staro Coley - HTML to APK Converter

### License

[Staro Commercial License](https://github.com/starohub/starocoley/blob/master/LICENSE.md)

### Price

$1 / each built apk file

[Buy on Fiverr](https://www.fiverr.com/share/Yo6LLR)

### Sample built APK

##### Pie Eater

[![Pie Eater](https://github.com/starohub/starocoley/raw/master/samples/pie-eater/src/pie-eater.png)](https://github.com/starohub/starocoley/tree/master/samples/pie-eater)

##### Yummy Tales

[![Yummy Tales](https://github.com/starohub/starocoley/raw/master/samples/yummy-tales/src/yummy-tales.png)](https://github.com/starohub/starocoley/tree/master/samples/yummy-tales)

##### Test Staro WebD on Android

[Staro Payara](https://github.com/starohub/starocoley/raw/master/samples/payara/staropayara.apk)

* Username/password: webd / webd

### How to run

0. [Visit Staro Coley on Algorithmia.com](https://algorithmia.com/algorithms/starohub/starocoley)

1. [Create new account on Algorithmia.com](https://algorithmia.com/signup) if you have not one.

2. [Purchase software via Fiverr](https://www.fiverr.com/share/Yo6LLR). Write down your order no. from Fiverr, for example, FAEWAG2

3. Create a data collection whose name is order no., for example, data://.my/FAEWAG2

4. Run following command to generate buyer information file

```
curl -X POST -d '{
  "hasBuyer": "yes",
  "buildFileUrl": "https://github.com/starohub/starocoley/raw/master/samples/pie-eater/pie-eater.zip",
  "configFile": "./config.json",
  "configName": "pie-eater",
  "orderNo": "<Order No.: FAEWAG2>"
}' -H 'Content-Type: application/json' -H 'Authorization: Simple <Algorithmia APK Key>' https://api.algorithmia.com/v1/algo/starohub/starocoley/2.0.1?timeout=300
```

5. Get URL to download buyer information file from field 'data.buyerFileUrl' of result. Download buyer information file and send it to us via Fiverr.

6. Build first apk file for setting up.

```
curl -X POST -d '{
  "hasBuyer": "no",
  "buildFileUrl": "https://github.com/starohub/starocoley/raw/master/samples/pie-eater/pie-eater.zip",
  "configFile": "./config.json",
  "configName": "pie-eater",
  "orderNo": "<Order No.: FAEWAG2>"
}' -H 'Content-Type: application/json' -H 'Authorization: Simple <Algorithmia APK Key>' https://api.algorithmia.com/v1/algo/starohub/starocoley/2.0.1?timeout=300
```

7. Build your apk:

```
curl -X POST -d '{
  "hasBuyer": "no",
  "buildFileUrl": "<Download URL or Data URL of zip file containing HTML: https://github.com/starohub/starocoley/raw/master/samples/pie-eater/pie-eater.zip>",
  "configFile": "<Relative path to configuration file: ./config.json>",
  "configName": "<Name of configuration item: pie-eater>",
  "orderNo": "<Order No.: FAEWAG2>"
}' -H 'Content-Type: application/json' -H 'Authorization: Simple <Algorithmia APK Key>' https://api.algorithmia.com/v1/algo/starohub/starocoley/2.0.1?timeout=300
```
