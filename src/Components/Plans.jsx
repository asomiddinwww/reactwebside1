import { memo } from 'react';
import Plansimg from '../assets/img/plans-img.png'
import Plansimg2 from '../assets/img/plans-img2.png'
import Plansimg3 from '../assets/img/plans-img3.png'

const Plans = () => {
  return (
    <div className='plans'>
      <div className="content">
        <div className="nick-name"><h1>Plans built for growth</h1></div>
        <div className="plans-cards">
          <div className="plans-card-item">
            <img src={Plansimg} alt="" />
            <h3>Early stage startup</h3>
            <p>Need your accounting system set up? Learn financial best practice and prime your business for the next stage of growth. We get you moving quickly with an accounting solution that does what you need.</p>
          </div>
          <div className="plans-card-item">
            <img src={Plansimg2} alt="" />
            <h3>Scale up</h3>
            <p>Spend less time worrying about your finances and more time shaping your company’s future. Get your bookkeeping, R&D credits and CFO problems, solved.</p>
          </div>
          <div className="plans-card-item">
            <img src={Plansimg3} alt="" />
            <h3>High growth</h3>
            <p>Gain the financial accuracy, visibility, and real-time analysis you need to make smarter decisions, drive efficiency, and achieve total organizational alignment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Plans);