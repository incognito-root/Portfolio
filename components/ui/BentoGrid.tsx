"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

   

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgclassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgclassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {

    const handleCopy = () =>
        {
            navigator.clipboard.writeText('saadsuleman007@gmail.com');

            setCopied(true);
        }
    const [copied, setCopied] = useState(false)
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white  justify-between flex flex-col space-y-4 border-white border [1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className={`${id===6 && 'flex justify-center'} h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img 
                     src={img}
                     alt= {img}
                     className={cn(imgclassName, 'object-cover,object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5&& 'w-full opacity-80'}`}>
                {spareImg &&(
                    <img
                    src={spareImg}
                     alt= {spareImg}
                     className={'object-cover,object-center w-full h-full'}
                    />
                )}
            </div>

           
                {id===6 && (
                   < BackgroundGradientAnimation>
                   {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
                   </BackgroundGradientAnimation>
                )}


                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>

                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm dark:text-neutral-200 mb-2 mt-2">
                        {description}
                    </div>

                    <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
                    {title}
                    </div>
                
                
                {id===2 && <GlobeDemo />}

                {id===3 && (

                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 lg;gap-8">
                        {['React.Js','Next.Js','TypeScript'].map
                        ( (item) => (
                        
                          <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                          </span>
                            
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                        </div>

                        {/* More Techs */}

                        <div className="flex flex-col gap-3 lg;gap-8">
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                        {['Vue.Js','AWS','MongoDB'].map
                        ( (item) => (
                        
                          <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                          </span>
                            
                        ))}
                       
                        </div>

                    </div> 
                )}
           
           {id===6 && (
            <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                <Lottie options=
                {
                   {
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings:
                    {
                        preserveAspectRatio: 'xMidYMid slice',
                    }

                   } 
                }/>
                </div>
                <MagicButton title={copied ? 'Email Copied': 'Copy My Email'} icon={<IoCopyOutline/>} position='left' otherClasses="bg-[#161a31]" handleClick={handleCopy}/>
               </div> 
           )}
        </div>
      

      {/* <div>
      </div> */}

    </div>
    </div>
  );
};
