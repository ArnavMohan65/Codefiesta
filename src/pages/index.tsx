// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import wheatImage from "../assets/images/pexels-pixabay-265216.jpg";
import cardImage1 from "../assets/images/cardImage1.jpg";
import teamImage from "../assets/images/AboutUs.jpg";
import cardImage2 from "../assets/images/cardImage2.jpg";
import cardImage3 from "../assets/images/cardImage3.jpg";


export default function IndexPage() {
  return (
    <DefaultLayout>
    <section className="flex-col mt- items-center justify-center ">
      <div className="flex justify-center items-center ">
            <img src={wheatImage} alt="My Image" />
            <button className="absolute -mt-36 font-medium text-7xl border-8 border-white bg-transparent text-white hover:border-green-400 hover:text-green-400 transition duration-300 ease-in-out py-12 px-14 rounded">
              Welcome to FarmFolio
            </button>
          </div>

          <div className="-mt-14 mx-40 text-lg absolute rounded-sm bg-green-700 py-9 px-12 text-white font-sans">
                <p>FarmFolio is  an innovative online marketplace connecting farmers directly with buyers.
                This platform empowers farmers to showcase and sell their fresh produce, artisanal products, 
                and other agricultural goods to a wider audience.<br />  
                

                Buyers, including consumers, restaurants, and retailers, 
                can browse and purchase high-quality products, often at competitive prices. HarvestHub streamlines the supply chain, 
                reducing intermediaries and ensuring fair prices for farmers
                <br />
                By bridging the gap between farmers and buyers, HarvestHub promotes sustainable agriculture, 
                supports local economies, and makes fresh, healthy produce more accessible to all. 
                Join the HarvestHub community today and experience the benefits of a transparent, efficient, and equitable online marketplace!
                </p>
        </div>
          <div className="bg-orange-100 h-fit pt-72 w-full">           
                <h1 className="ml-36 text-4xl my-0.5 font-medium dark:text-white">
                Overview of<br/><span className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-600 dark:text-green-500 md:text-5xl lg:text-6xl">Our product and services</span></h1>
          </div>

                {/* 3 servies we will primarily provide wrpped by div side by side */}
            <div className="bg-orange-100 w-full flex px-36 space-x-20 py-32">

              {/* Card 1  buying */}

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={cardImage1} alt="" />
                  </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-green-700 dark:text-white">Buying</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        FarmFolio is a multi-faceted marketplace designed to empower farmers by providing a seamless platform for buying and selling goods. Our C2C, C2B, and B2B models cater to various needs, ensuring a holistic experience. Farmers can purchase goods from fellow farmers, promoting peer-to-peer trade, or buy from businesses, accessing a wide range of products. Additionally, businesses can sell to farmers, streamlining bulk purchases. FarmFolio aims to simplify the procurement process, reduce costs, and increase efficiency for farmers. By leveraging technology, we bridge the gap between farmers and suppliers, fostering a thriving agricultural community.
                        </p>
                        <a href="/docs" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                  </div>

                  {/* card2 selling  */}

                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={cardImage2} alt="" />
                  </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-green-700 dark:text-white">Selling</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Selling on FarmFolio offers a lucrative opportunity for farmers, businesses, and suppliers to reach a vast customer base. By leveraging our C2C, C2B, and B2B models, sellers can expand their market presence and increase sales. FarmFolio provides a user-friendly platform to showcase products, set competitive prices, and connect with potential buyers. With features like easy logistics and secure payment options, selling on FarmFolio is a hassle-free experience. Whether you're a small-scale farmer or a large business, our platform helps you reach new heights by tapping into the agricultural market's vast potential. Join FarmFolio today and start selling your products to a targeted audience.
                        </p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                  </div>
                    
                    {/* card3  Other services 💦💦🍑🍑*/}
              
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={cardImage3} alt="" />
                  </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-green-700 dark:text-white">Services</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Beyond Buying and Selling
                        As a comprehensive online marketplace, FarmFolio offers a range of services beyond buying and selling, making it a one-stop-shop for farmers and businesses. FarmFolio facilitates seamless logistics and supply chain management, ensuring timely delivery of products. A secure payment system ensures safe and convenient transactions. The platform also provides access to market trends, prices, and demand, helping farmers and businesses make informed decisions. Additionally, FarmFolio offers networking opportunities, connecting users with other farmers, businesses, and experts in the agricultural community. Resources and support for best practices, new technologies, and sustainable farming methods are also available. 
                        </p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                  </div>

                    {/* end of cards !!!! */}

            </div>  
        
                {/* random statistics no one cares  */}

          <div className="flex-row">
            <section className="bg-orange-700 py-20">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
                  <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
                    <div
                      className="font-manrope font-bold text-5xl text-white mb-5 text-center ">
                      260+
                    </div>
                    <span className="text-xl text-white text-center block ">Expert Consultants
                    </span>
                  </div>
                  <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
                    <div
                      className="font-manrope font-bold text-5xl text-white mb-5 text-center ">
                      975+
                    </div>
                    <span className="text-xl text-white text-center block ">Active Clients
                    </span>
                  </div>
                  <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100">
                    <div
                      className="font-manrope font-bold text-5xl text-white mb-5 text-center ">
                      724+
                    </div>
                    <span className="text-xl text-white text-center block ">Projects Delivered
                    </span>
                  </div>
                  <div className="w-full lg:w-1/4  ">
                    <div
                      className="font-manrope font-bold text-5xl text-white mb-5 text-center ">
                      89+
                    </div>
                    <span className="text-xl text-white text-center block ">Orders in Queue
                    </span>
                  </div>
                </div>
            </div>
          </section>
          </div>

          {/* statistics end */}
        <div className="bg-shinyGreen-100 text-white p-36 h-screen justify-center items-center">

              <h1 className="text-5xl font-bold ">About us</h1>
              <h2 className="text-3xl text-lime-400 mt-8 font-sans">Meet the FarmFolio Team</h2>
              
              <div className="inline-block float-right">
                <img className="h-auto max-w-xl ms-auto rounded-md -mt-20" src={teamImage} alt="image description"/>
              </div>
              <p className="mx-1 text-2xl mt-10 font-sans ">
              <br />
              The FarmFolio team is a diverse group of experts passionate about revolutionizing agriculture. Our founders, with backgrounds in farming and technology, lead a team of skilled professionals in fields like marketing, logistics, and customer support. Together, we share a common goal: to empower farmers and businesses through our innovative platform. Our team's dedication and expertise drive FarmFolio's success, ensuring a seamless and impactful experience for our users.
              </p>  

        </div>

      </section>

      
    </DefaultLayout>
  );
}
