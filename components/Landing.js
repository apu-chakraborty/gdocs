import Head from 'next/head'
import Link from 'next/link'

function Landing() {
    return (
        <>
          <Head>
        <title>Gdocs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-10 flex-no-shrink fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path color="#3b82f6" height="70" fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>

      <span class="ml-3 text-xl">Goggle Docks</span>
    </a>
  
  <Link href="/signup">
    <button class="inline-flex items-center bg-indigo-900 text-white border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Try Goggle Docks
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
</Link>
    
  </div>
</header>


            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-32 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block" />readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over
       freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
      <div class="flex justify-center">
  <Link href="/signup">
        
        <button class="inline-flex text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-900 rounded text-lg">Try Docks For Work</button>
       </Link>

  <Link href="/signin">

        <button class="ml-4 inline-flex text-indigo-700 bg-white-100 border-2 border-indigo-500	 py-2 px-8 focus:outline-none hover:bg-indigo-200 rounded text-lg">Go to Docks</button>
    </Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/img/landingimg.png" />
    </div>
  </div>
</section>
       </>
    )
}

export default Landing
