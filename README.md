# EpochToString
 Convert UnixEpoch to time strings


 ## How to use

Constructor EpochToString(unixEpoch, maxUnits);

- unixEpoch must be a in seconds.
- maxUnits is the max amount of time units you want to be saved, for example maxUnits set to 3 will return something like this **x Years, x minutes, x seconds ago**, if a unit is 0 it will be ignored and will get the next time unit that is not 0;


Create a new instance: 

```javascript
const test = new EpochToString(1573767245, 4);
console.log(test.getString());
```
Expected result will be something like this:
``1 Year, 3 days, 27 seconds``