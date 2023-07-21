import CountUp from 'react-countup';

const formatter = (value: number) => <CountUp end={value} separator="," />;

export default formatter;
