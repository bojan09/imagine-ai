"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`a89b5643-13b2-4597-b814-3156b5fa7041`);
  }, []);
  return null;
};
