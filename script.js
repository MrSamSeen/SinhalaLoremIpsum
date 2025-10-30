const sinhalaWords = [
    "අප", "ඉතා", "හොඳ", "වැඩක්", "කරනවා", "යන", "එක", "තමයි", "වැදගත්",
    "ශ්‍රී", "ලංකාව", "කියන්නේ", "ලස්සන", "රටක්", "සමගිය", "සහ", "සාමය",
    "පැතිරවීම", "අපගේ", "බලාපොරොත්තුවයි", "අපි", "හැමෝම", "එකමුතුව",
    "ජීවත්", "වෙමු", "සතුටින්", "සිනාසෙමින්", "කාලය", "ගත", "කරමු",
    "අනාගතය", "සාර්ථක", "වනු", "ඇත", "විශ්වාසය", "තබන්න", "ජයග්‍රහණය",
    "අප", "සතුයි", "හැමදාමත්", "හොඳින්", "ඉන්න", "උත්සාහ", "කරන්න",
    "ලෝකය", "වඩා", "හොඳ", "තැනක්", "කරමු", "ආදරය", "සහ", "කරුණාව",
    "පතුරවමු", "සෑම", "විටම", "ධනාත්මකව", "සිතන්න", "ජීවිතය", "ලස්සනයි",
    "එය", "අර්ථවත්", "කරගන්න", "ඔබට", "පුළුවන්", "ශක්තිය", "ධෛර්යය",
    "සහ", "බුද්ධිය", "ලැබේවා", "සුභ", "පැතුම්", "ඔබට", "ජය",
    "ආයුබෝවන්", "ස්තුතියි", "කරුණාකර", "සුබ", "උදෑසනක්", "සුබ", "රාත්‍රියක්",
    "සමාවන්න", "නැහැ", "ඔව්", "කොහොමද", "හොඳයි", "නරකයි", "ලස්සනයි",
    "ගොඩක්", "ටිකක්", "වතුර", "කෑම", "ගෙදර", "පාසල", "වැඩ", "මිතුරා",
    "පවුල", "ආදරය", "සතුට", "දුක", "සිනහව", "ඇඬීම", "නැටුම", "ගීතය",
    "පොත", "පෑන", "මේසය", "පුටුව", "දොර", "ජනේලය", "කාමරය", "වත්ත",
    "ගස", "මල", "සතා", "කුරුල්ලා", "මාළුවා", "හිරු", "සඳ", "තරු",
    "අහස", "පොළොව", "වලාකුළු", "වැස්ස", "හිම", "සුළඟ", "ගින්න", "ජලය",
    "කන්ද", "ගඟ", "මුහුද", "වෙරළ", "නගරය", "ගම", "රට", "ලෝකය",
    "මිනිසා", "ගැහැණිය", "ළමයා", "වැඩිහිටියා", "වෛද්‍යවරයා", "ගුරුවරයා",
    "ශිෂ්‍යයා", "ගොවියා", "ව්‍යාපාරිකයා", "කලාකරුවා", "විද්‍යාඥයා",
    "ක්‍රීඩකයා", "දේශපාලඥයා", "රජ", "බිසව", "කුමරා", "කුමරිය", 
    "පොලිස් නිලධාරියා", "විනිසුරුවරයා", "නීතිඥයා", "ඉංජිනේරුවරයා",
    "ගණකාධිකාරීවරයා", "කළමනාකරු", "සේවකයා", "හාම්පුතා", "ගනුදෙනුකරු",
    "විකුණුම්කරු", "මිලදී ගන්නා", "සංචාරකයා", "මාර්ගෝපදේශකයා", "රියදුරු",
    "නියමුවා", "ගගනගාමියා", "ධීවරයා", "දඩයක්කාරයා", "සොරා",
    "වීරයා", "දුෂ්ටයා", "මිතුරා", "සතුරා", "අසල්වැසියා", "නෑදෑයා",
    "දෙමාපියන්", "සහෝදරයා", "සහෝදරිය", "පුතා", "දියණිය", "මුනුපුරා",
    "මිණිබිරිය", "සීයා", "ආච්චි", "මාමා", "නැන්දා", "බෑණා", "ලේලි",
    "ඥාති සහෝදරයා", "ඥාති සහෝදරිය", "ස්වාමිපුරුෂයා", "බිරිඳ", "පෙම්වතා",
    "පෙම්වතිය", "විවාහය", "දික්කසාදය", "උපත", "මරණය", "ජීවිතය", "කාලය",
    "වර්තමානය", "අතීතය", "අනාගතය", "විනාඩිය", "පැය", "දවස", "සතිය",
    "මාසය", "අවුරුද්ද", "ශතවර්ෂය", "සහස්‍රවර්ෂය", "උදෑසන", "දහවල්",
    "සවස", "රාත්‍රිය", "අද", "හෙට", "ඊයේ", "දැන්", "පසුව", "කලින්",
    "සෑම විටම", "සමහර විට", "කවදාවත්", "ඉක්මනින්", "සෙමින්", "හයියෙන්",
    "හෙමින්", "හොඳින්", "නරකින්", "ලස්සනට", " කැතට", "පහසුවෙන්",
    "අමාරුවෙන්", "සතුටින්", "දුකෙන්", "කෝපයෙන්", "බියෙන්", "පුදුමයෙන්",
    "විශ්වාසයෙන්", "අවිශ්වාසයෙන්", "බලාපොරොත්තුවෙන්", 
    "ආඩම්බරයෙන්", "නිහතමානීව", "කාරුණිකව", "අකාරුණිකව", "ත්‍යාගශීලීව",
    "ලෝභකමින්", "නිර්භීතව", "බියගුලු ලෙස", "බුද්ධිමත්ව", "මෝඩ ලෙස",
    "ප්‍රවේශමෙන්", "නොසැලකිලිමත් ලෙස", "සත්‍යවාදීව", "බොරුකාර ලෙස",
    "විහිළුවට", "ගෞරවයෙන්", "අගෞරවයෙන්", "සෘජුව", "වක්‍රව", "එකට",
    "තනියම", "මෙතන", "එතන", "කොහෙද", "ඇතුළත", "පිටත", "ඉහළ", "පහළ",
    "වම", "දකුණ", "ඉදිරියෙන්", "පිටුපසින්", "අතර", "වටේ", "හරහා",
    "සිට", "දක්වා", "සඳහා", "සමග", "නැතුව", "ගැන", "වගේ", "නිසා"
];

function generateLoremIpsum(options) {
    let loremIpsum = "";
    for (let i = 0; i < options.paragraphs; i++) {
        let paragraph = "";
        const minSentences = Math.max(1, options.sentencesPerParagraph - options.sentencesPerParagraphVariation);
        const maxSentences = options.sentencesPerParagraph + options.sentencesPerParagraphVariation;
        const sentences = Math.floor(Math.random() * (maxSentences - minSentences + 1)) + minSentences;
        for (let j = 0; j < sentences; j++) {
            let sentence = "";
            const words = Math.floor(Math.random() * 10) + 10; // 10 to 20 words per sentence
            for (let k = 0; k < words; k++) {
                sentence += sinhalaWords[Math.floor(Math.random() * sinhalaWords.length)] + " ";
            }
            paragraph += sentence.trim() + ". ";
        }
        loremIpsum += `<p>${paragraph}</p>`;
    }

    return loremIpsum;
}

function setDarkMode(isDarkMode) {
    const body = document.body;
    const container = document.querySelector(".container");
    const h1 = document.querySelector("h1");
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll('input[type="range"]');

    if (isDarkMode) {
        body.classList.add("dark-mode");
        container.classList.add("dark-mode");
        h1.classList.add("dark-mode");
        buttons.forEach(button => button.classList.add("dark-mode"));
        inputs.forEach(input => input.classList.add("dark-mode"));
    } else {
        body.classList.remove("dark-mode");
        container.classList.remove("dark-mode");
        h1.classList.remove("dark-mode");
        buttons.forEach(button => button.classList.remove("dark-mode"));
        inputs.forEach(input => input.classList.remove("dark-mode"));
    }
}

function updateCounts(text) {
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;
    document.getElementById("word-count-display").textContent = wordCount;
    document.getElementById("char-count-display").textContent = charCount;
}

function updateSliderValues() {
    document.getElementById("paragraphs-value").textContent = document.getElementById("paragraphs").value;
    document.getElementById("sentences-per-paragraph-value").textContent = document.getElementById("sentences-per-paragraph").value;
    document.getElementById("sentences-per-paragraph-variation-value").textContent = document.getElementById("sentences-per-paragraph-variation").value;
}

function generate() {
    const options = {
        paragraphs: document.getElementById("paragraphs").value,
        sentencesPerParagraph: parseInt(document.getElementById("sentences-per-paragraph").value),
        sentencesPerParagraphVariation: parseInt(document.getElementById("sentences-per-paragraph-variation").value),
    };
    const output = document.getElementById("output");
    const generatedText = generateLoremIpsum(options);
    output.innerHTML = generatedText;
    updateCounts(output.innerText);
    updateSliderValues();
}

document.getElementById("generate").addEventListener("click", generate);

document.querySelectorAll("input[type='range']").forEach(input => {
    input.addEventListener("input", generate);
});

document.getElementById("copy").addEventListener("click", () => {
    const output = document.getElementById("output");
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied to clipboard!");
});

document.getElementById("dark-mode-checkbox").addEventListener("change", (event) => {
    setDarkMode(event.target.checked);
});

// Set initial dark mode state
const isDarkMode = document.getElementById("dark-mode-checkbox").checked;
setDarkMode(isDarkMode);

generate(); // Initial generation