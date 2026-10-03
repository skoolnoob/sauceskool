"use client";

import { track } from "@vercel/analytics";
import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

const JOIN_EVENT = "join_sauce";

type LeadParams = {
  content_name: string;
  content_category: string;
};

type FbqTrack = (command: "track", event: "Lead", params: LeadParams) => void;

function pathname() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

/**
 * Shared click handler for every join CTA that leaves for The Sauce.
 * Meta Lead fires synchronously before the browser follows the link.
 * `track()` no-ops until the Web Analytics script is present.
 */
export function trackJoinClick(path = pathname()) {
  try {
    const fbq = (window as Window & { fbq?: FbqTrack }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead", {
        content_name: JOIN_EVENT,
        content_category: path,
      });
    }
  } catch {
    // A blocked pixel must not stop navigation.
  }

  try {
    track(JOIN_EVENT, { path });
  } catch {
    // Web Analytics stays off until it is enabled in the Vercel dashboard.
  }
}

type JoinLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export function JoinLink({ href, onClick, children, ...rest }: JoinLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackJoinClick();
    onClick?.(event);
  }

  return (
    <a href={href} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
