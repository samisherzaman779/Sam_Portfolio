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
import { motion } from "framer-motion";

const Info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+923-0660-39949"
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

const Contact: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" } }}
      className="py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
          {/* Form */}
          <div className="flex-1 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl md:text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Thank you for visiting my portfolio! I'm always excited to collaborate on new projects, share ideas, or simply have a conversation. Whether you have a question, a project in mind, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-xl">Select a Service</SelectLabel>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="logo-design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea 
                className="h-40" 
                placeholder="Type your message here."
              />
              <Button size="md" className="w-full md:w-auto flex items-center justify-center">Send Message</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 order-1 xl:order-none flex items-center xl:justify-end">
            <ul className="flex flex-col gap-8">
              {Info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-xl md:text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm md:text-base">{item.title}</p>
                    <h3 className="text-lg md:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
