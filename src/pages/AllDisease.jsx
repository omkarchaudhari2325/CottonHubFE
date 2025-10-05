import React from "react";
import { NavLink } from "react-router-dom";

const AllDisease = () => {
  return (
    <div>
      <main className="pt-8 lg:pt-16 bg-white antialiased mt-20">
        <div className="flex px-4 mx-auto max-w-[1200px]">
          <section className="mx-auto w-full max-w-[800px] format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1 className="font-bold text-2xl">Cotton Diseases</h1>
            <p className="mt-3 text-justify mb-5">
              Cotton diseases pose significant threats to cotton cultivation
              worldwide. Bacterial blight, caused by *Xanthomonas citri*, leads
              to water-soaked lesions on leaves and stems, hampering
              photosynthesis and weakening plant vitality. Cotton leaf curl
              virus (CLCuV), transmitted by whiteflies, induces symptoms like
              leaf curling and stunted growth, hindering both yield and fiber
              quality. Fusarium wilt, caused by *Fusarium oxysporum*, and
              verticillium wilt, caused by *Verticillium dahliae*, disrupt the
              vascular system, resulting in wilting, yellowing, and reduced
              nutrient uptake, thereby diminishing growth and productivity. Boll
              rot, instigated by various fungal pathogens, leads to boll decay
              and premature opening, compromising both cotton quantity and fiber
              quality. The collective impact of these diseases on cotton farmers
              worldwide is substantial. Estimates suggest that these diseases
              affect a significant percentage of cotton cultivation globally,
              leading to considerable economic losses within the cotton
              industry. Addressing these challenges requires the implementation
              of robust disease management strategies, including the use of
              disease-resistant varieties, sanitation measures, and timely
              application of fungicides and insecticides to safeguard cotton
              crops and ensure sustainable yields.
            </p>
            <h2>To know more please check this out :</h2>
            <div>
              <ul className="list-disc list-inside text-blue-800 mt-4 grid grid-cols-2">
                <NavLink to="aphids">
                  <li className="underline">Aphids</li>
                </NavLink>
                <NavLink to="army-worm">
                  <li className="underline">Armyworm</li>
                </NavLink>

                <NavLink to="bacterial-blight">
                  <li className="underline">Bacterial Blight</li>
                </NavLink>

                <NavLink to="cotton-boll-rot">
                  <li className="underline">Cotton Boll Rot</li>
                </NavLink>

                <NavLink to="green-boll-rot">
                  <li className="underline">Green Cotton Boll</li>
                </NavLink>

                <NavLink to="healthy">
                  <li className="underline">Healthy</li>
                </NavLink>

                <NavLink to="powdery-mildew">
                  <li className="underline">Powdery Mildew</li>
                </NavLink>

                <NavLink to="target-spot">
                  <li className="underline">Target Spot</li>
                </NavLink>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AllDisease;
