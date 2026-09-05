const links = [
  { name: 'Pornhub', url: 'https://rt.pornhub.org/model/legohub', icon: 'assets/icons/Pornhub.png', accent: '#88c0d0' },
  { name: 'Meow Camera', url: 'https://meow.camera', icon: 'assets/icons/Meow Camera.png', accent: '#81a1c1' },
  { name: 'Dverso', url: 'https://tools.dverso.io/bgremove', icon: 'assets/icons/Dverso.png', accent: '#a3be8c' },
  { name: 'Saydnaya', url: 'https://saydnaya.amnesty.org', icon: 'assets/icons/Saydnaya.png', accent: '#bf616a' },
  { name: 'Elgoog', url: 'https://elgoog.im', icon: 'assets/icons/Elgoog.png', accent: '#d8dee9' },
  { name: 'Radio Garden', url: 'https://radio.garden', icon: 'assets/icons/Radio Garden.png', accent: '#b48ead' },
  { name: 'Windows93', url: 'https://windows93.net', icon: 'assets/icons/Windows93.png', accent: '#8fbcbb' },
  { name: 'Jomi', url: 'https://jomi.com', icon: 'assets/icons/Jomi.png', accent: '#88c0d0' },
  { name: 'PIXELSYNTH', url: 'https://ojack.xyz/PIXELSYNTH', icon: 'assets/icons/PIXELSYNTH.png', accent: '#a3be8c' },
  { name: 'StaggeringBeauty', url: 'https://staggeringbeauty.io', icon: 'assets/icons/StaggeringBeauty.png', accent: '#d08770' },
  { name: 'Pastvu', url: 'https://pastvu.com', icon: 'assets/icons/Pastvu.png', accent: '#5e81ac' },
  { name: 'Lofi-Player', url: 'https://magenta.github.io/lofi-player', icon: 'assets/icons/Lofi-Player.png', accent: '#bf616a' },
  { name: 'MazeToys', url: 'https://maze.toys', icon: 'assets/icons/MazeToys.png', accent: '#88c0d0' },
  { name: 'Webamp', url: 'https://webamp.org', icon: 'assets/icons/Webamp.png', accent: '#a3be8c' },
  { name: 'ChihuahuaSpin', url: 'http://chihuahuaspin.com', icon: 'assets/icons/ChihuahuaSpin.png', accent: '#d08770' },
  { name: 'PlaneCrashInfo', url: 'https://planecrashinfo.com', icon: 'assets/icons/PlaneCrashInfo.png', accent: '#8fbcbb' },
  { name: 'Lomando', url: 'https://lomando.com', icon: 'assets/icons/Lomando.png', accent: '#bf616a' },
  { name: 'Shared-Piano', url: 'https://musiclab.chromeexperiments.com/Shared-Piano', icon: 'assets/icons/Shared-Piano.png', accent: '#5e81ac' },
  { name: 'Astronaut', url: 'http://astronaut.io', icon: 'assets/icons/Astronaut.png', accent: '#b48ead' },
  { name: 'TheQuietPlace', url: 'https://thequietplaceproject.xyz', icon: 'assets/icons/TheQuietPlace.png', accent: '#ebcb8b' },
  { name: 'Stimulation-Clicker', url: 'https://neal.fun/stimulation-clicker', icon: 'assets/icons/Stimulation-Clicker.png', accent: '#a3be8c' },
  { name: 'Internet-Roadtrip', url: 'https://neal.fun/internet-roadtrip', icon: 'assets/icons/Internet-Roadtrip.png', accent: '#88c0d0' },
  { name: 'Death-Spiral', url: 'https://kindanice.itch.io/death-spiral', icon: 'assets/icons/Death-Spiral.png', accent: '#d08770' },
  { name: 'Moss-Moss', url: 'https://noelcody.itch.io/moss-moss', icon: 'assets/icons/Moss-Moss.png', accent: '#a3be8c' },
  { name: 'NetworkEffect', url: 'https://networkeffect.io', icon: 'assets/icons/NetworkEffect.png', accent: '#5e81ac' },
  { name: 'Roadtrip', url: 'https://tempo-l.ch/experiments/roadtrip', icon: 'assets/icons/Roadtrip.png', accent: '#ebcb8b' },
  { name: 'Earth-Food', url: 'https://justone.earth/food', icon: 'assets/icons/Earth-Food.png', accent: '#bf616a' },
  { name: 'Lines', url: 'https://lines.chromeexperiments.com', icon: 'assets/icons/Lines.png', accent: '#8fbcbb' },
  { name: 'Window-Swap', url: 'https://www.window-swap.com', icon: 'assets/icons/Window-Swap.png', accent: '#88c0d0' },
  { name: 'Zoomquilt', url: 'https://zoomquilt.org', icon: 'assets/icons/Zoomquilt.png', accent: '#81a1c1' },
  { name: 'UFO Stalker', url: 'https://ufostalker.com', icon: 'assets/icons/UFO Stalker.png', accent: '#a3be8c' },
  { name: 'Nukemap', url: 'https://nuclearsecrecy.com/nukemap', icon: 'assets/icons/Nukemap.png', accent: '#bf616a' },
  { name: 'Purrli', url: 'https://purrli.com', icon: 'assets/icons/Purrli.png', accent: '#d8dee9' },
  { name: '3D Periodic Table', url: 'https://graphoverflow.com/graphs/3d-periodic-table.html', icon: 'assets/icons/3D Periodic Table.png', accent: '#b48ead' },
  { name: 'Kilobytes Gambit', url: 'https://vole.wtf/kilobytes-gambit', icon: 'assets/icons/Kilobytes Gambit.png', accent: '#d08770' },
  { name: 'Perfect Circle', url: 'https://neal.fun/perfect-circle', icon: 'assets/icons/Perfect Circle.png', accent: '#8fbcbb' },
  { name: 'FlightRadar24', url: 'https://www.flightradar24.com', icon: 'assets/icons/FlightRadar24.png', accent: '#88c0d0' },
  { name: 'EarthCam', url: 'https://www.earthcam.com', icon: 'assets/icons/EarthCam.png', accent: '#81a1c1' },
  { name: 'First Person Tetris', url: 'https://firstpersontetris.com', icon: 'assets/icons/First Person Tetris.png', accent: '#a3be8c' },
  { name: 'Classic Minecraft', url: 'https://classic.minecraft.net', icon: 'assets/icons/Classic Minecraft.png', accent: '#bf616a' },
  { name: 'Pointer Pointer', url: 'https://pointerpointer.com', icon: 'assets/icons/Pointer Pointer.png', accent: '#d8dee9' },
  { name: 'JS Paint', url: 'https://jspaint.app', icon: 'assets/icons/JS Paint.png', accent: '#b48ead' }
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
      ${link.icon ? `<img src="${link.icon}" alt="" aria-hidden="true" />` : ''}
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
