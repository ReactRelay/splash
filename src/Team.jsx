import linkedInIcon from './assets/social-logos/linkedin.svg'
import gitHubIcon from './assets/social-logos/github.svg'
import kodyImage from './assets/team-images/Kody.png'
import alisaImage from './assets/team-images/Alisa.jpg'
import ireneImage from './assets/team-images/Irene.jpg'
import nickImage from './assets/team-images/Nick.jpg'

const people = [
  {
    name: 'Irene Wang',
    role: 'Co-Founder / Software Engineer',
    linkedIn: 'https://www.linkedin.com/in/irenezw/',
    gitHub: 'https://github.com/irenezw',
    profImage: ireneImage,
  },
  {
    name: 'Alisa Jin',
    role: 'Co-Founder / Software Engineer',
    linkedIn: 'https://www.linkedin.com/in/alisajin/',
    gitHub: '',
    profImage: alisaImage
  },  {
    name: 'Nicholas Cushman',
    role: 'Co-Founder / Software Engineer',
    linkedIn: 'https://www.linkedin.com/in/nicholas-cushman/',
    gitHub: 'https://github.com/gizmo572',
    profImage: nickImage
  },  {
    name: 'Kody Montes',
    role: 'Co-Founder / Software Engineer',
    linkedIn: 'https://www.linkedin.com/in/kody-montes/',
    gitHub: 'https://github.com/KodyMontes',
    profImage: kodyImage
  }
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Engineers</h2>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img  className="h-[8rem] w-[8rem] rounded-full object-cover" src={person.profImage} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <div className='flex gap-3'>
                    <a href={person.linkedIn}><img className="h-5 hover:scale-125" src={linkedInIcon}/></a>
                    <a href={person.gitHub}><img className="h-6 hover:scale-125" src={gitHubIcon}/></a>
                  </div>  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
