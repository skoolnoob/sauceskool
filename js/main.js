(function () {
  "use strict";

  // ============================================================
  // THE SAUCE  VERSION 2.0  Ryan setup
  // Paste real values. Leave [paste] until you have them.
  // VIDEO_URL: [paste]
  // CHECKOUT_URL: https://www.skool.com/sauce
  // PRICE: [paste]   optional. Live Sauce price is $99/mo.
  //                  Show AFTER the video CTA only. Never above the video.
  // DEADLINE: none   countdown stays OFF until this is a real date.
  // ============================================================
  const CONFIG = {
    VIDEO_URL: "[paste]",
    CHECKOUT_URL: "https://www.skool.com/sauce",
    PRICE: "[paste]",
    DEADLINE: "",
    CTA_REVEAL_SECONDS: 35 * 60,
  };

  const LEAD_KEY = "sauce_lead";
  const CTA_KEY = "sauce_cta_unlocked";
  const DEADLINE_KEY = "sauce_deadline_end";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function isPlaceholder(value) {
    const v = String(value || "").trim();
    return !v || v === "[paste]" || v.toLowerCase() === "none";
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function formatClock(total) {
    const s = Math.max(0, Math.floor(total));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return h + ":" + pad(m) + ":" + pad(sec);
    return pad(m) + ":" + pad(sec);
  }

  function parseVimeoId(url) {
    if (!url || isPlaceholder(url)) return "";
    const raw = String(url).trim();
    if (/^\d+$/.test(raw)) return raw;
    const m = raw.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    return m ? m[1] : "";
  }

  function applyCheckoutLinks() {
    $all("[data-checkout]").forEach(function (el) {
      el.setAttribute("href", CONFIG.CHECKOUT_URL);
    });
  }

  function applyPriceNotes() {
    $all("[data-price]").forEach(function (el) {
      if (isPlaceholder(CONFIG.PRICE)) {
        el.hidden = true;
        return;
      }
      el.hidden = false;
      el.textContent = CONFIG.PRICE;
    });
  }

  function revealCta() {
    try {
      sessionStorage.setItem(CTA_KEY, "1");
    } catch (e) {}
    $all("[data-cta]").forEach(function (el) {
      el.classList.add("is-on");
      el.removeAttribute("hidden");
    });
    document.body.classList.add("has-sticky");
    applyPriceNotes();
  }

  function ctaAlreadyUnlocked() {
    try {
      return sessionStorage.getItem(CTA_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function wantsCtaPreview() {
    return /(?:\?|&)revealCta=1(?:&|$)/.test(window.location.search);
  }

  function initOptin() {
    const form = $("#optin");
    if (!form) return;
    const error = $("#optin-error");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const first = String((form.elements.firstName && form.elements.firstName.value) || "").trim();
      const email = String((form.elements.email && form.elements.email.value) || "").trim();
      if (!first) {
        if (error) error.textContent = "Enter your first name.";
        form.elements.firstName && form.elements.firstName.focus();
        return;
      }
      if (!validEmail(email)) {
        if (error) error.textContent = "Enter a valid email.";
        form.elements.email && form.elements.email.focus();
        return;
      }
      if (error) error.textContent = "";
      try {
        localStorage.setItem(
          LEAD_KEY,
          JSON.stringify({ firstName: first, email: email, savedAt: new Date().toISOString() })
        );
      } catch (e) {}
      window.location.href = "watch.html";
    });
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        existing.addEventListener("load", function () { resolve(); });
        if (window.Vimeo) resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = function () { resolve(); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function bindTimeToCta() {
    var unlocked = false;
    return function (seconds) {
      if (unlocked) return;
      if (seconds >= CONFIG.CTA_REVEAL_SECONDS) {
        unlocked = true;
        revealCta();
      }
    };
  }

  function startLocalClock(clockEl, onTick) {
    var started = Date.now();
    var timer = window.setInterval(function () {
      var seconds = (Date.now() - started) / 1000;
      if (clockEl) clockEl.textContent = formatClock(seconds);
      onTick(seconds);
    }, 250);
    return timer;
  }

  function mountPlaceholderPlayer(root) {
    const ui = $(".player-ui", root);
    const play = $(".play-btn", root);
    const clock = $(".player-clock", root);
    const caption = $(".player-caption", root);
    if (!play) return;
    const onTick = bindTimeToCta();
    play.addEventListener("click", function () {
      play.hidden = true;
      if (ui) ui.style.background = "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.45))";
      if (caption) caption.textContent = "Recorded training in progress";
      startLocalClock(clock, onTick);
    });
  }

  function mountVimeoPlayer(root, id) {
    const frame = $(".player-frame", root);
    if (!frame) return;
    frame.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.title = "The Sauce free training";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.setAttribute("allowfullscreen", "");
    iframe.src =
      "https://player.vimeo.com/video/" +
      id +
      "?title=0&byline=0&portrait=0&dnt=1&rel=0";
    frame.appendChild(iframe);

    loadScript("https://player.vimeo.com/api/player.js")
      .then(function () {
        if (!window.Vimeo || !window.Vimeo.Player) return;
        const player = new window.Vimeo.Player(iframe);
        // Swap this timeupdate check for a Vimeo cuepoint later:
        // player.addCuePoint(CONFIG.CTA_REVEAL_SECONDS, { sauce: "cta" });
        // player.on("cuepoint", function (cue) { if (cue.data && cue.data.sauce === "cta") revealCta(); });
        player.on("timeupdate", function (data) {
          if (data && data.seconds >= CONFIG.CTA_REVEAL_SECONDS) revealCta();
        });
      })
      .catch(function () {});
  }

  function initPlayer() {
    const root = $("[data-video-id]");
    if (!root) return;
    const source = root.getAttribute("data-video-id") || CONFIG.VIDEO_URL;
    const vimeoId = parseVimeoId(source === "VIDEO_URL" ? CONFIG.VIDEO_URL : source);
    const setup = $("[data-setup='video']");
    if (vimeoId) {
      if (setup) setup.hidden = true;
      mountVimeoPlayer(root, vimeoId);
      return;
    }
    if (setup) {
      setup.hidden = false;
      setup.textContent = "VIDEO_URL: [paste]";
    }
    mountPlaceholderPlayer(root);
  }

  function initDeadline() {
    const box = $("[data-deadline]");
    if (!box) return;
    if (isPlaceholder(CONFIG.DEADLINE)) {
      box.classList.remove("is-on");
      box.hidden = true;
      return;
    }
    const parsed = Date.parse(CONFIG.DEADLINE);
    if (Number.isNaN(parsed)) {
      box.hidden = true;
      return;
    }
    var end = 0;
    try {
      end = Number(localStorage.getItem(DEADLINE_KEY) || 0);
    } catch (e) {
      end = 0;
    }
    if (!end) {
      end = parsed;
      try {
        localStorage.setItem(DEADLINE_KEY, String(end));
      } catch (e) {}
    }
    box.hidden = false;
    box.classList.add("is-on");
    const label = $("[data-deadline-label]", box) || box;
    function render() {
      const left = end - Date.now();
      if (left <= 0) {
        label.textContent = "This window is closed.";
        return;
      }
      const s = Math.floor(left / 1000);
      const d = Math.floor(s / 86400);
      const h = Math.floor((s % 86400) / 3600);
      const m = Math.floor((s % 3600) / 60);
      label.textContent =
        (d > 0 ? d + "d " : "") + pad(h) + "h " + pad(m) + "m left";
    }
    render();
    window.setInterval(render, 30000);
  }

  function initWatch() {
    if (!$("[data-video-id]")) return;
    applyCheckoutLinks();
    initPlayer();
    initDeadline();
    if (ctaAlreadyUnlocked() || wantsCtaPreview()) {
      revealCta();
    }
  }

  applyCheckoutLinks();
  initOptin();
  initWatch();
})();
