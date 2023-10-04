import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";




export function DialogWithForm() {
  let [email,setEmail]=useState("");
let [password,setPassword]=useState("")

// const SignupHandler = async (e) => {
//   e.preventDefault();
//   console.log("loginHandler");
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
   
//   } catch (error) {
//     console.log("error", error.message);
//     alert("error", error.message);
//   }
// };

    let tempArr = [];
    useEffect(() => {
       
        const unsub = onSnapshot(collection(db, "password"), (doc) => {
          tempArr = [];
          doc.forEach((data) => {
            tempArr.push({ ...data.data(), id: data.id });
            console.log(tempArr)
            if(tempArr){
                console.log(tempArr[0].password)
            }
          });
         
        });
      }, []);


  const loginHandler = async (e) => {
        e.preventDefault();
        console.log("loginHandler");
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          console.log("user", user);
          localStorage.setItem("uid", user.user.uid);
        } catch (error) {
          console.log("error", error.message);
          alert("error", error.message);
        }
      };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
}
 
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" onClick={loginHandler}>
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input  label="Email" size="lg" onChange={(e)=>setEmail(e.target.value)} />
            <Input type="password" label="Password" size="lg"  onChange={(e)=>setPassword(e.target.value)}/>
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"  onClick={handleOpen} fullWidth>
              Sign In
            </Button>
           
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}