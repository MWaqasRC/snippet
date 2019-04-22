moment js return time duration hours & minutes
calcDuration() {
  const y = moment(this.appointment['startDateTime']);
  const x = moment(this.appointment['endDateTime']);
  const diff = moment.duration(x.diff(y));
  const timeDuration = (diff.hours() ? diff.hours() +  'h ' : '') + diff.minutes() + 'm';
  console.log('timeDuration', this.timeDuration);
 } 
