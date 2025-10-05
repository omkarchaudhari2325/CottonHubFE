import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/ArmyWorm/1.jpg"
import img2 from "../../../static_images/ArmyWorm/2.jpg";
import img3 from "../../../static_images/ArmyWorm/3.jpg";
import img4 from "../../../static_images/ArmyWorm/4.jpg";
import img5 from "../../../static_images/ArmyWorm/5.jpg";
import img6 from "../../../static_images/ArmyWorm/6.jpeg";

const ArmyWorm = () => {
  return (
    <main className="pt-8 lg:pt-16 bg-white antialiased mt-20">
      <div className="flex px-4 mx-auto max-w-[1200px]">
        <section className="mx-auto w-full max-w-[800px] format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div>
            <div className="relative">
              <Carousel
                showThumbs={false}
                swipeable={true}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={false}
                interval={2000}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                className="overflow-hidden"
              >
                <div>
                  <img
                    src={img1}
                    className="h-[400px] w-auto mx-auto"
                    alt="Aphids"
                  />
                </div>
                <div>
                  <img
                    src={img2}
                    className="h-[400px] w-auto mx-auto object-cover"
                    alt="Aphids"
                  />
                </div>
                <div>
                  <img
                    src={img3}
                    className="h-[400px] w-auto mx-auto"
                    alt="Aphids"
                  />
                </div>
                <div>
                  <img
                    src={img4}
                    className="h-[400px] w-auto mx-auto"
                    alt="Aphids"
                  />
                </div>
                <div>
                  <img
                    src={img5}
                    className="h-[400px] w-auto mx-auto"
                    alt="Aphids"
                  />
                </div>
                <div>
                  <img
                    src={img6}
                    className="h-[400px] w-auto mx-auto"
                    alt="Aphids"
                  />
                </div>
              </Carousel>

              <div className="left-0 w-full bg-white p-3">
                <h2 className="text-xl font-semibold mb-4 mt-3">Army Worms</h2>
                <p className="mt-6 justify-center text-justify">
                  Armyworms, a voracious pest species in cotton agriculture,
                  pose formidable challenges to crop health and yield stability.
                  These caterpillars, typically larvae of various moth species
                  within the genus *Spodoptera*, are known for their rapid
                  development and destructive feeding habits. Armyworm
                  infestations can swiftly escalate, causing widespread damage
                  to cotton crops within a short period. Armyworm larvae
                  voraciously consume foliage, flowers, and developing bolls,
                  resulting in extensive defoliation and direct yield losses.
                  Their feeding activity often leads to characteristic
                  "windowpane" feeding patterns on leaves and the complete
                  consumption of plant tissues, leaving behind skeletonized
                  remnants. As the infestation progresses, severe defoliation
                  weakens the cotton plants, compromising their ability to
                  photosynthesize, grow, and produce bolls effectively.
                  Moreover, armyworms have a migratory behavior, moving in large
                  groups or "armies" from field to field in search of food,
                  further exacerbating their impact on cotton cultivation. Their
                  mobility and ability to rapidly colonize new areas make them a
                  formidable threat to cotton farmers, particularly during
                  periods of high population density and favorable environmental
                  conditions. In addition to their direct feeding damage,
                  armyworms can also transmit certain plant viruses, further
                  complicating pest management efforts and increasing the risk
                  of secondary infections in cotton crops. The spread of viral
                  diseases can compound the economic losses incurred by farmers,
                  reducing both yield quantity and fiber quality. To mitigate
                  the impact of armyworm infestations, cotton growers employ a
                  range of integrated pest management (IPM) strategies. These
                  may include cultural practices such as early planting and crop
                  rotation, the use of biological control agents like parasitic
                  wasps and predatory beetles, and targeted applications of
                  insecticides when necessary. Timely monitoring and early
                  detection of armyworm populations are critical for
                  implementing effective control measures and minimizing yield
                  losses. Despite the ongoing challenges posed by armyworms,
                  ongoing research into their biology, behavior, and control
                  methods continues to inform the development of sustainable and
                  environmentally friendly pest management strategies. By
                  implementing proactive pest management practices and
                  leveraging advancements in agricultural technology, cotton
                  farmers can effectively mitigate the impact of armyworm
                  infestations and safeguard the health and productivity of
                  their cotton crops.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ArmyWorm;
