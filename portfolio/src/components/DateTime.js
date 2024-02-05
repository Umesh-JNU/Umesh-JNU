import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { axios, getError, toastOptions } from '../utils';
import { CountUp } from '../components';
import { useLocation } from 'react-router-dom';

const weekday = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
];

const month = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

const getFormatDate = (time) => {
  const y = time.getFullYear();
  const m = time.getMonth();
  const d = time.getDate();
  const dy = time.getDay();

  return `${weekday[dy]}, ${d} ${month[m]}`;
};

export default function DateTime() {
  const [time, setTime] = useState(new Date());
  const [visitor, setVisitor] = useState(0);
  const [pageView, setPageView] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('webToken')) {
      var type = 'visit';
    }

    (async () => {
      try {
        if (type) {
          localStorage.setItem('webToken', true);
        }

        const { data } = await axios.put(`/api/visit/?TYPE=${type}`);

        setVisitor(data.visitData.visit);
        setPageView(data.visitData.page_view);
      } catch (error) {
        console.log(getError(error))
        toast.error(getError(error), toastOptions);
      }
    })();

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='datetime'>
      <h2>{time.toLocaleTimeString()}</h2>
      <h4>{getFormatDate(time)}</h4>

      <p>Visitors:
        <span className='float-end'>
          <CountUp start={0} end={visitor} duration={2} />
        </span>
      </p>
      <p>Page Viewed:
        <span className='float-end'>
          <CountUp start={0} end={pageView} duration={10} />
        </span>
      </p>
    </div>
  )
}
