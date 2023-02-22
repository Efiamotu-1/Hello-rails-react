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
    <div>{Object.values(greeting).map((greeting) => (
      <h1>{greeting.message}</h1>
  ))}
  </div>
    )
}

export default Greeting