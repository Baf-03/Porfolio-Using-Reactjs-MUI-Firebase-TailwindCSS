import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projectName, setprojectName] = React.useState("");
  const [projectDisc, setprojectDisc] = React.useState("");
  const [productDesc, setproductDesc] = React.useState("");
  const [loader, setloader] = React.useState(false);
  let [check,setcheck]=React.useState("");
  const addTodo = async (e) => {
    e.preventDefault();
    console.log("projectName", projectName);
    console.log("projectDisc", projectDisc);
    console.log("productDesc", productDesc);
    try {
      setloader(true);
      const docRef = await addDoc(collection(db, "products"), {
        projectName,
        projectDisc,
        productDesc,
      });
      setloader(false);
      handleClose();
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      setloader(false);

      console.log(error);
      alert(error.message);
    }
  };
  React.useEffect(()=>{
    if(localStorage.getItem("uid") =="MzZwFVqf4ZXNIqgqJ9WjXaOvu5F2"){
      setcheck("MzZwFVqf4ZXNIqgqJ9WjXaOvu5F2")
    } 
    else{
      setcheck("")
    }
  })
  return (
    <React.Fragment>
      {check=="MzZwFVqf4ZXNIqgqJ9WjXaOvu5F2"?( <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>):(<>hello</>)}
     
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new project</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
          <form
          
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
              
              
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required  onChange={(e) => setprojectName(e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required  onChange={(e) => setprojectDisc(e.target.value)}/>
              </FormControl>
              <FormControl>
                <FormLabel>Enter Sequence Number</FormLabel>
                <Input required  onChange={(e) => setproductDesc(e.target.value)}/>
              </FormControl>
              <Button type="submit" onClick={addTodo}>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
