import React, { useState, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  ListSubheader,
  Typography,
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";
import { Redirect } from "react-router-dom";
import AddVideo from "./AddVideo";
import UpdateFormationImage from "./UpdateFormationImage";
import Update from "./Update";
import Videos from "./Videos";
import {
  updateFormation,
  updateFormationImage,
  uploadVideo,
  deleteFormation,
} from "../../../../redux/actions/FormationActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const FormationDetail = (props) => {
  const formation = props.location.state.formation;

  const { image, title } = formation;

  const classes = useStyles();

  const [selected, setChecked] = React.useState(0);

  const handleSelected = (item) => {
    setChecked(item);
  };
  const {
    updateFormation,

    updateFormationImage,
    uploadVideo,
  } = props;
  const { fileName, uploadedFile } = props.Formations;
  const { roles } = props.admin;

  const deleteF = () => {
    props.deleteFormation(formation._id);
    props.history.push("/formations");
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="container mt-5">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="w-50">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img width="100%" alt="e" src={`uploads/category/${image}`} />
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                </div>
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Video"
                onClick={() => handleSelected(1)}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="Update Category"
                onClick={() => handleSelected(2)}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="Update Formation Image"
                onClick={() => handleSelected(0)}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Videos"
                onClick={() => handleSelected(3)}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="Delete Formation"
                onClick={() => toggle()}
              />

              <Modal isOpen={modal} toggle={toggle} className="mt-5">
                <ModalHeader toggle={toggle}>
                  <Alert color="warning">Delete Formation!</Alert>
                </ModalHeader>
                <ModalBody>
                  Are you sure that you want to Delete this Formation,tou will
                  loss all the videos .
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={() => deleteF(formation._id)}>
                    yes,Delete
                  </Button>{" "}
                  <Button color="success" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </ListItem>
          </List>
        </div>

        <div className="w-50">
          {selected === 0 && (
            <UpdateFormationImage
              updateFormationImage={updateFormationImage}
              formation={formation}
            />
          )}
          {selected === 1 && (
            <AddVideo
              formation={formation}
              fileName={fileName}
              uploadedFile={uploadedFile}
              uploadVideo={uploadVideo}
            />
          )}
          {selected === 2 && (
            <Update
              formation={formation}
              updateFormation={updateFormation}
              roles={roles}
            />
          )}
          {selected === 3 && <Videos formation={formation} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { Formations: state.formations, admin: state.admin };
};

export default connect(mapStateToProps, {
  updateFormation,
  updateFormationImage,
  uploadVideo,
  deleteFormation,
})(FormationDetail);
