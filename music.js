"use strict";
//Credits to naijafinix.com for the songs!
document.addEventListener("DOMContentLoaded", () => {
    const src = [
        ["Cyndi Lauper", 
        "Time After Time", 
        "https://www.naijafinix.com.ng/wp-content/uploads/2022/02/Cyndi-Lauper-Time-After-Time-via-Naijafinix.com_.mp3?_=1", 
        "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Fec79ba06cf248a3250fe97f81fecf296.600x600x1.jpg"
      ],
        ["Awolnation", 
        "Sail", 
        "https://www.cjoint.com/doc/18_01/HACosvdef3O_Awolnation---Sail.mp3", 
        "https://www.songfacts.com/img-artalbums-145-eacedac47b0db2a715b3f0710e1599ad.png"
      ],
        ["Lauren Daigle", 
        "You Say", 
        "https://jesusful.com/wp-content/uploads/music/2021/06/Lauren_Daigle_-_You_Says_(Naijay.com).mp3", 
        "https://t2.genius.com/unsafe/319x319/https%3A%2F%2Fimages.genius.com%2F47b0a8f26141520e6a11d84a0ee287cf.640x640x1.jpg"
      ],
        ["Michael Jackson", 
        "Beat It", 
        "https://www.naijafinix.com.ng/wp-content/uploads/2020/08/Michael-Jackson-Beat-It-via-Naijafinix.com_.mp3?_=1", 
        "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2Faa9b366db36892e2fb64943275e95ce1.800x800x1.jpg"
      ],
        ["Bill Withers", 
        "Ain't No Sunshine", 
        "https://www.cjoint.com/doc/19_12/ILuvIITvTJC_Bill-Withers---Ain-t-No-Sunshine.mp3", 
        "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F55c4517a908f24d569ceb37c401f09a0.620x620x1.jpg"
      ],
        ["Amy Winehouse", 
        "Back To Black", 
        "https://www.cjoint.com/doc/19_05/IEAoTjfW7lQ_amy-winehouse-back-to-black.mp3", 
        "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F107528d01637c5408f4ffe9e41fd9693.1000x1000x1.jpg"
      ],
        ["Dire Straits", 
        "Walk Of Life", 
        "https://ia903104.us.archive.org/30/items/direstraitswalkoflife_201911/Dire%20Straits%20-%20Walk%20of%20life.mp3", 
        "https://t2.genius.com/unsafe/327x322/https%3A%2F%2Fimages.genius.com%2Fd377ff8cba906f0afafb1ea5e4e4bd85.243x239x1.jpg"
      ],
        ["Johnny Cash", 
        "I Walk The Line", 
        "http://sharehub.link/fmymp3//Johnny_Cash_-_I_Walk_The_Line_20633.mp3", 
        "https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F6734964c11c2783b7f76b8670d55160a.1000x1000x1.jpg"
      ],
        ["Dolly Parton", 
        "Jolene", 
        "https://www.cjoint.com/doc/22_04/LDnq6ToJtpj_Dolly-Parton---Jolene-Audio-.mp3", 
        "https://t2.genius.com/unsafe/301x301/https%3A%2F%2Fimages.rapgenius.com%2Fc7233875a7aadfeb60cf3a097e242209.280x280x1.jpg"
      ],
        ["The Beatles", 
        "Yesterday", 
        "https://www.cjoint.com/doc/21_12/KLAlFIjdl4e_The-Beatles---Yesterday-320-kbps-1-.mp3", 
        "https://t2.genius.com/unsafe/153x153/https%3A%2F%2Fimages.genius.com%2Fa2cc11cd0780d0542e4e6d7b6b9e7b1a.999x1000x1.jpg"
      ]
    ];
    
    for (let m = 0; m < src.length; m++) {
      const s = src[m];
      const num = parseInt(m) + 1;
      const artist = document.createTextNode(num + ". " + s[0]);
      const songTitle = document.createTextNode(s[1]);
      
      const item = document.createElement('div');
      const artistText = document.createElement('h3');
      const songText = document.createElement('p');
      
      artistText.appendChild(artist);
      songText.appendChild(songTitle);
      item.appendChild(artistText);
      item.appendChild(songText);
      item.classList.add('item');
      item.dataset.index = m;
      
      document.getElementById('lists').appendChild(item);
    }
    displaySongs(0);
    
    const items = document.querySelectorAll('.item');
    items.forEach(el => {
      el.onclick = () => {
        displaySongs(el.dataset.index);
      };
    });
    
    function displaySongs(m) {
      const active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      const el = document.getElementById('lists').children[m];
      el.classList.add('is-active');
      const s = src[m],
        artist = s[0],
        song = s[1],
        audio = s[2],
        image = s[3],
        num = parseInt(m) + 1;
      document.getElementById('artist').innerHTML = num + ". " + artist;
      document.getElementById('title').innerHTML = song;
      const cover = document.getElementById('cover');
      cover.src = image;
      document.getElementById('audio').src = audio;
    }
});