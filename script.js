const links = [
  { name: 'Pornhub', url: 'https://rt.pornhub.org/model/legohub', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214604656148532/LH2-Photoroom3.png?ex=6a97b16b&is=6a965feb&hm=b4118bdc3dacdf6db5864d4b5493867f7e4312ded2c604b1d2007919b0053ebf&', accent: '#88c0d0' },
  { name: 'Meow Camera', url: 'https://meow.camera', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214605016993822/meowcamera.png?ex=6a97b16b&is=6a965feb&hm=7b08b0effc218bbca2f7f2d8f06e2721a83cafe124dcb7002da7cb0711c0254a&', accent: '#81a1c1' },
  { name: 'Dverso', url: 'https://tools.dverso.io/bgremove', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214605335633920/dverso.png?ex=6a97b16c&is=6a965fec&hm=ca02f120300c1b88513021a8c9863679de5cc6edb0b9a0824f56cc351e2a626a&', accent: '#a3be8c' },
  { name: 'Saydnaya', url: 'https://saydnaya.amnesty.org', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214605755187330/saydnaya.png?ex=6a97b16c&is=6a965fec&hm=cbb66c55d1221c9dc2d92f4523b4411d6dd4e69ea5960ea9e038ba14bb8f8ef8&', accent: '#bf616a' },
  { name: 'Elgoog', url: 'https://elgoog.im', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214606107516978/elgoog.png?ex=6a97b16c&is=6a965fec&hm=cdf444620c9dba107813f61dddc00283749be8ad70a6446ca8ea37dc8c833aad&', accent: '#d8dee9' },
  { name: 'Radio Garden', url: 'https://radio.garden', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544214606472290404/radiogarden1.png?ex=6a97b16c&is=6a965fec&hm=6f3681f4e91c1226d6ba388701111e818bcd41132b56e171e085812da5998f44&', accent: '#b48ead' },
  { name: 'windows93.net', url: 'https://windows93.net', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226768586670160/windows93_2.png?ex=6a97bcbf&is=6a966b3f&hm=6b2eb70c96f3bd337e4b14a69bcec49085c138b5d5dc5a1dca53c75858356130&', accent: '#8fbcbb' },
  { name: 'jomi.com', url: 'https://jomi.com', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226768968220702/jomi.png?ex=6a97bcc0&is=6a966b40&hm=4ae3a1e929615caaf68352f95f8bb45f8405ed039343660c20fdff7ec2d533f4&', accent: '#88c0d0' },
  { name: 'ojack.xyz/PIXELSYNTH', url: 'https://ojack.xyz/PIXELSYNTH', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226769375338516/pixelsynth.png?ex=6a97bcc0&is=6a966b40&hm=5d71ac6685d88b7ead9f7a9ae52469965172ef29ef63528a99070886af468a81&', accent: '#a3be8c' },
  { name: 'staggeringbeauty.io', url: 'https://staggeringbeauty.io', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226770105008178/stag1.png?ex=6a97bcc0&is=6a966b40&hm=e6beed5d78140b468e2b78526bb5dc17de54b8b32f686b0ef40cd37715a44610&', accent: '#d08770' },
  { name: 'pastvu.com', url: 'https://pastvu.com', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226770419712000/pastvu2.png?ex=6a97bcc0&is=6a966b40&hm=125b250fcc1fbe10e8e5e54547cd6636f1956ea6c22135e4cefce51d082ae8a3&', accent: '#5e81ac' },
  { name: 'magenta.github.io/lofi-player', url: 'https://magenta.github.io/lofi-player', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544226770734288936/lofi2.png?ex=6a97bcc0&is=6a966b40&hm=4d6880506b354e1e76582cddbae1a523b4af0a2f8e8eed0b0c545be4bd2d2de9&', accent: '#bf616a' },
  { name: 'maze.toys', url: 'https://maze.toys', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544231855887360030/Maze2.png?ex=6a97c17c&is=6a966ffc&hm=fd8ab3a367d0babef572cb9d74fda86cbef31cc3c7be357304535aca04750855&', accent: '#88c0d0' },
  { name: 'webamp.org', url: 'https://webamp.org', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544231856168505414/winamp.png?ex=6a97c17c&is=6a966ffc&hm=f73cdcd2d7e1c3718e1c8f4b557e134c8708ee94bc6f48959445808151d0a541&', accent: '#a3be8c' },
  { name: 'chihuahuaspin.com', url: 'http://chihuahuaspin.com', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544234293725757460/chihuahua.png?ex=6a97c3c2&is=6a967242&hm=25e9222fd6dfca9e16783d7ef1aaeb3911f26d8c59073dd881fc429fb624a4c6&', accent: '#d08770' },
  { name: 'planecrashinfo.com', url: 'https://planecrashinfo.com', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232067074629653/planecrash.png?ex=6a97c1af&is=6a96702f&hm=1d21044e9ad612fa5d5e23650a4f0f3cc0ff0f7edd8e693427699d7ba45de060&', accent: '#8fbcbb' },
  { name: 'lomando.com/main.html', url: 'https://lomando.com/main.html', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232067456307211/lomando.png?ex=6a97c1af&is=6a96702f&hm=967403746921aad964c7a2502ba90271d7e8d93e5f8efaecdd2e1e2400578d08&', accent: '#bf616a' },
  { name: 'musiclab.chromeexperiments.com/Shared-Piano', url: 'https://musiclab.chromeexperiments.com/Shared-Piano', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232067871670272/Shared-Piano2.png?ex=6a97c1af&is=6a96702f&hm=f7a1df25544ad190a2993246f483c729d07efc4cb6354360d7b0c8f41464aeb8&', accent: '#5e81ac' },
  { name: 'astronaut.io', url: 'https://astronaut.io', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232068257554452/astronaut.png?ex=6a97c1af&is=6a96702f&hm=fa7dcb4a7373b2f95b6b3bb2aa0f8a18ae512f89c5067e893133fccfa10bcace&', accent: '#b48ead' },
  { name: 'thequietplaceproject.xyz', url: 'https://thequietplaceproject.xyz', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232068538433566/quiet_place2.png?ex=6a97c1af&is=6a96702f&hm=0ec8b4ddba8f64e3b0f635b88a5eef1763ae1bfc853c94f544321478fe18e9ac&', accent: '#ebcb8b' },
  { name: 'neal.fun/stimulation-clicker', url: 'https://neal.fun/stimulation-clicker', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232288148004944/stimulation_clicker1.png?ex=6a97c1e3&is=6a967063&hm=c1aa34c67e98b5bbe522fb0e51cd89598a6f0ef9cb9a60c577f293c669022d1d&', accent: '#a3be8c' },
  { name: 'neal.fun/internet-roadtrip', url: 'https://neal.fun/internet-roadtrip', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232288466894869/internet_roadtrip1.png?ex=6a97c1e4&is=6a967064&hm=bc2244a8f4af7a783e02bd84a40f899f2ad777031fefa21d44b929a8d5b51ec1&', accent: '#88c0d0' },
  { name: 'kindanice.itch.io/death-spiral', url: 'https://kindanice.itch.io/death-spiral', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232288923947089/death_spiral3.png?ex=6a97c1e4&is=6a967064&hm=b4ff7bf88ce1a12d7306e5d3e5069412607959486904083c69bd8a5932001ca3&', accent: '#d08770' },
  { name: 'noelcody.itch.io/moss-moss', url: 'https://noelcody.itch.io/moss-moss', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232289301565470/moss2.png?ex=6a97c1e4&is=6a967064&hm=1f99ba1d1d31a40213faea2f232226563d840c0080d39442595dd242e04f60f5&', accent: '#a3be8c' },
  { name: 'networkeffect.io', url: 'https://networkeffect.io', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232289805008956/network_effect.png?ex=6a97c1e4&is=6a967064&hm=6d8d54d3afb0251ad7b89e72f190109821ff3e1b4cbf1b9a5a3e0ad9ff21f757&', accent: '#5e81ac' },
  { name: 'tempo-l.ch/experiments/roadtrip', url: 'https://tempo-l.ch/experiments/roadtrip', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232290312396851/road_trip3.png?ex=6a97c1e4&is=6a967064&hm=1b262061ee4e5fc811d2f8a6703c770bd8f5dc949fd7c64fe926779e5b36234c&', accent: '#ebcb8b' },
  { name: 'justone.earth/food', url: 'https://justone.earth/food', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232353910751312/killed_for_food.png?ex=6a97c1f3&is=6a967073&hm=8aa2d55ee262242528ffc6d78084fba861e3fdc72702aa298a16982a8212bf6d&', accent: '#bf616a' },
  { name: 'lines.chromeexperiments.com', url: 'https://lines.chromeexperiments.com', icon: 'https://cdn.discordapp.com/attachments/1544211915956559893/1544232354241970257/land_lines.png?ex=6a97c1f3&is=6a967073&hm=4f8b549311b79824ee4614d129c4f5b2cf4865b03b7d5e81da6a38fd7fcb54e7&', accent: '#8fbcbb' }
];

const grid = document.getElementById('linkGrid');

links.forEach((link) => {
  const item = document.createElement('a');
  item.href = link.url;
  item.target = '_blank';
  item.rel = 'noreferrer noopener';
  item.className = 'link-item';
  item.setAttribute('aria-label', link.name);
  item.style.setProperty('--accent', link.accent);

  item.innerHTML = `
    <span class="icon-wrap" style="border-color: ${link.accent}44; background: linear-gradient(135deg, ${link.accent}18, rgba(236,239,244,0.05));">
      <img src="${link.icon}" alt="" aria-hidden="true" />
    </span>
    <span class="sr-only">${link.name}</span>
  `;

  grid.appendChild(item);
});

const tabTitle = '#Dark.net/com^^';
let tabIndex = 0;
let tabForward = true;

function animateTabTitle() {
  if (tabForward) {
    document.title = tabTitle.slice(0, tabIndex + 1) + '|';
    tabIndex += 1;

    if (tabIndex >= tabTitle.length) {
      tabForward = false;
      setTimeout(animateTabTitle, 900);
      return;
    }
  } else {
    document.title = tabTitle.slice(0, tabIndex) + '|';
    tabIndex -= 1;

    if (tabIndex <= 0) {
      tabForward = true;
      setTimeout(animateTabTitle, 260);
      return;
    }
  }

  setTimeout(animateTabTitle, 110);
}

animateTabTitle();
