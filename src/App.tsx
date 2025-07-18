import React from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Linkedin, Phone, Mail } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="p-6 space-y-16 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 min-h-screen">
      <section className="text-center space-y-4">
        <img
          src="/your-photo.jpg"
          alt="Yugandhar Budha"
          className="w-40 h-40 rounded-full mx-auto shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800">Yugandhar Budha</h1>
        <p className="text-lg text-gray-600">Educator | Motivational Speaker | Lifelong Learner</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="hover:scale-105 transition-transform bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">About Me</h2>
            <p className="leading-relaxed text-gray-600">
              I am Yugandhar Budha, a dedicated educator and motivational speaker passionate about bridging the gap between education and practical application. With experience teaching, mentoring, and inspiring students, I focus on empowering others through technology and education.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:scale-105 transition-transform bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h2>
            <p className="space-y-2">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">Teaching</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">Java</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">Python</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">RDBMS</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">HTML5</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">CSS</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">SQL</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">Machine Learning</span>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1">Programming in C</span>
            </p>
          </CardContent>
        </Card>

        <Card className="hover:scale-105 transition-transform bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Certifications</h2>
            <p className="text-gray-600">Python and Machine Learning Certification (APSSDC)</p>
          </CardContent>
        </Card>

        <Card className="hover:scale-105 transition-transform bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Projects</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>E-minds</li>
              <li>Portfolio using React and Tailwind</li>
              <li>House Rent Prediction using ML</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6">
      <a
  href="/resume-yugandhar.pdf"
  download
  className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
>
  Download Resume
</a>



        <div className="flex justify-center space-x-6 text-gray-600">
          <a href="https://www.linkedin.com/in/yugandhar-b-a37148222" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-blue-700" />
          </a>
          <a href="tel:+918250421321">
            <Phone className="h-6 w-6 hover:text-green-600" />
          </a>
          <a href="mailto:Yugandharb151@yahoo.com">
            <Mail className="h-6 w-6 hover:text-red-500" />
          </a>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Contact Me</h2>
        <form className="space-y-6 max-w-lg mx-auto" action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded shadow" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded shadow" required />
          <textarea name="message" placeholder="Your Message" className="w-full border p-3 rounded shadow" rows="4" required></textarea>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>

      <footer className="text-center p-4 text-gray-500">
        © 2025 Yugandhar Budha. All rights reserved.
      </footer>
    </div>
  );
}
