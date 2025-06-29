const quotes = [
  { en: "Believe in yourself.", hi: "खुद पर विश्वास रखो।" },
  { en: "Never give up.", hi: "कभी हार मत मानो।" },
  {
    en: "Push yourself because no one else will.",
    hi: "खुद को आगे बढ़ाओ क्योंकि कोई और नहीं करेगा।",
  },
  { en: "Dream it. Wish it. Do it.", hi: "सपना देखो, चाहो और पूरा करो।" },
  { en: "Great things take time.", hi: "बड़ी चीजों को समय लगता है।" },
  {
    en: "Stay positive, work hard, make it happen.",
    hi: "सकारात्मक रहो, मेहनत करो और पूरा करो।",
  },
  { en: "Every day is a second chance.", hi: "हर दिन एक दूसरा मौका है।" },
  {
    en: "Don’t stop until you’re proud.",
    hi: "जब तक गर्व न हो, तब तक मत रुको।",
  },
  {
    en: "You are stronger than you think.",
    hi: "तुम जितना सोचते हो उससे ज्यादा मजबूत हो।",
  },
  {
    en: "Difficult roads lead to beautiful destinations.",
    hi: "कठिन रास्ते खूबसूरत मंज़िलों तक ले जाते हैं।",
  },
  {
    en: "Success is earned, not given.",
    hi: "सफलता दी नहीं जाती, कमाई जाती है।",
  },
  { en: "Failure is part of success.", hi: "असफलता सफलता का हिस्सा है।" },
  {
    en: "Your only limit is your mind.",
    hi: "तुम्हारी एकमात्र सीमा तुम्हारा दिमाग है।",
  },
  {
    en: "Be a warrior, not a worrier.",
    hi: "योद्धा बनो, चिंता करने वाला नहीं।",
  },
  { en: "Small steps every day.", hi: "हर दिन छोटे कदम उठाओ।" },
  { en: "Make yourself proud.", hi: "खुद को गर्व महसूस कराओ।" },
  { en: "Action is the key to success.", hi: "सफलता की कुंजी है - कार्य।" },
  { en: "Winners never quit.", hi: "विजेता कभी हार नहीं मानते।" },
  {
    en: "One day or day one. You decide.",
    hi: "एक दिन या पहला दिन। फैसला तुम्हारा है।",
  },
  { en: "Nothing is impossible.", hi: "कुछ भी असंभव नहीं है।" },
  {
    en: "Stop wishing. Start doing.",
    hi: "इच्छा करना बंद करो। करना शुरू करो।",
  },
  { en: "Your time is now.", hi: "तुम्हारा समय अब है।" },
  {
    en: "Keep going. You are getting there.",
    hi: "जारी रखो। तुम मंज़िल के करीब हो।",
  },
  {
    en: "Success starts with self-discipline.",
    hi: "सफलता की शुरुआत आत्म-अनुशासन से होती है।",
  },
  {
    en: "Wake up with determination. Sleep with satisfaction.",
    hi: "दृढ़ निश्चय के साथ उठो, संतोष के साथ सोओ।",
  },
  {
    en: "Strive for progress, not perfection.",
    hi: "प्रगति के लिए प्रयास करो, पूर्णता के लिए नहीं।",
  },
  {
    en: "Fear is temporary. Regret is forever.",
    hi: "डर अस्थायी है। पछतावा हमेशा के लिए।",
  },
  {
    en: "The secret of getting ahead is getting started.",
    hi: "आगे बढ़ने का रहस्य है शुरुआत करना।",
  },
  {
    en: "Discipline is doing what needs to be done, even if you don’t want to.",
    hi: "अनुशासन वह करना है जो जरूरी है, चाहे मन न हो।",
  },
  {
    en: "Success is a journey, not a destination.",
    hi: "सफलता एक यात्रा है, मंज़िल नहीं।",
  },
  {
    en: "Don’t limit your challenges. Challenge your limits.",
    hi: "अपनी चुनौतियों को सीमित मत करो। अपनी सीमाओं को चुनौती दो।",
  },
  {
    en: "If you can dream it, you can do it.",
    hi: "अगर तुम सपना देख सकते हो, तो उसे पूरा भी कर सकते हो।",
  },
  {
    en: "Consistency is more important than perfection.",
    hi: "लगातार बने रहना, परिपूर्णता से अधिक महत्वपूर्ण है।",
  },
  {
    en: "Do it now. Sometimes 'later' becomes 'never'.",
    hi: "अब करो। कभी-कभी 'बाद में' का मतलब 'कभी नहीं' होता है।",
  },
  {
    en: "Doubt kills more dreams than failure ever will.",
    hi: "शंका ने असफलता से ज्यादा सपनों को मारा है।",
  },
  {
    en: "It always seems impossible until it's done.",
    hi: "जब तक पूरा न हो जाए, तब तक यह असंभव लगता है।",
  },
  {
    en: "Don’t wait for opportunity. Create it.",
    hi: "अवसर का इंतजार मत करो। खुद बनाओ।",
  },
  {
    en: "The best way to get things done is to simply begin.",
    hi: "काम करने का सबसे अच्छा तरीका है - शुरुआत करना।",
  },
  { en: "No pressure, no diamonds.", hi: "दबाव नहीं, तो हीरा नहीं।" },
  {
    en: "Start where you are. Use what you have. Do what you can.",
    hi: "जहाँ हो वहीं से शुरू करो। जो है उसका उपयोग करो। जो कर सकते हो वो करो।",
  },
  {
    en: "You don’t have to be great to start, but you have to start to be great.",
    hi: "शुरू करने के लिए महान नहीं बनना पड़ता, लेकिन महान बनने के लिए शुरू करना पड़ता है।",
  },
  {
    en: "The harder you work for something, the greater you’ll feel when you achieve it.",
    hi: "किसी चीज के लिए जितनी कठिन मेहनत करोगे, उसे पाने पर उतना ही अच्छा महसूस होगा।",
  },
  {
    en: "Success doesn’t come to you. You go to it.",
    hi: "सफलता खुद नहीं आती। तुम्हें उसके पास जाना पड़ता है।",
  },
  {
    en: "Learn from yesterday. Live for today. Hope for tomorrow.",
    hi: "कल से सीखो, आज जियो, कल की आशा रखो।",
  },
  {
    en: "Don’t watch the clock. Do what it does. Keep going.",
    hi: "घड़ी को मत देखो। जो वो करती है वही करो – चलते रहो।",
  },
  {
    en: "Start small. Think big. Don’t stop.",
    hi: "छोटे से शुरू करो। बड़ा सोचो। मत रुको।",
  },
  {
    en: "Let your faith be bigger than your fear.",
    hi: "तुम्हारा विश्वास तुम्हारे डर से बड़ा हो।",
  },
  {
    en: "Hard work beats talent when talent doesn’t work hard.",
    hi: "जब प्रतिभा मेहनत नहीं करती, तब मेहनत प्रतिभा को हराती है।",
  },
  {
    en: "The pain you feel today will be the strength you feel tomorrow.",
    hi: "जो दर्द आज महसूस कर रहे हो, वो कल तुम्हारी ताकत बनेगा।",
  },
  {
    en: "Do something today that your future self will thank you for.",
    hi: "आज ऐसा कुछ करो कि भविष्य का तुम तुम्हारा धन्यवाद करे।",
  },
  {
    en: "Success is liking yourself, liking what you do, and liking how you do it.",
    hi: "सफलता है – खुद को पसंद करना, जो करते हो उसे पसंद करना, और जिस तरह करते हो उसे पसंद करना।",
  },
  {
    en: "Work hard in silence. Let success make the noise.",
    hi: "शांति से मेहनत करो। सफलता को शोर मचाने दो।",
  },
  {
    en: "Fall seven times, stand up eight.",
    hi: "सात बार गिरो, आठवीं बार उठो।",
  },
  {
    en: "Believe you can and you're halfway there.",
    hi: "अगर तुम मानते हो कि तुम कर सकते हो, तो तुम आधे रास्ते पर हो।",
  },
  {
    en: "Good things come to those who hustle.",
    hi: "अच्छी चीजें उन्हें मिलती हैं जो मेहनत करते हैं।",
  },
  {
    en: "Act as if what you do makes a difference. It does.",
    hi: "ऐसे काम करो जैसे तुम्हारे काम से फर्क पड़ता है – क्योंकि पड़ता है।",
  },
  { en: "If not now, then when?", hi: "अगर अब नहीं, तो कब?" },
  { en: "One step at a time is enough.", hi: "एक बार में एक कदम काफी है।" },
  { en: "You got this!", hi: "तुम कर सकते हो!" },
  {
    en: "Progress is progress, no matter how small.",
    hi: "प्रगति, चाहे छोटी हो, प्रगति ही होती है।",
  },
  {
    en: "You are capable of amazing things.",
    hi: "तुम अद्भुत चीजें करने में सक्षम हो।",
  },
];

const backgrounds = [
  "https://source.unsplash.com/1600x900/?nature",
  "https://source.unsplash.com/1600x900/?motivation",
  "https://source.unsplash.com/1600x900/?sunrise",
  "https://source.unsplash.com/1600x900/?mountain",
  "https://source.unsplash.com/1600x900/?sky",
  "https://source.unsplash.com/1600x900/?forest",
  "https://source.unsplash.com/1600x900/?freedom",
];

const quoteEN = document.getElementById("quote-en");
const quoteHI = document.getElementById("quote-hi");
const button = document.getElementById("new-quote");

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateQuote() {
  const randomQuote = getRandomItem(quotes);
  quoteEN.textContent = `"${randomQuote.en}"`;
  quoteHI.textContent = `👉 ${randomQuote.hi}`;
  document.body.style.backgroundImage = `url('${getRandomItem(backgrounds)}')`;
}

button.addEventListener("click", updateQuote);

// Show one on page load
updateQuote();
