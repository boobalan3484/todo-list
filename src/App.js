import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useEffect, useState } from 'react';
// import AddTask from "./Components/AddTask";
// import SearchItem from "./Components/SearchItem";
import apiRequest from "./apiRequest";
import FormInput from "./Components/FormInput";

function App() {


  // // To create a dummy server -- use json-server package -- 'p'- port , 'w'- watch 
  // npx json-server -p 3500 -w data/db.json


  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null)

  const [isLoading, setIsLoading] = useState(true)


  // // Method -- use API in useEffect -- it will load one time not make any changes in page after page load

  // Data Fetching 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        // (response.ok) --- if some err occurs in page load it will throw error and not execute next line
        if (!response.ok) throw Error('Data Not Received');

        const newListItems = await response.json();
        setItems(newListItems);

        setFetchError(null);

      } catch (err) {
        setFetchError(err.message)

      } finally {
        setIsLoading(false)
      }
    }

    // created a artificial timeout 2sec delay -- to see (error and loading messages) in main element

    setTimeout(() => {
      // to triger fetchItems use empty '()' outside async fn
      (async () => await fetchItems())()
    }, 2000);

  }, [])

  const handleCheck = async (id) => {
    const newListItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(newListItems)
 
    // API CRUD - Patch operation - if we update/change the specified item -- it will update data into json file 

    const myItem = newListItems.filter((item) => item.id === id)

    const patchOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: myItem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, patchOption)

    if(result) setFetchError(result)

    // localStorage.setItem('toDoList', JSON.stringify(newListItems))
  }

  const handleTrash = async(id) => {
    const newListItems = items.filter((item) =>
      item.id !== id)
    setItems(newListItems)

    // API CRUD - Delete operation - if we delete the specified item -- it will delete data into json file 

    const deleteOption = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOption)

    if(result) setFetchError(result)

    // localStorage.setItem('toDoList', JSON.stringify(newListItems))
  }

  // ========================================


  const pushItem = async (label) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const pushNewItem = { id, checked: false, label }
    const newListItem = [...items, pushNewItem]
    setItems(newListItem)

    // API CRUD - Create operation - if we create/add item -- it will add data into json file 

    const postOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pushNewItem)

    }
    const result = await apiRequest(API_URL, postOption)

    if (result) setFetchError(result)

    // localStorage.setItem('toDoList', JSON.stringify(newListItem))
  }

  const handleSubmitItem = (e) => {
    e.preventDefault()

    if (!newItem) return;
    // console.log(newItem);
    pushItem(newItem)

    setNewItem('')
  }

  // ===========================================


  return (
    <div className='App'>
      <Header />
      <FormInput
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmitItem={handleSubmitItem}
        search={search}
        setSearch={setSearch} 
      />

      <main>

        {isLoading && <p>Loading...</p>}
        {/* created a isLoading useState -- default value 'true' -- if takes time to load a page it display's message in main element*/}

        {fetchError && <p> {`Error: ${fetchError}`}</p>}
        {/* created a fetchError useState -- if some error founds to fetch data from server it displays error message*/}

        {!isLoading && !fetchError &&
          <Content
            items={items.filter(item => ((item.label).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleTrash={handleTrash} />}

      </main>

      <Footer
        length={items.length}
      />
    </div>
  )

}

export default App;
