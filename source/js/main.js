import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { toggleNav } from './nav';
import { initSwiperHiro } from './swiper-hero';
import { initSwiperTours } from './tours-swiper';
import { initSwiperTraining } from './training-swiper';

toggleNav();
initSwiperHiro(Swiper, Pagination);
initSwiperTours(Swiper, Navigation);
initSwiperTraining(Swiper, Navigation);
