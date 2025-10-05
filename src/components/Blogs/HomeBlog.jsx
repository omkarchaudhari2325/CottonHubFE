import React from 'react';
import "./style.scss"
import { Link } from 'react-router-dom';


const HomeBlog = () => {
    const posts = [

        {
            id: 1,
            title: "Cotton aphids ",
            desc: "Cotton aphids are tiny insects that like to munch on the sap of cotton plants. They're not picky eaters they'll happily feast on other plants too. These little critters can cause damage by sucking out the juices from the leaves and stems of our cotton plants. This can weaken the plants and make them more susceptible to diseases and other pests, which isn't good for our cotton crops.",
            img: "./blogImages/aphids.jpg",
        },

        {
            id: 2,
            title: "Cotton Armyworm",
            desc: "The Cotton Armyworm, also known as Spodoptera litura, is a notorious pest that poses a significant threat to cotton crops worldwide. This insect is a voracious feeder, capable of inflicting severe damage to cotton plants at various growth stages. Native to tropical and subtropical regions, the Cotton Armyworm has garnered attention for its ability to rapidly reproduce...",
            img: "../img/armyworm.jpg",
        },
        {
            id: 3,
            title: "Cotton Bacterial Blight",
            desc: "Cotton bacterial blight is a disease that can cause big trouble for cotton plants. It's caused by bacteria that infect the cotton leaves, stems, and bolls, making them look brown and mushy. This disease spreads quickly, especially in warm and humid conditions, which are perfect for the bacteria to thrive. When cotton plants get infected, it can lead to reduced yields and lower-quality cotton...",
            img: "../img/bacterialblight.jpg",
        },
        {
            id: 4,
            title: "Cotton Boll Rot",
            desc: "Cotton boll rot can be a real headache for cotton farmers. This disease happens when fungi, like boll rot fungi, attack the cotton bolls, which are the fluffy parts of the cotton plant where the seeds are kept. These fungi thrive in warm and humid conditions, especially when the cotton bolls are damp or wet. When cotton bolls get infected, they can turn mushy and brown, ruining the cotton inside.",
            img: "../img/bollrot.jpg",
        },
        {
            id: 5,
            title: " Green cotton boll",
            desc: "Cotton boll rot is a fungal disease caused by species like Rhizopus and Fusarium, leading to the decay of cotton bolls. Effective prevention involves managing insect pests, promoting good air circulation, and avoiding excessive nitrogen fertilization. Regular inspection of bolls for signs of rot and their prompt removal are essential precautions. ",
            img: "../img/cottonboll.jpg",
        },
        {
            id: 6,
            title: "Cotton Leaf Spot",
            desc: "Cotton leaf spot, caused by the fungi Ramularia areola and Alternaria spp., manifests as circular lesions on leaves. Planting disease-resistant varieties and managing irrigation to avoid leaf wetness are crucial prevention steps. Regular inspection for leaf spots and defoliation and preventive cultural practices contribute to effective care strategies.",
            img: "../img/blog9.png",
        },
        {
            id: 7,
            title: "Powdery mildew",
            desc: "Cotton leaf spot, caused by the fungi Ramularia areola and Alternaria spp., manifests as circular lesions on leaves. Planting disease-resistant varieties and managing irrigation to avoid leaf wetness are crucial prevention steps. Regular inspection for leaf spots and defoliation and preventive cultural practices contribute to effective care strategies.",
            img: "../img/powdery.jpg",
        },
        {
            id: 8,
            title: "Target spot",
            desc: "Cotton leaf spot, caused by the fungi Ramularia areola and Alternaria spp., manifests as circular lesions on leaves. Planting disease-resistant varieties and managing irrigation to avoid leaf wetness are crucial prevention steps. Regular inspection for leaf spots and defoliation and preventive cultural practices contribute to effective care strategies.",
            img: "../img/targetspot.jpg",
        },

    ];

    return (
        <div className="home max-w-[1000px] mt-32 mx-auto">


            <div className="blog-heading">
                <h1>Understanding Cotton Diseases</h1>
                <h2>Explore the various challenges and solutions in the battle against cotton diseases to ensure a healthy and thriving crop.</h2>
            </div>

            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <Link to={`/post/${post.id}`}>
                                <button>Read more →</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBlog;
