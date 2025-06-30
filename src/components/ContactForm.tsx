import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xovwrern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-[#121212] p-8 rounded-lg ${className}`}
    >
      <h2 className="text-3xl font-bold mb-2 text-white">
        Let's create something together
      </h2>
      <p className="text-gray-400 mb-8">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-[#1a1a1a] border-[#333] text-white h-12 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-[#1a1a1a] border-[#333] text-white h-12 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
          />
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-[#1a1a1a] border-[#333] text-white min-h-[150px] focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
          />
        </div>

        <Button
          type="submit"
          className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 w-full sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Send Message
        </Button>
      </form>

      <div className="mt-10 pt-8 border-t border-[#333]">
        <h3 className="text-xl font-semibold text-white mb-4">
          Connect with me
        </h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-[#a855f7] transition-colors duration-300"
          >
            <div className="bg-[#1a1a1a] p-3 rounded-full">
              <Mail className="h-5 w-5" />
            </div>
            <span>bhattn245@gmail.com</span>
          </a>

          <a
            href="https://github.com/bhattk64"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#a855f7] transition-colors duration-300"
          >
            <div className="bg-[#1a1a1a] p-3 rounded-full">
              <Github className="h-5 w-5" />
            </div>
            <span>github.com/bhattk64</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kul-chandra-bhatt-b66182237/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#a855f7] transition-colors duration-300"
          >
            <div className="bg-[#1a1a1a] p-3 rounded-full">
              <Linkedin className="h-5 w-5" />
            </div>
            <span>linkedin.com/in/kul-chandra-bhatt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
