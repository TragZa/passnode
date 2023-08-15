import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PassnodeTopbar from "../Passnode-Topbar.svg";
import GooglePlayBadge from "../Google-Play-Badge.svg";
import AppStoreBadge from "../App-Store-Badge.svg";
import UserIcon from "../User-Icon.svg";
import ArrowIcon2 from "../Arrow-Icon.svg";
import IPFSIcon from "../IPFS-Icon.svg";
import AsteriskIcon from "../Asterisk-Icon.svg";
import ZeroIcon from "../Zero-Icon.svg";
import NextjsLogo from "../Nextjs-Logo.svg";
import IPFSLogo from "../IPFS-Logo.svg";
import FilecoinLogo from "../Filecoin-Logo.svg";
import Web3StorageLogo from "../Web3-Storage-Logo.svg";
import PassnodeLogo from "../Passnode-Logo.svg";
import TragZaLogo from "../TragZa-Logo.svg";
import Hexagons from "../Hexagons.png";
import CursorIcon from "../components/icons/CursorIcon";
import SetupIcon from "../components/icons/SetupIcon";
import LockIcon from "../components/icons/LockIcon";
import WebsiteIcon2 from "../components/icons/WebsiteIcon2";
import CardIcon2 from "../components/icons/CardIcon2";
import NoteIcon2 from "../components/icons/NoteIcon2";
import GenerateIcon2 from "../components/icons/GenerateIcon2";
import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import ArrowUpIcon from "../components/icons/ArrowUpIcon";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);

  const router = useRouter();

  const route = () => {
    router.push("/how-to-setup");
  };

  const route2 = () => {
    router.push("/app");
  };

  const handleJump = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", () => {
        const currentTime = videoElement.currentTime;
        if (currentTime >= 0 && currentTime < 17) {
          setActiveButton(0);
        } else if (currentTime >= 17 && currentTime < 47) {
          setActiveButton(1);
        } else if (currentTime >= 47 && currentTime < 63) {
          setActiveButton(2);
        } else if (currentTime >= 63) {
          setActiveButton(3);
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="z-30 fixed hidden 950:flex">
        <PassnodeTopbar />
      </div>
      <div className="bg-gray2 fixed z-20 w-screen flex justify-between 450:justify-center items-center">
        <button className="mt-5 w-full 450:w-[150px] h-[30px] bg-blue3 text-black active:bg-blue4">
          Home
        </button>
        <button
          onClick={route}
          className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          How To Setup
        </button>
        <button
          onClick={route2}
          className="mt-5 w-full 450:w-[150px] h-[30px] hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          App
        </button>
      </div>
      <div className="bg-gray2 fixed top-[50px] z-20 w-screen flex flex-col justify-center items-center">
        <div className="bg-blue3 w-screen 450:w-[450px] h-[2px] mb-5"></div>
      </div>
      <div className="bg-gray w-screen flex flex-col items-center">
        <div className="text-3xl 450:text-5xl mt-[170px] z-10">
          Free Decentralized
        </div>
        <div className="text-3xl 450:text-5xl z-10">Password Manager</div>
        <div className="450:flex mt-[100px] z-10">
          <GooglePlayBadge />
          <div className="mt-5 450:mt-0 450:ml-10">
            <AppStoreBadge />
          </div>
        </div>
        <video
          ref={videoRef}
          className="mt-[100px] z-10"
          width="1200"
          loop
          autoPlay
          muted
          controls
        >
          <source src="Vid.mp4" type="video/mp4" />
        </video>
        <div className="flex mt-10 mb-10">
          <div className="bg-blue3 w-[2px] h-10 mt-1"></div>
          <button
            className={`mx-5 ${
              activeButton === 0 ? "text-blue3" : "hover:text-blue3"
            }`}
            onClick={() => handleJump(0)}
          >
            Websites
          </button>
          <div className="bg-blue3 w-[2px] h-10 mt-1"></div>
          <button
            className={`mx-5 ${
              activeButton === 1 ? "text-blue3" : "hover:text-blue3"
            }`}
            onClick={() => handleJump(17)}
          >
            Cards
          </button>
          <div className="bg-blue3 w-[2px] h-10 mt-1"></div>
          <button
            className={`mx-5 ${
              activeButton === 2 ? "text-blue3" : "hover:text-blue3"
            }`}
            onClick={() => handleJump(47)}
          >
            Notes
          </button>
          <div className="bg-blue3 w-[2px] h-10 mt-1"></div>
          <button
            className={`mx-5 ${
              activeButton === 3 ? "text-blue3" : "hover:text-blue3"
            }`}
            onClick={() => handleJump(63)}
          >
            Password<div>Generator</div>
          </button>
          <div className="bg-blue3 w-[2px] h-10 mt-1"></div>
        </div>
        <Image
          className="w-screen absolute z-0 hidden xl:block"
          placeholder="blur"
          src={Hexagons}
          width={1920}
          height={0}
          alt=""
        />
      </div>
      <div className="bg-gray2 w-screen px-5 flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">What is Passnode?</div>
        <div className="mt-10 mb-[100px]">
          Passnode is a free decentralized password manager. It uses
          technologies like ipfs, filecoin and web3.storage to store your data.
        </div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">
          How is it different from other password managers?
        </div>
        <div className="text-2xl mt-10">Passnode </div>
        <div>
          <div className="mt-10">
            ✅ It is free, you don't have to pay any subscription fee or hidden
            charges.
          </div>
          <div className="mt-2">
            ✅ It is decentralized, it doesn't store on central database.
          </div>
          <div className="mt-2">
            ✅ It is source available, you can study and analyze it's codebase.
          </div>
        </div>
        <div className="text-2xl mt-10">Other Password Managers (Most)</div>
        <div>
          <div className="mt-10">
            ❌ They are not free, you have to pay for subscription fee and
            premium features.
          </div>
          <div className="mt-2">
            ❌ They are not decentralized, they store on their central database.
          </div>
          <div className="mt-2 mb-[100px]">
            ❌ They are not source available, you cannot study and analyze their
            codebase.
          </div>
        </div>
      </div>
      <div className="bg-gray2 w-screen flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">Features</div>
        <div className="hidden 1200:flex mt-10">
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <CursorIcon />
            </div>
            <div className="mt-5">Easy To Use</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <SetupIcon />
            </div>
            <div className="mt-5">Easy To Setup</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] relative font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <div>
                <AsteriskIcon />
              </div>
            </div>
            <div className="mt-5">Master Password is Never Stored</div>
            <div className="absolute mt-[150px]">or Transmitted</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <LockIcon />
            </div>
            <div className="mt-5">AES 256 Encryption</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <div>
                <ZeroIcon />
              </div>
            </div>
            <div className="mt-5">Zero Knowledge Architecture</div>
          </div>
        </div>
        <div className="hidden 1200:flex mt-10 mb-[100px]">
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <WebsiteIcon2 />
            </div>
            <div className="mt-5">Save Websites</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <CardIcon2 />
            </div>
            <div className="mt-5">Save Cards</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <NoteIcon2 />
            </div>
            <div className="mt-5">Save Notes</div>
          </div>
          <div className="w-[250px] h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <GenerateIcon2 />
            </div>
            <div className="mt-5 ">Password Generator</div>
          </div>
        </div>
        <div className="hidden 550:block">
          <div className="w-screen flex 1200:hidden mt-10 justify-between">
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <CursorIcon />
              </div>
              <div className="mt-5">Easy To Use</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <SetupIcon />
              </div>
              <div className="mt-5">Easy To Setup</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] relative font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <div>
                  <AsteriskIcon />
                </div>
              </div>
              <div className="mt-5">Master Password is</div>
              <div className="absolute mt-[150px]">Never Stored</div>
            </div>
          </div>
          <div className="w-screen flex 1200:hidden mt-10">
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <LockIcon />
              </div>
              <div className="mt-5">AES 256 Encryption</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <div>
                  <ZeroIcon />
                </div>
              </div>
              <div className="mt-5">Zero Knowledge</div>
              <div className="absolute mt-[150px]">Architecture</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <WebsiteIcon2 />
              </div>
              <div className="mt-5">Save Websites</div>
            </div>
          </div>
          <div className="w-screen flex 1200:hidden mt-10 mb-[100px]">
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <CardIcon2 />
              </div>
              <div className="mt-5">Save Cards</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <NoteIcon2 />
              </div>
              <div className="mt-5">Save Notes</div>
            </div>
            <div className="w-full h-[150px] flex flex-col justify-center items-center">
              <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
                <GenerateIcon2 />
              </div>
              <div className="mt-5 ">Password Generator</div>
            </div>
          </div>
        </div>
        <div className="w-screen flex 550:hidden mt-10 justify-between">
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <CursorIcon />
            </div>
            <div className="mt-5">Easy To Use</div>
          </div>
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <SetupIcon />
            </div>
            <div className="mt-5">Easy To Setup</div>
          </div>
        </div>
        <div className="w-screen flex 550:hidden mt-10">
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] relative font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <div>
                <AsteriskIcon />
              </div>
            </div>
            <div className="mt-5">Master Password is</div>
            <div className="absolute mt-[150px]">Never Stored</div>
          </div>
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <LockIcon />
            </div>
            <div className="mt-5">AES 256 Encryption</div>
          </div>
        </div>
        <div className="w-screen flex 550:hidden mt-10">
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <div>
                <ZeroIcon />
              </div>
            </div>
            <div className="mt-5">Zero Knowledge</div>
            <div className="absolute mt-[150px]">Architecture</div>
          </div>
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <WebsiteIcon2 />
            </div>
            <div className="mt-5">Save Websites</div>
          </div>
        </div>
        <div className="w-screen flex 550:hidden mt-10">
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <CardIcon2 />
            </div>
            <div className="mt-5">Save Cards</div>
          </div>
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <NoteIcon2 />
            </div>
            <div className="mt-5">Save Notes</div>
          </div>
        </div>
        <div className="w-screen flex 550:hidden mt-10 mb-[100px]">
          <div className="w-full h-[150px] flex flex-col justify-center items-center">
            <div className="bg-blue3 w-[80px] h-[80px] text-lg font-bold rounded-2xl flex flex-col justify-center items-center text-black">
              <GenerateIcon2 />
            </div>
            <div className="mt-5 ">Password Generator</div>
          </div>
        </div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">How it works?</div>
        <div className="bg-gray2 mt-10 hidden 750:block">
          <div className="flex flex-col mt-10 mb-10 mx-10 justify-center items-center">
            <div className="text-2xl">Upload To IPFS</div>
            <div className="flex mt-10">
              <div className="-mt-2">
                <UserIcon />
              </div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Create web3.storage account</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Create API token</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Copy API token</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Paste API token on passnode</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Enter master password</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Master password convert to secret key using PBKDF2</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Add websites, cards, notes</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div className="text-4xl -mt-3">🔒</div>
              <div>AES 256 Encryption using secret key</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Web3.storage using API token from user's cookies</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div className="-mt-3">
                <IPFSIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray2 mt-10 mb-[100px] hidden 750:block">
          <div className="flex flex-col mt-10 mb-10 mx-10 justify-center items-center">
            <div className="text-2xl">Download From IPFS</div>
            <div className="flex mt-10">
              <div className="-mt-3">
                <IPFSIcon />
              </div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Web3.storage using API token from user's cookies</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Websites, cards, notes</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div className="text-4xl -mt-3">🔓</div>
              <div>AES 256 Decryption using secret key</div>
              <div className="mt-1 mx-2 scale-x-[-1]">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Master password convert to secret key using PBKDF2</div>
              <div className="mt-1 mx-2 scale-x-[-1]">
                <ArrowIcon2 />
              </div>
              <div>Enter master password</div>
              <div className="mt-1 mx-2 scale-x-[-1]">
                <ArrowIcon2 />
              </div>
              <div className="-mt-2">
                <UserIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray2 mt-10 block 750:hidden">
          <div className="flex flex-col mt-10 mb-10 mx-10 justify-center items-center">
            <div className="text-2xl">Upload To IPFS</div>
            <div className="flex mt-10">
              <div className="-mt-2">
                <UserIcon />
              </div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Create web3.storage account</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Create API token</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Copy API token</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Paste API token on passnode</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Enter master password</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Master password convert to secret key using PBKDF2</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Add websites, cards, notes</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div className="text-4xl -mt-3">🔒</div>
              <div>AES 256 Encryption using secret key</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Web3.storage using API token from user's cookies</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div className="-mt-3">
                <IPFSIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray2 mt-10 mb-[100px] block 750:hidden">
          <div className="flex flex-col mt-10 mb-10 mx-10 justify-center items-center">
            <div className="text-2xl">Download From IPFS</div>
            <div className="flex mt-10">
              <div className="-mt-3">
                <IPFSIcon />
              </div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div>Web3.storage using API token from user's cookies</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Websites, cards, notes</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
              <div className="text-4xl -mt-3">🔓</div>
              <div>AES 256 Decryption using secret key</div>
              <div className="mt-1 mx-2">
                <ArrowIcon2 />
              </div>
            </div>
            <div className="flex mt-10">
              <div>Master password convert to secret key using PBKDF2</div>
              <div className="mt-1 mx-2 scale-x-[-1]">
                <ArrowIcon2 />
              </div>
              <div>Enter master password</div>
              <div className="mt-1 mx-2 scale-x-[-1]">
                <ArrowIcon2 />
              </div>
              <div className="-mt-2">
                <UserIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray2 w-screen flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">Technologies Used</div>
        <div className="flex mt-10 750:mb-[100px]">
          <div className="mt-8">
            <NextjsLogo />
          </div>
          <div className="ml-10">
            <IPFSLogo />
          </div>
          <div className="hidden 450:block ml-10">
            <FilecoinLogo />
          </div>
          <div className="hidden 750:block mt-4 ml-10">
            <Web3StorageLogo />
          </div>
        </div>
        <div className="flex 450:hidden mt-10">
          <FilecoinLogo />
        </div>
        <div className="block 750:hidden mt-10 mb-[100px]">
          <Web3StorageLogo />
        </div>
      </div>
      <div className="bg-gray w-screen px-5 flex flex-col justify-center items-center">
        <div className="mt-[100px] text-2xl">Frequently Asked Questions</div>
        <button
          onClick={() => setShow(!show)}
          className="bg-gray2 w-full lg:w-[1000px] mt-10 text-2xl flex justify-between items-center hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          <div className="ml-10 my-3">Is Passnode really free?</div>
          <div className="mr-5">
            {show ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </button>
        {show ? null : (
          <div className="mt-10 w-full lg:w-[900px]">
            Yes, Passnode is free. You will get all future updates and upcoming
            features for free. To cover the cost of running our servers, we
            display ads on our website. However, we also welcome donations from
            our users. If we receive enough donations, we will remove the ads
            completely.
          </div>
        )}
        <button
          onClick={() => setShow2(!show2)}
          className="bg-gray2 w-full lg:w-[1000px] mt-10 text-2xl flex justify-between items-center hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          <div className="ml-10 my-3">Why decentralized?</div>
          <div className="mr-5">
            {show2 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </button>
        {show2 ? null : (
          <div className="mt-10 w-full lg:w-[900px]">
            When you use a password manager you store your data on a specific
            location this have some serious drawbacks. Your data is centralized,
            which gives the controller of the location the power to alter,
            replace, or remove it. This exposes your data to the risk of being
            attacked, exploited, or lost. This makes centralized storage not
            ideal for storing important data.
          </div>
        )}
        <button
          onClick={() => setShow3(!show3)}
          className="bg-gray2 w-full lg:w-[1000px] mt-10 text-2xl flex justify-between items-center hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          <div className="ml-10 my-3">What is zero knowledge architecture?</div>
          <div className="mr-5">
            {show3 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </button>
        {show3 ? null : (
          <div className="mt-10 w-full lg:w-[900px]">
            Zero-knowledge architecture is a security model that utilizes a
            unique encryption and data segregation framework to protect against
            remote data breaches. It adheres to principles such as data being
            encrypted and decrypted at the device level, not on the server, and
            the application never storing plain text data. The server never
            receives data in plain text and no employee or intermediary can view
            the unencrypted data. The keys to decrypt and encrypt data are
            derived from a user's master password.
            <div className="mt-2">
              In simpler terms, zero-knowledge architecture means that only you
              know what you store in your vault and no one else can see your
              important passwords.
            </div>
          </div>
        )}
        <button
          onClick={() => setShow4(!show4)}
          className="bg-gray2 w-full lg:w-[1000px] mt-10 text-2xl flex justify-between items-center hover:bg-blue3 hover:text-black active:bg-blue4"
        >
          <div className="ml-10 my-3">What is AES 256?</div>
          <div className="mr-5">
            {show4 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </button>
        {show4 ? null : (
          <div className="mt-10 w-full lg:w-[900px]">
            AES 256 is a variant of the Advanced Encryption Standard (AES),
            which is a specification for the encryption of electronic data
            established by the U.S. National Institute of Standards and
            Technology (NIST) in 2001. It is a symmetric-key algorithm, meaning
            the same key is used for both encrypting and decrypting the data.
            AES 256 uses a 256-bit key to convert your plain text or data into a
            cipher. It supports the largest bit size and is practically
            unbreakable by brute force based on current computing power, making
            it the strongest encryption standard.
          </div>
        )}
        <button
          onClick={() => setShow5(!show5)}
          className={`bg-gray2 w-full lg:w-[1000px] mt-10 text-2xl flex justify-between items-center hover:bg-blue3 hover:text-black active:bg-blue4 ${
            show5 ? "mb-[100px]" : ""
          }`}
        >
          <div className="ml-10 my-3">What is PBKDF2?</div>
          <div className="mr-5">
            {show5 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </div>
        </button>
        {show5 ? null : (
          <div className="mt-10 mb-[100px] w-full lg:w-[900px]">
            PBKDF2 (Password-Based Key Derivation Function 2) is a key
            derivation function used in cryptography. It is used to reduce
            vulnerability to brute-force attacks by increasing the computational
            cost of generating keys from passwords. PBKDF2 applies a
            pseudorandom function, such as hash-based message authentication
            code (HMAC), to the input password or passphrase along with a salt
            value and repeats the process many times to produce a derived key,
            which can then be used as a cryptographic key in subsequent
            operations.
          </div>
        )}
      </div>
      <div className="bg-gray2 w-screen flex justify-center items-center">
        <div className="hidden 950:flex mt-[100px] mb-[100px]">
          <PassnodeLogo />
          <div className="ml-[150px]">
            <div>Company</div>
            <div className="mt-5">About</div>
            <div>Contact us</div>
          </div>
          <div className="ml-[150px]">
            <div>Legal</div>
            <div className="mt-5">Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
          <div className="ml-[150px]">
            <div>Social</div>
            <div className="mt-5">Github</div>
            <div>YouTube</div>
            <div>Discord</div>
            <div>Reddit</div>
          </div>
        </div>
        <div className="block 950:hidden mt-[100px] mb-[100px]">
          <PassnodeLogo />
          <div className="mt-5">
            <div>Company</div>
            <div className="mt-5">About</div>
            <div>Contact us</div>
          </div>
          <div className="mt-5">
            <div>Legal</div>
            <div className="mt-5">Privacy Policy</div>
            <div>Terms and</div>
            <div>Conditions</div>
          </div>
          <div className="mt-5">
            <div>Social</div>
            <div className="mt-5">Github</div>
            <div>YouTube</div>
            <div>Discord</div>
            <div>Reddit</div>
          </div>
        </div>
      </div>
      <div className="bg-gray2 w-screen flex justify-center">
        <div className="mb-5">
          Copyright © 2023 Passnode. All rights reserved.
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

export default Home;
