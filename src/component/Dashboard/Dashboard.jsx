import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { DashBoardStyle } from "./DashBoardStyle";
import AnimatedNumber from "react-animated-number";
import useGetDailyWord from "../../hook/useGetDailyWord";
import useFetchChallenges from "../../hook/useFetchChallenges";
import usegetSubsCount from "../../hook/useGetSubsCount";
import useFetchTotalUserCount from "../../hook/useFetchTotalUserCount";
import useGetCorrectAndIncorrectCount from "../../hook/useGetCorrectAndIncorrectCount";

function Dashboard() {
  const dailyWord = useGetDailyWord(
    `${process.env.REACT_APP_BACKEND_URL}/game/getDailyWord`
  );

  const challenges = useFetchChallenges(
    `${process.env.REACT_APP_BACKEND_URL}/chart/getUpcommingChallenge`
  );

  const subsCount = usegetSubsCount(
    `${process.env.REACT_APP_BACKEND_URL}/chart/getSubscriberCount`
  );

  const totalUser = useFetchTotalUserCount(
    `http://localhost:5000/chart/getTotaluser`
  );

  const { correctCount, incorrectCount } = useGetCorrectAndIncorrectCount(
    `http://localhost:5000/chart/getCorrectAndIncorrectCount`
  );

  if (
    dailyWord === undefined ||
    challenges === undefined ||
    subsCount === undefined ||
    totalUser === undefined ||
    correctCount === undefined ||
    incorrectCount === undefined
  ) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Box sx={DashBoardStyle.mainDashboardContainerStyle}>
        <Typography variant="h5" sx={DashBoardStyle.mainHeadingStyle}>
          Statistic Counts
        </Typography>
        <Box sx={DashBoardStyle.countersHolderStyle}>
          <Grid container spacing={2}>
            <Grid item md={3} sm={6} xs={12}>
              <Card sx={DashBoardStyle.detailCardStyle}>
                <Typography variant="h5" sx={DashBoardStyle.cardHeadingStyle}>
                  Total User
                </Typography>
                <Typography variant="h1" id="total_user">
                  {/* {totalUser ? totalUser : "..."} */}
                  <AnimatedNumber
                    value={totalUser ? totalUser : 0}
                    duration={800}
                    stepPrecision={0}
                  />
                </Typography>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card sx={DashBoardStyle.detailCardStyle}>
                <Typography variant="h5" sx={DashBoardStyle.cardHeadingStyle}>
                  Subscribers
                </Typography>
                <Typography variant="h1" id="subscriber">
                  {/* {subsCount ? subsCount : "..."} */}
                  <AnimatedNumber
                    value={subsCount ? subsCount : 0}
                    duration={800}
                    stepPrecision={0}
                  />
                </Typography>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card sx={DashBoardStyle.detailCardStyle}>
                <Typography variant="h5" sx={DashBoardStyle.cardHeadingStyle}>
                  Correct Word
                </Typography>
                <Typography variant="h1" id="correct_word">
                  {/* {correctCount ? correctCount : "..."} */}
                  <AnimatedNumber
                    value={correctCount ? correctCount : 0}
                    duration={800}
                    stepPrecision={0}
                  />
                </Typography>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card sx={DashBoardStyle.detailCardStyle}>
                <Typography variant="h5" sx={DashBoardStyle.cardHeadingStyle}>
                  Incorrect Word
                </Typography>
                <Typography variant="h1" id="incorrect-word">
                  {/* {incorrectCount ? incorrectCount : "..."} */}
                  <AnimatedNumber
                    value={incorrectCount ? incorrectCount : 0}
                    duration={800}
                    stepPrecision={0}
                  />
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5" sx={DashBoardStyle.ChallengeHeadingStyle}>
          Challenge Details
        </Typography>
        <Box sx={DashBoardStyle.challengesHolderStyle}>
          <Box sx={DashBoardStyle.challengeBoxStyle}>
            <Typography sx={DashBoardStyle.challengeTypeStyle}>
              Current Challenege
            </Typography>
            <Card sx={DashBoardStyle.challengeCardStyle}>
              <img
                src={
                  dailyWord &&
                  `${process.env.REACT_APP_BACKEND_URL}/static/${dailyWord[2]}`
                }
                alt="challenge"
                style={DashBoardStyle.challengeImageStyle}
              />
              <Box sx={DashBoardStyle.DetailHolderStyle}>
                <Typography sx={DashBoardStyle.labelStyle}>
                  Challenge Word
                </Typography>
                <Typography variant="h6">
                  {dailyWord ? dailyWord[0] : "Can't Load Word"}
                </Typography>
                <Typography sx={DashBoardStyle.labelStyle}>
                  Day to Display
                </Typography>
                <Typography variant="h6">Today</Typography>
              </Box>
            </Card>
          </Box>
          <Box sx={DashBoardStyle.OtherChallengeHolderStyle}>
            <Typography sx={DashBoardStyle.challengeTypeStyle}>
              Upcomming Challeneges
            </Typography>
            <Box sx={DashBoardStyle.challenegeListHolder}>
              <Box sx={DashBoardStyle.singleChallengeStyle}>
                {challenges &&
                  challenges.map((challenge) => (
                    <Card sx={DashBoardStyle.soloChallengeStyle}>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/static/${challenge.challenge_img}`}
                        alt="challenge"
                        style={DashBoardStyle.listImgStyle}
                      />
                      <Typography sx={DashBoardStyle.challengeWordStyle}>
                        {challenge.challenge_word}
                      </Typography>
                    </Card>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
