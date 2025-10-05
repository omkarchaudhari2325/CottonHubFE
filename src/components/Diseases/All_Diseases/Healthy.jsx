import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/Healthy/1.jpeg";
import img2 from "../../../static_images/Healthy/2.png";
import img3 from "../../../static_images/Healthy/3.png";
import img4 from "../../../static_images/Healthy/4.png";
import img5 from "../../../static_images/Healthy/5.jpg";
import img6 from "../../../static_images/Healthy/6.jpg";
const Healthy = () => {
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
                <h2 className="text-xl font-semibold mb-4 mt-3">Healthy</h2>
                <p className="mt-6 justify-center text-justify">
                  A healthy plant is the cornerstone of successful agriculture,
                  and in the case of cotton, its vitality directly impacts yield
                  quantity and fiber quality. A healthy cotton plant exhibits
                  robust growth characterized by lush green foliage, vigorous
                  stems, and prolific boll development. Several essential
                  factors contribute to maintaining the health of cotton plants.
                  First and foremost is soil quality, as cotton thrives in
                  well-draining, nutrient-rich soils. Soil testing and precise
                  nutrient management ensure that cotton plants receive the
                  appropriate balance of essential nutrients, fostering optimal
                  growth and development. Adequate water management is also
                  crucial, with proper irrigation ensuring consistent soil
                  moisture levels to support healthy root systems and efficient
                  nutrient uptake. Effective pest and disease management
                  strategies are imperative for protecting cotton plants from
                  common threats such as aphids, armyworms, and fungal diseases
                  like bacterial blight and boll rot. Integrated pest management
                  (IPM) practices, including cultural methods, biological
                  control agents, and judicious use of pesticides, help minimize
                  pest pressure while preserving beneficial insects and
                  minimizing environmental impact. Weed control is another
                  critical aspect of cotton plant health, as weed competition
                  can deprive cotton plants of essential resources and hinder
                  their growth. Implementing effective weed management
                  practices, such as herbicide applications and mechanical
                  cultivation, helps maintain clean fields and optimize crop
                  performance. Additionally, climate and environmental
                  conditions play a significant role in cotton plant health,
                  with warm, sunny weather and adequate rainfall or irrigation
                  contributing to optimal growth and development. Timely
                  management practices, including planting, fertilization, and
                  pest control, ensure that cotton plants receive the care they
                  need at each stage of their growth cycle. By prioritizing
                  these factors and adopting proactive management strategies,
                  cotton farmers can cultivate healthy plants that yield
                  high-quality fiber and contribute to the overall success and
                  sustainability of their operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Healthy;
