import roadmapImg from './Assets/black14.jpg';

const title = "5,000 ABORTED NFTS FLOATING IN THE BLOCKCHAIN AFTERLIFE";

const introParagraph = "ABORTED BABIES is a collection of 5,000 unique digitally generated artworks, all telling their own story. You’ll find every walk of life (or death) under the sun, all in some way a result of the choice each individual art owner has made.";

const paragraphOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Content() {
    return (
        <div className="Content">

            {/* <div id="intro" className="introDiv"> */}
            <div className="About" id="about">
                <strong id="about-title" className="sizeThreeFont">{title}</strong>
                <div className="introParagraph" id="intro-paragraph">
                    <p>{introParagraph}</p>
                    <p>{paragraphOne}</p>
                </div>
            </div>
            <div className="buttonDiv" id="button-div">
                <button>0 / 5,000 ABORTED</button>
                <button>BROWSE ON OPENSEA</button>
            </div>
            <div id="roadmap" className="roadmap">
                <img id="roadmap-img" src={roadmapImg} alt="roadmap-img" />
                <div id="roadmap-info" className="roadmapInfo">
                    <strong id="roadmap-title" className="sizeTwoFont">ROADMAP 2022</strong>
                    <div id="roadmap-items" className="roadmapItems">
                        <p>MARKETING + ARTWORK UNVEILING</p>
                        <p>AIRDROPS</p>
                        <p>LOREM IPSUM</p>
                        <p>LOREM IPSUM</p>
                        <p>SELL OUT</p>
                        <p>V2 RELEASE</p>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </div>
    )
}

export default Content;