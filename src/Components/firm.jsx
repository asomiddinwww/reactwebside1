import { memo } from 'react';
import BranchImg1 from '../assets/img/branch-img1.png';
import BranchImg2 from '../assets/img/brnach-img2.png';
import BranchImg3 from '../assets/img/branch-img3.png';
import BranchImg4 from '../assets/img/branch-img4.png';
import BranchImg5 from '../assets/img/branch-img5.png';
import BranchImg6 from '../assets/img/branch-img6.png';
import BranchImg7 from '../assets/img/branch-img7.png';
import BranchImg8 from '../assets/img/branch-img8.png';
import BranchImg9 from '../assets/img/branch-img9.png';

const Firm = () => {
  return (
    <div className='Firm'>
        <div className="content">
            <div className="firm-text"><p>Join 200+ amazing companies</p></div>
            <div className="firm-branchs">
                <div className="branch-item-img"><a href="/"><img src={BranchImg1}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg2}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg3}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg4}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg5}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg6}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg7}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg8}/></a></div>
                <div className="branch-item-img"><a href="/"><img src={BranchImg9}/></a></div>
            </div>
        </div>
    </div>
  );
};

export default memo(Firm);