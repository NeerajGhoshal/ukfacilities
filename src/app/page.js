import ContactUs from "@/components/ContactUs/ContactUs";
import ClientFeedback from "@/components/heros/clientfeedback/ClientFeedback";
import Homepage from "@/components/heros/homepage/homepage";
import OurPrinciples from "@/components/heros/ourprinciples/OurPrinciples";
import WhatWeDo from "@/components/heros/whatwedo/WhatWeDo";
import WhereWeWork from "@/components/heros/wherewework/WhereWeWork";
import WhoWeAre from "@/components/heros/whoarewe/WhoWeAre";
import WhyChooseUs from "@/components/heros/whychooseus/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Homepage />
      <WhoWeAre />
      <WhatWeDo />
      <WhereWeWork />
      <OurPrinciples />
      <WhyChooseUs />
      <ClientFeedback />
      <ContactUs />
    </>
  );
}
