import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import PassnodeTopbar from "../Passnode-Topbar.svg";
import TragZaLogo from "../TragZa-Logo.svg";
import Img from "../Img.png";
import Img2 from "../Img2.png";
import Img3 from "../Img3.png";
import Img4 from "../Img4.png";
import Img5 from "../Img5.png";

const HowToSetup = () => {
  const router = useRouter();

  const route = () => {
    router.push("/");
  };

  const route2 = () => {
    router.push("/app");
  };

  return (
    <div>
      <div className="z-10 fixed hidden 750:flex">
        <PassnodeTopbar />
      </div>
      <div className="bg-gray2 fixed z-0 w-screen flex justify-between 450:justify-center items-center">
        <button
          onClick={route}
          className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          Home
        </button>
        <button className="mt-5 w-full 450:w-[150px] h-[30px] bg-blue3 text-black active:bg-blue4">
          How To Setup
        </button>
        <button
          onClick={route2}
          className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          App
        </button>
      </div>
      <div className="bg-gray2 fixed top-[50px] z-0 w-screen flex flex-col justify-center items-center">
        <div className="bg-blue3 w-screen 450:w-[450px] h-[2px] mb-5"></div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="text-2xl mt-[170px]">
          Step 1. Create web3.storage account
        </div>
        <Link href="https://web3.storage" target="_blank">
          <button className="w-[200px] h-[30px] mt-10 bg-blue2 hover:bg-blue3 hover:text-black active:bg-blue4">
            Go to web3.storage
          </button>
        </Link>
      </div>
      <div className="bg-gray w-screen flex justify-center">
        <div className="mt-10 mb-[100px]">
          <Image placeholder="blur" src={Img} width={1200} height={0} alt="" />
        </div>
      </div>
      <div className="bg-gray2 w-screen px-5 flex flex-col justify-center items-center">
        <div className="text-2xl mt-[100px]">
          Step 2. Hover on account and click on API tokens
        </div>
      </div>
      <div className="bg-gray2 w-screen flex justify-center">
        <div className="mt-10 mb-[100px]">
          <Image placeholder="blur" src={Img2} width={1200} height={0} alt="" />
        </div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="text-2xl mt-[100px]">
          Step 3. Create and copy API token
        </div>
      </div>
      <div className="bg-gray w-screen flex justify-center">
        <div className="mt-10 mb-[100px]">
          <Image placeholder="blur" src={Img3} width={1200} height={0} alt="" />
        </div>
      </div>
      <div className="bg-gray2 w-screen px-5 flex flex-col justify-center items-center">
        <div className="text-2xl mt-[100px]">
          Step 4. Paste API token and click on register
        </div>
      </div>
      <div className="bg-gray2 w-screen flex justify-center">
        <div className="mt-10 mb-[100px]">
          <Image placeholder="blur" src={Img4} width={1200} height={0} alt="" />
        </div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="text-2xl mt-[100px]">
          Step 5. Enter master password and click on login
        </div>
      </div>
      <div className="bg-gray w-screen flex justify-center">
        <div className="mt-10 mb-[100px]">
          <Image placeholder="blur" src={Img5} width={1200} height={0} alt="" />
        </div>
      </div>
      <div className="bg-black w-screen flex justify-center">
        <div className="flex mt-2 mb-2">
          <div>Developed by</div>
          <div className="mx-2 -mt-2">
            <TragZaLogo />
          </div>
          <div>TragZa with ❤️</div>
        </div>
      </div>
    </div>
  );
};

export default HowToSetup;
