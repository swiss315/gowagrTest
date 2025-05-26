import {Navbar} from "@/components/navbar";
import {LandingPage} from "@/components/homepage/landingPage";
import {WinUpToo} from "@/components/homepage/WinUpToo";
import {Projection} from "@/components/homepage/projection";
import {WhyChooseUs} from "@/components/homepage/whyChooseUs";
import {WordOnTheStreet} from "@/components/homepage/wordOnThisStreet";
import {JoinEcosystem} from "@/components/homepage/joinEcosystem";
import {StartWinning} from "@/components/homepage/startWinning";
import {Latest} from "@/components/homepage/latest";
import {Advert} from "@/components/homepage/advert";
import {Footer} from "@/components/homepage/footer";

export default function Home() {


  return (
    <div className="bg-primary">
      <Navbar />
      <main className="">

        {/* First Page Section */}
        <LandingPage />

        {/* Win Up too*/}
        <WinUpToo/>

        {/*Numerous Projection */}
        <Projection/>

        {/* why street fuck with us */}
        <WhyChooseUs/>

        {/* word of street */}
        <WordOnTheStreet/>

        {/* join an ecosystem */}
        <JoinEcosystem/>

        {/* start winning */}
        <StartWinning/>

        {/* latest from the gang */}
        <Latest/>

        {/* advert */}
        <Advert />

        {/* footer */}
        <Footer/>
      </main>

    </div>
  );
}


