import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/Seiviour.svg";
import John from "../assets/John.png";
import Badge from "../assets/bbb.jpeg";
import Dinner from "../assets/Dinner.jpeg";

const About = () => {
  return (
    <div className="text-white">
      {/* Header Section*/}
      <header className="">
        <div className="nav mb-10 max-sm:flex max-sm:justify-center">
          <div className="flex items-center ">
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
              <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[150px] text-center text-[#e2c67a] text-2xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <a href="#links" className="bg-inherit">
                  Buy
                </a>
              </div>
            </ScrollLink>
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[150px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="https://seiviour.xyz" className="bg-inherit ">
                Home
              </a>
            </div>
            {/*
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                NFTS
              </a>
            </div> */}
          </div>
        </div>
      </header>

      {/* Main*/}
      <main className="">
        <div className="">
          <div className="">
            <div className="flex justify-center">
              <img
                src={Dinner}
                alt="Seiviour Logo"
                className="w-[800px] h-[300px] max-sm:w-[300px] max-sm:h-[150px] mt-[110px] max-sm:mt-[100px] rounded-xl overflow-hidden shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200"
              ></img>
            </div>

            <div className="flex justify-center mt-5 gap-3 bg-inherit md:hidden lg:hidden">
              <ScrollLink
                to="links"
                smooth={true}
                duration={900}
                className="bg-inherit"
              >
                <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                  <a href="" className="bg-inherit ">
                    Buy
                  </a>
                </div>
              </ScrollLink>
              <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[100px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <a href="" className="bg-inherit ">
                  About
                </a>
              </div>
              {/*
            <div className="bg-inherit border border-yellow-500 rounded-[50px] w-[70px] text-center text-[#e2c67a] text-xl hover:bg-yellow-200 hover:text-black ease-in-out duration-300 shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
              <a href="/register" className="bg-inherit ">
                NFTS
              </a>
            </div> */}
            </div>

            {/*DiSEIple */}
            <div className="border border-yellow-100 rounded-xl w-[70%] max-sm:w-[90%] mx-auto m-8">
              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto flex-row justify-center m-9 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <h2 className="text-4xl max-sm:text-2xl underline ">
                  The Scripture ✝️
                </h2>
                <p className="p-3">
                  Just as you may know already we have Community leads and
                  project heads  in our presence who are indeed anonymous, but I
                  thought it well to probably give you a background history of
                  who they are, I would have shared their house address but
                  information reaching me  is that some of them are homeless 🏡
                  so I'll pass on that. Here are some key 🔑 DeSEIples of our
                  community
                </p>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center items-center underline">
                  <h2 className="pl-3 text-xl max-sm:text-lg">
                    JOHN @johndoe_baptist 🌊
                  </h2>
                </div>
                <div className="">
                  <p className="p-3">
                    A professional web3 project manager with a huge experience.
                    Managing different companies on Cosmos and EVM chains ⛓️
                    sometimes I wonder what he is looking for on the Seiviour
                    team, I hope he doesn't ask for money.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center items-center underline">
                  <h2 className="pl-3 text-xl max-sm:text-lg">
                    PHILIP @therealphilip 👨‍🏫
                  </h2>
                </div>
                <div className="flex-col justify-center">
                  <p className="p-3">
                    A professional project advisor and Kol, has a large
                    experience with projects on Cosmos, he knows his work alot
                    and does it very well, we won't pay him though, heard he is
                    homeless, may be just rumours.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center items-center underline">
                  <h2 className="pl-3 text-xl max-sm:text-lg">
                    JUDAS @judas_IsSeiriot 🤥
                  </h2>
                </div>
                <div className="flex-col justify-center">
                  <p className="p-3">
                    Our head developer at Seiviour, with a 5 years experience in
                    project development and Product Publicity, his mission is to
                    use the knowledge gathered over the years to build the best
                    performing meme asset ever, could be a big fat lie though,
                    he is judas don't trust him, be vigilant.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center items-center underline">
                  <h2 className="pl-3 text-xl max-sm:text-lg">
                    PETER @Peterfisherman 🧑‍💻
                  </h2>
                </div>
                <div className="flex-col justify-center">
                  <p className="p-3">
                    A known marketing and publicity expert, has a good history
                    working as a marketer for a 250 million dollar valuation
                    meme coin and also marketing Gate Centralised exchange, I
                    think he was fired so we hired him so he doesn't roam
                    jobless.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center items-center underline">
                  <h2 className="pl-3 text-xl max-sm:text-lg">
                    JAMES @Jameseii 👨‍💼
                  </h2>
                </div>

                <div className="flex-col justify-center">
                  <p className="p-3">
                    Honestly just a random cool guy we saw on twitter and he
                    likes the job so we gave him, no big deal, we love him
                    though.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center">
                  <h2 className="pl-3 text-xl max-sm:text-lg underline">
                    Thomas @Doubtiin_Thomas 📊
                  </h2>
                </div>
                <div className="flex justify-center">
                  <p className="p-3">
                    Expert financial analyst with over 5 years in the works, he
                    hated meme coins and never bought pepe when he had the
                    chance, now he is broke, poor dude, good thing we hired him.
                  </p>
                </div>
              </div>

              <div className="text-center w-[65%] max-sm:w-[85%] mx-auto m-10 bg-gradient-to-t from-yellow-700 rounded-xl shadow-[0_5px_5px_0px_rgba(0,0,0,0.3)] shadow-yellow-200">
                <div className="flex justify-center">
                  <h2 className="pl-3 text-xl max-sm:text-lg underline">
                    ANDREW @Andrew_SEI 🤔
                  </h2>
                </div>

                <div className="flex justify-center">
                  <p className="p-3">
                    Honestly I don't even know who this is, I think he is part
                    of the team, he seems cool though
                  </p>
                </div>
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
      </main>

      <footer className="text-center m-4 border-t-black">
        <p>Built in the Sanctuary of the SEIviour - © SEIviour 2024</p>
      </footer>
    </div>
  );
};

export default About;
