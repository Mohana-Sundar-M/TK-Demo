import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box className="flex flex-col items-center justify-center h-[calc(100vh-23rem)] bg-gray-100 p-1">
      <Box className="flex flex-col items-center gap-2">
        <img
          src="/path-to-your-404-image.png"
          alt="404"
          className="w-32 h-32"
        />
        <Typography variant="h5" className="text-center">
          Page Not Found
        </Typography>
        <Typography variant="body2" className="text-center">
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleHomeClick}
          className="mt-2"
        >
          Go to Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
