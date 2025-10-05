import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/GreenBollRott/1.jpg";
import img2 from "../../../static_images/GreenBollRott/2.jpg";
import img3 from "../../../static_images/GreenBollRott/3.jpg";
import img4 from "../../../static_images/GreenBollRott/4.jpg";
import img5 from "../../../static_images/GreenBollRott/5.jpg";
import img6 from "../../../static_images/GreenBollRott/6.jpeg";
const GreenBollRott = () => {
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
                  Green Boll Rott
                </h2>
                <p className="mt-6 justify-center text-justify">
                  Green boll rot, a common issue in cotton farming, represents a
                  significant threat to crop yield and quality. This fungal
                  disease primarily affects young, developing cotton bolls,
                  leading to premature decay and loss of fiber potential. The
                  symptoms of green boll rot typically appear as water-soaked
                  lesions on the surface of the bolls, which gradually darken
                  and expand as the disease progresses. Infected bolls may
                  exhibit soft, mushy areas, often accompanied by a foul odor.
                  In severe cases, the entire boll may become discolored and
                  decayed, rendering it unsuitable for harvesting and
                  processing. Green boll rot is primarily caused by fungal
                  pathogens, including species of *Aspergillus* and *Rhizopus*,
                  which thrive in warm, humid conditions. These fungi can infect
                  cotton bolls through wounds or openings created by insect
                  feeding, mechanical damage, or adverse weather conditions.
                  Once established, the fungi rapidly colonize the bolls,
                  leading to extensive tissue damage and decay. The spread of
                  green boll rot is facilitated by various factors, including
                  environmental conditions, cultural practices, and the presence
                  of susceptible host plants. Excessive rainfall, high humidity
                  levels, and dense canopy cover can create optimal conditions
                  for fungal growth and disease development. Additionally, the
                  presence of infected plant debris and crop residues can serve
                  as sources of inoculum, contributing to disease recurrence in
                  subsequent growing seasons. The economic impact of green boll
                  rot can be significant, with affected bolls experiencing
                  reduced fiber quality and market value. Yield losses due to
                  premature boll drop and reduced lint yield further exacerbate
                  the financial implications for cotton growers. To manage green
                  boll rot effectively, cotton farmers employ a combination of
                  cultural, chemical, and biological control measures. Cultural
                  practices such as proper irrigation management, timely
                  harvesting, and the removal of infected plant debris can help
                  reduce disease pressure in cotton fields. Additionally,
                  fungicide applications targeted at controlling fungal
                  populations and protecting developing bolls may be necessary,
                  particularly during periods of high disease pressure. Early
                  detection and intervention are crucial for minimizing the
                  impact of green boll rot on cotton crops. Regular scouting of
                  fields, coupled with prompt removal and destruction of
                  infected bolls, can help prevent disease spread and limit
                  yield losses. While green boll rot poses significant
                  challenges to cotton production, proactive disease management
                  strategies and ongoing research efforts continue to contribute
                  to the development of effective control measures. By
                  implementing integrated pest management practices and adopting
                  preventive measures, cotton farmers can mitigate the impact of
                  green boll rot and protect the health and productivity of
                  their crops.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GreenBollRott;
