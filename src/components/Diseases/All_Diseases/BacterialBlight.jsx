import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/BacterialBlight/1.jpeg";
import img2 from "../../../static_images/BacterialBlight/2.jpeg";

import img3 from "../../../static_images/BacterialBlight/3.jpeg";
import img4 from "../../../static_images/BacterialBlight/4.jpeg";
import img5 from "../../../static_images/BacterialBlight/5.jpg";
import img6 from "../../../static_images/BacterialBlight/6.jpg";
const BacterialBlight = () => {
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
                  Backterial Blight
                </h2>
                <p className="mt-6 justify-center text-justify">
                  Bacterial blight, a pervasive disease in cotton cultivation,
                  poses a significant threat to crop health and productivity.
                  Caused by the bacterium *Xanthomonas citri*, this disease
                  manifests as water-soaked lesions on cotton leaves, stems, and
                  bolls, leading to extensive tissue damage and compromised
                  plant function. The symptoms of bacterial blight typically
                  appear as small, dark lesions that gradually expand and
                  coalesce, forming large, irregularly shaped spots. These
                  lesions often ooze bacterial exudates, giving affected plant
                  tissues a slimy or greasy appearance. As the disease
                  progresses, infected leaves may wither and die, leading to
                  premature defoliation and reduced photosynthetic capacity.
                  Bacterial blight not only impacts the foliage of cotton plants
                  but also affects reproductive structures such as flowers and
                  bolls. Infected flowers may fail to develop properly,
                  resulting in poor fruit set and reduced boll formation.
                  Additionally, bolls affected by bacterial blight may exhibit
                  symptoms such as water-soaked lesions, premature opening, and
                  reduced fiber quality, leading to significant yield losses and
                  economic repercussions for cotton growers. The spread of
                  bacterial blight is facilitated by various factors, including
                  rainfall, irrigation practices, and mechanical transmission
                  through contaminated tools and equipment. Once established in
                  a field, the bacterium can persist in plant debris and soil,
                  posing a recurrent threat to subsequent crops. Effective
                  management of bacterial blight requires an integrated approach
                  that combines cultural, chemical, and biological control
                  measures. Cultural practices such as crop rotation,
                  sanitation, and the use of disease-resistant cotton varieties
                  can help reduce the incidence and severity of bacterial
                  blight. Additionally, targeted applications of copper-based
                  bactericides and antibiotics may be employed to suppress
                  bacterial populations and limit disease spread. Timely
                  detection and diagnosis of bacterial blight are crucial for
                  implementing appropriate control measures and minimizing yield
                  losses. Regular scouting of cotton fields, coupled with
                  laboratory testing of symptomatic plant samples, can aid in
                  early disease detection and prompt intervention. While
                  bacterial blight poses significant challenges to cotton
                  production, proactive management strategies and ongoing
                  research efforts continue to contribute to the development of
                  effective disease control measures. By adopting integrated
                  pest management practices and deploying targeted control
                  strategies, cotton farmers can mitigate the impact of
                  bacterial blight and sustainably manage this pervasive disease
                  in their fields.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BacterialBlight;
