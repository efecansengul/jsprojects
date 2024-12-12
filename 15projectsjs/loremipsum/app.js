const texts = [
  "Every morning, I wake up at 7 a.m. and start my day by brushing my teeth. Then, I wash my face and have a light breakfast, usually toast and tea. After that, I get ready for work. I leave the house at 8 a.m. and take the bus to the office. My workday starts at 9 a.m. and ends at 5 p.m. During the day, I have meetings, respond to emails, and work on various projects. At noon, I take a lunch break with my colleagues. After work, I sometimes go to the gym or take a walk in the park. When I get home, I cook dinner and watch TV for an hour. Before bed, I read a book or scroll through my phone. Finally, I go to bed at around 11 p.m. and prepare for the next day.",
  "Hobbies are essential for a balanced life. They allow us to relax and enjoy our free time. For example, some people love painting because it helps them express their emotions. Others enjoy playing sports to stay fit and healthy. Reading is also a popular hobby that expands knowledge and vocabulary. Additionally, hobbies like gardening or cooking can be both fun and practical. They reduce stress and make life more enjoyable. People who have hobbies often feel happier and more fulfilled. Moreover, hobbies can help us make new friends who share similar interests. They give us something to look forward to after a busy day. Therefore, finding a hobby you love can improve both your mental and physical well-being.",
  "My favorite season is spring. During spring, the weather is warm but not too hot. Flowers start to bloom, and trees grow fresh green leaves. I love the smell of fresh air and the beauty of colorful gardens. Spring is also a great time for outdoor activities. People go hiking, biking, and have picnics in the park. Another reason I love spring is that it’s a season of renewal. Many animals come out of hibernation, and birds return from migration. Spring makes me feel alive and energetic. It’s also the season of my birthday, which makes it extra special. Overall, spring brings happiness and a sense of hope.",
  "Last summer, I went on a vacation to Italy. It was an unforgettable experience. I visited Rome, Venice, and Florence. In Rome, I saw the Colosseum and the Vatican. The historical sites were fascinating. In Venice, I took a gondola ride and explored the canals. Florence amazed me with its art museums and beautiful architecture. The food in Italy was also incredible. I tried pizza, pasta, and gelato every day. The locals were friendly and welcoming, making my trip even more enjoyable. I took hundreds of pictures and made wonderful memories. I hope to visit Italy again someday.",
  "Technology has transformed our lives in countless ways. It has made communication faster and easier. For example, we can now send messages or video call friends from anywhere in the world. Technology has also improved education. Students can learn online and access a wealth of information with just a few clicks. Moreover, technology has revolutionized healthcare, with advanced machines and treatments saving lives. In the workplace, it has increased productivity and created new opportunities. However, excessive use of technology can lead to problems like addiction or lack of physical activity. Therefore, it’s important to use technology wisely. When balanced, it is a powerful tool for progress and convenience.",
  "Music plays a vital role in our lives. It can inspire, comfort, and entertain us. Many people listen to music to relax after a stressful day. Others use it to stay motivated during exercise or work. Music is also a way to express emotions and connect with others. Different genres suit different moods, such as pop for energy or classical for calmness. Live concerts bring people together to share unforgettable moments. Additionally, learning to play an instrument can improve focus and creativity. Music has no boundaries; it’s a universal language that everyone understands. Life without music would feel empty and dull.",
  "My ideal job is to become a software developer. I enjoy solving problems and creating innovative solutions. In this role, I would design and develop applications that help people in their daily lives. I imagine working in a supportive team where we exchange ideas and learn from each other. Flexibility in the workplace is important to me, as it allows for a good work-life balance. I also want to keep learning new programming languages and tools. Helping businesses grow with my skills would be rewarding. Most importantly, I want to feel proud of my work and make a positive impact on the world.",
  "Healthy eating is essential for a good life. A balanced diet includes fruits, vegetables, grains, proteins, and healthy fats. Eating nutritious food boosts energy and strengthens the immune system. It also reduces the risk of chronic diseases like diabetes or heart problems. Fast food and sugary snacks should be consumed in moderation. Drinking plenty of water is also crucial for staying hydrated. Preparing meals at home is a great way to control what you eat. Healthy eating doesn’t mean giving up all treats; it’s about balance. By making smart choices, you can enjoy food and stay healthy.",
  "Social media has changed the way we interact with the world. Platforms like Instagram, Facebook, and Twitter connect us with friends and family. They also allow us to share our thoughts and experiences. Social media is a great tool for learning and discovering new interests. However, it has its downsides, such as cyberbullying and misinformation. Spending too much time online can also harm mental health. To use social media positively, it’s important to take breaks and focus on real-life relationships. When used responsibly, social media can be a powerful way to communicate and stay informed.",
  "Nature is one of the greatest gifts of life. The beauty of mountains, rivers, forests, and oceans is breathtaking. Spending time in nature helps people relax and find peace. Walking in a park or hiking in the woods can reduce stress and improve mood. Nature also provides us with resources like water, food, and fresh air. Protecting the environment is essential for future generations. Simple actions like recycling and planting trees can make a difference. By appreciating nature, we can live in harmony with the world around us. It reminds us of the importance of preserving our planet.",
];

const amount = document.querySelector("#amount");
const button = document.querySelector(".btn");
const loremText = document.querySelector(".lorem-text");
function generateParagraphs(targetParag) {
  for (let i = 0; i < targetParag; i++) {
    let chooseNum = Math.floor(Math.random() * 10);
    let p = document.createElement("p");

    p.innerText = "";
    p.innerText += texts[chooseNum];

    loremText.append(p);
  }
}

button.addEventListener("click", (e) => {
  loremText.innerText = "";
  e.preventDefault();
  if (isNaN(amount.value) || amount.value < 0) {
    return (loremText.innerHTML = `<p>No supported number.</p>`);
  }
  generateParagraphs(amount.value); //isimlendirme yap.
});
