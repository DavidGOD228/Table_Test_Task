import React, {useEffect, useState} from "react";
import {TableComponent} from "./Table";
import {getUsers} from "./service/api";

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getUsers().then((res) => setList(res))
  }, [])

  return <TableComponent list={list} />
}
