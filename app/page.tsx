import Banner from "@/components/home/Banner";
import OurDoctors from "@/components/home/OurDoctors";
import Patients from "@/components/home/Patients";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="transition-colors duration-1000">
      <Banner />
      <Services />
      <OurDoctors />
      <Patients />
    </div>
  );
}
