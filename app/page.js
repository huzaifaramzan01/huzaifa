"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className={
      `min-h-screen text-gray-900 dark:text-gray-100 ${darkMode ? "bg-gray-950" : "bg-gray-100"}`
    }>
      {/* Floating Glass Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
        <div className={`backdrop-blur-md border rounded-full px-6 py-3 shadow-2xl ${darkMode ? "bg-gray-900/80 border-gray-800/50" : "bg-white/80 border-gray-300/50"}`}>
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg text-gray-900 dark:text-white">HR</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "resume", label: "Resume" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    activeSection === item.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              className="ml-4 p-2 rounded-full border border-gray-700 dark:border-gray-300 text-gray-400 dark:text-gray-600 hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors bg-transparent"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-800/50">
              <div className="flex flex-col space-y-3">
                {[
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "resume", label: "Resume" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-white text-left ${
                      activeSection === item.id ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl font-bold text-white shadow-2xl overflow-hidden">
              <img
                src="/me.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Huzaifa Ramzan
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">Public Administration Student | Policy Enthusiast | NUST</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating positive societal impact through effective public policy and governance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg font-medium"
            >
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Mission & Vision</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                As a Public Administration student at the National University of Sciences and Technology (NUST), I am
                dedicated to understanding the complexities of governance and policy-making that shape our society.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                My passion lies in bridging the gap between theoretical knowledge and practical implementation, focusing
                on evidence-based policy solutions that address real-world challenges and create meaningful impact in
                communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Public Policy
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Governance
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Research
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Policy Analysis
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  Social Impact
                </Badge>
              </div>
            </div>
            <div>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4 text-white">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-white">Bachelor's in Public Administration</h5>
                      <p className="text-gray-400">National University of Sciences and Technology (NUST)</p>
                      <p className="text-sm text-gray-500">Current Student</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-4 mt-8 text-white">Core Interests</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Public Policy Development</li>
                    <li>• Governance & Administration</li>
                    <li>• Social Impact Assessment</li>
                    <li>• Policy Research & Analysis</li>
                    <li>• Community Development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects & Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Policy Research Initiative</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Conducted comprehensive research on local governance structures and their impact on community
                  development, focusing on evidence-based policy recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Research
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Policy Analysis
                  </Badge>
                </div>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Community Engagement Project</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Led a community outreach initiative to understand local needs and develop participatory governance
                  models for better citizen engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Community Work
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Engagement
                  </Badge>
                </div>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Academic Publications</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Contributing to academic discourse through research papers on public administration and policy
                  implementation in developing contexts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Academic
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    Writing
                  </Badge>
                </div>
                <Button variant="ghost" className="text-gray-400 hover:text-white p-0">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Resume</h2>
          <div className="text-center mb-12">
            <a href="/test.pdf" download className="inline-block">
              <Button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 text-lg font-medium" as="span">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-white">Research Assistant</h4>
                    <p className="text-gray-400">NUST Policy Research Center</p>
                    <p className="text-sm text-gray-500 mb-3">2023 - Present</p>
                    <p className="text-gray-400 text-sm">
                      Supporting faculty research on governance and policy implementation, conducting literature reviews
                      and data analysis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h4 className="font-semibent text-white">Volunteer Coordinator</h4>
                    <p className="text-gray-400">Local NGO Initiative</p>
                    <p className="text-sm text-gray-500 mb-3">2022 - 2023</p>
                    <p className="text-gray-400 text-sm">
                      Organized community development programs and coordinated volunteer activities for social impact
                      projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Competencies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Policy & Research</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Policy Analysis
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Research Methods
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Data Analysis
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Communication</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Public Speaking
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Academic Writing
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Stakeholder Engagement
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      SPSS
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Microsoft Office
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      Project Management
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in discussing public policy, governance challenges, and opportunities for
                collaboration. Whether you're a fellow student, researcher, or policy practitioner, I'd love to hear
                from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">huzaifa.ramzan@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">+92 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Islamabad, Pakistan</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-200 py-3 text-lg font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Huzaifa Ramzan. Dedicated to creating positive societal impact through
            effective governance.
          </p>
        </div>
      </footer>
    </div>
  )
}
