import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
mainHeading = "श्री राम तपोभूमि पावन चित्रकूट में आपका स्वागत है";
aboutKamadgiri = `Kamadgiri is the main holy place of Chitrakoot Dham . The Sanskrit word
                   ‘Kamadgiri’ means the mountain which fulfills all the wishes and desires. The
                   place is believed to have been the abode of Lord Ram, Sita and Laxman during their exile. Lord Kamtanath,
                   another of His names, is the Ishta Deva principal deity not only of Kamadgiri Parvat but of the whole of
                   Chitrakoot. The religious-minded believe that all the holy places (i.e. teerthas) are in the Parikrama or its
                   pilgrimage-path. The pilgrimage path around this hill is about 5 Km long. There are a large number of temples in the
                   Parikrama Path. Except during the summers, the place remains green throughout the year and appears like a bow
                   seen from any place in Chitrakoot.`;

  aboutHanumanDhara = `One of the top tourist attractions in Chitrakoot is Hanuman Dhara, a hilltop spring with a
                       waterfall. Hanuman Dhara is a popular destination for worshippers because of its cluster of major
                       temples. The spring was supposedly built by Lord Rama to appease Lord Hanuman after he returned from
                       setting fire to Lanka.`;

  aboutGuptGodavari = `Gupt Godavari is the place where the peeping-tom monster, Mayank, tried to spy on
                       Sita while she was bathing in a pool. Enraged by his action, Lakshmana petrified him and stuck
                       him to the roof of this cave. Today, that place is an outcrop of black rock protruding from the
                       paler roof of the cave. The fairly narrow mouth of this cave opens out into a large cavern with two
                       interesting features, one of them being a cave with black rock. The second feature is known as Sita
                       Kund, a small pond in which Sita was bathing when Mayank tried to spy on her.`;
  aboutSatiAnusuya = `Located near the origin of River Mandakini, this ashram is nestled in the hills of Chitrakoot,
                      surrounded by lush greenery, with ample open spaces, and is thus ideal for
                      meditation and reflection. It is believed to be the place where sage Atri meditated with his
                      wife, Anusuya. Its location ensures that peace and quiet abounds in its hallowed pathways and
                      courtyard, so devotees can pray, or even enjoy the serene atmosphere without being disturbed.`;

  detailsChitrakoot = `Chitrakoot is a town with strong spiritual overtones for the Hindus who connect the town with Lord  Rama.\n 
                    All the year round there are festivals related to Lord Rama. October and November is the period of
                    Navratri festival with the popular Dussehra celebrations. There is Diwali that follows in a grand manner. Then in January you have the Makar Sankranti
                    when the festival of harvest is celebrated by thanking the Sun for a good bounty.
                    There is kite flying on and around this day. This is followed by Mahashivratri and the Ramayan Mela which goes on for a whole week`;

  weatherCktd = `The weather in Chitrakoot is hot and hotter in summer, most pleasant and cool during monsoon
                 and cold and foggy in winter. The best time to visit Chitrakoot is the monsoon period when
                 rains are not heavy and the temperature is low. Winter is cold but foggy and driving around may
                 be dangerous at times. The details regarding Weather and Best Time are placed below.`;  
                 
  summerWeather = `Chitrakoot sizzles in summer with the temperature soaring up to 47°C.
                   The nights are however comfortable when the minimum temperature is around 29°C.
                   However, the weather remains balmy and hot. Summer is hardly the time to visit Chitrakoot
                   since the hot weather does not help make sightseeing enjoyable at all.`;

  mansoonWeather = `Chitrakoot is pleasant in the monsoon since it does not rain all that
                    much and the temperature remains low. Therefore, it is quite all right to visit the place
                    during the August-October period. After the rains, one is treated to dense and lush
                    vegetation with rivulets everywhere. The entire town and its nearby areas are absolutely
                    beautiful with maximum visibility suiting sightseeing. However, visitors are advised to
                    carry their gear for protection against the odd shower.`;

  winterWeather = `Winter in Chitrakoot starts with some fine weather in November
                   and December Visitors will like this weather which is supported by balmy days and clear skies.
                   Chitrakoot is truly the visitor’s delight in the month of December.
                   But, come January there is intense fogging which reduces visibility to a point where
                   driving around on roads is dangerous. However, one can check on full details before visiting
                   Chitrakoot during this period, which also sees a fair number of festivals and celebrations.`;
}
