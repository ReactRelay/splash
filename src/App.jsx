import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import blackLogo from './assets/ReactRelay-logos/black-logo-only.png';
import Team from './Team.jsx';
import ComponentTree from './ComponentTree.jsx';
import ComponentDetails from './ComponentDetails'
import Download from './Download';

const navigation = [
  { name: 'Home', href: '#' },
  // { name: 'Documentation', href: '#' },
  { name: 'Features', href: '#features'},
  { name: 'Download', href: '#download-section'},
  { name: 'About Us', href: '#team' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const targetRef = useRef(null);
  
  return (
    <div className='bg-white '>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>ReactRelay</span>
              <img
                id='logo'
                className='h-9 w-auto'
                src={blackLogo}
                alt='ReactRelay logo'
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='https://www.linkedin.com/company/react-relay'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Contact Us <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
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
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 '>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              See how you can contribute to our development.{' '}
              <a href='#' className='font-semibold text-indigo-600'>
                <span
                  className='absolute inset-0'
                  aria-hidden='true'
                  onClick={() =>
                    window.open(
                      'https://github.com/oslabs-beta/ReactRelay',
                      '_blank'
                    )
                  }
                />
                GitHub<span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-center -z-10'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Introducing ReactRelay
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Clarify your React app's structure. Navigate components, monitor
              AJAX endpoints, and view data models. Pass the baton effortlessly
              with ReactRelay: Streamline your front-end to back-end
              collaboration.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#download-section'
                className='rounded-md bg-[#4DA5CB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
              >
                Get started
              </a>
              <a
                href='https://medium.com/reactrelay/reactrelay-understand-your-react-project-at-a-glance-f19d138c39f9'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
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
      </div>
      <div ref={targetRef}>
        <ComponentTree />
        <ComponentDetails/>
      </div>
      <div id='download-section'>
        <Download />
      </div>
      <div id='team'>
        <Team />
      </div>
    </div>
  );
}
