import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import backgroundImage from "../assets/images/buying.jpeg";
import apple from "../assets/images/apple.webp";
import orange from "../assets/images/orange.webp";
import pineapple from "../assets/images/pineapple.jpeg";
import kiwi from "../assets/images/kiwi.webp";
import wheatImage from "../assets/images/wheatImage.jpg";
// import { color } from "framer-motion";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center bg-lime-100 justify-center gap-4 py-8 md:py-10">
      <img src={backgroundImage} className="w-screen h-auto object-cover object-center -mt-10" alt="" />
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Products</h1>

            {/* beginnign of added template */}

                      <div className="h-screen">
                        <div className="">
                          <div className="px-4 pt-8 pb-10">
                            {/* <div className="absolute inset-x-0 -bottom-10  mx-auto w-96 rounded-full border-8 border-white shadow-lg"> */}
                              {/* <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span> */}
                              {/* <img className="mx-auto h-auto w-full rounded-full" src="/images/n2yIu0Buhpft9wZ6tROzn.png" alt="" /> */}
                            {/* </div> */}
                          </div> 
                        </div>
          {/* <div className = "felx-col" > */}
                       <div className="flex justify-center gap-8">

                        <div className="w-64 h-96 bg-white border border-gray-200 rounded-lg shadow-md">
                          <img className="rounded-t-lg h-44" src={apple} alt="Apple"/>
                          <div className="p-4">
                            <h5 className="text-lg font-bold">Apple</h5>
                            <p className="text-sm text-gray-500">Fresh and juicy</p>
                            <p className="text-lg font-bold">$1.99</p>
                            <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
                          </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="w-64 h-96 bg-white border border-gray-200 rounded-lg shadow-md">
                          <img className="rounded-t-lg" src={pineapple} alt="Pineapple"/>
                          <div className="p-4">
                            <h5 className="text-lg font-bold">Pineapple</h5>
                            <p className="text-sm text-gray-500">Sweet and tangy</p>
                            <p className="text-lg font-bold">$2.49</p>
                            <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
                          </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="w-64 h-96 bg-white border border-gray-200 rounded-lg shadow-md">
                          <img className="rounded-t-lg" src={kiwi} alt="Kiwi"/>
                          <div className="p-4">
                            <h5 className="text-lg font-bold">Kiwi</h5>
                            <p className="text-sm text-gray-500">Small but mighty</p>
                            <p className="text-lg font-bold">$1.49</p>
                            <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
                          </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div className="w-64 h-96 bg-white border border-gray-200 rounded-lg shadow-md">
                          <img className="rounded-t-lg" src={orange} alt="Orange"/>
                          <div className="p-4">
                            <h5 className="text-lg font-bold">Orange</h5>
                            <p className="text-sm text-gray-500">Juicy and refreshing</p>
                            <p className="text-lg font-bold">$1.99</p>
                            <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
                          </div>
                        </div>
                  </div>

                  <div className="flex justify-center gap-8 my-10">

<div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-md ">
  <img className="rounded-t-lg h-44" src={wheatImage} alt="Apple"/>
  <div className="p-4">
    <h5 className="text-lg font-bold">Wheat</h5>
    <p className="text-sm text-gray-500">Wheat</p>
    <p className="text-lg font-bold">$1.99</p>
    <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
  </div>
</div>

{/* <!-- Card 2 --> */}
<div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-md">
  <img className="rounded-t-lg" src={pineapple} alt="Pineapple"/>
  <div className="p-4">
    <h5 className="text-lg font-bold">Pineapple</h5>
    <p className="text-sm text-gray-500">Sweet and tangy</p>
    <p className="text-lg font-bold">$2.49</p>
    <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
  </div>
</div>

{/* <!-- Card 3 --> */}
<div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-md">
  <img className="rounded-t-lg" src={kiwi} alt="Kiwi"/>
  <div className="p-4">
    <h5 className="text-lg font-bold">Kiwi</h5>
    <p className="text-sm text-gray-500">Small but mighty</p>
    <p className="text-lg font-bold">$1.49</p>
    <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
  </div>
</div>

{/* <!-- Card 4 --> */}
<div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-md">
  <img className="rounded-t-lg" src={orange} alt="Orange"/>
  <div className="p-4">
    <h5 className="text-lg font-bold">Orange</h5>
    <p className="text-sm text-gray-500">Juicy and refreshing</p>
    <p className="text-lg font-bold">$1.99</p>
    <button className="w-full bg-emerald-500 text-white py-2 rounded-md">Add to Cart</button>
  </div>
</div>
</div>



            {/* </div> */}
                      

            {/* end of added temaplte */}

            </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
