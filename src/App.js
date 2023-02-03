import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [note, setNote] = useState({
    name: "",
    title: "",
    discrption: "",
  });
  const [addItem, setAdditem] = useState([]);
  const [isEditinput, setIsEditinput] = useState();

  const update = (val) => {
    const { name, value } = val.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const Addnote = () => {
    setText("Add");
    if (!note.name && !note.title && !note.discrption) {
    } else if (note && text === "Update") {
      setAdditem(
        addItem.map((val) => {
          if (val.id === isEditinput) {
            return { ...val, name: note };
          }
          return val;
        })
      );
      setNote({
        name: "",
        title: "",
        discrption: "",
      });
      setIsEditinput(null);
    } else {
      const allnote = { id: new Date().getTime().toString(), name: note };
      setAdditem([...addItem, allnote]);
    }

    setNote({
      name: "",
      title: "",
      discrption: "",
    });
  };
  const select = (index) => {
    setAdditem((pnote) =>
      pnote.filter((arry) => {
        return index !== arry.id;
      })
    );
  };

  const [text, setText] = useState("Add");
  const Edit = (id) => {
    setText("Update");
    let newEditItem = addItem.find((elm) => {
      return elm.id === id;
    });
    setNote({
      name: newEditItem.name.name,
      title: newEditItem.name.title,
      discrption: newEditItem.name.discrption,
    });
    setIsEditinput(id);
    console.log(newEditItem);
  };
  return (
    <div>
      <div className="costiner">
        <div className="form_box">
          <div className="box" style={{borderRadius:"3px"}}>
            <ul>
              <li>Name</li>
              <li>Title</li>
              <li style={{overflow:"hidden"}}>Discrption</li>
              <div className="delete" aria-disabled onClick={()=>{alert("You can only able to delte the data you have Added")}}>Delete</div>
              <div className="adit" aria-disabled onClick={()=>{alert("You can only able to edit the data you have Added")}}>Edit</div>
</ul>
          </div>
          {addItem.map((val) => {
            return (
              <div className="box" key={val.id} >
                <ul>
                  <li>{val.name.name}</li>
                  <li>{val.name.title}</li>
                  <li>{val.name.discrption}</li>
                  <div className="delete" onClick={() => select(val.id)}>
                    delete
                  </div>
                  <div className="adit" onClick={() => Edit(val.id)}>
                    Edit
                  </div>
                </ul>
              </div>
            );
          })}
          <div className="from">
            <div className="input-field">
              <input
                type="text"
                placeholder="name"
                name="name"
                value={note.name}
                onChange={update}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="title"
                name="title"
                value={note.title}
                onChange={update}
              />
            </div>
            <div className="input-field">
              <textarea 
                id=""
                cols="25"
                rows="3"
                placeholder="description"
                name="discrption"
                value={note.discrption}
                onChange={update}
              ></textarea>
            </div>

            <div className="adit" onClick={Addnote}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
