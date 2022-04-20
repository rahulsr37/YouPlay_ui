import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import { collection, getDocs, query, where, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import Card from "./Card";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Favourites = () => {
  const user = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user) return;

      const q = query(
        collection(db, "favourites"),
        where("id", "==", user.uid)
      );
     
			const unsub = onSnapshot(q, (querySnapshot => {
				const favData = querySnapshot.docs.map(doc => {
					return { ...doc.data(), id: doc.id };
				})

				setData(favData)
			}) );

			return () => unsub();
  }, [user]);

	const handleRemove = async(id) =>{
		await deleteDoc(doc(db, "favourites", id));
	}

  if (!user) return <h1 className="mixed-catalogue">Please Login to continue.</h1>;
  if (data.length === 0) return <div className="mixed-catalogue"><h1>You have no favourites {":("}</h1></div>;
  return (
    <>
      <div className="mixed-catalogue">
        <h1>Favourites</h1>
      </div>
      <div className="mt-5 container justify-content-center d-flex flex-wrap">
        {data.map((movieData) => {
          return (
            <div className="mx-2 rounded-3 position-relative" key={movieData.id}>
              <Card data={movieData}/>
              <div className="removeFav position-absolute" style={{right : "-1.1rem", top : "-1.2rem"}}>
                <IconButton onClick={()=> handleRemove(movieData.id)} color="error">
                  <CloseIcon fontSize = "large" />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favourites;
