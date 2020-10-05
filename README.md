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

1. View and agree [License of Staro Coley 0.0.3](https://github.com/starohub/starocoley/blob/master/LICENSE.md). Download [Staro Coley 0.0.3](https://starohub.nyc3.cdn.digitaloceanspaces.com/coley/0.0.3/starocoley-0.0.3.zip)

2. Extract downloaded zip file, for example to /prg/starocoley or d:\prg\starocoley

3. Download and install [Oracle Java SE Runtime 8](https://www.oracle.com/java/technologies/javase-jre8-downloads.html)

4. Set environment variable "JAVA_HOME" to folder containing Java SE Runtime 8.

5. Copy license file which we sent to you after you purchased software to /prg/starocoley . Please [purchase software via Fiverr](https://www.fiverr.com/share/Yo6LLR).

6. If you are running Unix:

* Build Pie Eater
```
cd /prg/starocoley
starocoley.sh spl/pie-eater/config.json pie-eater
```

* Build Yummy Tales
```
cd /prg/starocoley
starocoley.sh spl/yummy-tales/config.json yummy-tales
```

* Build Staro Payara
```
cd /prg/starocoley
starocoley.sh spl/payara/config.json payara
```

* Run builder GUI
```
cd /prg/starocoley
starocoley-gui.sh
```

7. If you are running Windows:

* Build Pie Eater
```
cd d:\prg\starocoley
starocoley.bat spl\pie-eater\config.json pie-eater
```

* Build Yummy Tales
```
cd d:\prg\starocoley
starocoley.bat spl\yummy-tales\config.json yummy-tales
```

* Build Staro Payara
```
cd d:\prg\starocoley
starocoley.bat spl\payara\config.json payara
```

* Run builder GUI
```
cd d:\prg\starocoley
starocoley-gui.bat
```

