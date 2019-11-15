# EpochToString
 Convert UnixEpoch to time strings

This small package returns a string of time units compared to the current date the script is run.

Returned time units:
- Years,
- Weeks,
- Days,
- Hours,
- Minutes,
- Seconds

 ## How to use

Constructor EpochToString(unixEpoch, maxUnits);

Constructor EpochToString(unixEpoch, maxUnits, compareTo);

- unixEpoch must be in seconds.
- maxUnits is the max amount of time units you want to be saved, for example maxUnits set to 3 will return something like this **x Years, x minutes, x seconds ago**, if a unit is 0 it will be ignored and will get the next time unit that is not 0;
- If you want to get the difference between anything other then the current Unix Epoch and a value, you can specify a time you want to compare by passing a third argument to the constructor. 


Create a new instance: 

```javascript

//compare to the current unix epoch
const example1 = new EpochToString(1573767245, 4);
console.log(example1.getString());

//compare to a custom time
const example2 = new EpochToString(1573767245, 4, 1000000000);
console.log(example2.getString());
```
Expected result will be something like this:
``1 Year, 3 days, 27 seconds``