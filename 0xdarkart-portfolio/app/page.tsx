import React from 'react'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <h1 className="text-gradient animate-fade-in-up">
              Web3 Security Research & Auditing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Protecting blockchain projects through expert security analysis and vulnerability
              detection
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Terminal Placeholder */}
          <div className="mt-12 max-w-3xl mx-auto animate-fade-in-up delay-400">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-primary">
                  {'> '}Initializing security protocols...
                </p>
                <p className="text-primary mt-2">
                  {'> '}System ready. Welcome, 0x_darkart.
                </p>
                <span className="inline-block w-2 h-4 bg-primary animate-terminal-blink ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-primary">Web3 Security Researcher</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate web3 security researcher and auditor with a focus on smart contract
              vulnerabilities and DeFi protocol security. My mission is to strengthen the blockchain
              ecosystem by identifying and mitigating security risks before they can be exploited.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in both traditional cybersecurity and blockchain technology,
              I've helped numerous projects secure their code and protect user funds.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service cards will go here */}
            {[
              'Smart Contract Audits',
              'Security Research',
              'Code Reviews',
              'Security Training',
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-muted-foreground text-sm">
                  Professional {service.toLowerCase()} services for Web3 projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-center mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will go here */}
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">Project {project}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Security audit with comprehensive findings
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 bg-destructive/20 text-destructive rounded">
                    2 High
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded">
                    3 Medium
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Expertise</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills will go here */}
              {['Smart Contract Security', 'Blockchain Platforms', 'Programming Languages'].map(
                (category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                    <div className="space-y-2">
                      {[1, 2, 3].map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${90 - skill * 5}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">
                            {90 - skill * 5}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-center mb-12">Get a Quote</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom text-center text-muted-foreground">
          <p>&copy; 2025 0xDarkArt. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
