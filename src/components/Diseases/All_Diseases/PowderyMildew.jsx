import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/Powdery_Mildew/1.webp";
import img2 from "../../../static_images/Powdery_Mildew/2.jpeg";
import img3 from "../../../static_images/Powdery_Mildew/3.jpeg";
import img4 from "../../../static_images/Powdery_Mildew/4.jpeg";
import img5 from "../../../static_images/Powdery_Mildew/5.jpeg";
import img6 from "../../../static_images/Powdery_Mildew/6.jpeg";
const PowderyMildew = () => {
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
                  Powdery Mildew
                </h2>
                <p className="mt-6 justify-center text-justify">
                  Powdery mildew spreads through airborne spores, which can
                  easily travel from plant to plant, as well as from infected
                  plant debris. It thrives in environments with moderate
                  temperatures ranging from 15°C to 25°C (59°F to 77°F) and can
                  survive in cooler temperatures during winter months. Unlike
                  some fungal diseases, powdery mildew doesn't require standing
                  water on plant surfaces to germinate and infect; instead, it
                  flourishes in high humidity environments. One of the notable
                  characteristics of powdery mildew is its ability to infect a
                  wide range of plant species, including ornamentals,
                  vegetables, fruits, and agronomic crops like cotton. This
                  broad host range makes it a significant concern for farmers
                  and gardeners alike. While powdery mildew typically doesn't
                  cause plant death directly, severe infestations can weaken
                  plants and make them more susceptible to other stresses, such
                  as drought or secondary infections. Moreover, the presence of
                  powdery mildew on cotton plants can reduce photosynthetic
                  efficiency, ultimately impacting yield and fiber quality. To
                  manage powdery mildew effectively, farmers often rely on a
                  combination of cultural, chemical, and biological control
                  methods. Cultural practices include ensuring proper plant
                  spacing, promoting good air circulation, and avoiding overhead
                  irrigation. Chemical control involves the application of
                  fungicides, with products containing sulfur, potassium
                  bicarbonate, or synthetic compounds being commonly used.
                  Additionally, some biological control agents, such as certain
                  strains of Bacillus subtilis or the fungus Ampelomyces
                  quisqualis, can help suppress powdery mildew populations.
                  Regular monitoring of cotton fields for early signs of powdery
                  mildew, combined with timely intervention and integrated pest
                  management strategies, is essential for minimizing the impact
                  of this fungal disease on cotton crops and ensuring optimal
                  yields and fiber quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PowderyMildew;
