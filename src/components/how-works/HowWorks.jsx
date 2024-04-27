import './HowWorks.css';
import chat from "../../assets/work_chat.webp"
import search from "../../assets/people_search.webp"
import hire from "../../assets/business_deal.webp"

const HowWorks = () => {
    return (
        <div>
            <h1 id='how-head'>How it works</h1>
            <div className="how-works">
                    <div className="how">
                        <img src={search} alt="" />
                        <h3>Search.</h3>
                        <p>Browse profiles and read verified reviews from people in your area.</p>
                    </div>
                    <div className="how">
                        <img src={chat} alt="" />
                        <h3>Chat.</h3>
                        <p>Check out prices and chat through your project with handymen.</p>
                    </div>
                    <div className="how">
                        <img src={hire} alt="" />
                        <h3>Hire.</h3>
                        <p>Choose your handyman and book the project right in the website.</p>
                    </div>
                </div>
        </div>
    );
};

export default HowWorks;