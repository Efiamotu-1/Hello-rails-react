import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGreeting} from "../redux/greetings/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);


  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    greeting?.map(greet => {
     return <p>{greet.message}</p>
    })
)
}

export default Greeting