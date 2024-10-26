import { motion } from 'framer-motion';
import batmanTrainer from "../assets/images/batman-trainer.png";
import batmanTraining from "../assets/images/batman-training.jpg";
import batmanMission from "../assets/images/batman-mission.jpg";
import batmanMethodology from "../assets/images/batman-methodology.jpg";

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 lg:px-16 py-12"
    >
      <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32"
        >
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              DISCOVER INDIA'S BEST PERSONAL TRAINER
            </h1>
          </div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl shadow-blue-500/20"
            src={batmanTrainer}
            alt="batman-trainer"
          />
        </motion.div>

        {/* Training Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center gap-12 mb-32"
        >
          <motion.img 
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2 rounded-2xl shadow-xl shadow-blue-500/10"
            src={batmanTraining} 
            alt="Training"
          />
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to AMyeS Fitness Training, where you can experience the
              advantage of personalized training with a dedicated sole personal
              trainer. As a sole personal trainer, I bring a wealth of knowledge,
              experience, and passion to every training session.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At AMyeS Fitness Training, the advantage lies in the ability to
              design a training program that is entirely customized for you.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32"
        >
          <motion.img 
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2 rounded-2xl shadow-xl shadow-blue-500/10"
            src={batmanMission} 
            alt="Mission"
          />
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              OUR MISSION
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I understand that everyone has different goals and circumstances
              when it comes to their fitness journey. That's why my personalized
              training programs are designed to provide you with the most
              effective and tailored approach to help you achieve your specific
              goals.
            </p>
          </div>
        </motion.div>

        {/* Methodology Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.img 
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2 rounded-2xl shadow-xl shadow-blue-500/10"
            src={batmanMethodology} 
            alt="Methodology"
          />
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              OUR METHODOLOGY
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The methodology used to develop individualized training programs
              involves several important steps. We begin with an initial consultation,
              followed by a thorough movement evaluation, and finally a comprehensive
              goal assessment to create your perfect fitness journey.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;