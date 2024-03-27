/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black w-full relative">
      <div
        className="px-6 lg:px-[70px] gap-6 xl:gap-[130px] flex flex-wrap flex-col-reverse lg:flex-row items-start justify-start mx-auto p-4 text-white 
    "
      >
        <div className="flex flex-wrap flex-col gap-5 items-start justify-start text-white">
          <div className="flex gap-2 mt-[107px]">
            <Image
              src="/icon/heart.png"
              style={{
                objectFit: "contain",
              }}
              width={20}
              height={20}
              alt="heart"
            />{" "}
            <span className="text-sm">People Trust us</span>
          </div>
          <div className="text-5xl lg:text-6xl  leading-tight whitespace-nowrap relative">
            We&apos;re <span className="text-red-500 ">Serious</span>
            <span className="">
              For
              <div className="absolute z-10 right-0 lg:-right-24 mx-auto top-0">
                <svg
                  width="87"
                  height="78"
                  viewBox="0 0 87 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    d="M44.2308 7.20762C44.2308 7.20762 49.3448 0.640842 57.7408 1.01544C66.1368 1.39003 73.6422 6.57573 75.9695 15.1782C78.2327 23.5423 76.1408 30.898 72.0304 35.0866C68.0442 39.1447 59.7367 39.5231 59.7367 39.5231M56.9067 57.0913C56.9067 57.0913 60.1208 57.3637 62.0828 62.3545C64.5928 68.7397 58.7689 75 58.7689 75C58.9609 70.974 53.5663 70.344 49.309 68.2062C45.0517 66.0683 46.3039 59.6491 48.0569 56.6618C49.8099 53.6745 53.4873 52.441 55.6752 53.3586C57.5751 54.1551 56.0292 57.5605 53.8808 55.8407C50.6836 53.281 51.8152 47.6961 66.0897 43.7421C80.3642 39.788 85 55.3697 85 55.3697C85 55.3697 82.9137 54.2799 78.0708 55.4529C73.2279 56.6278 74.3144 57.8008 68.4697 58.0543C62.6251 58.3059 55.8842 51.0315 55.8842 51.0315M55.8842 51.0334C55.8842 51.0334 74.4688 44.2548 77.2819 49.3061C80.095 54.3575 63.5402 46.7653 63.5402 46.7653M50.8945 58.5272C50.8945 58.5272 56.7805 64.7421 57.5318 66.0002C58.2831 67.2583 57.1552 69.3338 55.7166 68.3916C54.2762 67.4475 55.8861 59.844 55.8861 59.844M65.4288 51.1242C65.4288 51.1242 68.4867 51.7713 70.6577 53.8675M9.09714 13.116C13.1323 7.87357 22.3436 3.17031 33.4886 4.42842C44.6337 5.68653 51.3972 10.2157 55.7788 18.1428C60.1623 26.0698 59.5352 41.9239 55.1518 48.0896C50.7702 54.2572 43.342 62.4567 28.9244 61.9194C15.0529 61.4029 4.53291 52.318 1.62378 39.2299C-0.959598 27.6061 5.06014 18.3604 9.09714 13.116ZM20.7977 27.0366C19.7244 27.4547 19.4194 29.9312 20.7977 30.3077C22.176 30.6861 24.0118 29.8044 23.6786 28.6712C23.3434 27.5398 22.0913 26.5334 20.7977 27.0366ZM47.9684 20.7536C48.4636 19.8058 47.3131 18.2166 46.1796 18.9204C45.0442 19.6241 44.2891 21.3382 45.1327 21.7506C45.9781 22.1631 47.3715 21.8963 47.9684 20.7536ZM22.176 36.4696C21.7241 37.4383 22.9442 38.9726 24.0457 38.2177C25.1472 37.4628 25.8251 35.7166 24.9627 35.3439C24.1022 34.9712 22.7202 35.3023 22.176 36.4696ZM67.6657 10.4371C67.2458 10.7701 68.5262 16.1639 67.1498 16.5593C65.7734 16.9547 65.6265 15.4033 66.2893 15.2047C66.9521 15.0079 69.6918 19.4368 70.2717 19.259C70.8517 19.0831 70.0514 13.1728 71.2301 13.343C72.4107 13.5114 72.4597 14.9512 71.7216 15.0363C70.9853 15.1195 68.0856 10.1041 67.6657 10.4371ZM41.7114 12.7736C43.1161 15.7647 34.2437 34.5455 31.9164 31.8496C29.5891 29.1555 45.0536 15.3447 48.0851 16.0163C51.1166 16.6879 57.304 29.6966 54.4193 32.1674C51.5347 34.6382 31.6547 36.1423 32.003 34.0177C32.3513 31.8931 51.5347 32.0653 52.704 35.1964C53.8733 38.3274 53.636 40.2742 51.9207 44.0012C50.2053 47.7283 48.1868 52.6264 44.099 51.7694C40.013 50.9123 29.4686 37.4912 31.8486 36.0042C34.2286 34.5172 40.7681 50.2729 38.614 54.6867C36.8195 58.3664 22.0762 59.4675 20.696 53.8864C19.0823 47.3594 27.9491 35.3382 29.4102 36.1272C30.8714 36.9161 22.3134 51.7542 15.8023 51.1242C9.29108 50.4923 6.22191 39.0066 7.83934 34.8104C9.45678 30.6142 27.9283 31.8799 28.3463 33.8645C28.7644 35.8472 8.9804 30.968 7.46652 28.6523C5.95264 26.3366 12.7331 12.1947 19.0277 13.1406C25.3224 14.0866 32.0463 31.2007 30.186 32.1807C28.3256 33.1607 20.0257 14.2568 24.0514 10.5657C28.0771 6.87465 39.7795 8.65492 41.7114 12.7736Z"
                    stroke="#F65F5F"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
            </span>{" "}
            <br />
            <span className="text-red-500">Food</span> &{" "}
            <span className="text-yellow-500">
              Delivery<span className="text-white">.</span>
              <div className="w-fit ml-auto">
                <Image
                  src={"/header/retangle-5.png"}
                  width={257}
                  height={8.2}
                  alt=""
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </span>
          </div>
          <div className=" text-xl lg:text-2xl max-w-[517px]">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </div>
          <div className="w-full md:w-fit flex items-center gap-2 border border-white rounded-full py-2 px-2">
            <div className="w-6 h-6 flex items-center justify-center  ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <input
              placeholder="Search food"
              className="w-full md:w-fit block bg-transparent border-none outline-none focus:outline-none focus:border-none
            placeholder:text-gray-500"
            />
            <div className="rounded-full bg-[#FDCE77] w-[42px] h-[42px] flex items-center justify-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#F65F5F] px-5 py-2 text-black">
              Download App
            </div>
            <div className="rounded-full w-12 h-12 shadow-xl shadow-[#F65F5F] flex items-center justify-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                  fill="#F65F5F"
                />
              </svg>
            </div>
            <span className="text-white">Watch Video</span>
          </div>
        </div>

        <div>
          <Image
            className="absolute right-0 ml-auto z-[3] hidden lg:block "
            src={"/header/retangle-6.png"}
            alt=""
            fill
            objectFit="cover"
          />
          <img
            className="absolute right-0 !w-fit ml-auto z[2] hidden   xl:block"
            src={"/header/retangle-1.png"}
            alt=""
          />
        </div>
        <div className="mt-12 lg:flex-1 relative flex justify-center xl:justify-start ">
          <div className="max-h-[538px]">
            {" "}
            <img src={"/header/header-right.png"} alt="" loading="lazy" />
          </div>
          <img
            className="absolute right-0 lg:right-[82px] -bottom-0 lg:-bottom-12"
            alt=""
            src={"/header/retangle-4.png"}
            loading="lazy"
          />
          <div className="absolute right-0 top-0">
            <svg
              width="119"
              height="334"
              viewBox="0 0 119 334"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.2022 12.4414C49.9047 10.1513 52.198 8.39792 54.3301 9.28539L63.9244 13.279C66.0565 14.1665 66.4283 17.0292 64.5937 18.4319L56.3379 24.744C54.5033 26.1467 51.8382 25.0373 51.5408 22.7472L50.2022 12.4414Z"
                fill="#F65F5F"
              />
              <path
                d="M1 333C29.5 319.167 95.2491 269.452 59 240C27 214 -18.5 306.5 59 308C136.5 309.5 138 124.5 59 18"
                stroke="#FDCE77"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-dasharray="8 8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-[126px] text-white relative px-[75px] pb-[256px]">
        <div className="max-h-[145px]">
          <Image
            src={"/header/retangle-7.png"}
            loading="lazy"
            objectFit="contain"
            alt=""
            className="absolute top-10"
            width={145}
            height={145}
          />
        </div>

        <h3 className="text-white text-[40] xl:text-[67px] mx-auto w-fit  drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
          Today <span className="text-red-500">special</span> offers
        </h3>
        <p className="w-fit mx-auto text-center text-lg mt-5 mb-[196px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> Industry&apos;s standard
          dummy text ever since the 1500s
        </p>
        <div className="flex gap-2 xl:gap-4 w-fit mx-auto flex-wrap">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl border drop-shadow border-black bg-gradient w-[310px] relative max-h-[368px] px-[34px] text-center pb-[57px]"
            >
              <img
                src="/header/retangle-8.png"
                loading="lazy"
                className="absolute bottom-[220px]"
                alt=""
              />
              <div className="mt-[131px] mb-[30px]">(4.5)</div>
              <div className="mb-[16px]">Kebab</div>
              <p className="text-center">
                Lorem Ipsum is simply dummy <br /> Text of the printing and{" "}
                <br /> Typesetting industry
              </p>
              <div className="rounded-full bg-[#F65F5F] py-2.5 px-5 w-fit text-center absolute mx-auto left-0 right-0 -bottom-5 ">
                Order Now
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <img src="/header/rosemary.png" alt="" className="absolute right-0" />
        </div>
        <div className="flex ">
          <div className="relative">
            <img src="/header/retangle-9.png" alt="" />
            <img
              src="/header/retangle-10.svg"
              className="absolute right-0 top-40"
              alt=""
            />
          </div>
          <div className="xl:mt-[320px]">
            <h3 className="text-5xl mb-4">
              We are <span className="text-red-500">more</span> than <br />
              <span className="text-yellow-500">multiple</span> service
            </h3>
            <p className="max-w-[690px] text-left">
              This is a type of resturent which typically serves food and drink,
              in addition to light refreshments such as baked goods or snacks.
              The term comes frome the rench word meaning food
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
