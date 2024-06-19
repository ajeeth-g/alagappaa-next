import Stats from '../Stats/Stats';
import './statistics.css';

const Statistics = () => {
  return (
    <section className='statisticsSection container'>
      <div className='statisticsLeft'>
        <h2>
          Strength Through <br />{' '}
          <span className='textHighlight'>Statistics</span>
        </h2>
        <p className='shortDesc'>
          Benefit from our proven expertise and extensive network for reliable
          and top-quality Tata car service
        </p>
      </div>
      <div className='statisticsRight'>
        <div className='statsGrid'>
          <div className='statsFrist'>
            <Stats number='59+' description='Years Over Automobile Industry' />
            <Stats number='500+' description='Active Customer' />
          </div>
          <div className='statsSecond'>
            <Stats
              number='25+'
              description='Years of TATA Motors Authorized Service Excellence'
            />

            <Stats number='98%' description='Customer Satisfaction Rate' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
