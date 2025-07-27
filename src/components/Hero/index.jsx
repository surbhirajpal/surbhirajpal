import {Button} from 'antd';
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>{'I craft seamless digital experiences - fusing creativity, thoughtful UX, and purposeful design.'}</h1>

        <div className='hero__action'>
            <a className='hero__button' href='mailto:surbhirajpal.jobs@gmail.com'>
                {'Get in Touch'}
            </a>
            <div className='hero__open'>
                <div className='hero__dot'></div>
                <div className='hero__open-text'>{'Open to New Opportunities'}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
