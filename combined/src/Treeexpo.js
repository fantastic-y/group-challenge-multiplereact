import React from "react";
import { render } from "react-dom";
import Tree from "./Tree";
import data from "./data";

export default function Treeexpo(){
  return <Tree data={data} width={600} height={500} />;
};

