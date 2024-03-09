import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Settings() {
  let navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
      <h1>Settings</h1>
      {}
    </div>
  );
}

export default Settings;
