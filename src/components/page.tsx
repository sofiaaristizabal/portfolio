import { useState } from 'react';


export const Page = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
   
    return (

        <>
        
        
<div className="bg-white">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        {/* This div will center the navigation tab */}
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
        </a>
      </div>

      <div className="flex lg:hidden">
        <button 
        type="button" 
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={toggleMobileMenu}
          >
        <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      

      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#about-me" className="text-sm font-semibold leading-6 text-gray-900">About me</a>
        <a href="#education" className="text-sm font-semibold leading-6 text-gray-900">Education</a>
        <a href="#personal-skills" className="text-sm font-semibold leading-6 text-gray-900">Personal skills</a>
        <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">contact me</a>
      </div>


      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900"></a>
      </div>
      
    </nav>
    
    {/*Mobile menu, show/hide based on menu open state*/} 

    {isMobileMenuOpen && (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Background backdrop, show/hide based on slide-over state. */}
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        
        <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
          <button 
          type="button" 
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={toggleMobileMenu}>
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">

            <div className="space-y-2 py-6">
              <a href="#about-me" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Me</a>
              <a href="#education" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Education</a>
              <a href="#personal-skills" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Personal skills</a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">contact me</a>
            </div>

          </div>
        </div>

      </div>
    </div>
   ) }
  </header>




  <div className="relative isolate px-6 pt-0 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>

      <div className="text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hello, I'm  <span className="text-indigo-600">Sofia Aristizabal</span></h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Software engineering student</p>

      {/* Centered Image Below */}
      <div className="mt-8 flex justify-center">
        <img 
          src="/foto.jpg" 
          alt="Sofia's profile" 
          className="w-60 h-60 rounded-full border-4 border-indigo-600 object-cover"
        />
      </div>
      

      
      </div>

    </div>

    {/*degradado*/}
    <div className="absolute inset-x-0 top-[calc(100%-4rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-40]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
      style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>

   
    {/*ABOUT ME */}

    <div id="about-me">
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 mb-4">
    {/* Left side - Title */}
    <div className="sm:w-1/2 text-center">
    <h1 className=" ml-[-20px] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      About <br></br><span className="text-indigo-600 ">ME</span>
    </h1>
    </div>

    {/* Right side - Text */}
    <div className="sm:w-2/3 text-left">
      <p className="text-lg leading-8 text-gray-600">
       My full name is <span className="text-indigo-600 ">Sofia Aristizabal Madrid</span>, I'm 20 years old and I was born and raised in Medellin, Antioquia, Colombia. I'm currently a fourth
       semester software engineering student at the university EIA. I'm passionate and compromised with the work I do. I take interest in the areas of ciber security and AI. 
      </p>
    </div>
    </div>
    </div>


    {/*EDUCATION */}

    <div id="education">
  <div className="px-4 sm:px-0 mt-40">
    <h1 className="text-3xl font-bold tracking-tight leading-7 text-gray-1000 mb-14">EDUCATION</h1>
  </div>
  <div className="mt-6 border-t border-gray-100">
    <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Primary school</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">I did primary school from 2008 to 2015  I studied at <span className="text-indigo-600 ">comunidad colegio Jesus- Maria</span></dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">High school</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">In 2022 I graduated from <span className="text-indigo-600 ">comunidad colegio Jesus- Maria</span></dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">English level</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">In 2021 I graduated from .... at <span className="text-indigo-600 ">Eafit</span></dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Collegue</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">I'm currently in fourth semester of software engineering at the university <span className="text-indigo-600 ">EIA</span></dd>
      </div>
      
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div className="flex w-0 flex-1 items-center">
                <svg className=" h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
                </svg>
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">Resume</span>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="/Resume Sofia Aristizabal.pdf" download className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
           
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>

  {/* ACHIVEMENTS */}
   
  <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-2xl lg:mx-center">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span className="text-indigo-600 ">Achivements</span></h2>
    </div>


    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">2023</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Education</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Honor roll
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"> In first semester in collegue I had a gpa of 4.6 so I got into the universities honor roll. </p>
        </div>
        
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">Aprl 12, 2024</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">AI</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Generative AI hackathon
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"> The university EIA realized a hackathon focused on generative artificil intelligence in alliance with snaprr, enterprise leader in under demmand content creation. Along with Juan Sebastian Diaz and Simon Gomez we participated in the hackaton and won third place  </p>
        </div>
       
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">Aug 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">VR</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Campamento XR de Vivero Virtual Uniandes
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Between the 12th and the 16th of august of 2024 the University of Andes located in Bogota Colombia realized a vritual reality camp to train teachers and students on how to use different VR and AR tools and how to start a path to develop and grow this technologies </p>
        </div>

      </article>

    </div>

  </div>
</div>
    
    {/*PERSONAL SKILLS */}

    <div id="personal-skills">
    
    <div className="mx-auto max-w-2xl lg:mx-center mb-16">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal <span className="text-indigo-600 ">skills</span></h2>
    </div>

    <ul role="list" className="divide-y divide-gray-100">
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/github.jpg" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Version control </p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900"></p>
      <p className="mt-1 text-sm leading-6 text-gray-600">Experience with Git and GitHub for managing code</p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/database.jpg" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Database management </p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-sm leading-6 text-gray-600">Working knowledge of SQL (postgresSQL) and NoSQL (MongoDB)</p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/idea.jpg" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Problem solving</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-sm leading-6 text-gray-600">Coming up with well structured solutions for complex problems </p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/puzzle.jpg" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Adaptability</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-sm leading-6 text-gray-600">Ability to adapt to changing environments and learn fast</p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/ps.jpg" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Public speaking</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-sm leading-6 text-gray-600">Ability to express ideas in an undertandable manner in front of big crowds</p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="/detail.png" alt=""></img>
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-10 text-gray-900">Attention to detail</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-sm leading-6 text-gray-600">Careful approach to writting clean and efficient code</p>
      <div className="mt-1 flex items-center gap-x-1.5">
      </div>
    </div>
  </li>
</ul>

   {/*Coding lenguages*/}

   <div className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
      <span className="text-indigo-600">Coding</span> languages
    </h2>
    <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
      <div className="flex flex-col items-center">
        <img className="max-h-12 w-full object-contain" src="/javaLogo.png" alt="Java" width="158" height="48" />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Java</h3>
      </div>
      <div className="flex flex-col items-center">
        <img className="max-h-12 w-full object-contain" src="/python.png" alt="Python" width="158" height="48" />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Python</h3>
      </div>
      <div className="flex flex-col items-center">
        <img className="max-h-12 w-full object-contain" src="/typescript.png" alt="Typescript" width="158" height="48" />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Typescript</h3>
      </div>
    </div>
  </div>
</div>
</div>

   {/*CONTACT */}

   <div id="contact">
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 mb-4">
    {/* Left side - Title */}
    <div className="sm:w-1/2 text-center">
    <h3 className=" ml-[-20px] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      <span className="text-indigo-600 ">Contact </span> <br></br>me
    </h3>
    </div>

    {/* Right side - Text */}
    <div className="sm:w-2/3 text-left">
    <p className="text-lg font-semibold leading-6 text-gray-600">number: 3218936569</p>
    <p className="text-lg font-semibold leading-6 text-gray-600 mt-4 mb-4">gmail: sofiaaristizabal23@gmail.com</p>
    <a href="https://www.linkedin.com/in/sofia-aristizabal-116732221/" className="text-lg font-semibold leading-6 text-gray-600 underline"> linkedin </a>
    
    </div>
    </div>
    </div>



  </div>
</div>
        
        
        </>
        
  )
}
