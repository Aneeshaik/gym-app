import batmanTrainer from "../assets/images/batman-trainer.png";
import batmanTraining from "../assets/images/batman-training.jpg";
import batmanMission from "../assets/images/batman-mission.jpg";
import batmanMethodology from "../assets/images/batman-methodology.jpg";

function About() {
  return (
    <div className="m-10 p-10">
      <div className="flex justify-between mb-44 mt-20">
        <div className="text-5xl content-center">
          DISCOVER INDIA'S BEST PERSONAL TRAINER
        </div>
        <img
          className="rounded-full"
          src={batmanTrainer}
          alt="batman-trainer"
        />
      </div>
      <div className="flex justify-between mb-44">
        <img className="w-1/2" src={batmanTraining} alt="" />
        <div className="p-10 text-justify text-lg content-center leading-7">
          <p className="mb-2">
            Welcome to AMyeS Fitness Training, where you can experience the
            advantage of personalized training with a dedicated sole personal
            trainer. As a sole personal trainer, I bring a wealth of knowledge,
            experience, and passion to every training session. I understand that
            each person has unique needs and objectives, which is why I
            prioritize a comprehensive initial consultation. During this
            consultation, we will discuss your specific goals, assess your
            current fitness level, and determine any limitations or concerns
            that may impact your training.
          </p>
          <p>
            At AMyeS Fitness Training, the advantage lies in the ability to
            design a training program that is entirely customized for you. From
            the very first session, I will conduct a thorough movement
            evaluation to analyze your posture, flexibility, strength, and
            overall movement patterns. This evaluation serves as the foundation
            for developing a program that addresses your individual strengths,
            weaknesses, and areas of improvement.
          </p>
        </div>
      </div>
      <div className="flex mb-44">
        <div className="content-center">
          <div className="text-center text-3xl underline">MISSION</div>
          <div className="p-10 text-justify text-lg leading-7">
            I understand that everyone has different goals and circumstances
            when it comes to their fitness journey. That's why my personalized
            personal training programs are designed to provide you with the most
            effective and tailored approach to help you achieve your specific
            goals. Whether you're looking to lose weight, gain muscle, improve
            your overall fitness, or recover from an injury, I will work closely
            with you to create a customized plan that fits your individual
            needs. With my expertise and support, you can be confident that
            you're receiving the highest quality training that is specifically
            designed for you. Let me help you take the first step towards a
            healthier and stronger you.
          </div>
        </div>
        <img className="w-1/2" src={batmanMission} alt="batman-mission" />
      </div>
      <div className="flex">
        <img className="w-1/2" src={batmanMethodology} alt="" />
        <div className="content-center">
          <div className="text-center text-3xl underline">METHODOLOGY</div>
          <div className="p-10 text-justify text-lg leading-7">
            The methodology used to develop individualized training programs
            involves several important steps. Firstly, an initial consultation
            is conducted to gather information about the client's fitness goals
            and any specific needs or concerns they may have. Next, a thorough
            movement evaluation is performed to assess the client's current
            mobility, strength, and flexibility. This step helps to identify any
            areas of weakness or imbalances that need to be addressed. Finally,
            goal assessment is conducted to determine the client's desired
            outcomes and establish realistic targets. By taking into
            consideration factors such as the client's exercise experience,
            current fitness level, time availability, and personal limitations,
            the trainers are able to create safe and effective programs that are
            tailored to the individual's unique needs and goals.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
