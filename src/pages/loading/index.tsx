import React from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import notes from "../../assets/animations/110457-notes-document.json";

import * as S from "./styles";

export default function LoadingPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <S.Container>
      <Player src={notes} autoplay loop style={{ width: 200, height: 200 }} />
    </S.Container>
  );
}
