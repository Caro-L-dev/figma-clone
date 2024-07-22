"use client";

import { useOthers } from "@liveblocks/react/suspense";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;

  const userString =
    userCount === 1
      ? `${userCount} autre utilisateur est en ligne`
      : userCount >= 2
      ? `${userCount} autres sont utilisateurs en ligne`
      : "Il n'y a personne d'autre en ligne";

  return <p>{userString}.</p>;
}
