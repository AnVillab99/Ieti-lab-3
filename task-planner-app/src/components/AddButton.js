import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={props.meter.handleSubmit} className="todo-form" style={{ width: "100%" }}>
          <h3>New TODO</h3>
          <TextField
              id="Description"
              label="Description"
              value={props.meter.state.description}
              onChange={props.meter.handleDescriptionChange}
              />
          <br />
          <TextField
              id="name"
              label="Author"
              value={props.meter.state.name}
              onChange={props.meter.handleNameChange}
              />
          <br />
          <TextField
              id="email"
              label="Author Email"
              value={props.meter.state.email}
              onChange={props.meter.handleEmailChange}
              />
          <br />
          <TextField
              id="status"
              label="Status"
              value={props.meter.state.status}
              onChange={props.meter.handleStatusChange}
              />
          <br />
          <TextField
              id="dueDate"
              label="dueDate"
              type="date"
              defaultValue={props.meter.state.dueDate}
              onChange={props.meter.handleDateChange}
              InputLabelProps={{
                  shrink: true,
              }} />
          <br />
          <Button variant="contained" color="default" type="submit">
              Add Todo
          </Button>
      </form>
      </Dialog>
    </div>
  );
}
