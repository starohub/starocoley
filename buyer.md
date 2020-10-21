![StaroColey](https://github.com/starohub/starocoley/raw/master/resources/images/starocoley-64.png)

## Generate buyer information file

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
