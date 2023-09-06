import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import appleLogo from './assets/download-logos/apple.png';
import windowsLogo from './assets/download-logos/windows.png';
export default function Download() {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 justify-items-center'>
        <div className='col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 justify-self-center'>
          <div className="justify-self-center">
          <p className='text-base font-semibold leading-7 text-indigo-600'>
            Deploy faster
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Download React Relay
          </h1>
         </div>
        </div>
        <div className='lg:row-start-2 lg:col-start-1 ml-[15rem]'>
          <img className='p-[12.5px]' src={appleLogo} />
          <div className='flex flex-col items-center gap-3 mt-5'>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>Intel</div>
            </button>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>M1</div>
            </button>
          </div>
        </div>
        <div className='lg:row-start-2 lg:col-start-2 mr-[15rem]'>
          <img src={windowsLogo} />
          <div className='flex flex-col items-center gap-3 mt-5'>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>x64</div>
            </button>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>x86</div>
            </button>
            <button className='grid grid-cols-3 download-button'>
              <ArrowDownTrayIcon
                className='col-start-1 mt-1 h-6 w-6 flex-none text-white text-center inline mr-4'
                aria-hidden='true'
              />
              <div className='cols-start-2 cols-span-2'>Arm64</div>
            </button>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'></div>
      </div>
    </div>
  );
}
