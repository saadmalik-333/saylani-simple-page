import heroImage from "@/assets/hero-training.jpg";

const Index = () => {
  return (
    <div className="min-h-screen background-gradient">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm shadow-professional border-b border-border/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="fade-in">
              <h1 className="text-3xl font-bold gradient-text">Saylani Mass IT Training</h1>
              <p className="text-sm text-muted-foreground font-medium">Empowering Digital Futures Since 1999</p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                Excellence in IT Education
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium mb-6">
                🎓 Professional IT Training Institute
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                Transform Your Future with
                <span className="gradient-text block">IT Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Join thousands of successful graduates who have launched their careers in technology through our comprehensive, industry-focused training programs.
              </p>
              <div className="professional-card p-8 max-w-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Industry-Ready Skills</h4>
                    <p className="text-muted-foreground">
                      Learn cutting-edge technologies with hands-on experience from industry professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative fade-in">
              <div className="absolute inset-0 accent-gradient rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Students mastering IT skills in our modern training facility" 
                  className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-glow border-4 border-white/20"
                />
                <div className="absolute -bottom-6 -right-6 professional-card p-6 max-w-xs">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">15,000+</div>
                    <div className="text-sm text-muted-foreground">Successful Graduates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">15,000+</div>
              <div className="text-muted-foreground">Graduates Placed</div>
            </div>
            <div className="text-center fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in">
            <h3 className="text-5xl font-bold mb-6">Why Choose Saylani?</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are Pakistan's leading IT training institute, committed to providing world-class education that bridges the gap between academic learning and industry requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="professional-card p-10 hover-lift fade-in">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">👨‍🏫</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Expert Faculty</h4>
              <p className="text-muted-foreground leading-relaxed">
                Learn from seasoned professionals with extensive industry experience and proven track records in their respective fields.
              </p>
            </div>
            
            <div className="professional-card p-10 hover-lift fade-in">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">💻</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Hands-On Training</h4>
              <p className="text-muted-foreground leading-relaxed">
                Practical, project-based learning with real-world applications that prepare you for the challenges of modern IT careers.
              </p>
            </div>
            
            <div className="professional-card p-10 hover-lift fade-in">
              <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">🚀</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Career Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive career support, job placement assistance, and industry connections to ensure your success in the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in">
            <h3 className="text-5xl font-bold mb-6">Our Premium Programs</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-aligned curriculum designed by experts to meet current market demands and future technology trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="professional-card p-8 hover-lift fade-in group">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">🌐</span>
              </div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Web Development</h4>
              <p className="text-muted-foreground mb-4">
                Master modern web technologies including React, Node.js, and full-stack development.
              </p>
              <div className="text-sm text-accent font-medium">6 Months Program</div>
            </div>
            
            <div className="professional-card p-8 hover-lift fade-in group">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Programming</h4>
              <p className="text-muted-foreground mb-4">
                Comprehensive programming foundations with Python, Java, C++, and software engineering principles.
              </p>
              <div className="text-sm text-accent font-medium">8 Months Program</div>
            </div>
            
            <div className="professional-card p-8 hover-lift fade-in group">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Data Science</h4>
              <p className="text-muted-foreground mb-4">
                Advanced analytics, machine learning, AI, and data visualization with industry tools.
              </p>
              <div className="text-sm text-accent font-medium">10 Months Program</div>
            </div>
            
            <div className="professional-card p-8 hover-lift fade-in group">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Mobile Development</h4>
              <p className="text-muted-foreground mb-4">
                Cross-platform mobile app development with React Native and Flutter frameworks.
              </p>
              <div className="text-sm text-accent font-medium">7 Months Program</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-6 fade-in">Ready to Start Your Journey?</h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto fade-in">
            Take the first step towards a successful career in technology. Our admissions team is ready to guide you through the enrollment process.
          </p>
          
          <div className="professional-card p-12 max-w-4xl mx-auto fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h4 className="font-bold text-primary mb-3">Visit Our Campus</h4>
                <p className="text-muted-foreground">
                  Saylani Mass IT Training Institute<br/>
                  A-25, Bahadurabad<br/>
                  Karachi, Pakistan
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h4 className="font-bold text-primary mb-3">Contact Us</h4>
                <p className="text-muted-foreground">
                  Email: info@saylani.org<br/>
                  Phone: +92 (021) 111-729-526<br/>
                  WhatsApp: +92 300 0000000
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h4 className="font-bold text-primary mb-3">Office Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 9:00 AM - 2:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-2">Saylani Mass IT Training</div>
              <p className="text-muted-foreground">
                © 2024 Saylani Mass IT Training Institute. Empowering Digital Futures Since 1999.
              </p>
            </div>
            <div className="text-muted-foreground">
              <div className="font-medium">Building Tomorrow's Tech Leaders Today</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;