import {
  ArrowDownTrayIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import appleLogo from './assets/download-logos/apple.png';
import windowsLogo from './assets/download-logos/windows.png';
import { useState } from 'react';

export default function Download() {
  const [open, setOpen] = useState(false);

  function openInfo(state) {
    setOpen(state);
  }

  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4DA5CB] to-[#A6D9EF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='flex flex-col items-center mb-8 mt-[5rem]'>
       <div>
        <p className='text-base font-semibold leading-7 text-indigo-600 text-[25px] inline'>
          Download
        </p>
        <InformationCircleIcon
          className='col-start-1 mt-1 h-6 w-6 flex-none text-indigo-600 text-center inline ml-[5px] mt-[-10px]'
          aria-hidden='true'
          onMouseOver={() => openInfo(true)}
          onMouseLeave={() => openInfo(false)}
        />
        {open && (
          <div className='inline absolute bg-indigo-600 w-[350px] h-[190px] p-5 rounded-r-lg rounded-tl-lg text-center text-white mt-[-180px]'>
            <span className='font-bold text-[20px]'>MAC USERS</span>
            <br />
            If React Relay cannot be opened<br/>
            because the developer cannot be verified<br/>
            press 'Cancel' and navigate to<br/>
            System Preferences &#62;&#62; Security & Privacy <br />
            and click 'Open Anyways'
          </div>
        )}
        </div>

        <h1 className='mt-2 text-[50px] font-bold tracking-tight text-gray-900 inline'>
          React Relay
        </h1>

 

      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 justify-items-center'>
        <div className='col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 justify-self-center'></div>
        <div className='lg:row-start-2 lg:col-start-1 mr-[6rem] justify-self-end'>
          <img className='p-[12.5px] w-[175px]' src={appleLogo} />
          <div className='flex flex-col items-center gap-3 mt-5'>
             <a href='https://github.com/oslabs-beta/ReactRelay/releases/download/v1.0.0/react-relay-darwin-x64-1.0.0.zip' download>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4 mt-[-1px]'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>Apple</div>
            </button>
             </a>          
            {/* <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4 mt-[-1px]'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>M1</div>
            </button> */}
          </div>
        </div>
        <div className='lg:row-start-2 lg:col-start-2 ml-[6rem] justify-self-start'>
          <img className='w-[175px]' src={windowsLogo} />
          <div className='flex flex-col items-center gap-3 mt-5'>
           <a href='https://github.com/oslabs-beta/ReactRelay/releases/download/v1.0.0/react-relay-win32-x64.zip'>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4 mt-[-1px]'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>Windows</div>
            </button>
            </a>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#A6D9EF] to-[#4DA5CB] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'></div>
      </div>
    </div>
  );
}
