import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../static_images/TargetSpot/1.jpeg"
import img2 from "../../../static_images/TargetSpot/2.jpeg";
import img3 from "../../../static_images/TargetSpot/3.jpeg";
import img4 from "../../../static_images/TargetSpot/4.jpeg";
import img5 from "../../../static_images/TargetSpot/5.jpeg";
import img6 from "../../../static_images/TargetSpot/6.jpeg";
const TargetSpot = () => {
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
                <h2 className="text-xl font-semibold mb-4 mt-3">Target Spot</h2>
                <p className="mt-6 justify-center text-justify">
                  Target sports, while unrelated to cotton plants directly,
                  provide an interesting analogy when considering certain
                  aspects of cotton cultivation. Much like participants in
                  target sports aim for accuracy and precision in hitting
                  designated targets, cotton farmers strive for precision in
                  their cultivation practices to achieve optimal growth, yield,
                  and fiber quality. In the context of cotton farming, the
                  "target" can be seen as the desired outcome of a successful
                  harvest, characterized by healthy plants with well-developed
                  bolls containing high-quality cotton fiber. To hit this
                  target, farmers employ various techniques and strategies aimed
                  at promoting the health and productivity of their cotton
                  plants. For instance, just as archers adjust their aim and
                  technique to account for factors such as wind speed and
                  distance to the target, cotton farmers must adapt their
                  cultivation practices to suit the unique environmental
                  conditions and challenges faced in their region. This may
                  involve implementing irrigation strategies to ensure adequate
                  soil moisture, adjusting planting density to optimize plant
                  growth, and employing pest management measures to protect
                  against common threats such as aphids or boll weevils.
                  Furthermore, similar to how shooters practice diligently to
                  improve their accuracy and consistency over time, cotton
                  farmers continually refine their cultivation techniques
                  through experience, research, and innovation. By staying
                  informed about the latest advancements in agricultural science
                  and technology, farmers can fine-tune their approach to cotton
                  cultivation, increasing the likelihood of hitting their target
                  yield and quality goals. In essence, while the analogy between
                  target sports and cotton cultivation may seem abstract, it
                  underscores the importance of precision, skill, and
                  perseverance in achieving success in agricultural endeavors.
                  By adopting a targeted approach to cultivation and continually
                  striving for improvement, cotton farmers can maximize the
                  potential of their crops and ultimately hit the mark when it
                  comes to producing high-quality cotton fiber.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TargetSpot;
