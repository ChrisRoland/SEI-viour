import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/Seiviour.svg";
import Badge from "../assets/bbb.jpeg";

const WebComponent = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Jan 16, 2024 11:40:00").getTime();
    console.log();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  // once the component mounts
  useEffect(() => {
    startTimer();
  }, []);

  // const days = "07";
  // const hours = 20;
  // const minutes = 30;
  // const seconds = 45;

  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    const contractInput = document.getElementById("contract");

    // Check if the input element exists
    if (contractInput) {
      // Select the text in the input field
      contractInput.select();
      contractInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    }
  };

  return (
    <div className="text-white">
      <header className=" ">
        {/* Header Section*/}
        <div className="nav mb-10 max-sm:flex max-sm:justify-center">
          <div className="flex items-center bg-inherit ">
            <img
              src={Logo}
              alt="Seiviour logo"
              className="w-[60px] max-sm:w-[40px] rounded-full overflow-hidden shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
            ></img>
            <h1 className="bg-inherit text-white text-4xl max-sm:text-3xl px-2">
              SEIviour
            </h1>
          </div>
          <div className="flex gap-16 bg-inherit max-sm:hidden">
            <ScrollLink
              to="links"
              smooth={true}
              duration={900}
              className="bg-inherit"
            >
              <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[200px] text-center text-[#e2c67a] text-2xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <a href="" className="bg-inherit">
                  Buy
                </a>
              </div>
            </ScrollLink>
            {/* <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                Airdrop
              </a>
            </div>
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                NFTS
              </a>
            </div> */}
          </div>
        </div>
      </header>

      {/*Hero*/}
      <div className="">
        <div className="">
          <div className="flex justify-center">
            <img
              src={Badge}
              alt="Seiviour Logo"
              className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px] mt-[110px] max-sm:mt-[100px] rounded-full overflow-hidden shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
            ></img>
          </div>
          <div className="flex justify-center mt-5 gap-3 bg-inherit lg:hidden">
          <ScrollLink
              to="links"
              smooth={true}
              duration={900}
              className="bg-inherit"
            >
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-2xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="" className="bg-inherit ">
                Buy
              </a>
            </div>
            </ScrollLink>
            {/* <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[95px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                Airdrop
              </a>
            </div>
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[70px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                NFTS
              </a>
            </div> */}
          </div>
          <div className="flex justify-center m-5">
            <p className="w-[55%] max-sm:w-auto max-sm:px-2 text-white text-xl max-sm:text-lg text-center font-bold tracking-wide leading-7 ">
              <span className="text-[#e2c67a]">SEIviour token</span> is where crypto meets divine hilarity! Embrace the spirit of the DEIciples and join the crypto-revolution with a touch of heavenly humor. Our mission? To turn water into blockchain, multiply your assets, and spread joy in every transaction. This is the place miracles of crypto meet the chuckles of believers. Walk the digital path with us and witness the laughter-worthy wonders of decentralized finance, where heaven and hodl collide! - <span className="text-[#e2c67a]">
                Come! And be SEIved.
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center m-10">
          <div className="flex w-[8rem] justify-between">
            <hr className="w-[10px] h-[7px] bg-[#e2c67a] border-none"></hr>
            <hr className="w-[80px] h-[7px] bg-[#e2c67a] border-none"></hr>
            <hr className="w-[10px] h-[7px] bg-[#e2c67a] border-none"></hr>
          </div>
        </div>
      </div>

      {/*countdown*/}
      <div className="w-[70%] max-sm:w-[90%] border-[1px] border-yellow-100 rounded-[12px] m-[0px_auto_40px_auto] p-[20px]">
        <div className="flex justify-center bg-gradient-to-b from-red-600 to-yellow-300 shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] shadow-black rounded-[20px]">
          <div className="trans w-[60%] p-[30px] max-sm:w-[80%] max-sm:px-[0px] text-white">
            <p className="font-semibold text-2xl max-sm:text-xl leading-8 text-center mb-4">
              Thanksgiving Offering Starts in...
            </p>
            <div className="flex text-white justify-between">
              <div className="border-[1px] border-white rounded w-[20%] max-sm:w-[40%] max-sm:p-1 text-center">
                <p className="font-semibold text-[30px] max-sm:text-[25px] text-center m-[2px]">
                  {timerDays}
                </p>
                <p className="max-sm:text-xs">days</p>
              </div>

              <span className="m-[30px_0px]">
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
              </span>

              <div className="border-[1px] border-white rounded w-[20%] max-sm:w-[40%] max-sm:p-1 text-center">
                <p className="font-semibold text-[30px] max-sm:text-[25px] text-center m-[2px]">
                  {timerHours}
                </p>
                <p className="max-sm:text-xs">hours</p>
              </div>

              <span className="m-[30px_0px]">
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
              </span>

              <div className="border-[1px] border-white rounded w-[20%] max-sm:w-[40%] max-sm:p-1 text-center">
                <p className="font-semibold text-[30px] max-sm:text-[25px] text-center m-[2px]">
                  {timerMinutes}
                </p>
                <p className="max-sm:text-xs">mins</p>
              </div>

              <span className="m-[30px_0px]">
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
                <hr className="w-[12px] h-[12px] max-sm:w-[10px] max-sm:h-[10px] rounded-[50%] bg-[#F6C745] border-2 border-red-700 m-[6px_0]" />
              </span>

              <div className="border-[1px] border-white rounded w-[20%] max-sm:w-[40%] max-sm:p-1 text-center">
                <p className="font-semibold text-[30px] max-sm:text-[25px] text-center m-[2px]">
                  {timerSeconds}
                </p>
                <p className="max-sm:text-xs">secs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-lg max-sm:text-[0.8rem] mt-3 text-white">
          <p>
            Total supply:{" "}
            <span className="text-[#e2c67a]">1,000,000,000 $SEIV</span>
          </p>
          <p>0 Taxes</p>
        </div>
      </div>

      {/*Contract*/}
      <div className="text-center text-white m-7">
        <div className="flex-row justify-center">
          <h2 className="text-2xl max-sm:text-xl m-2">Contract</h2>
          <div className="flex justify-center">
            <div className="contra bg-black border border-yellow-100 rounded-xl w-fit shadow-[0_2px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <input
                type="text"
                name="contract"
                id="contract"
                readonly=""
                aria-readonly="true"
                className="p-3 rounded-xl focus:outline-none text-center"
                value="factory/sei1pjdffrn4t4g3wc646l6rxfy5mrrgd6lzj4kdtj/SEIV"
              ></input>
              <button
                type="button"
                className="mr-2"
                title={isCopied ? "Copied!" : "Copy contract address"}
                onClick={copyToClipboard}
              >
                {isCopied ? (
                  "Copied!"
                ) : (
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      data-name="layer1"
                      d="M53.443 32A26.002 26.002 0 1 1 27.75 10a25.914 25.914 0 0 1 10 1.993"
                      fill="none"
                      stroke="#202020"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                )}
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5312 2.0625L11.9375 0.46875C11.6875 0.21875 11.2188 0 10.875 0H5.5C4.65625 0 4 0.6875 4 1.5V3H1.5C0.65625 3 0 3.6875 0 4.5V14.5C0 15.3438 0.65625 16 1.5 16H8.5C9.3125 16 10 15.3438 10 14.5V13H12.5C13.3125 13 14 12.3438 14 11.5V3.125C14 2.78125 13.7812 2.3125 13.5312 2.0625ZM8.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V4.6875C1.5 4.59375 1.5625 4.5 1.6875 4.5H4V11.5C4 12.3438 4.65625 13 5.5 13H8.5V14.3125C8.5 14.4375 8.40625 14.5 8.3125 14.5ZM12.3125 11.5H5.6875C5.5625 11.5 5.5 11.4375 5.5 11.3125V1.6875C5.5 1.59375 5.5625 1.5 5.6875 1.5H9V4.25C9 4.6875 9.3125 5 9.75 5H12.5V11.3125C12.5 11.4375 12.4062 11.5 12.3125 11.5ZM12.5 3.5H10.5V1.5H10.7812C10.8438 1.5 10.875 1.53125 10.9062 1.5625L12.4375 3.09375C12.4688 3.125 12.5 3.15625 12.5 3.21875V3.5Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Buy Links */}
      <div id="links" className="text-center m-10">
        <div className="flex justify-center">
          <div className="w-[75%] max-sm:w-[90%] grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              className="border border-yellow-500 rounded-xl p-2 m-2 text-[#e2c67a] hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
              href="https://dojo.trading/swap"
            >
              Buy on Dojo
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="border border-yellow-500 rounded-xl p-2 m-2 text-[#e2c67a] hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
              href="https://app.astroport.fi/swap"
            >
              Buy on Astroport
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="border border-yellow-500 rounded-xl p-2 m-2 text-[#e2c67a] hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
              href="https://coinhall.org"
            >
              Buy on Coin Hall
            </a>
          </div>
        </div>
        <div className="flex justify-center text-yellow-100 pt-5 m-3">
          <a
            className="px-3"
            href="https://x.com/Seiviour_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>

          <a
            className="px-3"
            href="https://t.co/yFWWndPno3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <hr className="w-[90%] h-[2px] bg-[#e2c67a] border-none"></hr>
      </div>

      <footer className="text-center m-4 border-t-black">
        <p>Built in the Sanctuary of the SEIviour - © SEIviour 2024</p>
      </footer>
    </div>
  );
};

export default WebComponent;
