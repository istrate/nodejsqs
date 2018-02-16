# NodeJS used with Watson IBM IoT Quickstart
IBM IoT NodeJS quickstart demo

Before start connecting to Watson IBM IoT Quickstart organization you need to fisrt add the mqtt library that would help you make the connection 

1. Run below and make sure you run the latest version of npm

npm i -g npm

2. Run the npm install command for mqtt

npm install mqtt

3. Run quickstart.js

node quickstart.js

The application is configured to publish a random temperature value for device with MacAddress : ABCD12341234
Below messages are published in order to keep you updated with what is happening 

> Connected to quickstart organization...
> Connected with macAddress:ABCD12341234
> Follow https://quickstart.internetofthings.ibmcloud.com and add ABCD12341234 to see events`


After the above, you'll see events published under JSON format:

>Published event:
>{ temp: 70 }

>Published event:
>{ temp: 22 }


