import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import { WordStyle } from "./WordStyle";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import useFetchAllWords from "../../hook/useFetchAllWords";
import Modal from "@mui/material/Modal";
import AddWord from "./Popups/AddWord/AddWord";
import DeleteWord from "./Popups/DeleteWord/DeleteWord";
import UpdateWord from "./Popups/UpdateWord/UpdateWord";
import AddExcel from "./Popups/AddExcel/AddExcel";

const Words = () => {
  const [selectedWord, setselectedWord] = useState("");
  const [toggle, settoggle] = useState(false);
  const [search, setsearch] = useState();
  
  //CALLING HOOK FOR FETCHING WORDS
  const words = useFetchAllWords(
    "http://localhost:5000/word/getAllWords",
    selectedWord,
    setsearch
  );
  //

  //FOR ADD MODEL OPENING AND CLOSE
  const [openAddWord, setopenAddWord] = React.useState(false);
  const handleOpenAddWord = () => setopenAddWord(true);
  const handleCloseAddWord = () => setopenAddWord(false);
  //

  //FOR DELETE MODEL OPENING AND CLOSE
  const [openDeleteWord, setopendeleteWord] = React.useState(false);
  const handleOpenDeleteWord = () => setopendeleteWord(true);
  const handleCloseDeleteWord = () => setopendeleteWord(false);
  //

  //FOR UPDATE MODEL OPENING AND CLOSE
  const [openUpdateWord, setopenupdateWord] = React.useState(false);
  const handleOpenUpdateWord = () => setopenupdateWord(true);
  const handleCloseUpdateWord = () => setopenupdateWord(false);
  //

  //FOR IMPORTING EXCEL MODEL OPENING AND CLOSE
  const [openExcelWord, setopenexcelWord] = React.useState(false);
  const handleOpenExcelWord = () => setopenexcelWord(true);
  const handleCloseExcelWord = () => setopenexcelWord(false);
  //

  //MENU BAR LOGIC AND STATE
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //

  //SEARCH FUNCTION AND STATES
  const [searchTerm, setsearchTerm] = useState();
  const handleSearch = () => {
    var newArray = words?.filter((item) => {
      if (searchTerm === "") {
        return item;
      } else {
        return item?.word?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      }
    });
    if (newArray.length !== 0) {
      setsearch(newArray);
    } else {
      setsearch(words);
    }
  };
  //

  return (
    <>
      <Box sx={WordStyle.HeadingBox}>
        <Typography variant="h4" sx={WordStyle.headingtext}>
          Words
        </Typography>
      </Box>
      <Card sx={WordStyle.contentCardStyle}>
        <Box sx={WordStyle.actionbarStyle}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={WordStyle.searchFieldStyle}
            onKeyDown={(e) => {
              setsearchTerm(e.target.value);
              handleSearch();
            }}
          />
          <Box sx={WordStyle.generalButtonHolderStyle}>
            <Button
              variant="contained"
              color="success"
              sx={WordStyle.generalbtnStyle}
              onClick={handleOpenExcelWord}
            >
              Import
            </Button>
            <Button
              variant="contained"
              sx={WordStyle.AddWordBtnStyle}
              onClick={handleOpenAddWord}
            >
              Add Word
            </Button>
          </Box>
        </Box>
        <Box sx={WordStyle.wordContainerStyel}>
          <Grid container spacing={4}>
            {search &&
              search.map((item, index) => (
                <Grid item ld={3} md={3} xs={6} key={item["_id"]}>
                  <Card sx={WordStyle.wordCardStyle}>
                    <Typography sx={WordStyle.soloWord}>{item.word}</Typography>
                    <IconButton>
                      <MoreVertIcon
                        sx={WordStyle.moreIconStyle}
                        onClick={(e) => {
                          handleClick(e);
                          setselectedWord(item["_id"]);
                        }}
                      />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          className="removeShadow"
        >
          <MenuItem
            onClick={() => {
              handleOpenUpdateWord();
            }}
            sx={WordStyle.menuStyle}
          >
            <NoteAltOutlinedIcon />
            <Typography sx={WordStyle.UpdateNoteStyle}>Edit</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleOpenDeleteWord();
            }}
            sx={WordStyle.menuStyle}
          >
            <DeleteIcon />
            <Typography>Delete</Typography>
          </MenuItem>
        </Menu>
      </Card>
      {/* Add Word Model */}
      <Modal
        open={openAddWord}
        onClose={handleCloseAddWord}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? WordStyle.DarkAddModelStyle
              : WordStyle.AddModelStyle
          }
        >
          <AddWord
            selectedWord={selectedWord}
            handleCloseAddWord={handleCloseAddWord}
            setselectedWord={setselectedWord}
            toggle={toggle}
            settoggle={settoggle}
            menuClose={handleClose}
          />
        </Box>
      </Modal>
      {/* Delete Word Model */}
      <Modal
        open={openDeleteWord}
        onClose={handleCloseDeleteWord}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? WordStyle.DarkAddModelStyle
              : WordStyle.AddModelStyle
          }
        >
          <DeleteWord
            selectedWord={selectedWord}
            setselectedWord={setselectedWord}
            toggle={toggle}
            settoggle={settoggle}
            handleCloseDeleteWord={handleCloseDeleteWord}
            menuClose={handleClose}
          />
        </Box>
      </Modal>
      {/* Update Word Model */}
      <Modal
        open={openUpdateWord}
        onClose={handleCloseUpdateWord}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? WordStyle.DarkAddModelStyle
              : WordStyle.AddModelStyle
          }
        >
          <UpdateWord
            selectedWord={selectedWord}
            setselectedWord={setselectedWord}
            toggle={toggle}
            settoggle={settoggle}
            handleCloseUpdateWord={handleCloseUpdateWord}
            menuClose={handleClose}
          />
        </Box>
      </Modal>
      {/* Excel Word Model */}
      <Modal
        open={openExcelWord}
        onClose={handleCloseExcelWord}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? WordStyle.DarkAddModelStyle
              : WordStyle.AddModelStyle
          }
        >
          <AddExcel
            selectedWord={selectedWord}
            setselectedWord={setselectedWord}
            toggle={toggle}
            settoggle={settoggle}
            handleCloseExcelWord={handleCloseExcelWord}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Words;
