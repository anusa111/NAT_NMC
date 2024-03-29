//components
import Layout from "@/components/Layout/Layout";
import CallToAction from "@/components/callToAction/CallToAction";
import ClinicalService from "@/pageComponents/Home/components/ClinicalService";
import Facility from "@/pageComponents/Home/components/Facility";
import HealthCarePackages from "@/pageComponents/Home/components/HealthCarePackages";
import HeroSection from "@/pageComponents/Home/components/HeroSection";
import MessageFromDirector from "@/pageComponents/Home/components/MessageFromDirector";
import News from "@/pageComponents/Home/components/News";
import OurAcademics from "@/pageComponents/Home/components/OurAcademics";
import WhyChooseUs from "@/pageComponents/Home/components/WhyChooseUs";
import Testimonials from "@/pageComponents/testimonials/Testimonials";
import Metatag from "@/utils/Metatag";

const index = () => {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Home" og_image="" />
      <HeroSection />
      <Facility />
      <ClinicalService />
      <HealthCarePackages />
      <WhyChooseUs />
      <MessageFromDirector />
      <OurAcademics />
      <Testimonials />
      <CallToAction />
      <News />
    </Layout>
  );
};

export default index;
