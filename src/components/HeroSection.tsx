import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import "@/components/hero.css";
import heroimage from "../assets/heroimage.jpeg";
import f1 from "../assets/features/f1.png";
import f2 from "../assets/features/f2.png";
import f3 from "../assets/features/f3.png";
import f4 from "../assets/features/f4.png";
import am1 from "../assets/amenities/am1.jpeg";
import am2 from "../assets/amenities/am2.jpeg";
import am3 from "../assets/amenities/am3.jpeg";
import am4 from "../assets/amenities/am4.png";
import MenuIcon from "@mui/icons-material/Menu";

const HeroSection = () => {
  return (
    <main>
      <section className="flex justify-center items-center">
        <Image
          src={heroimage}
          alt="hero-image"
          className="relative z-[-10] h-[705px] w-full inset-0 text-transparent object-cover"
        />
        <div className="h-[705px] absolute top-0 left-0 w-full  bg-gradient-to-r from-[#062349] to-[rgba(24,141,249,0.05)] opacity-80"></div>

        <div className="dark-grade"></div>

        <div className="hero-body absolute w-[1200px] h-[658px]">
          <div className="nav flex justify-between items-center relative top-6">
            <Image
              src={logo}
              alt="logo"
              className="logo w-[160.84px] h-[19.86px]"
            />
            <button className="nav-btn float-right h-12 w-48 gap-10 rounded-lg relative border-2 border-solid border-blue-400 text-blue-400 font-poppins text-base font-semibold">
              ENQUIRE NOW{" "}
            </button>

            <div className="burgure">
              <MenuIcon className="burgure-icone" />
            </div>
          </div>

          <div className="main-body-wrapper flex relative justify-between">
            <div className="left-body w-[500px] h-[400px] text-white">
              <div className="main-hearding">
                <div className="main-h-1">
                  <h1>Harbour Lights</h1>
                  <div className="main-h-sub1 flex gap-2">
                    {" "}
                    <h1>de</h1> <h1 className="color-h1">GRESOGONO</h1>
                  </div>
                </div>
                <div className="main-h-2 pt-3 font-poppins font-bold leading-[33px] text-left">
                  <h3>
                    1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                  </h3>
                </div>
              </div>
              <div className="main-sub-heading">
                <div className="m-sub-1">
                  <span className="p-2 bg-slate-900/65 my-2  border-l-4 border-[#17ABFF]">
                    Rental Returns of UPTO 11%**
                  </span>
                </div>
                <div className="m-sub-2">
                  <span className="p-2 bg-slate-900/65 my-2 border-l-4 border-[#17ABFF]">
                    Capital Appreciation of UPTO 32%**
                  </span>
                </div>
              </div>
            </div>
            <div className="right-body">
              <div className="right-card  bg-[#000]/10 backdrop-blur-md  shadow-2xl border  pt-10 rounded-xl   ">
                <div className="r-card-top">
                  <div className="top-text">
                    <span className="top-text-1">PRICING STARTS FROM</span>
                    <h1 className="top-text-2 text-5xl font-medium my-1 font-oswald">
                      $ 425,000
                    </h1>
                    <span className='top-text-3 class="text-2xl  my-2 font-oswald"'>
                      AED 1.3 Million
                    </span>
                  </div>

                  <button className="card-btn">GET A PRESENTATION</button>
                </div>
                <div className="px-6 r-card-bottom backdrop-blur-lg">
                  <span className="card-bottom-text w-4">
                    Get an Expert’s Presentation of Real Estate in Dubai for
                    Life and investment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* part-2 */}
      <section>
        <div className="features">
          <div className="features-box">
            <div className="f-b">
              <Image src={f1} className="f-logo" alt="feature-1" />
              <div className="f-b-text-1">
                <span>BOOK WITH</span>
              </div>
              <div className="f-b-text-2">
                <span>Only 20%</span>
              </div>
              <div className="f-bottom"></div>
            </div>

            <div className="f-b">
              <Image src={f2} className="f-logo" alt="feature-1" />
              <div className="f-b-text-1">
                <span>BOOK WITH</span>
              </div>
              <div className="f-b-text-2">
                <span>Only 20%</span>
              </div>
              <div className="f-bottom"></div>
            </div>
            <div className="f-b sm:hidden">
              <Image src={f3} className="f-logo" alt="feature-1" />
              <div className="f-b-text-1">
                <span>BOOK WITH</span>
              </div>
              <div className="f-b-text-2">
                <span>Only 20%</span>
              </div>
              <div className="f-bottom"></div>
            </div>
            <div className="f-b sm:hidden">
              <Image src={f4} className="f-logo" alt="feature-1" />
              <div className="f-b-text-1">
                <span>BOOK WITH</span>
              </div>
              <div className="f-b-text-2">
                <span>Only 20%</span>
              </div>

              <div className="f-bottom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* part-3 */}

      <section>
        <div className="amenities-wrapper">
          <div className="amenities">
            <div className="amenties-text">
              <div className="am-top-text">
                <h1 className="am-top-text-1 text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">
                  HARBOUR
                </h1>
                <h1 className="am-top-text-1 text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">
                  LIGHT
                </h1>
                <span className="am-top-text-2 text-[10px] mt-2">
                  de GRISOGONO
                </span>
                <span className="am-top-text-3 text-[6px] leading-[0.2]">
                  GENEVE
                </span>
              </div>

              <div className="am-middle-text">
                <div className="max-w-3xl text-center mt-10">
                  <h1 className="text-3xl sm:text-4xl font-medium font-oswald uppercase">
                    Features & Amenities
                  </h1>
                  <span className="text-[#343434] am-middle-text-2 my-4">
                    Harbour Lights beautifully honours maritime voyages while
                    embracing an opulent seafront lifestyle. Its
                    maritime-inspired amenities provide an unmatched seaside
                    experience, offering a life of tranquility and bliss.
                  </span>
                </div>
              </div>
            </div>

            <div className="amenities-box max-w-6xl mx-auto flex flex-row flex-wrap justify-evenly md:justify-between items-center text-[#00357B] my-12 px-4 gap-y-4">
              <div className="flex flex-col items-center gap-2">
                <div className="am-sub-box relative w-36 h-34 sm:w-40 sm:h-40 md:w-52 md:h-52">
                  <div className="grey-back"></div>
                  <Image src={am1} alt="am1-img" className="amenities-img" />
                </div>
                <div className="bg-[#FCFCFC] min-w-[160px]  sm:min-w-[190px]  md:min-w-[227px] min-h-[120px] sm:min-h-[140px] md:min-h-[157px] shadow-2xl mt-[-70px] sm:mt-[-100px] rounded-2xl flex justify-center items-end my-4">
                  <h1 className="am-sub-text w-3px text-sm text-center font-semibold whitespace-pre-wrap mb-3">
                    Floating Pools
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="am-sub-box relative w-36 h-34 sm:w-40 sm:h-40 md:w-52 md:h-52">
                  <div className="grey-back"></div>
                  <Image src={am2} alt="am1-img" className="amenities-img" />
                </div>
                <div className="bg-[#FCFCFC] min-w-[160px]  sm:min-w-[190px]  md:min-w-[227px] min-h-[120px] sm:min-h-[140px] md:min-h-[157px] shadow-2xl mt-[-70px] sm:mt-[-100px] rounded-2xl flex justify-center items-end my-4">
                  <h1 className="am-sub-text am-sub-text1 w-3px text-sm text-center font-semibold whitespace-pre-wrap mb-3">
                    Spacious Cabins Like Rooms
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="am-sub-box relative w-36 h-34 sm:w-40 sm:h-40 md:w-52 md:h-52">
                  <div className="grey-back"></div>
                  <Image src={am3} alt="am1-img" className="amenities-img" />
                </div>
                <div className="bg-[#FCFCFC] min-w-[160px]   sm:min-w-[190px]  md:min-w-[227px] min-h-[120px] sm:min-h-[140px] md:min-h-[157px] shadow-2xl mt-[-70px] sm:mt-[-100px] rounded-2xl flex justify-center items-end my-4">
                  <h1 className="am-sub-text am-sub-text1 w-4px text-sm text-center font-semibold whitespace-pre-wrap mb-3">
                    Sea Facing Swimming Pools
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="am-sub-box relative w-36 h-34 sm:w-40 sm:h-40 md:w-52 md:h-52">
                  <div className="grey-back"></div>
                  <Image src={am4} alt="am1-img" className="amenities-img" />
                </div>
                <div className="bg-[#FCFCFC] min-w-[160px]  sm:min-w-[190px]  md:min-w-[227px] min-h-[120px] sm:min-h-[140px] md:min-h-[157px] shadow-2xl mt-[-70px] sm:mt-[-100px] rounded-2xl flex justify-center items-end my-4">
                  <h1 className="am-sub-text w-3px text-sm text-center font-semibold whitespace-pre-wrap mb-3">
                    Gymnasium & FItness
                  </h1>
                </div>
              </div>

              <div className="w-full flex justify-end items-end ">
                <span className="max-w-[460px] text-[10px] text-[#686868] text-center">
                  *T&Cs apply | ** Based on similar branded projects in the last
                  2 years. Source 1 | Source 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* part-4 */}

      <section>
        <div className="gal-butttons-wrapper">
          <div className="gall-top-btns">
            <div className="ex-tr-btn flex justify-end gap-2">
              <button className="text-white bg-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
                EXTERIORS
              </button>
              <button className="border border-[#00357B] text-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
                INTERIORS
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
