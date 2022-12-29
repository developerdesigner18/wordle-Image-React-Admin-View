import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Typography } from "@mui/material";
import { ChallengeStyle } from "./styles";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import useFetchChallenges from "../../hook/useFetchChallenges";
import ConfoDelete from "./Popups/ConfoDelete";
import Modal from "@mui/material/Modal";
import AddChellange from "./Popups/AddChellange/AddChellage";
import UpdateChallenge from "./Popups/UpdateChallenge/UpdateChallenge";

const columns = [
  { id: "No", label: "No", align: "center" },
  { id: "challenge_word", label: "Word", align: "center" },
  {
    id: "challenge_img",
    label: "image",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function Challenges() {
  const [selectedChallenge, setselectedChallenge] = useState("");
  const challenges = useFetchChallenges(
    "http://localhost:5000/challenges/getChallenge",
    selectedChallenge
  );

  //PAGINATION LOGIC FUNCTION
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //

  //FOR DELETE MODEL OPENING AND CLOSE
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //

  //FOR ADD CHELLANGE MODEL OPENING AND CLOSE
  const [openAddChellange, setopenAddChellange] = useState(false);
  const handleOpenAddChellange = () => setopenAddChellange(true);
  const handleCloseAddChellange = () => setopenAddChellange(false);
  //

  //FOR UPDATE CHALLENGE MODEL OPENING AND CLOSING
  const [openupdateChallenge, setopenupdateChallenge] = useState(false);
  const handleOpenupdateChallenge = () => setopenupdateChallenge(true);
  const handleCloseupdateChallenge = () => setopenupdateChallenge(false);
  //

  //TOGGLE AFTER DELETE
  const [toggle, settoggle] = useState(false);

  //

  if (challenges === undefined) return "Loading...";

  return (
    <>
      <Box sx={ChallengeStyle.cardStyle}>
        <Box sx={ChallengeStyle.headingHolderBox}>
          <Typography variant="h4" sx={ChallengeStyle.PageHeading}>
            Challenge
          </Typography>
          <Button
            variant="contained"
            sx={ChallengeStyle.AddBtnStyle}
            onClick={handleOpenAddChellange}
          >
            Add Challenge
          </Button>
        </Box>
        {/* <Card sx={ChallengeStyle.cardStyle}> */}
        <TableContainer sx={ChallengeStyle.tableContentStyle}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Typography variant="h6">{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {challenges &&
                challenges
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <>
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row["No"]}
                          sx={ChallengeStyle.tableRowStyle}
                        >
                          <TableCell sx={ChallengeStyle.tableCellStyle}>
                            {index}
                          </TableCell>
                          <TableCell sx={ChallengeStyle.tableCellStyle}>
                            {row["challenge_word"]}
                          </TableCell>
                          <TableCell sx={ChallengeStyle.tableCellStyle}>
                            <img
                              src={`http://localhost:5000/static/${row["challenge_img"]}`}
                              alt="puzzle"
                              height="55px"
                              width="65px"
                              style={ChallengeStyle.challengeImgStyle}
                            />
                          </TableCell>
                          <TableCell sx={ChallengeStyle.tableCellStyle}>
                            {row["status"]}
                          </TableCell>
                          <TableCell sx={ChallengeStyle.tableCellStyle}>
                            <Box sx={ChallengeStyle.actionBoxStyle}>
                              <NoteAltOutlinedIcon
                                fontSize="medium"
                                sx={ChallengeStyle.editIcon}
                                onClick={() => {
                                  handleOpenupdateChallenge();
                                  setselectedChallenge(row["_id"]);
                                }}
                              />
                              <DeleteIcon
                                sx={ChallengeStyle.deleteIcon}
                                onClick={() => {
                                  handleOpen();
                                  setselectedChallenge(row["_id"]);
                                }}
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Card> */}

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={challenges?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={ChallengeStyle.paginationStyle}
        />
      </Box>
      {/* Delete Challenge Model */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? ChallengeStyle.DarkdeleteModelStyle
              : ChallengeStyle.deleteModelStyle
          }
        >
          <ConfoDelete
            selectedChallenge={selectedChallenge}
            handleClose={handleClose}
            setselectedChallenge={setselectedChallenge}
          />
        </Box>
      </Modal>
      {/* Add Chellage Model */}
      <Modal
        open={openAddChellange}
        onClose={handleCloseAddChellange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? ChallengeStyle.DarkAddModelStyle
              : ChallengeStyle.AddModelStyle
          }
        >
          <AddChellange
            selectedChallenge={selectedChallenge}
            handleCloseAddChellange={handleCloseAddChellange}
            setselectedChallenge={setselectedChallenge}
            toggle={toggle}
            settoggle={settoggle}
          />
        </Box>
      </Modal>
      {/* Update Challenge Model */}
      <Modal
        open={openupdateChallenge}
        onClose={handleCloseupdateChallenge}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? ChallengeStyle.DarkAddModelStyle
              : ChallengeStyle.AddModelStyle
          }
        >
          <UpdateChallenge
            selectedChallenge={selectedChallenge}
            setselectedChallenge={setselectedChallenge}
            handleCloseupdateChallenge={handleCloseupdateChallenge}
            toggle={toggle}
            settoggle={settoggle}
          />
        </Box>
      </Modal>
    </>
  );
}

export default Challenges;
