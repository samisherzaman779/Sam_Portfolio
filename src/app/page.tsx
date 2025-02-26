
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';


// component
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import NameWritter from "@/components/NameWritter";
import Link from "next/link";

const page = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto'>
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <NameWritter />
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Crafting efficient code and innovative solutions, I am a software developer dedicated to turning ideas into impactful digital experiences.
                        </p>
                        {/* btn & socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Link href={"/assets/Resume1.pdf"}>
                            <Button
                                variant={"outline"}
                                size={"lg"}
                                className="uppercase flex items-center gap-2">
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            </Link>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    iconStyles="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default page;
