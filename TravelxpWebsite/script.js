const start = document.querySelector('.start');
const start1 = document.createElement('div');
const start2 = document.createElement('div');
const logo = document.createElement('div');
const options = document.createElement('div');
const sub_log = document.createElement('div');

start1.className = "start1";
start2.className = "start2";


logo.className = "logo";
logo.textContent = "travelxp";

options.className = "options";

const menu = ['Watch','Flights','Hotels','Holidays','Buddymoon'];
menu.forEach(element => {
    const link = document.createElement('a');
    link.href = "#";
    link.innerText = element;

    options.appendChild(link);
    
});

sub_log.className = "sub_log";

const search = document.createElement('div');
search.className = "search";
search.innerHTML = "🔍";

const sub = document.createElement('div');
sub.className = "sub";
sub.innerHTML = "subscribe";

const log = document.createElement('div');
log.className = "log";
log.innerHTML = "Login";

sub_log.appendChild(search);
sub_log.appendChild(sub);
sub_log.appendChild(log);

const start_child = [logo, options];
start_child.forEach(element => {
    start1.appendChild(element);
});

start2.appendChild(sub_log);
start.appendChild(start1);
start.appendChild(start2);

// ########################################################################################################################################################

const mid = document.querySelector('.mid');

const mid_bgvid = document.createElement('div');
const mid_text = document.createElement('div');

mid_bgvid.className = "mid_bgvid";
mid_text.className = "mid_text";


const bg_vid = document.createElement('video');
bg_vid.autoplay = true;
bg_vid.muted = true;
bg_vid.loop = true;

const bg_vid_source = document.createElement('source');
bg_vid_source.src = "./4133023-hd_1920_1080_30fps.mp4";

bg_vid.appendChild(bg_vid_source);
mid_bgvid.appendChild(bg_vid);

// ###################################################################################################################################################################

const text = ['text_heading','text_info1','text_info2','text_sub'];
const elements = {};  // for use outside the loop
text.forEach(element =>{
    const div = document.createElement('div');
    div.className = element;
    mid_text.appendChild(div);
    elements[element] = div;
});

elements.text_heading.innerHTML = "Mr. & Mrs. Roy In Maldives";

const links = [
    {text:'1 Season', className:''},
    {text:'1 Episode', className:''},
    {text:'HD', className:'info1_style'},
    {text:'HLD HDR', className:'info1_style'},
    {text:'3+', className:'info1_style'}
];

links.forEach((link,index) =>{
   const a = document.createElement('a');
   a.href = "#";
   a.innerHTML = link.text;
   if(link.className)
   {
    a.className = link.className;
   }
   elements.text_info1.appendChild(a);

   if (index !== links.length - 1) {
        elements.text_info1.appendChild(document.createTextNode('|'));
    }
});

elements.text_info2.innerHTML = "In Maldives, Mr. & Mrs. Roy seek stillness and connection—but even <br>the calmest waters have their currents";

elements.text_sub.innerHTML = "▶️watch now";

 
mid.appendChild(mid_bgvid);
mid.appendChild(mid_text);

// #########################################################################################################################################
const top10Sections = [
  {
    title: "Taco To Tikka",
    info1: [
      { text: '1 Season', className: '' },
      { text: '10 Episode', className: '' },
      { text: '40 min', className: '' },
      { text: 'HD', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "Join Charlie, a curious chef from Mexico, on an epicurean adventure through India's diverse and vibrant food landscape",
    video: {
      src: './videos/video1.mp4'
    },
    popular: {
      text: "Popular Destinations",
      images: [
        './images/img1.webp',
        './images/img2.webp',
        './images/img3.webp',
        './images/img4.webp',
        './images/img5.webp',
        './images/img6.webp',
        './images/img7.webp',
        './images/img8.webp',
        './images/img9.webp',
        './images/img10.webp'
      ]
    }
  },
// 2
  {
    title: "Route 66",
    info1: [
      { text: '1 Season', className: '' },
      { text: '8 Episodes', className: '' },
      { text: '1 hr 40 min', className: '' },
      { text: '4K', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "Eight states. Three time zones. One road: Route 66! A young American traveler, Genevieve has taken on the granddaddy of all American road trips.",
    video: {
      src: './videos/video2.mp4'
    },
    popular: {
      text: "Culture Carnival",
      images: [
      './images/img11.webp',
      './images/img12.webp',
      './images/img13.webp',
      './images/img14.webp',
      './images/img15.webp',
      './images/img16.webp',
      './images/img17.webp',
      './images/img18.webp',
      './images/img19.webp',
      './images/img20.webp'
      ]
    }
  },

  {
  title: "72 Hours Unplugged",
  info1: [
    { text: '1 Season', className: '' },
    { text: '1 Episode', className: '' },
    { text: 'HD', className: 'info1_style' },
    { text: 'HLG HDR', className: 'info1_style' },
    { text: '3+', className: 'info1_style' }
  ],
  description: "When the laptops shut and the suits come off, Pilar Malo dives headfirst into the heart of the world’s greatest cities — 72 wild hours at a time.",
  video: {
    src: './videos/video3.mp4'
  },
  popular: {
    text: "Popular Destinations",
    images: [
      './images/img21.webp',
      './images/img22.webp',
      './images/img23.webp',
      './images/img24.webp',
      './images/img25.webp',
      './images/img26.webp',
      './images/img27.webp',
      './images/img28.webp',
      './images/img29.webp',
      './images/img30.webp'
    ]
  }
  },
// 4
  {
    title: "Wayanad’s Rustic Charms",
    info1: [
      { text: 'Season 1', className: '' },
      { text: 'Episode 13', className: '' },
      { text: '20 mins', className: '' },
      { text: '4K', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "Anushrii heads to Wayanad, a pristine forest region nestled in the Western Ghats, where she goes on an arduous trek to Edakkal's pre-historic caves.",
    video: {
      src: './videos/video4.mp4'
    },
    popular: {
      text: "Luxury Breaks",
      images: [
        './images/img41.webp',
        './images/img42.webp',
        './images/img43.webp',
        './images/img44.webp',
        './images/img45.webp',
        './images/img46.webp',
        './images/img47.webp',
        './images/img48.webp',
        './images/img49.webp',
        './images/img50.webp'
      ]
    }
  },

  {
    title: "Summer Vacation Ideas",
    info1: [
      { text: 'Season 1', className: '' },
      { text: 'Episode 3', className: '' },
      { text: '21 mins', className: '' },
      { text: '4K', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "From amusement parks to national parks, Kamiya has a list of ideas to help you make summer vacations exciting.",
    video: {
      src: './videos/video5.mp4'
    },
    popular: {
      text: "Deep Dive",
      images: [
        './images/img51.webp',
        './images/img52.webp',
        './images/img53.webp',
        './images/img54.webp',
        './images/img55.webp',
        './images/img56.webp',
        './images/img57.webp',
        './images/img58.webp',
        './images/img59.webp',
        './images/img60.webp'
      ]
    }
  },
// 6
  {
    title: "Guanacaste’s Aquatic",
    info1: [
      { text: 'Season 1', className: '' },
      { text: 'Episode 5', className: '' },
      { text: '22 mins', className: '' },
      { text: '4K', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "Genevieve is drawn to Costa Rica's stunning Guanacaste region by its promise of thrilling water adventures.",
    video: {
      src: './videos/video6.mp4'
    },
    popular: {
      text: "Viajar Latin America",
      images: [
        './images/img61.webp',
        './images/img62.webp',
        './images/img63.webp',
        './images/img64.webp',
        './images/img65.webp',
        './images/img66.webp',
        './images/img67.webp',
        './images/img68.webp',
        './images/img69.webp',
        './images/img70.webp'
      ]
    }
  },

 {
  title: "With Love, From Mauritius",
  info1: [
    { text: 'Season 1', className: '' },
    { text: 'Episode 2', className: '' },
    { text: '1 h 40 mins', className: '' },
    { text: '4K', className: 'info1_style' },
    { text: 'HLG HDR', className: 'info1_style' },
    { text: '3+', className: 'info1_style' }
  ],
  description: "Will Krissann and Nathan’s trip to Mauritius be the romantic getaway they need or will their contrasting travel styles get in the way?",
  video: {
    src: './videos/video7.mp4'
  },
  popular: {
    text: "Summmer Escapes",
    images: [
      './images/img61.webp',
      './images/img62.webp',
      './images/img63.webp',
      './images/img64.webp',
      './images/img65.webp',
      './images/img66.webp',
      './images/img67.webp',
      './images/img68.webp',
      './images/img69.webp',
      './images/img70.webp'
    ]
  }
},
// 8
  {
    title: "Tracking Royalty",
    info1: [
      { text: '1 Season', className: '' },
      { text: '4 Episodes', className: '' },
      { text: '1 h 40 min', className: '' },
      { text: '4K', className: 'info1_style' },
      { text: 'HLG HDR', className: 'info1_style' },
      { text: '3+', className: 'info1_style' }
    ],
    description: "A journey aboard the Golden Chariot, one of India’s most luxurious trains, takes Imran back in time to see how the Maharajas of the bygone eras lived.",
    video: {
      src: './videos/video8.mp4'
    },
    popular: {
      text: "City Guides Asia",
      images: [
        './images/img81.webp',
        './images/img82.webp',
        './images/img83.webp',
        './images/img84.webp',
        './images/img85.webp',
        './images/img86.webp',
        './images/img87.webp',
        './images/img88.webp',
        './images/img89.webp',
        './images/img90.webp'
      ]
    }
  },

{
  title: "Nizwa Fort, Oman",
  info1: [
    { text: 'Season 1', className: '' },
    { text: 'Episode 16', className: '' },
    { text: '9 mins', className: '' },
    { text: '4K', className: 'info1_style' },
    { text: 'HLG HDR', className: 'info1_style' },
    { text: '3+', className: 'info1_style' }
  ],
  description: "In the heart of Oman lies a majestic sentinel of the past: a 17th century fort that was once the seat of the Imamate of Oman.",
  video: {
    src: './videos/video9.mp4'
  },
  popular: {
    text: "Excursions of Africa And Middle East",
    images: [
      './images/img91.webp',
      './images/img92.webp',
      './images/img93.webp',
      './images/img94.webp',
      './images/img95.webp',
      './images/img96.webp',
      './images/img97.webp',
      './images/img98.webp',
      './images/img99.webp',
      './images/img100.webp'
    ]
  }
},
// 10 
{
  title: "Rajput Legends",
  info1: [
    { text: 'Season 1', className: '' },
    { text: 'Episode 20', className: '' },
    { text: '9 mins', className: '' },
    { text: '4K', className: 'info1_style' },
    { text: 'HLG HDR', className: 'info1_style' },
    { text: '3+', className: 'info1_style' }
  ],
  description: "The mountain pass of Haldighati in Rajasthan narrates stories of the gory clash of two mighty forces—Maharana Pratap and Emperor Akbar.",
  video: {
    src: './videos/video10.mp4'
  },
  popular: {
    text: "Soul Stirring Spiritual Sojourn",
    images: [
      './images/img101.webp',
      './images/img102.webp',
      './images/img103.webp',
      './images/img104.webp',
      './images/img105.webp',
      './images/img106.webp',
      './images/img107.webp',
      './images/img108.webp',
      './images/img109.webp',
      './images/img110.webp'
    ]
  }
}

];




// const top10 = document.querySelector('.top10');

// const top10_text_video = document.createElement('div')
// top10_text_video.className = "top10_text_video";

// const top10_text = document.createElement('div');
// top10_text.className = "top10_text";

// const top10_text_star = document.createElement('div');
// top10_text_star.className = "top10_text_star";

// const img = document.createElement('img');
// img.src = "./top10.svg";
// img.alt = '';
// top10_text_star.appendChild(img);
// top10_text.appendChild(top10_text_star);

// const top10_text_heading = document.createElement('div');
// top10_text_heading.className = 'top10_text_heading';
// top10_text_heading.innerHTML = "Taco To Tikka";
// top10_text.appendChild(top10_text_heading);

// const top10_text_info1 = document.createElement('div');
// top10_text_info1.className = 'top10_text_info1';

// const linkss = [
//   { text: '1 Season ', className: '' },
//   { text: ' 10 Episode ', className: '' },
//   { text: ' 40 min ', className: '' },
//   { text: 'HD', className: 'info1_style' },
//   { text: 'HDL HDR', className: 'info1_style' },
//   { text: '3+', className: 'info1_style' }
// ];

// linkss.forEach((link,index) => {
//   const a = document.createElement('a');
//   a.href = '#';
//   a.textContent = link.text;
//   if (link.className) {
//     a.className = link.className;
//   }
//   top10_text_info1.appendChild(a);

//   if (index !== linkss.length - 1) {
//         top10_text_info1.appendChild(document.createTextNode('|'));
//     }
// });
// top10_text.appendChild(top10_text_info1);


// const top10_text_info2 = document.createElement('div');
// top10_text_info2.className = 'top10_text_info2';
// top10_text_info2.textContent = 'gvbehdb dbjne hdbeudbd eubeudb eudb eubeub ebfeubfeubfu';
// top10_text.appendChild(top10_text_info2);

// top10_text_video.appendChild(top10_text);



// const top10_video = document.createElement('div');
// top10_video.className = 'top10_video';

// const top10_video_head = document.createElement('video');
// top10_video_head.className = 'top10_video_head';
// top10_video_head.autoplay = true;
// top10_video_head.muted = true;
// top10_video_head.loop = true;

// const source = document.createElement('source');
// source.src = './videos/video1.mp4';
// top10_video_head.appendChild(source);

// const mute_unmute = document.createElement('button');
// mute_unmute.className = 'mute_unmute';
// mute_unmute.innerHTML = '🔇';

// top10_video.appendChild(top10_video_head);
// top10_video.appendChild(mute_unmute);

// top10_text_video.appendChild(top10_video);







// const top10_popular = document.createElement('div');
// top10_popular.className = 'top10_popular';

// const top10_popular_text = document.createElement('div');
// top10_popular_text.className = 'top10_popular_text';
// top10_popular_text.textContent = 'mzladkk dsdsd';

// const top10_popular_places = document.createElement('div');
// top10_popular_places.className = 'top10_popular_places';

// const imageSources = [
//   './images/img1.webp',
//   './images/img2.webp',
//   './images/img3.webp',
//   './images/img4.webp',
//   './images/img5.webp',
//   './images/img6.webp',
//   './images/img7.webp',
//   './images/img8.webp',
//   './images/img9.webp',
//   './images/img10.webp'
// ];

// imageSources.forEach(src => {
//   const img = document.createElement('img');
//   img.src = src;
//   img.alt = "";
//   top10_popular_places.appendChild(img);
// });

// top10_popular.appendChild(top10_popular_text);
// top10_popular.appendChild(top10_popular_places);

// top10.appendChild(top10_text_video);
// top10.appendChild(top10_popular); 
const top10 = document.querySelector('.top10');

top10Sections.forEach(section => {
  // Create the text-video container
  const top10_text_video = document.createElement('div');
  top10_text_video.className = "top10_text_video";

  const top10_text = document.createElement('div');
  top10_text.className = "top10_text";

  const top10_text_star = document.createElement('div');
  top10_text_star.className = "top10_text_star";

  const img = document.createElement('img');
  img.src = "./top10.svg";
  img.alt = '';
  top10_text_star.appendChild(img);
  top10_text.appendChild(top10_text_star);

  const top10_text_heading = document.createElement('div');
  top10_text_heading.className = 'top10_text_heading';
  top10_text_heading.innerHTML = section.title;
  top10_text.appendChild(top10_text_heading);

  const top10_text_info1 = document.createElement('div');
  top10_text_info1.className = 'top10_text_info1';

  section.info1.forEach((link, index) => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link.text;
    if (link.className) a.className = link.className;
    top10_text_info1.appendChild(a);
    if (index !== section.info1.length - 1) {
      top10_text_info1.appendChild(document.createTextNode('|'));
    }
  });

  top10_text.appendChild(top10_text_info1);

  const top10_text_info2 = document.createElement('div');
  top10_text_info2.className = 'top10_text_info2';
  top10_text_info2.textContent = section.description;
  top10_text.appendChild(top10_text_info2);

  top10_text_video.appendChild(top10_text);

  const top10_video = document.createElement('div');
  top10_video.className = 'top10_video';

  const top10_video_head = document.createElement('video');
  top10_video_head.className = 'top10_video_head';
  top10_video_head.autoplay = true;
  top10_video_head.muted = true;
  top10_video_head.loop = true;

  const source = document.createElement('source');
  source.src = section.video.src;
  top10_video_head.appendChild(source);

  const mute_unmute = document.createElement('button');
  mute_unmute.className = 'mute_unmute';
  mute_unmute.innerHTML = '🔇';

  top10_video.appendChild(top10_video_head);
  top10_video.appendChild(mute_unmute);

mute_unmute.addEventListener('click', () => {
  // Mute all other videos
  document.querySelectorAll('.top10_video_head').forEach(video => {
    video.muted = true;
    video.parentElement.querySelector('.mute_unmute').innerHTML = '🔇';
  });

  // Toggle current video
  if (top10_video_head.muted) {
    top10_video_head.muted = false;
    let playPromise = top10_video_head.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // playback started successfully
        mute_unmute.innerHTML = '🔊';
      }).catch(err => {
        console.warn("Autoplay with sound blocked:", err);
        mute_unmute.innerHTML = '🔇 (⚠️ blocked)';
      });
    }
  } else {
    top10_video_head.muted = true;
    mute_unmute.innerHTML = '🔇';
  }
});



  top10_text_video.appendChild(top10_video);
  top10.appendChild(top10_text_video);

  // Popular section
  const top10_popular = document.createElement('div');
  top10_popular.className = 'top10_popular';

  const top10_popular_text = document.createElement('div');
  top10_popular_text.className = 'top10_popular_text';
  top10_popular_text.textContent = section.popular.text;

  const top10_popular_places = document.createElement('div');
  top10_popular_places.className = 'top10_popular_places';

  section.popular.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "";
    top10_popular_places.appendChild(img);
  });

  top10_popular.appendChild(top10_popular_text);
  top10_popular.appendChild(top10_popular_places);

  top10.appendChild(top10_popular);
});







// ##############################################################################################################################

//                                          Footer work

const footer = document.querySelector('.footer');

// Define the footer content as an array of arrays
const footerItems = [
  [
    { text: 'travelxp', href: 'faq', className: 'footer-item-info' },
    { text: 'Making the world', href: 'faq' },
    { text: 'a better palce', href: 'faq' },
    { text: 'through constructing', href: 'faq' },
    { text: 'elegant', href: 'faq' },
    { text: 'hierarchies', href: 'faq' }
  ],
  [
    { text: 'Privacy Policy', href: 'faq' },
    { text: 'Terms and Conditions', href: 'faq' },
    { text: 'Terms of Use', href: 'faq' }
  ],
  [
    { text: 'Disclaimer', href: 'faq' },
    { text: 'Cookie Policy', href: 'faq' },
    { text: 'Cookie Preferences', href: 'faq' }
  ],
  [
    { text: 'Sbscribe Now', href: 'faq' },
    { text: 'FAQs', href: 'faq' },
    { text: 'Licence Agreement', href: 'faq' }
  ],
  [
    { text: 'Books Filghts', href: 'faq' },
    { text: 'Books Hotels', href: 'faq' },
    { text: 'Plan Your Trip', href: 'faq' }
  ],
  [
    { text: '+91 12 34567890', href: 'faq' },
    { text: 'customercare@travelxp.com', href: 'faq' }
  ]
];

// Loop through the outer array to create footer-item divs
footerItems.forEach(group => {
  const div = document.createElement('div');
  div.className = 'footer-item';

  // Loop through the inner array to create <a> elements
  group.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.className) {
      a.className = link.className;
    }
    div.appendChild(a);
  });

  // Append each footer-item to the footer
  footer.appendChild(div);
});
