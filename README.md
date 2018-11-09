# StaticContent-TimeController Bundle
The StaticContent-TimeController Bundle deactivates the StaticContent widget after a certain period of time.

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_staticcontent_timecontroller/index.html

Installation Guide
------------------
1. First, you need to add the bundles "dn_staticcontenttimecontroller" to your app.
2. After that, you can configure the bundle in the app.json.

```
"dn_staticcontenttimecontroller": {
    "StaticContentTimeController": {
        "time": 30000
    }
}
```

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
