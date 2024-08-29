"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
 } from "@/components/ui/select";
 import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";


 const Info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+923-066039949"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Samisherzaman779@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "TPII, KDA, Mehmoodabad, Karachi, Pakistan "
  },
 ];

 import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"} 
    }}
      className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">
                let's work together
              </h3>
              <p className="text-white/60">Thank you for visiting my portfolio! I'm always excited to collaborate on new projects, share ideas, or simply have a conversation. Whether you have a question, a project in mind, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
                <Select>
                    <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-xl">Select a service</SelectLabel>
                      <SelectItem value="est">Web Develepment</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Deisgn</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  </SelectTrigger>
                </Select>
                {/* textarea */}
                <Textarea 
                className="h-[200px]"
                placeholder="Type your massage here."
                />
                <Button size="md" className="max-w-40 flex items-center">Send massage</Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {Info.map((Item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-p52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                      text-accent rounded-xl flex items-center justify-center">
                        <div className="text-[28px] ">{Item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{Item.title}</p>
                        <h3 className="text-xl">{Item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
  )
}

export default Contact