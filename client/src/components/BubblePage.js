import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(true)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    if (refresh){
    axiosWithAuth()
        .get('/api/colors')
        .then(res => setColorList(res.data))
        .catch(err => console.log(err))
        .finally(() => setRefresh(false))
  }}, [refresh])

  return (
    <>
      <ColorList colors={colorList} setRefresh={setRefresh} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
