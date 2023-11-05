import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import music from '../../static/music.mp3';

const ExpandedContent = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
        setIsPlaying(!isPlaying);
    };

    const onPlay = () => {
        console.log('Music is playing');
    };

    const onPause = () => {
        console.log('Music is paused');
    };

    return (
        <div className="expanded-content">
            <div style={
                {visibility: 'hidden'}
            }>
                <audio src={music}
                    autoPlay
                    preload="auto"/>
            </div>
            {/* <AudioPlayer
        src={music}
        // onPlay={onPlay}
        // onPause={onPause}
        autoPlay={true}
    customProgressBarSection={[]}
      customAdditionalControls={[ ]}
      customControlsSection={[]}
      customIcons={[]}
      customVolumeControls={[]}
      
        // onEnded={() => setIsPlaying(false)}
        // showJumpControls={false}
        // customAdditionalControls={[
        //   <button key="play-pause-button" onClick={handleButtonClick}>
        //     {isPlaying ? 'Pause' : 'Play'}
        //   </button>
        // ]}
      /> */}
            {/* Add your expanded content here */}
            <div className='desktop-view__right-side'>
                <div className='css-6t52w4'>
                    <div className='css-0'>
                        <button className='css-z74llp'
                            onClick={handleButtonClick}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="white" aria-hidden="true" focusable="false"
                                style={
                                    {color: "white"}
                                }
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
                            </svg>
                        </button>

                    </div>
                    <button className='css-5qrwf9'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="white" aria-hidden="true" focusable="false"
                            style={
                                {color: "white"}
                            }
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>
                    <div style={
                        {
                            height: '0px',
                            transition: 'height 250ms ease 625ms',
                            visibility: 'hidden'
                        }
                    }>
                        <div className='react-reveal'
                            style={
                                {opacity: '0'}
                        }>
                            <div className='css-dgqnhr'>
                                <div className='css-1sfabw7'>
                                    <div className='css-13o7eu2'>
                                        <div className='css-0'>
                                            <div className='css-1w0jhye'>
                                                <div className='react-reveal'>
                                                    <div className='css-gmuwbf'>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#fff"
                                                            style={
                                                                {color: "#fff"}
                                                            }
                                                            height="60px"
                                                            width="60px"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M372 22.41c-6.4 33.89 6.8 54.39 32.6 66.3 4.6 8.17 8.4 16.29 11.4 24.39-15.3-17.02-33.3-25.31-58-13.12 14.1 27.62 35.6 32.42 61.5 23.42 6.2 21 7.7 41.6 6.3 62.4 0 .2 0 .4-.1.6 1 .6 2 1.1 2.9 1.7 4.9 2.9 9.7 5.9 14.3 8.9.4-3.3.7-6.7.9-10 1.2-17.6.4-35.4-3.3-53.5 26.8 5.1 43-8.6 52.8-33.62-24.2-2.6-44.9 1.22-55.3 22.92-2.6-9.4-6-18.9-10.3-28.46 23.7-15.85 37.7-36.07 26-67.62-22.5 8.53-33.5 22.13-36.3 39.47C412.8 44.33 400.3 28 372 22.41zM190.7 62.63C183.4 82.89 176.4 110 172 136.8c-3.2 19.9-5.3 39.7-5.7 56.9 30.4 25.9 63.3 44.6 99.8 46.3-33.2-52.5-63-120-75.4-177.37zM56.82 102.2c3.08 75.4 32.03 178.7 110.68 233.2l5.5 3.8-2 6.3c-3.2 10.1-7.8 19-15 25.8-7.3 6.8-16.9 11.2-28.7 13.3-22.5 4-54.14.8-101.89-7.7-9.6 24.1-8.29 50.6.43 72.1 8.72 21.3 24.29 36.6 42.1 40.6 24.85-31.8 62.26-70.4 113.56-68.1 52 2.3 111.5-12.1 146.9-47.6 12.5-12.4 23.2-42.3 29.4-68.6 6.2-26.3 8.7-49 8.7-49l.6-6.1 6-1.6c21.6-5.6 47.6-10.7 76.7-25.4-8.6-5.8-18.7-12.6-30.4-19.6-17.9-10.6-37.6-19.8-47.3-20.9-16.6-1.7-26 1.3-32.5 6.1-6.4 4.8-10.6 12.2-14.3 21.1-3.6 8.9-6.4 19-11.4 28.1-5.1 9.2-14 17.8-26.8 19.2-56 6.5-103.8-22.9-143.9-60.1-33-30.6-61.58-66.8-86.38-94.9zm376.08 148c-7.1 2.6-13.9 4.9-20.4 6.8-1.8 6.9-3.7 13.8-5.6 20.7l17.4 4.8c3-10.7 5.9-21.5 8.6-32.3z"></path>
                                                        </svg>;
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-gmuwbf'>
                                                <div className='react-reveal'>
                                                    <h2 className='css-1e7eyao'>The Wedding of</h2>
                                                </div>
                                            </div>
                                            <div className='css-4gygly'>
                                                <div className='react-reveal'>
                                                    <h2 className='css-npft0u'>Nailal and Via</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='css-2a0kb1'>
                                            <div className='css-gmuwbf'>
                                                <div className='css-gmuwbf'>
                                                    <button className='css-1qltuup'>
                                                        <span className='css-1wh2kri'>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"></path>
                                                            </svg>;
                                                        </span>
                                                        Open Invitation
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='css-3t04x3'>
                                    <div style={
                                            {
                                                backgroundColor: "transparent",
                                                transform: "translateY(-38px)"
                                            }
                                        }
                                        className="css-1iq9e03"></div>
                                    <div className='css-1vq3qay'>
                                        <div className='css-gmuwbf'>
                                            <p className='css-1sgqbae'>Created with</p>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="animation-heart"
                                                style={
                                                    {
                                                        color: "#fff",
                                                        margin: "0 4px"
                                                    }
                                                }
                                                color="#fff"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375c0 1.127.159 2.784 1.75 4.375l7 5.25s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375"></path>
                                            </svg>;
                                            <a target="_blank" rel="noopener noreferrer" className="chakra-link css-rywa5a" href="https://wa.me/+6281329274582?text=Hi%20Kak,%20aku%20mau%20pesan%20undangan%20online%20nih!">
                                                by Invitato
                                            </a>;
                                        </div>
                                        <div className='css-gmuwbf'>
                                            <p className='css-i34euv'>© 2023 Nailal & Via. All Rights Reserved</p>
                                        </div>
                                        <div className='css-18rj5z'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='invitato-detail-content'>
                        <div className='css-1d66ytz'>
                            <div className='css-1j3xqpt'>
                                <div className='css-6get8n'></div>
                                <div style={
                                        {
                                            backgroundColor: 'transparent',
                                            transform: 'translateY(-2.8rem)'
                                        }
                                    }
                                    className="css-1iq9e03"></div>
                                <div className='css-u912qz'>
                                    <div className='css-gmuwbf'>
                                        <div className='react-reveal'>
                                            <h2 className='css-1dpo8v5'>Dear Mr/Mrs/Ms,
                                                <br/>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className='css-gmuwbf'>
                                        <div className='react-reveal'>
                                            <h2 className='css-1dpo8v5'>
                                                <span>Family & Friends</span>
                                                <br/>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className='react-reveal'>
                                        <p className='css-1ucb2j6'>
                                            We are pleased to announce and invite you to our wedding. We sincerely
                                            <br/>
                                            hope that you will be able to attend and pray directly on our wedding day.
                                            <br/>
                                            Your presence will mean a lot to us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="css-6blxtu"
                            style={
                                {backgroundImage: 'url("https://user-images.githubusercontent.com/10141928/147431083-48106e7a-9aed-4108-8ef6-8a666bd48b5a.jpeg")'}
                        }>
                            <div className="css-1cecxj3">
                                <div className="css-1qm1lh">
                                    <div className="css-gmuwbf">
                                        <div className="react-reveal"
                                            style={
                                                {
                                                    animationFillMode: 'both',
                                                    animationDuration: '1000ms',
                                                    animationDelay: '0ms',
                                                    animationIterationCount: 1,
                                                    opacity: 1,
                                                    animationName: 'react-reveal-788535647763568-1'
                                                }
                                        }>
                                            <img className="chakra-image css-5rhrdz" src="https://user-images.githubusercontent.com/10141928/147430936-5f48a973-d077-4822-bd5d-a792c58040e2.jpeg" alt="Quranic Verse"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-gmuwbf">
                                    <hr aria-orientation="horizontal" className="chakra-divider css-sao24q"/>
                                </div>
                                <div className="react-reveal"
                                    style={
                                        {
                                            animationFillMode: 'both',
                                            animationDuration: '1000ms',
                                            animationDelay: '0ms',
                                            animationIterationCount: 1,
                                            opacity: 1,
                                            animationName: 'react-reveal-788535647763568-1'
                                        }
                                }>
                                    <p className="chakra-text css-3yb62k">"And of all things We created two mates [i.e., counterparts]; perhaps you will remember."</p>
                                </div>
                                <div className="react-reveal"
                                    style={
                                        {
                                            animationFillMode: 'both',
                                            animationDuration: '1000ms',
                                            animationDelay: '0ms',
                                            animationIterationCount: 1,
                                            opacity: 1,
                                            animationName: 'react-reveal-788535647763568-1'
                                        }
                                }>
                                    <p className="chakra-text css-18kv6tl">(Az-Zari51:49)</p>
                                </div>
                            </div>
                        </div>
                        <div className="css-0">
                            <div className="css-0">
                                <div className="react-reveal"
                                    style={
                                        {
                                            animationFillMode: 'both',
                                            animationDuration: '1000ms',
                                            animationDelay: '0ms',
                                            animationIterationCount: 1,
                                            opacity: 1,
                                            animationName: 'react-reveal-788535647763568-1'
                                        }
                                }>
                                    <p className="chakra-text css-1mv58ab">
                                        Together with joyful hearts and the grace of God, we cordially request the honor of your presence at the wedding celebration of:
                                    </p>
                                </div>
                                <div className="css-16kb41"></div>
                                <div className="css-90z820">
                                    <div className="css-3a0vn7">
                                        <div className="react-reveal"
                                            style={
                                                {
                                                    animationFillMode: 'both',
                                                    animationDuration: '1000ms',
                                                    animationDelay: '0ms',
                                                    animationIterationCount: 1,
                                                    opacity: 1,
                                                    animationName: 'react-reveal-788535647763568-1'
                                                }
                                        }>
                                            <div className="css-0">
                                                <div className="css-gmuwbf">
                                                    <img className="chakra-image css-s5003v" src="https://user-images.githubusercontent.com/10141928/147430935-ac229ec9-0f46-4199-8623-6f3fdbbe92b9.jpeg"/>
                                                </div>
                                                <div className="css-gmuwbf">
                                                    <h2 className="chakra-heading css-10kjdkj"></h2>
                                                </div>
                                                <div className="css-gmuwbf">
                                                    <p className="chakra-text css-6mqtqc">Nailal Mustaghfiri</p>
                                                </div>
                                                <div className="css-gmuwbf">
                                                    <p className="chakra-text css-1wnz6u1">
                                                        <p className="css-colormain">The son of Mr. Parents Man
                                                            <br/>and Mrs. Parents Lady</p>
                                                    </p>
                                                </div>
                                                <div className="css-evb4b5">
                                                    <button type="button" className="chakra-button css-10y8iw4">
                                                        <span className="chakra-button__icon css-1wh2kri">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c-7.8-19.6-22.9-34.7-42.6-42.6-29.5-11.7-99.5-9-132.1-9s-102.7-2.6-132.1 9c-19.6 7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.7 102.7-9 132.1z"></path>
                                                            </svg>
                                                        </span>
                                                        namakugroom
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1j42uan"></div>
                            </div>
                            <div className="css-0">
                                <div className="css-3a0vn7">
                                    <div className="react-reveal"
                                        style={
                                            {
                                                animationFillMode: 'both',
                                                animationDuration: '1000ms',
                                                animationDelay: '0ms',
                                                animationIterationCount: 1,
                                                opacity: 1,
                                                animationName: 'react-reveal-788535647763568-1'
                                            }
                                    }>
                                        <div className="css-0">
                                            <div className="css-gmuwbf">
                                                <img className="chakra-image css-s5003v" src="https://user-images.githubusercontent.com/10141928/147430934-134504cd-f326-44f7-bb19-7bcc524e97d1.jpeg"/>
                                            </div>
                                            <div className="css-gmuwbf">
                                                <h2 className="chakra-heading css-10kjdkj"></h2>
                                            </div>
                                            <div className="css-gmuwbf">
                                                <p className="chakra-text css-10vb99i">Oktavia Pramana Sulistyo</p>
                                            </div>
                                            <div className="css-gmuwbf">
                                                <p className="chakra-text css-sa62g4">
                                                    <span color="mainColorTextLight">The daughter of Mr. Parents Man
                                                        <br/>and Mrs. Parents Lady</span>
                                                </p>
                                            </div>
                                            <div className="css-evb4b5">
                                                <button type="button" className="chakra-button css-1eswngf">
                                                    <span className="chakra-button__icon css-1wh2kri">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c-7.8-19.6-22.9-34.7-42.6-42.6-29.5-11.7-99.5-9-132.1-9s-102.7-2.6-132.1 9c-19.6 7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.7 102.7-9 132.1z"></path>
                                                        </svg>
                                                    </span>
                                                    namakubride
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandedContent;
