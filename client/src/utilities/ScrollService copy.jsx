import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  // Tracks screens we've already triggered fade-in for
  alreadyFadedIn = new Set();

  // RAF throttle flag
  ticking = false;

  constructor() {
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, { passive: true });

    // Run once on load so the correct section is detected immediately
    this.checkCurrentScreenUnderViewport();
  }

  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    if (this.ticking) return;

    this.ticking = true;
    window.requestAnimationFrame(() => {
      this.checkCurrentScreenUnderViewport();
      this.ticking = false;
    });
  }

  scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  scrollToHireMe = () => this.scrollToId("contact"); // <- use your real id
  scrollToHome = () => this.scrollToId("home");      // <- use your real id

  isElementInView = (elem, type) => {
    const rect = elem.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    const partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;

    const completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    if (type === "partial") return partiallyVisible;
    if (type === "complete") return completelyVisible;
    return false;
  };

  checkCurrentScreenUnderViewport = () => {
    for (const screen of TOTAL_SCREENS) {
      const screenEl = document.getElementById(screen.screen_name);
      if (!screenEl) continue;

      const fullyVisible = this.isElementInView(screenEl, "complete");
      const partiallyVisible = this.isElementInView(screenEl, "partial");

      if (!(fullyVisible || partiallyVisible)) continue;

      // Fade-in once (when it first becomes partially visible)
      if (partiallyVisible && !this.alreadyFadedIn.has(screen.screen_name)) {
        ScrollService.currentScreenFadeIn.next({
          fadeInScreen: screen.screen_name,
        });
        this.alreadyFadedIn.add(screen.screen_name);
      }

      // Broadcast current screen (prefer fully visible if possible)
      if (fullyVisible || partiallyVisible) {
        ScrollService.currentScreenBroadCaster.next({
          screenInView: screen.screen_name,
        });
      }

      break; // stop after first match
    }
  };
}
