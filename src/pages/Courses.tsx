import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, ArrowRight, Clock, Calendar, Users, MapPin } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "General Yoga Class: The Path to Holistic Wellness",
    duration: "6 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Experience a perfect blend of tradition and modern science. Our General Yoga sessions are designed for all levels. We focus on foundational asanas, flexibility, and stress reduction to help you maintain a balanced lifestyle and improve your overall immunity.",
    features: [
      "Safe Asana Practice",
      "Pranayama for Labor",
      "Anatomy of Pregnancy",
    ],
    category: "Professional",
  },
  {
    id: 2,
    title: "Weight Loss & Management: Sculpt Your Body, Ignite Your Metabolism",
    duration: "4 Weeks",
    students: "250+ Joined",
    rating: 4.8,
    price: "₹9,999",
    timing: "5 PM to 6 PM",
    desc: "Learn holistic yogic techniques to manage PCOD, Thyroid, and other hormonal imbalances naturally.",
    features: [
      "Endocrine System Sync",
      "Nutritional Guidance",
      "Stress Reduction",
    ],
    category: "Wellness",
  },
  {
    id: 3,
    title: "Kids Yoga: Playful Movement for Focused Minds",
    duration: "8 Weeks",
    students: "85+ Joined",
    rating: 5.0,
    price: "₹18,500",
    timing: "5 PM to 6 PM",
    desc: "Specialized yoga protocols designed to enhance reproductive health and support the fertility journey.",
    features: ["Pelvic Health", "Mental Resilience", "Partner Yoga Basics"],
    category: "Therapeutic",
  },
  {
    id: 4,
    title: "Meditation & Mindfulness: Silence the Noise, Find Your Inner Calm",
    duration: "10 Weeks",
    students: "150+ Joined",
    rating: 4.7,
    price: "₹12,999",
    timing: "5 PM to 6 PM",
    desc: "Discover the power of prenatal yoga in enhancing your pregnancy experience. Our program focuses on safe movements that promote relaxation, strength, and comfort throughout your journey.",
    features: ["Breathing Techniques", "Postnatal Recovery", "Yoga for Sleep"],
    category: "Wellness",
  },
  {
    id: 5,
    title: "Prenatal Yoga: Nurturing Motherhood",
    duration: "12 Weeks",
    students: "100+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Our Prenatal Yoga classes are tailored specifically for pregnant women. We offer a safe and supportive environment where you can explore various poses and breathing exercises to prepare your body for childbirth.",
    features: ["Childbirth Education", "Emotional Support", "Partner Yoga"],
    category: "Wellness",
  },
  {
    id: 6,
    title: "Yoga for Infertility & Reproductive Health",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Explore the transformative power of yoga in managing PCOS, thyroid issues, and other hormonal imbalances. Our specialized program offers gentle yet effective practices to restore balance and vitality.",
    features: ["Hormone Regulation", "Gynecological Care", "Menstrual Harmony"],
    category: "Wellness",
  },
  {
    id: 7,
    title: "Thyroid & PCOD Management",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Embark on a journey towards self-discovery through our comprehensive yoga program. Explore the depths of your mind and connect with your inner wisdom.",
    features: [
      "Mindfulness Practices",
      "Self-Care Rituals",
      "Guided Meditation",
    ],
    category: "Health",
  },
  {
    id: 8,
    title: "Chronic Pain Management (Back & Knee Pain)",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Unlock the secrets of your menstrual cycle with our comprehensive yoga program. Discover how to align your physical and emotional well-being during this unique time of the month.",
    features: [
      "Cervical Health",
      "Feminine Hygiene Tips",
      "Period Cramp Relief",
    ],
    category: "Health",
  },
  {
    id: 9,
    title: "Pranayama & Shatkarma: Inner Purification",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Join us for an immersive yoga retreat focused on deep relaxation and rejuvenation. Experience the profound benefits of yoga in a serene natural setting.",
    features: ["Deep Relaxation", "Nature Therapy", "Restorative Yoga"],
    category: "Therapeutic",
  },
  {
    id: 10,
    title: "Ashtanga Vinyasa Yoga",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Immerse yourself in a world of tranquility at our yoga retreat. Unwind amidst nature's beauty and discover the art of living in harmony with your surroundings.",
    features: ["Forest Bathing", "Yin Yoga", "Savasana"],
    category: "Wellness",
  },
  {
    id: 11,
    title: "Power Yoga: The Ultimate Fitness Flow",
    duration: "8 Weeks",
    students: "120+ Joined",
    rating: 4.9,
    price: "₹14,999",
    timing: "5 PM to 6 PM",
    desc: "Unleash your creativity and express yourself through our yoga-based art therapy workshops. Let the canvas be your canvas!",
    features: ["Creative Expression", "Artistic Exploration", "Color Therapy"],
    category: "Wellness",
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-pastel relative overflow-hidden flex items-center min-h-[50vh]">
          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="font-body text-[11px] font-semibold tracking-[0.4em] uppercase text-primary/60 mb-6">
                Deepen Your Practice
              </p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-8 font-medium">
                Our Specialized{" "}
                <span className="italic text-gradient-lilac">Classes</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Tab Switcher */}
        <div className="flex justify-center -mt-8 relative z-20">
          <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full border border-white/40 shadow-xl flex gap-2">
            <button
              onClick={() => setActiveTab("online")}
              className={`px-10 py-3 rounded-full font-body text-sm font-semibold transition-all duration-500 ${
                activeTab === "online"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-foreground/40 hover:text-foreground/60"
              }`}
            >
              Online Classes
            </button>
            <button
              onClick={() => setActiveTab("offline")}
              className={`px-10 py-3 rounded-full font-body text-sm font-semibold transition-all duration-500 ${
                activeTab === "offline"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-foreground/40 hover:text-foreground/60"
              }`}
            >
              Offline Classes
            </button>
          </div>
        </div>

        {/* Content Section */}
        <section className="section-padding bg-background relative z-10 pt-24 min-h-screen">
          <div className="container-narrow">
            <AnimatePresence mode="wait">
              {activeTab === "online" ? (
                <motion.div
                  key="online"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  {courses.map((course, i) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-10 md:p-14 border border-white/40
                               shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
                               hover:bg-white/60 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)]
                               transition-all duration-700"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                        <div className="flex-1">
                          <span className="px-4 py-1.5 rounded-full bg-lilac/40 text-primary text-[10px] font-bold uppercase tracking-wider">
                            {course.category}
                          </span>
                          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-8 leading-tight">
                            {course.title}
                          </h3>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                          <div className="flex items-center gap-1.5 text-primary bg-primary/5 px-4 py-2 rounded-full">
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm font-bold tracking-tight">
                              {course.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-primary font-body text-sm font-semibold">
                            <Clock size={16} strokeWidth={2} />
                            <span>{course.timing}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/40 pt-10 gap-8">
                        {/* <div className="flex flex-wrap gap-8 text-muted-foreground font-body text-[13px] font-medium tracking-wide">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} strokeWidth={1.5} className="text-primary/40" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users size={16} strokeWidth={1.5} className="text-primary/40" />
                            {course.students}
                          </span>
                        </div> */}
                        <button className="group flex items-center gap-3 font-body text-sm font-bold text-primary tracking-widest uppercase hover:opacity-70 transition-all duration-300">
                          Register Now
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="offline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-12 md:p-20 border border-white/40 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />

                    <div className="relative z-10 text-center mb-16">
                      <h3 className="font-display text-5xl md:text-6xl text-foreground mb-6 font-medium">
                        Personalized{" "}
                        <span className="italic text-gradient-lilac">
                          Offline Sessions
                        </span>
                      </h3>
                      <p className="font-body text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Experience the transformative power of yoga in person.
                        We conduct private and small group classes tailored to
                        your specific needs in a serene, focused environment.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                      <div className="bg-white/50 p-10 rounded-[2.5rem] border border-white/60 space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Clock size={24} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-display text-2xl">
                            Class Timings
                          </h4>
                        </div>
                        <div className="space-y-4 font-body text-foreground/70">
                          <div className="flex justify-between items-center pb-4 border-b border-black/5">
                            <span className="font-medium text-primary/60 uppercase text-[11px] tracking-widest">
                              Morning Slots
                            </span>
                            <span className="font-semibold text-lg text-foreground">
                              5 AM — 11 AM
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <span className="font-medium text-primary/60 uppercase text-[11px] tracking-widest">
                              Evening Slots
                            </span>
                            <span className="font-semibold text-lg text-foreground">
                              5 PM — 8 PM
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/50 p-10 rounded-[2.5rem] border border-white/60 space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Calendar size={24} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-display text-2xl">
                            Working Days
                          </h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 bg-lilac/30 px-6 py-4 rounded-2xl">
                            <span className="font-body font-bold text-primary tracking-widest uppercase text-sm">
                              Monday to Friday
                            </span>
                          </div>
                          <p className="font-body text-[13px] text-muted-foreground font-light px-2">
                            Weekend sessions available on special request for
                            private therapy.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-16 p-10 bg-earth text-white rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white/80">
                          <MapPin size={28} strokeWidth={1.2} />
                        </div>
                        <div className="text-left">
                          <h4 className="font-display text-2xl mb-1">
                            Studio Location
                          </h4>
                          <p className="font-body text-sm text-white/50 font-light uppercase tracking-[0.2em]">
                            Raipur, Chhattisgarh
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/919893233681?text=Hi, I want to inquire about offline classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-earth px-8 py-4 rounded-full font-body text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform"
                      >
                        Book a Visit
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="section-padding bg-gradient-lilac relative overflow-hidden">
          <div className="container-narrow text-center relative z-10">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-8 font-medium">
              Not sure which course is{" "}
              <span className="italic opacity-90">right for you?</span>
            </h2>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-10 font-light">
              Connect with Jisha Verma for a personalized consultation to
              discuss your wellness goals.
            </p>
            <a
              href="https://wa.me/919893233681?text=Hi, I want to know more about your courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary px-10 py-4 rounded-full 
                         font-body text-sm font-semibold tracking-widest uppercase
                         hover:shadow-2xl hover:scale-[1.05] active:scale-[0.98]
                         transition-all duration-700"
            >
              Chat with Jisha
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
