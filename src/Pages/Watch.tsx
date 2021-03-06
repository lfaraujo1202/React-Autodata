import { GlobalStytle } from "../styles/global";
import { Header } from "../components/Header";
import { Watch } from "../components/Watch";
import { Player } from "../components/Player";
import { DescriptionBox } from "../components/DescriptionBox";
import { useState } from 'react';

export function PageWatch() {
    return (
      <>
        <Header/> 
        <DescriptionBox />
        <Watch />
        <Player />
        <GlobalStytle />
      </>
    )
  }