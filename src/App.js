import './App.css';
import FilmList from "./Components/FilmList";
import { useState, useEffect } from "react";
import * as _ from "lodash";
import PageGuide from "./Components/PageGuide";

function App() {
  // Localstorage
  const storageData = JSON.parse(localStorage.getItem("sumData"));

  // Default modal state
  const defaultShow = false
  // States
  const [show, setShow] = useState(defaultShow);
  const [sumData, setSumData] = useState(storageData || []);
  const [sumDataCopy, setSumDataCopy] = useState([]);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [filtr, setFiltr] = useState("");
  // console.log(sumData)
  // console.log(sumDataCopy)
  // console.log(data)

  // Modal show/close function
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Add value to Table
  function add() {
    let tab = [...sumData, data];
    setShow(defaultShow);
    return setSumData(tab);
  }
  //use useeffect to save the post in locastorage with the method setIntem()
  useEffect(() => {
    localStorage.setItem("sumData", JSON.stringify(sumData));
  });
  // Get value form select to compare in sorted function
  const setSortValue = (e) => {
    setSort(e.target.value);
  };
  // Get value form select to compare in filtred function
  // const setFilterValue = (e) => {
  //   setFiltr(e.target.value);
  //   console.log(filtr)
  // };
  const setFilterValue = (e) => {
    const { value } = e.target;
    setFiltr(value)
  };
  // console.log(filtr)

  // Sort table by select
  function sorted() {
    const sorted = _.sortBy(sumData, sort)
    return setSumData(sorted)
  }
  // console.log(filtr)
  function filter() {
    setSumDataCopy(sumData)
    // const c = "Kryminał"
    const tasks = sumData.filter((item) => item.category === filtr);
    return setSumData(tasks)
    // setSumData(prevData => {
    //   return prevData.filter((item) => filtr === item.category)
    // })
  }
  // Delete item from table
  function removeItem(id) {
    setSumData(prevData => {
      return prevData.filter((d, index) => {
        return index !== id;
      })
    });
  }
  // Delete all by clear state
  function clearAll() {
    return setSumData([])
  }
  // Handle modal form values
  const changeTitle = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      title: value.trim()
    }))
  };
  const changeAutor = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      name: value
    }))
  }
  const changeCat = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      category: value
    }))
  }
  const changePri = e => {
    const { value } = e.target;
    setData(prevState => ({
      ...prevState,
      priority: value
    }))
  }
  return (
    <div className="App">
      <PageGuide />
      <FilmList
        sort={sort}
        sorted={sorted}
        setSortValue={setSortValue}
        sumData={sumData}
        setData={setData}
        data={data}
        add={add}
        changeTitle={changeTitle}
        changeAutor={changeAutor}
        changeCat={changeCat}
        changePri={changePri}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        removeItem={removeItem}
        clearAll={clearAll}
        setSumData={setSumData}
        sumDataCopy={sumDataCopy}
        filter={filter}
        setFilterValue={setFilterValue}
        filtr={filtr}
      />
    </div>
  );
}
export default App;