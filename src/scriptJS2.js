let articals = [
  {
    topic_name: "The Future of Artificial Intelligence",
    image_url:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=1380&t=st=1698168444~exp=1698169044~hmac=c517df746b6b01d3e36e0d81c99552d88b054d960f7948e249872a1366a14599",
    article:
      "Artificial Intelligence is advancing at an unprecedented pace, opening up new possibilities in various sectors. In this article, we explore the potential future of AI, discussing its impact on industries, society, and the ethical considerations that come with it. From autonomous vehicles to personalized marketing, AI is reshaping our world.",
    date: "2023-10-24",
  },
  {
    topic_name: "Ethical Considerations in AI Development",
    image_url:
      "https://img.freepik.com/free-vector/ethical-dilemma-illustration_23-2148754896.jpg?w=1380&t=st=1698168526~exp=1698169126~hmac=9461cf5c91aedaf30fc7e8b5e7d1c54c4ec2e07ce5287df37001f59c47d7d413",
    article:
      "As AI continues to evolve, ethical concerns have gained prominence. This article delves into the ethical considerations surrounding AI development, including bias in algorithms, data privacy, and the responsibility of AI developers to create fair and transparent systems.",
    date: "2023-10-25",
  },
  {
    topic_name: "AI in Education: Transforming Learning",
    image_url:
      "https://img.freepik.com/free-photo/6g-internet-connection-collage_23-2150729771.jpg?t=st=1698168555~exp=1698169155~hmac=37a40672d2c32c758786582ffbbde54fe349a87ee2895f398a55ebecdca3295e",
    article:
      "Education is not immune to the influence of AI. This article explores how AI is transforming the education sector, from personalized learning experiences to streamlining administrative tasks. Learn how AI is enhancing education and what challenges lie ahead.",
    date: "2023-10-26",
  },
  {
    topic_name: "AI in Business: Leveraging Data for Success",
    image_url:
      "https://img.freepik.com/free-photo/person-using-futuristic-technology_1134-495.jpg?w=1380&t=st=1698168652~exp=1698169252~hmac=a039d03d3745f1c3ba686d33454c39cc9700e8c98ea42989543c9f813c83bd61",
    article:
      "Businesses are harnessing the power of AI to gain insights from data, optimize operations, and improve customer experiences. This article discusses the role of AI in the corporate world, highlighting real-world examples and its potential to revolutionize industries.",
    date: "2023-10-27",
  },
  {
    topic_name: "AI and Healthcare: Revolutionizing Patient Care",
    image_url:
      "https://img.freepik.com/free-photo/scientist-researcher-wearing-virtual-reality-headset-analyzing-brain-activity-futuristic-holografic-interface-during-chemistry-experiment-biochemistry-hospital-laboratory-neuroscience-research_482257-28273.jpg?w=1380&t=st=1698168701~exp=1698169301~hmac=ae534b0a8ae44b5f8061bf57dc39547c341d2431b28e960374532e3c3249d2c4",
    article:
      "AI's impact on healthcare is undeniable. From early disease detection to personalized treatment plans, this article explores the transformative role of AI in healthcare. While benefits are substantial, it also touches on challenges and the need for careful implementation.",
    date: "2023-10-28",
  },
];

let div = document.createElement("dive");
div.classList.add("blog-artical");
document.querySelector("main").appendChild(div);
let src, date, text, topic;
for (i in articals) {
  src = articals[i]["image_url"];
  date = articals[i]["date"];
  text = articals[i]["article"];
  topic = articals[i]["topic_name"];

  let post = `
     <div class="blog-artical">
    <img src=${src} alt="Sample Image">
    <h3>${topic}</h3>
    <p>${text}</p>
    <p id="date">${date}</p>

</div>
`;
  div.insertAdjacentHTML("afterend", post);
}
