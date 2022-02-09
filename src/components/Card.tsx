import '../css/card.css';
import { Rate } from "antd";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { CardProps } from '../App';


const Card = (props: CardProps) => {
    return (
        <>
            <div className="card">
                <div className='content'>
                    <div className='card_logo'>
                        <img className='logo_img' src={props?.logo}></img>
                    </div>
                    <div className='card_description'>
                        <p className='top_desk'>{props?.offerTitle}</p>
                        <p className='mid_desk'>{props?.offerSubText}</p>
                        <p className='bot_desk'>18+</p>
                        <p className='last_desk'>, Begambleaware.org</p>
                    </div>
                    <div className='card_games'>
                        <div className='game_item'>
                            <img className='card_game' src={props?.slotsImages?.item1?.img?.src}></img>
                            <p className='card_text'>{props.slotsImages.item1.text}</p>
                        </div>
                        <div className='game_item'>
                            <img className='card_game' src={props?.slotsImages?.item2?.img?.src}></img>
                            <p className='card_text'>{props?.slotsImages?.item2?.text}</p>
                        </div>
                        <div className='game_item'>
                            <img className='card_game' src={props?.slotsImages?.item3?.img?.src}></img>
                            <p className='card_text'>{props?.slotsImages?.item3?.text}</p>
                        </div>
                    </div>
                    <div className='card_rate'>
                        <div>
                            <Rate allowHalf defaultValue={4.5} />
                            <p className='rate_text'>{props?.votes?.text} ({props?.votes?.count})</p>
                            <p className='link_text'>{props?.votes?.linkText}</p>
                        </div>
                        <div className='circle'>
                            <Progress
                                type="circle"
                                width={58}
                                percent={60}
                                trailColor={"#CED0D4"}
                                strokeColor={"#F5A623"}
                                format={(percent?: number) => percent ? `${(percent / 6.12).toFixed(1)}`: 0}
                            />
                        </div>

                    </div>
                    <div className='card_bonus'>
                        <div className='bonus_button'>
                            <p className='button_text'>{props?.buttonText}</p>
                        </div>
                        <p className='min_depo_text'>{props?.deposit?.text} {props?.deposit?.value}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='card_bottom'>
                        <p className='bottom_text'>{props.providerLegalDisclaimer}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;