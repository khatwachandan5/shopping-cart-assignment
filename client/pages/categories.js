import {useState, useEffect} from 'react'
import axios from "axios"
import Category from '../components/Category'

export default function CategoryPage() {
  const [state, setState] = useState({
    categories: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:8081/categories")
      .then((response) => {
        setState((prevState) => {
          return { ...prevState, categories: response.data };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Category categories={state.categories} />
  );
}
