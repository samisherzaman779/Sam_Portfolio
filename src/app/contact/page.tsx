"use client";

import { useState } from "react";
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
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Info = [
  {
    icon: <FaPhoneAlt />, title: "Phone", description: "+923-0660-39949",
  },
  {
    icon: <FaEnvelope />, title: "Email", description: "samisherzaman779@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />, title: "Address", description: "Mehmoodabad, Karachi, Pakistan",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state added

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Thank you for visiting my portfolio! I'm always excited to
                collaborate on new projects, share ideas, or simply have a
                conversation. Whether you have a question, a project in mind, or
                just want to say hello, feel free to reach out. I'll get back to
                you as soon as possible.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="First Name" required />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} type="text" placeholder="Last Name" required />
                <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" required />
                <Input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" required />
              </div>
              {/* Select */}
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xl text-accent">Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="scraping">Web Scraping</SelectItem>
                    <SelectItem value="chatbot">Chatbot Development</SelectItem>
                    <SelectItem value="customgpt">Custom ChatGPT's Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* Submit Button */}
              <Button
                size="md"
                type="submit"
                className="max-w-40 text-center flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col sm:flex-row items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 sm:gap-10">
              {Info.map((Item, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                  >
                    {/* Icon Container */}
                    <div
                      className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                      text-accent rounded-xl flex items-center justify-center"
                    >
                      <div className="text-[28px]">{Item.icon}</div>
                    </div>
                    {/* Text Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-white/60 text-sm sm:text-base">
                        {Item.title}
                      </p>
                      <h3 className="text-lg sm:text-xl">{Item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
