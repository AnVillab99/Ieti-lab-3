import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import Divider from "@material-ui/core/Divider";

export default function AddButton(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Todo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={props.meter.handleSubmit} style={{ width: "100%" }}>
          <h3> Add new Todo</h3>
          <TextField
              id="Description"
              label="Description"
              value={props.meter.state.description}
              onChange={props.meter.handleDescriptionChange}
              />
          <Divider />
          <TextField
              id="Author"
              label="Author"
              value={props.meter.state.Author}
              onChange={props.meter.handleAuthorChange}
              />
          <Divider />
          <TextField
              id="email"
              label="Author Email"
              value={props.meter.state.email}
              onChange={props.meter.handleEmailChange}
              />
          <Divider />
          <TextField
              id="state"
              label="state"
              value={props.meter.state.state}
              onChange={props.meter.handleStateChange}
              />
          <Divider />
          <TextField
              id="dueDate"
              label="dueDate"
              type="date"
              defaultValue={props.meter.state.dueDate}
              onChange={props.meter.handleDateChange}
              InputLabelProps={{
                  shrink: true,
              }} />
          <Divider />
          <Button variant="contained" color="default" type="submit" onClick={handleClose}>
              Add Todo
          </Button>
      </form>
      </Dialog>
    </div>
  );
}
