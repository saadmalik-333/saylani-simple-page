import heroImage from "@/assets/hero-training.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Saylani Mass IT Training</h1>
              <p className="text-sm text-muted-foreground">Empowering Digital Futures</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Transform Your Future with
                <span className="gradient-text block">IT Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of students who have launched successful careers in technology through our comprehensive training programs. Learn from industry experts and build the skills that matter.
              </p>
              <div className="bg-accent/50 p-6 rounded-lg border">
                <p className="text-accent-foreground font-medium">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Students learning IT skills in modern classroom" 
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">About Saylani Mass IT Training</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing high-quality IT education that bridges the gap between academic learning and industry requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h4 className="text-xl font-semibold mb-3">Expert Instructors</h4>
              <p className="text-muted-foreground">
                Learn from experienced professionals with real-world industry knowledge and practical expertise.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-soft border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h4 className="text-xl font-semibold mb-3">Practical Learning</h4>
              <p className="text-muted-foreground">
                Hands-on training with real projects that prepare you for the challenges of modern IT careers.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-soft border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h4 className="text-xl font-semibold mb-3">Career Support</h4>
              <p className="text-muted-foreground">
                Comprehensive career guidance and job placement assistance to help you succeed in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Our Training Programs</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed to meet industry standards and prepare you for successful IT careers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border hover:shadow-soft transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                HTML, CSS, JavaScript, React, and modern web technologies
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border hover:shadow-soft transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Programming</h4>
              <p className="text-sm text-muted-foreground">
                Python, Java, C++, and software development fundamentals
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border hover:shadow-soft transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Data Science</h4>
              <p className="text-sm text-muted-foreground">
                Analytics, machine learning, and data visualization
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border hover:shadow-soft transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Mobile Apps</h4>
              <p className="text-sm text-muted-foreground">
                Android, iOS, and cross-platform mobile development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your career? Contact us to learn more about our programs and enrollment process.
          </p>
          
          <div className="bg-card p-8 rounded-xl shadow-soft border max-w-2xl mx-auto">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Visit Our Campus</h4>
                <p className="text-muted-foreground">
                  Saylani Mass IT Training Institute<br/>
                  Karachi, Pakistan
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                <p className="text-muted-foreground">
                  Email: info@saylani.org<br/>
                  Phone: +92 (021) 111-729-526
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Saylani Mass IT Training. Empowering Digital Futures.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Building tomorrow's tech leaders today
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;