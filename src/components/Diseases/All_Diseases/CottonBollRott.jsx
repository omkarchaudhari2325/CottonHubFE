import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/CottonBollRot/1.jpg"
import img2 from "../../../static_images/CottonBollRot/2.jpeg";

import img3 from "../../../static_images/CottonBollRot/3.jpg";
import img4 from "../../../static_images/CottonBollRot/4.jpg";
import img5 from "../../../static_images/CottonBollRot/5.jpeg";
import img6 from "../../../static_images/CottonBollRot/6.jpeg";
const CottonBollRott = () => {
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
                <h2 className="text-xl font-semibold mb-4 mt-3">
                  Cotton Boll Rott
                </h2>
                <p className="mt-6 justify-center text-justify">
                  Cotton boll rot, a prevalent disease in cotton cultivation,
                  presents a substantial challenge to crop health and yield
                  stability. This fungal disease affects cotton bolls, leading
                  to decay and deterioration of the developing fibers, thereby
                  compromising both yield quantity and fiber quality. The
                  symptoms of cotton boll rot typically manifest as water-soaked
                  lesions on the bolls, which gradually progress to dark, sunken
                  areas accompanied by a foul odor. As the disease advances, the
                  affected bolls may become soft and mushy, eventually leading
                  to the complete decay of the cotton fibers within. Cotton boll
                  rot is primarily caused by various fungal pathogens, including
                  species of *Rhizopus*, *Aspergillus*, and *Fusarium*. These
                  fungi thrive in warm and humid conditions, making cotton crops
                  particularly susceptible to infection during periods of high
                  moisture and poor airflow. The spread of cotton boll rot is
                  facilitated by several factors, including environmental
                  conditions, cultural practices, and the presence of conducive
                  host plants. Rainfall, irrigation practices, and the use of
                  overhead irrigation systems can create favorable conditions
                  for fungal growth and disease development. Additionally,
                  mechanical injury to bolls, insect feeding, and improper
                  harvesting techniques can provide entry points for fungal
                  pathogens, further exacerbating the problem. The economic
                  consequences of cotton boll rot are significant, with affected
                  bolls often experiencing reduced fiber quality and market
                  value. Severe infestations can result in substantial yield
                  losses and increased production costs associated with disease
                  management and quality control measures. To mitigate the
                  impact of cotton boll rot, cotton growers employ various
                  disease management strategies. These may include cultural
                  practices such as crop rotation, sanitation, and the use of
                  disease-resistant cotton varieties. Additionally, fungicide
                  applications targeted at controlling fungal populations and
                  reducing disease spread may be employed during critical stages
                  of boll development. Timely detection and intervention are
                  essential for effectively managing cotton boll rot and
                  minimizing yield losses. Regular scouting of cotton fields,
                  coupled with prompt removal and destruction of infected bolls,
                  can help prevent the spread of the disease to healthy plants.
                  While cotton boll rot remains a significant challenge in
                  cotton production, ongoing research efforts and advancements
                  in disease management techniques continue to contribute to the
                  development of sustainable and effective control strategies.
                  By implementing integrated pest management practices and
                  adopting proactive disease prevention measures, cotton farmers
                  can mitigate the impact of cotton boll rot and sustainably
                  protect their crops from this destructive disease.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CottonBollRott;
