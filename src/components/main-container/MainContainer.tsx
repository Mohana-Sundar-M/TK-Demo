import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieSlider from "../movie-slider/MovieSlider";
import MainImages from "../main-images/MainImages";

const MainContainer = () => {
  return (
    <Box className="flex-1 overflow-auto p-4 flex flex-col">
      <MainImages />
      <Box className="flex justify-between items-center my-4">
        <Typography
          variant="h5"
          className="text-sm sm:text-2xl md:!text-3xl !font-bold"
        >
          Movies In Bengaluru
        </Typography>
        <Button size="large" variant="contained" color="primary">
          See All
        </Button>
      </Box>
      <MovieSlider />
    </Box>
  );
};

export default MainContainer;
